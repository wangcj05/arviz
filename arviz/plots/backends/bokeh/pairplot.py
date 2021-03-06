"""Bokeh pairplot."""

import warnings
from uuid import uuid4

import bokeh.plotting as bkp
import numpy as np
from bokeh.layouts import gridplot
from bokeh.models import ColumnDataSource, CDSView, GroupFilter

from . import backend_kwarg_defaults, backend_show
from ...kdeplot import plot_kde
from ...plot_utils import _scale_fig_size
from ....rcparams import rcParams


def plot_pair(
    ax,
    infdata_group,
    numvars,
    figsize,
    textsize,
    kind,
    plot_kwargs,
    contour,
    fill_last,
    divergences,
    diverging_mask,
    flat_var_names,
    backend_kwargs,
    show,
):
    """Bokeh pair plot."""
    if backend_kwargs is None:
        backend_kwargs = {}

    backend_kwargs = {
        **backend_kwarg_defaults(
            ("tools", "plot.bokeh.tools"),
            ("output_backend", "plot.bokeh.output_backend"),
            ("dpi", "plot.bokeh.figure.dpi"),
        ),
        **backend_kwargs,
    }
    dpi = backend_kwargs.pop("dpi")
    if numvars == 2:
        (figsize, _, _, _, _, _) = _scale_fig_size(figsize, textsize, numvars - 1, numvars - 1)

        source_dict = dict(zip(flat_var_names, [list(post) for post in infdata_group]))

        if divergences:
            divergenve_name = "divergences_{}".format(str(uuid4()))
            source_dict[divergenve_name] = (
                np.array(diverging_mask).astype(bool).astype(int).astype(str)
            )

        source = ColumnDataSource(data=source_dict)

        if divergences:
            source_nondiv = CDSView(
                source=source, filters=[GroupFilter(column_name=divergenve_name, group="0")]
            )
            source_div = CDSView(
                source=source, filters=[GroupFilter(column_name=divergenve_name, group="1")]
            )

        if ax is None:
            ax = bkp.figure(
                width=int(figsize[0] * dpi), height=int(figsize[1] * dpi), **backend_kwargs
            )

        if kind == "scatter":
            if divergences:
                ax.circle(
                    flat_var_names[0],
                    flat_var_names[1],
                    source=source,
                    view=source_nondiv,
                    legend_label="non-divergent",
                )
            else:
                ax.circle(flat_var_names[0], flat_var_names[1], source=source)
        elif kind == "kde":
            plot_kde(
                infdata_group[0],
                infdata_group[1],
                contour=contour,
                fill_last=fill_last,
                ax=ax,
                backend="bokeh",
                backend_kwargs={},
                show=False,
            )
        else:
            ax.hexbin(infdata_group[0], infdata_group[1], size=0.5)
            ax.grid.visible = False

        if divergences:
            ax.circle(
                flat_var_names[0],
                flat_var_names[1],
                line_color="black",
                fill_color="orange",
                line_width=1,
                size=6,
                source=source,
                view=source_div,
                legend_label="divergent",
            )
            ax.legend.click_policy = "hide"

        ax.xaxis.axis_label = flat_var_names[0]
        ax.yaxis.axis_label = flat_var_names[1]

        if backend_show(show):
            bkp.show(ax)

    else:
        max_plots = (
            numvars ** 2 if rcParams["plot.max_subplots"] is None else rcParams["plot.max_subplots"]
        )
        vars_to_plot = np.sum(np.arange(numvars).cumsum() < max_plots)
        if vars_to_plot < numvars:
            warnings.warn(
                "rcParams['plot.max_subplots'] ({max_plots}) is smaller than the number "
                "of resulting pair plots with these variables, generating only a "
                "{side}x{side} grid".format(max_plots=max_plots, side=vars_to_plot),
                SyntaxWarning,
            )
            numvars = vars_to_plot

        (figsize, _, _, _, _, _) = _scale_fig_size(figsize, textsize, numvars - 2, numvars - 2)

        if ax is None:
            ax = []
            for row in range(numvars - 1):
                row_ax = []
                for col in range(numvars - 1):
                    if row < col:
                        row_ax.append(None)
                    else:
                        ax_ = bkp.figure(
                            width=int(figsize[0] / (numvars - 1) * dpi),
                            height=int(figsize[1] / (numvars - 1) * dpi),
                            **backend_kwargs
                        )
                        row_ax.append(ax_)
                ax.append(row_ax)
            ax = np.array(ax)

        tmp_flat_var_names = None
        if len(flat_var_names) == len(list(set(flat_var_names))):
            source_dict = dict(zip(flat_var_names, [list(post) for post in infdata_group]))
        else:
            tmp_flat_var_names = ["{}__{}".format(name, str(uuid4())) for name in flat_var_names]
            source_dict = dict(zip(tmp_flat_var_names, [list(post) for post in infdata_group]))
        if divergences:
            divergenve_name = "divergences_{}".format(str(uuid4()))
            source_dict[divergenve_name] = (
                np.array(diverging_mask).astype(bool).astype(int).astype(str)
            )

        source = ColumnDataSource(data=source_dict)

        if divergences:
            source_nondiv = CDSView(
                source=source, filters=[GroupFilter(column_name=divergenve_name, group="0")]
            )
            source_div = CDSView(
                source=source, filters=[GroupFilter(column_name=divergenve_name, group="1")]
            )

        for i in range(0, numvars - 1):
            var1 = flat_var_names[i] if tmp_flat_var_names is None else tmp_flat_var_names[i]

            for j in range(0, numvars - 1):
                if j < i:
                    continue

                var2 = (
                    flat_var_names[j + 1]
                    if tmp_flat_var_names is None
                    else tmp_flat_var_names[j + 1]
                )

                if kind == "scatter":
                    if divergences:
                        ax[j, i].circle(var1, var2, source=source, view=source_nondiv)
                    else:
                        ax[j, i].circle(var1, var2, source=source)

                elif kind == "kde":
                    var1_kde = infdata_group[i]
                    var2_kde = infdata_group[j + 1]
                    plot_kde(
                        var1_kde,
                        var2_kde,
                        contour=contour,
                        fill_last=fill_last,
                        ax=ax[j, i],
                        backend="bokeh",
                        backend_kwargs={},
                        show=False,
                        **plot_kwargs
                    )

                else:
                    var1_hexbin = infdata_group[i]
                    var2_hexbin = infdata_group[j + 1]
                    ax[j, i].grid.visible = False
                    ax[j, i].hexbin(var1_hexbin, var2_hexbin, size=0.5)

                if divergences:
                    ax[j, i].circle(
                        var1,
                        var2,
                        line_color="black",
                        fill_color="orange",
                        line_width=1,
                        size=10,
                        source=source,
                        view=source_div,
                    )

                ax[j, i].xaxis.axis_label = flat_var_names[i]
                ax[j, i].yaxis.axis_label = flat_var_names[j + 1]

        if backend_show(show):
            grid = gridplot(ax.tolist(), toolbar_location="above")
            bkp.show(grid)

    return ax
