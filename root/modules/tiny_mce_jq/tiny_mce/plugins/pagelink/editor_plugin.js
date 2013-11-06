(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('pagelink');

	tinymce.create('tinymce.plugins.pagelinkPlugin', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mcepagelink');
			ed.addCommand('mcepagelink', function() {
				ed.windowManager.open({
					file : url + '/pagelink.php',
					width : 320 + ed.getLang('pagelink.delta_width', 0),
					height : 340 + ed.getLang('pagelink.delta_height', 0),
					inline : 1
				}, {
					plugin_url : url, // Plugin absolute URL
					some_custom_arg : 'custom arg' // Custom argument
				});
			});

			// Register pagelink button
			ed.addButton('pagelink', {
				title : 'pagelink.desc',
				cmd : 'mcepagelink',
				image : url + '/img/pagelink.gif'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('pagelink', n.nodeName == 'IMG');
			});
		},

		/**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		createControl : function(n, cm) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'pagelink plugin',
				author : 'LEPTON-CMS',
				authorurl : '',
				infourl : '',
				version : "1.1.2"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('pagelink', tinymce.plugins.pagelinkPlugin);
})();
