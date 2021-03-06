/**
 * refresh is similar to update, but instead of scanning for added/removed cells,
 * it's remove whole cell registry and rebuild it
 */
sheet.fx.refresh = function(){
    //console.log('sheet[#'+this.elementId+'] : refreshing the sheet cells registry');
    var cells = this.el.find('[data-cell],[data-formula],[data-format]'),
        sheet = this,
        $cell;

    this.totalCell = cells.length;
    this.cells = {};

    cells.each(function(){
        $cell = new cell(sheet, this);
        sheet.registerCell($cell);
    });

    /** rebuild the dependency tree */
    this.buildCellDependency();
};