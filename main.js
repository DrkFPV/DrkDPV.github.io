(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"../assets/grumpturt.jpg\">\n</div>\n\n<div class=\"row\">\n  <div class=\"col\" style='padding-left: 100px;'>\n    <h6>Selection Strategy: {{strategy}}</h6>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Strat</mat-label>\n      <mat-select [(value)]=\"strategy\">\n        <mat-option *ngFor=\"let strat of strategies\" [value]=\"strat\">{{strat}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <h6>Board Size: {{bSize}}</h6>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Size</mat-label>\n      <mat-select [(value)]=\"bSize\">\n        <mat-option *ngFor=\"let size of boardSizes\" [value]=\"size\">{{size}}</mat-option>\n      </mat-select>\n    </mat-form-field>    \n    <h6>Iterations: {{iterations}}</h6>\n    <mat-slider min=\"{{loopCountMin}}\" max=\"{{loopCountMax}}\" step=\"1\" [(value)]=\"iterations\"></mat-slider>\n    <h6>Animation Speed(ms): {{animationSpeed}}</h6>\n    <mat-slider min=\"10\" max=\"1000\" step=\"10\" [(value)]=\"animationSpeed\"></mat-slider>    \n    <div >\n      <button mat-raised-button color=\"primary\" (click)=\"Execute($event)\">Simulate {{iterations}} games with strat</button>\n    </div>\n  </div>\n  <div class=\"col\">\n    <h4>Results</h4>\n    <div>Average: {{avg}}</div>\n    <div>Max: {{max}}</div>\n    <div>Min: {{min}}</div>\n  </div>\n  <div class=\"col\">\n    <h4>Grid</h4>\n    <app-grid *ngIf=\"chartData\" [data]=\"chartData\"></app-grid>\n  </div>\n  <div class=\"col-2\">\n    <h4>Pick Order</h4>\n    <span *ngFor=\"let guess of guessOrder\">{{guess}}<br></span>\n  </div>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MemoryGame';
        this.loopCountMin = 1;
        this.loopCountMax = 100000;
        this.iterations = 1;
        this.strategies = ['Match In Order', 'Random', 'Smart Matching'];
        this.boardSizes = ['2x2', '2x3', '3x4', '4x4',];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.animationSpeed = 200;
        this.bSize = this.boardSizes[0];
        this.strategy = this.strategies[0];
        this.gridData = this.GenerateGrid(parseInt(this.bSize.substring(0, 1)), parseInt(this.bSize.substring(2, 3)));
        this.BuildGridVisual(this.gridData);
    };
    AppComponent.prototype.GenerateGrid = function (sizeX, sizeY) {
        this.numCards = sizeX * sizeY;
        var values = Array.from(Array(this.numCards / 2).keys());
        this.gridData = { size: this.numCards, values: this.ShuffleArray(values.concat(values)), width: sizeX, height: sizeY, widthPx: 400, heightPx: 900 };
        return this.gridData;
    };
    AppComponent.prototype.BuildGridVisual = function (gridData) {
        var cells = [];
        var index = 0;
        for (var i = 0; i < this.gridData.width; i++) {
            for (var j = 0; j < this.gridData.height; j++) {
                cells.push({ posX: j, posY: i, index: index });
                index++;
            }
        }
        this.gridData.gridCells = cells;
        this.gridData.pickOrder = this.guessOrder;
        this.gridData.animationSpeed = this.animationSpeed;
        this.chartData = this.gridData;
    };
    AppComponent.prototype.ShuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    AppComponent.prototype.Execute = function (e) {
        this.gridData = this.GenerateGrid(parseInt(this.bSize.substring(0, 1)), parseInt(this.bSize.substring(2, 3)));
        this.BatchExecuteStrategy(this.iterations, this.strategy);
    };
    //MatchInOrder in pairs starting 0,1 0,2 0,3 ect
    AppComponent.prototype.MatchInOrder = function () {
        var orderOfGuesses = [];
        var guessLocations = this.gridData.values;
        for (var i = 0; i <= guessLocations.length - 1; i++) {
            for (var j = 0; j <= guessLocations.length - 1; j++) {
                var sorted_I_J = [i, j].sort(function (a, b) { return a - b; });
                if (i !== j && !this.TestPairInArray(orderOfGuesses, sorted_I_J)) {
                    orderOfGuesses.push(sorted_I_J);
                }
            }
        }
        return orderOfGuesses;
    };
    //match with least tested matches, 0,1 2,3 4,5 ect
    AppComponent.prototype.SmartMatch = function () {
        var _this = this;
        var orderOfGuesses = [];
        //build object to store number of guesses per slot
        var cardDeck = [];
        for (var i = 0; i < this.numCards; i++) {
            cardDeck.push({ number: i, guessedNum: 0 });
        }
        //pick 2 numbers with lowest number of guesses
        var fullySorted = false;
        var totalGuesses = (Math.pow(this.numCards - 1, 2) + this.numCards - 1) / 2;
        var _loop_1 = function () {
            if (cardDeck[0].guessedNum >= 15) {
                cardDeck.shift();
                return "continue";
            }
            var selectionOne = cardDeck.shift();
            var selectionTwoIndex = cardDeck.findIndex(function (e) {
                return !_this.TestPairInArray(orderOfGuesses, [selectionOne.number, e.number].sort(function (a, b) { return a - b; }));
            });
            var selectionTwo = cardDeck.splice(selectionTwoIndex, 1)[0];
            selectionOne.guessedNum++;
            selectionTwo.guessedNum++;
            orderOfGuesses.push([selectionOne.number, selectionTwo.number].sort(function (a, b) { return a - b; }));
            cardDeck.push(selectionOne);
            cardDeck.push(selectionTwo);
            //console.log(orderOfGuesses)
            if (orderOfGuesses.length >= totalGuesses) {
                fullySorted = true;
            }
        };
        while (!fullySorted) {
            _loop_1();
        }
        return orderOfGuesses;
    };
    AppComponent.prototype.ExecuteStrategy = function (guessOrder, grid) {
        var guessCount = 0;
        var pairsMatched = 0;
        var shuffledValues = grid.values;
        for (var _i = 0, guessOrder_1 = guessOrder; _i < guessOrder_1.length; _i++) {
            var guess = guessOrder_1[_i];
            guessCount++;
            if (shuffledValues[guess[0]] == shuffledValues[guess[1]]) {
                //console.log('Match found at ' + guess[0].toString() + ' ' +  guess[1].toString())
                pairsMatched++;
            }
            if (pairsMatched >= grid.size / 2) {
                //console.log('All pairs found after ' + guessCount + ' guesses')
                return guessCount;
            }
        }
        console.log('um. somting wong');
    };
    AppComponent.prototype.BatchExecuteStrategy = function (numberOfRouds, strategy) {
        var orderOfGuesses;
        if (strategy == 'Match In Order') {
            orderOfGuesses = this.MatchInOrder();
        }
        else if (strategy == 'Random') {
            orderOfGuesses = this.ShuffleArray(this.MatchInOrder());
        }
        else if (strategy == 'Smart Matching') {
            orderOfGuesses = this.SmartMatch();
        }
        var numberOfguesses = [];
        for (var i = 0; i < numberOfRouds; i++) {
            var grid = this.GenerateGrid(parseInt(this.bSize.substring(0, 1)), parseInt(this.bSize.substring(2, 3)));
            this.guessOrder = orderOfGuesses;
            var countGuesses = this.ExecuteStrategy(orderOfGuesses, grid);
            numberOfguesses.push(countGuesses);
            if (strategy == "Random") {
                orderOfGuesses = this.ShuffleArray(orderOfGuesses);
            }
        }
        this.BuildGridVisual(this.gridData);
        this.avg = numberOfguesses.reduce(function (a, b) { return a + b; }, 0) / numberOfguesses.length;
        this.max = Math.max.apply(Math, numberOfguesses);
        this.min = Math.min.apply(Math, numberOfguesses);
    };
    //test if a pair is already in the array
    AppComponent.prototype.TestPairInArray = function (array, pair) {
        return array.some(function (e) { return e[0] == pair[0] && e[1] == pair[1]; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "grid", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/grid/grid.component.html":
/*!******************************************!*\
  !*** ./src/app/grid/grid.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d3-chart\" #chart></div>\r\n\r\n\r\n<button mat-raised-button color=\"primary\" (click)=\"PartyMode()\">Party Mode {{partyModeToggle ? \"ON\" : \"OFF\"}}</button>\r\n<br>\r\n<div *ngIf=\"partyModeToggle\">\r\n    <button  mat-raised-button color=\"primary\" (click)=\"SuperPartyMode()\">SUPER PARTY MODE {{superPartyModeToggle? \"ON\" : \"OFF\"}}</button>\r\n</div>"

/***/ }),

/***/ "./src/app/grid/grid.component.scss":
/*!******************************************!*\
  !*** ./src/app/grid/grid.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d3-chart {\n  width: 100%;\n  height: 400px; }\n\n.d3-chart .axis path,\n.d3-chart .axis line {\n  stroke: #999; }\n\n.d3-chart .axis text {\n  fill: #999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC9LOlxcUGxheVxcbWF0Y2hHYW1lU2l0ZVxcTWVtb3J5R2FtZS9zcmNcXGFwcFxcZ3JpZFxcZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2Y7O0VBRUUsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQzLWNoYXJ0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmQzLWNoYXJ0IC5heGlzIHBhdGgsXHJcbiAgLmQzLWNoYXJ0IC5heGlzIGxpbmUge1xyXG4gICAgc3Ryb2tlOiAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuZDMtY2hhcnQgLmF4aXMgdGV4dCB7XHJcbiAgICBmaWxsOiAjOTk5O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/grid/grid.component.ts":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.partyModeToggle = false;
        this.superPartyModeToggle = false;
        this.animationSpeed = 100;
    }
    GridComponent.prototype.ngOnInit = function () {
        this.createGrid();
        if (this.data) {
            this.updateChart();
        }
    };
    GridComponent.prototype.ngOnChanges = function () {
        if (this.chart) {
            this.updateChart();
        }
    };
    GridComponent.prototype.createGrid = function () {
        var element = this.chartContainer.nativeElement;
        this.width = element.offsetWidth - this.margin.left - this.margin.right;
        this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
        this.svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);
        // chart plot area
        this.chart = this.svg.append('g')
            .attr('class', 'grid')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        this.gridCells = this.svg.selectAll('rect')
            .data(this.data.gridCells)
            .enter()
            .append('rect')
            .attr('x', function (x) { return x.posX * 40; })
            .attr('y', function (y) { return y.posY * 40; })
            .attr('width', 40)
            .attr('height', 40)
            .attr('fill', 'white')
            .attr('stroke', 'black')
            .attr('stroke-width', 2)
            .attr('index', function (i) { return i.index; });
        this.textForCells = this.svg.selectAll('text')
            .data(this.data.gridCells)
            .enter()
            .append('text')
            .attr('x', function (x) { return x.posX * 40 + 3; })
            .attr('y', function (y) { return y.posY * 40 + 10; })
            .text(function (i) { return i.index; })
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .attr("fill", "black");
    };
    GridComponent.prototype.updateChart = function () {
        this.gridCells = this.svg.selectAll('rect')
            .data([]).exit().remove();
        this.textForCells = this.svg.selectAll('text')
            .data([]).exit().remove();
        this.gridCells = this.svg.selectAll('rect')
            .data(this.data.gridCells);
        this.gridCells = this.gridCells
            .enter()
            .append('rect')
            .attr('x', function (x) { return x.posX * 40; })
            .attr('y', function (y) { return y.posY * 40; })
            .attr('width', 40)
            .attr('height', 40)
            .attr('fill', 'white')
            .attr('stroke', 'black')
            .attr('stroke-width', 2)
            .attr('index', function (i) { return i.index; });
        this.textForCells = this.svg.selectAll('text')
            .data(this.data.gridCells)
            .enter()
            .append('text')
            .attr('x', function (x) { return x.posX * 40 + 3; })
            .attr('y', function (y) { return y.posY * 40 + 10; })
            .text(function (i) { return i.index; })
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .attr("fill", "black");
        if (this.data.pickOrder) {
            this.animationSpeed = this.data.animationSpeed;
            this.animateGuesses();
        }
    };
    GridComponent.prototype.lightUpCell = function (cells, animationIndex) {
        var t = d3__WEBPACK_IMPORTED_MODULE_2__["transition"]().duration(this.animationSpeed).delay(animationIndex * this.animationSpeed).ease(d3__WEBPACK_IMPORTED_MODULE_2__["easeLinear"]);
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"]('rect')
            .filter(function (d, i) { return cells[0] == i || i == cells[1]; })
            .transition(t)
            .attr('fill', 'red')
            .transition()
            .attr('fill', 'white');
        console.log(animationIndex, this.data.pickOrder.length);
        if (animationIndex == this.data.pickOrder.length - 1 && this.animating == false) {
            for (var i = 0; i < this.data.pickOrder.length; i++) {
                this.lightUpCell(this.data.pickOrder[i], i);
            }
        }
    };
    GridComponent.prototype.animateGuesses = function () {
        var _this = this;
        if (this.data.pickOrder) {
            var _loop_1 = function (j) {
                var t = d3__WEBPACK_IMPORTED_MODULE_2__["transition"]().duration(this_1.animationSpeed).delay(j * this_1.animationSpeed * 2).ease(d3__WEBPACK_IMPORTED_MODULE_2__["easeLinear"]);
                d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"]('rect')
                    .filter(function (d, i) { return _this.data.pickOrder[j][0] == i || i == _this.data.pickOrder[j][1]; })
                    .transition(t)
                    .attr('fill', function (d, i) { return 'purple'; })
                    //.attr('fill',(d,i)=>{return j % 2==0 ? 'red': 'blue'})
                    .transition()
                    .attr('fill', 'white');
            };
            var this_1 = this;
            for (var j = 0; j < this.data.pickOrder.length; j++) {
                _loop_1(j);
            }
        }
    };
    GridComponent.prototype.PartyMode = function () {
        if (!this.partyModeToggle) {
            this.partyModeToggle = true;
            this.PartyModeOn();
        }
        else {
            this.partyModeToggle = false;
            d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"]('rect')
                .attr('fill', 'white')
                .interrupt();
        }
    };
    GridComponent.prototype.PartyModeOn = function () {
        var _this = this;
        var t = d3__WEBPACK_IMPORTED_MODULE_2__["transition"]().duration(this.animationSpeed).ease(d3__WEBPACK_IMPORTED_MODULE_2__["easeLinear"]);
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"]('rect')
            .filter(function (d, i) { return Math.random() >= 0.2; })
            .transition(t)
            .attr('fill', function (d, i) { return "hsl(" + Math.random() * 360 + ",100%,50%)"; })
            .on("end", function () { return _this.PartyModeOn(); });
    };
    GridComponent.prototype.SuperPartyMode = function () {
        if (!this.superPartyModeToggle) {
            this.superPartyModeToggle = true;
            this.SuperPartyModeOn();
        }
        else {
            this.superPartyModeToggle = false;
        }
    };
    GridComponent.prototype.SuperPartyModeOn = function () {
        var _this = this;
        var t = d3__WEBPACK_IMPORTED_MODULE_2__["transition"]().duration(this.animationSpeed).ease(d3__WEBPACK_IMPORTED_MODULE_2__["easeLinear"]);
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"]('rect')
            .transition(t)
            .attr('fill', function (d, i) { return "hsl(" + Math.random() * 360 + ",100%,50%)"; })
            .attr("transform", function () { return "translate(" + Math.floor(Math.random() * 10) + "," + Math.floor(Math.random() * 10) + ")"; })
            //.attr('x',(d,i)=>Math.floor(Math.random()*this.data.width*40))
            //.attr('y',(d,i)=>Math.floor(Math.random()*this.data.height*40))
            .on("end", function () { return _this.SuperPartyModeOn(); });
        d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"]('text')
            .transition(t)
            .attr("font-size", function () { return Math.floor(Math.random() * 40) + "px"; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GridComponent.prototype, "chartContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridComponent.prototype, "data", void 0);
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/grid/grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! K:\Play\matchGameSite\MemoryGame\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map