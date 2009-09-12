var HellopluginAssistant = Class.create( {

        setup : function()
        {
            //this.globalActivate = this.globalActivate.bindAsEventListener(this);
            //document.addEventListener( 'mojo-event-activate', this.globalActivate, true );
            //this.controller.listen(this.controller.sceneElement,Mojo.Event.keydown,this.globalActivate.bindAsEventListener(this));
            
            //this.onKeyDown = this.onKeyDown.bindAsEventListener(this);
            
            // This gives an event for any key other than enter, and it doesn't give key codes.
            //document.addEventListener(Mojo.Event.keypress, this.onKeyPress, true);
            //document.addEventListener("keypress", this.onKeyPress, true);
            
            // This gives you key codes, but doesn't handle the enter key.
            //document.observe('keypress',this.onKeyPress.bindAsEventListener(this));
            
            // This gives keydown events for the enter key.  The key codes are in event.keyCode.
            //document.addEventListener("keydown", this.onKeyDown, true);
            
            //document.addEventListener(Mojo.Event.tap,this.onTap,true);
            
            //document.addEventListener("keyup", this.onKeyUp, true);

			document.addEventListener("mousedown", this.onMouseDown, true);

			document.addEventListener("mouseup", this.onMouseUp, true);

			document.addEventListener("mousemove", this.onMouseMove, true);
                                                
            // Create plugin
            helloPluginApp = document.createElement('object');
            helloPluginApp.type = 'application/x-webosinternals-dfbadapter';
            helloPluginApp.width = 320;
            helloPluginApp.height = 480;
            helloPluginApp.title = 'df_window';
			
            //this.controller.listen(helloPluginApp,'keydown',this.onKeyDown.bindAsEventListener(this));

            // Listen for callback
            //helloPluginApp.eventListener = this;

            // Embed plugin into scene
            var placeholder = document.getElementById('install_object_here');
            placeholder.parentNode.replaceChild(helloPluginApp,placeholder);
			helloPluginApp.focus();
            //helloPluginApp.initialize();
			//helloPluginApp.focus();
        },

	//globalActivate : function (event) {
	//},
	onTap : function (event) {
          helloPluginApp.sendTap(event.down.screenX,event.down.screenY);
	},
	onKeyDown : function(event) {
          helloPluginApp.sendKey(event.keyCode);
	},
	onKeyUp : function(event) {
          helloPluginApp.getKey(event.keyCode);
	},
	onMouseDown : function(event) {
          helloPluginApp.getMouseDown(event.clientX, event.clientY, event.altKey, event.ctrlKey, event.shiftKey, event.metaKey);
	},
	onMouseUp : function(event) {
          helloPluginApp.getMouseUp(event.clientX, event.clientY);
	},
	onMouseMove : function(event) {
          helloPluginApp.getMouseMove(event.clientX, event.clientY);
	},	
        MainWindowQueueProcess : function (interval) {this.MainWindowQueueProcessIntervalID = setInterval(function() {} ,interval);} 
});
