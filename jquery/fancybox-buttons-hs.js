(function($){
	var F = $.fancybox;
	F.helpers.buttons = {
		tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Vorige foto" href="javascript:;"></a></li><li><a class="btnNext" title="Volgende foto" href="javascript:;"></a></li><li><a class="btnToggle" title="Vergroot/Verklein" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>',
		list: null,
		buttons: {},
		update: function(){
			var toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');
			if (F.current.canShrink) {toggle.addClass('btnToggleOn');}
			else if (!F.current.canExpand) {toggle.addClass('btnDisabled');}},
		beforeLoad: function (opts) {F.coming.margin[ opts.position === 'bottom' ? 2 : 0 ] += 30;},
		afterShow: function (opts) {var buttons;
			if (!this.list){
				this.list = $(opts.tpl || this.tpl).addClass(opts.position || 'top').appendTo('body');
				this.buttons={prev: this.list.find('.btnPrev').click(F.prev), next: this.list.find('.btnNext').click(F.next), toggle: this.list.find('.btnToggle').click(F.toggle)	}}
			buttons = this.buttons;
			if (F.current.index > 0 || F.current.loop) {buttons.prev.removeClass('btnDisabled');}
			else {buttons.prev.addClass('btnDisabled');}
			if (F.current.loop || F.current.index < F.group.length - 1) {buttons.next.removeClass('btnDisabled');}
			else {buttons.next.addClass('btnDisabled');}
			this.update();},
		onUpdate: function () {this.update();},
		beforeClose: function () {if (this.list) {this.list.remove();}this.list = null;this.buttons = {};}};
}(jQuery));
