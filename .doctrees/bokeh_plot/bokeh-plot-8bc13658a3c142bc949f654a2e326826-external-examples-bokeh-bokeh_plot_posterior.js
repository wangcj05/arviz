(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("a8f29bb6-7873-4317-a0f3-2e506fa9dc93");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a8f29bb6-7873-4317-a0f3-2e506fa9dc93' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"b2a00464-4519-46db-921d-737fbe858ee0":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118101","type":"BoxAnnotation"},{"attributes":{},"id":"118090","type":"UnionRenderers"},{"attributes":{"source":{"id":"118040","type":"ColumnDataSource"}},"id":"118044","type":"CDSView"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118041","type":"Text"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118047","type":"Text"},{"attributes":{"data_source":{"id":"118008","type":"ColumnDataSource"},"glyph":{"id":"118009","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118010","type":"Text"},"selection_glyph":null,"view":{"id":"118012","type":"CDSView"}},"id":"118011","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"118065","type":"BasicTickFormatter"},"ticker":{"id":"117928","type":"BasicTicker"}},"id":"117927","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"118028","type":"Title"},{"attributes":{"data_source":{"id":"118050","type":"ColumnDataSource"},"glyph":{"id":"118051","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118052","type":"Line"},"selection_glyph":null,"view":{"id":"118054","type":"CDSView"}},"id":"118053","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118042","type":"Text"},{"attributes":{},"id":"118097","type":"Selection"},{"attributes":{},"id":"117983","type":"RedoTool"},{"attributes":{"below":[{"id":"117927","type":"LinearAxis"}],"center":[{"id":"117931","type":"Grid"},{"id":"117936","type":"Grid"}],"left":[{"id":"117932","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118001","type":"GlyphRenderer"},{"id":"118006","type":"GlyphRenderer"},{"id":"118011","type":"GlyphRenderer"},{"id":"118016","type":"GlyphRenderer"},{"id":"118021","type":"GlyphRenderer"},{"id":"118026","type":"GlyphRenderer"}],"title":{"id":"118028","type":"Title"},"toolbar":{"id":"117947","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"117919","type":"DataRange1d"},"x_scale":{"id":"117923","type":"LinearScale"},"y_range":{"id":"117921","type":"DataRange1d"},"y_scale":{"id":"117925","type":"LinearScale"}},"id":"117918","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"118088","type":"UnionRenderers"},{"attributes":{},"id":"117982","type":"UndoTool"},{"attributes":{"data_source":{"id":"118018","type":"ColumnDataSource"},"glyph":{"id":"118019","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118020","type":"Line"},"selection_glyph":null,"view":{"id":"118022","type":"CDSView"}},"id":"118021","type":"GlyphRenderer"},{"attributes":{},"id":"118089","type":"Selection"},{"attributes":{"data_source":{"id":"118040","type":"ColumnDataSource"},"glyph":{"id":"118041","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118042","type":"Text"},"selection_glyph":null,"view":{"id":"118044","type":"CDSView"}},"id":"118043","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[-1,1],"y":[0.0014991617254060592,0.0014991617254060592]},"selected":{"id":"118097","type":"Selection"},"selection_policy":{"id":"118096","type":"UnionRenderers"}},"id":"118050","type":"ColumnDataSource"},{"attributes":{"source":{"id":"118050","type":"ColumnDataSource"}},"id":"118054","type":"CDSView"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118015","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118024","type":"Text"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"118052","type":"Line"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118057","type":"Text"},{"attributes":{"data_source":{"id":"118055","type":"ColumnDataSource"},"glyph":{"id":"118056","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118057","type":"Text"},"selection_glyph":null,"view":{"id":"118059","type":"CDSView"}},"id":"118058","type":"GlyphRenderer"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118009","type":"Text"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"117977","type":"PanTool"},{"id":"117978","type":"BoxZoomTool"},{"id":"117979","type":"WheelZoomTool"},{"id":"117980","type":"BoxSelectTool"},{"id":"117981","type":"LassoSelectTool"},{"id":"117982","type":"UndoTool"},{"id":"117983","type":"RedoTool"},{"id":"117984","type":"ResetTool"},{"id":"117985","type":"SaveTool"},{"id":"117986","type":"HoverTool"}]},"id":"117987","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"118037","type":"Line"},{"attributes":{"callback":null},"id":"117986","type":"HoverTool"},{"attributes":{},"id":"118075","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"118013","type":"ColumnDataSource"},"glyph":{"id":"118014","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118015","type":"Text"},"selection_glyph":null,"view":{"id":"118017","type":"CDSView"}},"id":"118016","type":"GlyphRenderer"},{"attributes":{},"id":"118077","type":"UnionRenderers"},{"attributes":{},"id":"117984","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118079","type":"BoxAnnotation"},{"attributes":{"line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"118004","type":"Line"},{"attributes":{},"id":"118076","type":"Selection"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118014","type":"Text"},{"attributes":{},"id":"118092","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"text":["auto=4.1"],"x":[4.092610850912027],"y":[0.09194002332782314]},"selected":{"id":"118074","type":"Selection"},"selection_policy":{"id":"118073","type":"UnionRenderers"}},"id":"118013","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"118023","type":"ColumnDataSource"},"glyph":{"id":"118024","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118025","type":"Text"},"selection_glyph":null,"view":{"id":"118027","type":"CDSView"}},"id":"118026","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"MjTo0X7yAMBnLxQpcc4kQA==","dtype":"float64","shape":[2]},"y":[0.0022985005831955784,0.0022985005831955784]},"selected":{"id":"118070","type":"Selection"},"selection_policy":{"id":"118069","type":"UnionRenderers"}},"id":"118003","type":"ColumnDataSource"},{"attributes":{},"id":"118086","type":"BasicTickFormatter"},{"attributes":{},"id":"117925","type":"LinearScale"},{"attributes":{"callback":null,"data":{"text":["-3.7","17","94% HPD"],"x":[-3.7069241836335243,17.337053100159448,6.815064458262961],"y":[0.005247066038921207,0.005247066038921207,0.022487425881090886]},"selected":{"id":"118093","type":"Selection"},"selection_policy":{"id":"118092","type":"UnionRenderers"}},"id":"118040","type":"ColumnDataSource"},{"attributes":{},"id":"117923","type":"LinearScale"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118010","type":"Text"},{"attributes":{},"id":"118091","type":"Selection"},{"attributes":{"data_source":{"id":"118035","type":"ColumnDataSource"},"glyph":{"id":"118036","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118037","type":"Line"},"selection_glyph":null,"view":{"id":"118039","type":"CDSView"}},"id":"118038","type":"GlyphRenderer"},{"attributes":{},"id":"118072","type":"Selection"},{"attributes":{"source":{"id":"118008","type":"ColumnDataSource"}},"id":"118012","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["-1","1"],"x":[-1,1],"y":[0.01499161725406059,0.01499161725406059]},"selected":{"id":"118099","type":"Selection"},"selection_policy":{"id":"118098","type":"UnionRenderers"}},"id":"118055","type":"ColumnDataSource"},{"attributes":{"source":{"id":"117998","type":"ColumnDataSource"}},"id":"118002","type":"CDSView"},{"attributes":{"callback":null,"data":{"text":["-1","1"],"x":[-1,1],"y":[0.022985005831955785,0.022985005831955785]},"selected":{"id":"118078","type":"Selection"},"selection_policy":{"id":"118077","type":"UnionRenderers"}},"id":"118023","type":"ColumnDataSource"},{"attributes":{},"id":"118074","type":"Selection"},{"attributes":{"source":{"id":"118045","type":"ColumnDataSource"}},"id":"118049","type":"CDSView"},{"attributes":{},"id":"118084","type":"BasicTickFormatter"},{"attributes":{},"id":"117985","type":"SaveTool"},{"attributes":{"callback":null,"data":{"text":["auto=6"],"x":[6.025829472794338],"y":[0.05996646901624236]},"selected":{"id":"118095","type":"Selection"},"selection_policy":{"id":"118094","type":"UnionRenderers"}},"id":"118045","type":"ColumnDataSource"},{"attributes":{},"id":"118071","type":"UnionRenderers"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118046","type":"Text"},{"attributes":{"text_align":"center","text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118056","type":"Text"},{"attributes":{},"id":"118099","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118080","type":"BoxAnnotation"},{"attributes":{"source":{"id":"118023","type":"ColumnDataSource"}},"id":"118027","type":"CDSView"},{"attributes":{},"id":"118078","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"118100","type":"BoxAnnotation"},{"attributes":{},"id":"117979","type":"WheelZoomTool"},{"attributes":{"source":{"id":"118018","type":"ColumnDataSource"}},"id":"118022","type":"CDSView"},{"attributes":{},"id":"118098","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118081","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"118045","type":"ColumnDataSource"},"glyph":{"id":"118046","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118047","type":"Text"},"selection_glyph":null,"view":{"id":"118049","type":"CDSView"}},"id":"118048","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"text":["-2.1","10","94% HPD"],"x":[-2.1184059523571017,10.403207095827112,4.1424005717350045],"y":[0.008044752041184525,0.008044752041184525,0.03447750874793367]},"selected":{"id":"118072","type":"Selection"},"selection_policy":{"id":"118071","type":"UnionRenderers"}},"id":"118008","type":"ColumnDataSource"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_color":{"value":"black"},"text_font_size":{"value":"15.0pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"118025","type":"Text"},{"attributes":{"data_source":{"id":"117998","type":"ColumnDataSource"},"glyph":{"id":"117999","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118000","type":"Line"},"selection_glyph":null,"view":{"id":"118002","type":"CDSView"}},"id":"118001","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"117937","type":"PanTool"},{"id":"117938","type":"BoxZoomTool"},{"id":"117939","type":"WheelZoomTool"},{"id":"117940","type":"BoxSelectTool"},{"id":"117941","type":"LassoSelectTool"},{"id":"117942","type":"UndoTool"},{"id":"117943","type":"RedoTool"},{"id":"117944","type":"ResetTool"},{"id":"117945","type":"SaveTool"},{"id":"117946","type":"HoverTool"}]},"id":"117947","type":"Toolbar"},{"attributes":{"source":{"id":"118035","type":"ColumnDataSource"}},"id":"118039","type":"CDSView"},{"attributes":{"line_alpha":0.7,"line_color":"red","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"118051","type":"Line"},{"attributes":{},"id":"118073","type":"UnionRenderers"},{"attributes":{},"id":"117944","type":"ResetTool"},{"attributes":{"overlay":{"id":"118079","type":"BoxAnnotation"}},"id":"117938","type":"BoxZoomTool"},{"attributes":{},"id":"117963","type":"LinearScale"},{"attributes":{"source":{"id":"118003","type":"ColumnDataSource"}},"id":"118007","type":"CDSView"},{"attributes":{"line_alpha":0.7,"line_color":"red","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"118019","type":"Line"},{"attributes":{},"id":"117937","type":"PanTool"},{"attributes":{},"id":"118070","type":"Selection"},{"attributes":{},"id":"118093","type":"Selection"},{"attributes":{"toolbar":{"id":"118105","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"118106","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"118063","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"ticker":{"id":"117933","type":"BasicTicker"},"visible":false},"id":"117932","type":"LinearAxis"},{"attributes":{"children":[[{"id":"117918","subtype":"Figure","type":"Plot"},0,0],[{"id":"117958","subtype":"Figure","type":"Plot"},0,1]]},"id":"118104","type":"GridBox"},{"attributes":{},"id":"117945","type":"SaveTool"},{"attributes":{"tools":[{"id":"117937","type":"PanTool"},{"id":"117938","type":"BoxZoomTool"},{"id":"117939","type":"WheelZoomTool"},{"id":"117940","type":"BoxSelectTool"},{"id":"117941","type":"LassoSelectTool"},{"id":"117942","type":"UndoTool"},{"id":"117943","type":"RedoTool"},{"id":"117944","type":"ResetTool"},{"id":"117945","type":"SaveTool"},{"id":"117946","type":"HoverTool"},{"id":"117977","type":"PanTool"},{"id":"117978","type":"BoxZoomTool"},{"id":"117979","type":"WheelZoomTool"},{"id":"117980","type":"BoxSelectTool"},{"id":"117981","type":"LassoSelectTool"},{"id":"117982","type":"UndoTool"},{"id":"117983","type":"RedoTool"},{"id":"117984","type":"ResetTool"},{"id":"117985","type":"SaveTool"},{"id":"117986","type":"HoverTool"}]},"id":"118105","type":"ProxyToolbar"},{"attributes":{},"id":"118096","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"118084","type":"BasicTickFormatter"},"major_label_text_font_size":{"value":"0pt"},"major_tick_line_color":{"value":null},"minor_tick_line_color":{"value":null},"ticker":{"id":"117973","type":"BasicTicker"},"visible":false},"id":"117972","type":"LinearAxis"},{"attributes":{"callback":null},"id":"117959","type":"DataRange1d"},{"attributes":{"source":{"id":"118030","type":"ColumnDataSource"}},"id":"118034","type":"CDSView"},{"attributes":{"below":[{"id":"117967","type":"LinearAxis"}],"center":[{"id":"117971","type":"Grid"},{"id":"117976","type":"Grid"}],"left":[{"id":"117972","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"118033","type":"GlyphRenderer"},{"id":"118038","type":"GlyphRenderer"},{"id":"118043","type":"GlyphRenderer"},{"id":"118048","type":"GlyphRenderer"},{"id":"118053","type":"GlyphRenderer"},{"id":"118058","type":"GlyphRenderer"}],"title":{"id":"118060","type":"Title"},"toolbar":{"id":"117987","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"117959","type":"DataRange1d"},"x_scale":{"id":"117963","type":"LinearScale"},"y_range":{"id":"117961","type":"DataRange1d"},"y_scale":{"id":"117965","type":"LinearScale"}},"id":"117958","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"118086","type":"BasicTickFormatter"},"ticker":{"id":"117968","type":"BasicTicker"}},"id":"117967","type":"LinearAxis"},{"attributes":{},"id":"118063","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[-1,1],"y":[0.0022985005831955784,0.0022985005831955784]},"selected":{"id":"118076","type":"Selection"},"selection_policy":{"id":"118075","type":"UnionRenderers"}},"id":"118018","type":"ColumnDataSource"},{"attributes":{"callback":null,"overlay":{"id":"118080","type":"BoxAnnotation"}},"id":"117940","type":"BoxSelectTool"},{"attributes":{"data_source":{"id":"118003","type":"ColumnDataSource"},"glyph":{"id":"118004","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118005","type":"Line"},"selection_glyph":null,"view":{"id":"118007","type":"CDSView"}},"id":"118006","type":"GlyphRenderer"},{"attributes":{"grid_line_color":null,"ticker":{"id":"117928","type":"BasicTicker"}},"id":"117931","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"118102","type":"PolyAnnotation"},{"attributes":{"source":{"id":"118055","type":"ColumnDataSource"}},"id":"118059","type":"CDSView"},{"attributes":{"callback":null},"id":"117919","type":"DataRange1d"},{"attributes":{},"id":"117939","type":"WheelZoomTool"},{"attributes":{},"id":"118067","type":"UnionRenderers"},{"attributes":{"line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"118036","type":"Line"},{"attributes":{"data_source":{"id":"118030","type":"ColumnDataSource"},"glyph":{"id":"118031","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"118032","type":"Line"},"selection_glyph":null,"view":{"id":"118034","type":"CDSView"}},"id":"118033","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"118068","type":"Selection"},"selection_policy":{"id":"118067","type":"UnionRenderers"}},"id":"117998","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"117999","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"118005","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"118000","type":"Line"},{"attributes":{},"id":"118068","type":"Selection"},{"attributes":{},"id":"117942","type":"UndoTool"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"117973","type":"BasicTicker"}},"id":"117976","type":"Grid"},{"attributes":{"callback":null},"id":"117946","type":"HoverTool"},{"attributes":{"children":[{"id":"118106","type":"ToolbarBox"},{"id":"118104","type":"GridBox"}]},"id":"118107","type":"Column"},{"attributes":{},"id":"118065","type":"BasicTickFormatter"},{"attributes":{},"id":"117943","type":"RedoTool"},{"attributes":{"source":{"id":"118013","type":"ColumnDataSource"}},"id":"118017","type":"CDSView"},{"attributes":{},"id":"117968","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"118032","type":"Line"},{"attributes":{"grid_line_color":null,"ticker":{"id":"117968","type":"BasicTicker"}},"id":"117971","type":"Grid"},{"attributes":{},"id":"118094","type":"UnionRenderers"},{"attributes":{},"id":"118095","type":"Selection"},{"attributes":{"overlay":{"id":"118100","type":"BoxAnnotation"}},"id":"117978","type":"BoxZoomTool"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"118031","type":"Line"},{"attributes":{},"id":"117933","type":"BasicTicker"},{"attributes":{"text":"theta\\nChoate"},"id":"118060","type":"Title"},{"attributes":{"callback":null,"overlay":{"id":"118081","type":"PolyAnnotation"}},"id":"117941","type":"LassoSelectTool"},{"attributes":{},"id":"117928","type":"BasicTicker"},{"attributes":{"dimension":1,"grid_line_color":null,"ticker":{"id":"117933","type":"BasicTicker"}},"id":"117936","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"7qjL3cenDcBDM6ocSVYxQA==","dtype":"float64","shape":[2]},"y":[0.0014991617254060592,0.0014991617254060592]},"selected":{"id":"118091","type":"Selection"},"selection_policy":{"id":"118090","type":"UnionRenderers"}},"id":"118035","type":"ColumnDataSource"},{"attributes":{},"id":"117973","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"118101","type":"BoxAnnotation"}},"id":"117980","type":"BoxSelectTool"},{"attributes":{},"id":"117977","type":"PanTool"},{"attributes":{"callback":null},"id":"117961","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":7.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"118020","type":"Line"},{"attributes":{},"id":"118069","type":"UnionRenderers"},{"attributes":{},"id":"117965","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"118102","type":"PolyAnnotation"}},"id":"117981","type":"LassoSelectTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"118089","type":"Selection"},"selection_policy":{"id":"118088","type":"UnionRenderers"}},"id":"118030","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"117921","type":"DataRange1d"}],"root_ids":["118107"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"b2a00464-4519-46db-921d-737fbe858ee0","roots":{"118107":"a8f29bb6-7873-4317-a0f3-2e506fa9dc93"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();