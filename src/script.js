class GridStackWraper {
    constructor(element, items, group) {
        $(element).gridstack()

        this.element = element
        this.items = items || [
            {x: 0, y: 0, width: 2, height: 2},
            {x: 2, y: 0, width: 4, height: 4},
            {x: 6, y: 0, width: 2, height: 2},
            {x: 8, y: 0, width: 4, height: 2},
            {x: 0, y: 2, width: 2, height: 2},
            {x: 6, y: 2, width: 4, height: 2},
            {x: 10, y: 2, width: 2, height: 2},
            {x: 0, y: 4, width: 2, height: 4},
            {x: 2, y: 4, width: 4, height: 2},
            {x: 6, y: 4, width: 2, height: 2},
            {x: 8, y: 4, width: 4, height: 4},
            {x: 2, y: 6, width: 6, height: 2}
        ]
        this.group = group || 1

        this.instance = $(element).data('gridstack')

        this.addNewWidget = document.querySelector("#add-widget")
        this.addListWidgets = document.querySelector("#add-list-widget")

        this.addNewWidget2 = document.querySelector("#add-widget-2")
        this.addListWidgets2 = document.querySelector("#add-list-widget-2")

        this.count = this.instance.grid.nodes.length + 1
        
        return this  
    }

    init() {
        this.addNewWidget.addEventListener("click", () => {
            if(this.group === 2) {
                this.addWidget()
                this.count++
            }
        })

        this.addListWidgets.addEventListener("click", () => {
            if(this.group === 2) {
                this.addListWidget()
            }
        })

        this.addNewWidget2.addEventListener("click", () => {
            if(this.group === 1) {
                this.addWidget()
                this.count++
            }
        })

        this.addListWidgets2.addEventListener("click", () => {
            if(this.group === 1) {
                this.addListWidget()
            }
        })
    }

    addWidget() {
        let grid = $(this.element).data('gridstack')
        grid.addWidget(
            $('<div class="grid-stack-item"><div class="grid-stack-item-content"><span>'+this.count+'</span><div/><div/>'),
            0,
            0,
            Math.floor(1 + 4 * Math.random()),
            Math.floor(1 + 4 * Math.random()),
            true
        )
    }

    addListWidget() {
        this.items.map( object => {
            this.instance.addWidget(
                $('<div class="grid-stack-item"><div class="grid-stack-item-content"><span>'+this.count+'</span><div/><div/>'),
                    object.x,
                    object.y,
                    object.width,
                    object.height
            )
            this.count++;
        })
    }
}

const GridStack = new GridStackWraper('.grid-stack', [
    {x: 0, y: 0, width: 4, height: 2},
    {x: 4, y: 0, width: 4, height: 4},
    {x: 8, y: 0, width: 2, height: 2},
    {x: 10, y: 0, width: 2, height: 2},
    {x: 0, y: 2, width: 2, height: 2},
    {x: 2, y: 2, width: 2, height: 4},
    {x: 8, y: 2, width: 4, height: 2},
    {x: 0, y: 4, width: 2, height: 2},
    {x: 4, y: 4, width: 4, height: 2},
    {x: 8, y: 4, width: 2, height: 2},
    {x: 10, y: 4, width: 2, height: 2},
    {x: 0, y: 6, width: 12, height: 2}
], 2)
GridStack.init()

const GridStack2 = new GridStackWraper('.gridBox')
GridStack2.init()