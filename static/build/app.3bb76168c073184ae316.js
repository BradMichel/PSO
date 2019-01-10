webpackJsonp([0],{

/***/ "/MQU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getMuiTheme_1 = __webpack_require__("K8T2");
var colorManipulator_1 = __webpack_require__("+7av");
var colors_1 = __webpack_require__("vlCz");
var getTheme = function () {
    var muiTheme = getMuiTheme_1.default({
        fontFamily: 'Roboto, sans-serif',
        palette: {
            primary1Color: colors_1.deepOrange500,
            primary2Color: colors_1.cyan700,
            primary3Color: colors_1.grey400,
            accent1Color: colors_1.pinkA200,
            accent2Color: colors_1.grey100,
            accent3Color: colors_1.grey500,
            textColor: colors_1.darkBlack,
            alternateTextColor: '#4b4f56',
            canvasColor: colors_1.white,
            borderColor: colors_1.grey300,
            disabledColor: colorManipulator_1.fade(colors_1.darkBlack, 0.3),
            pickerHeaderColor: colors_1.deepOrange500,
            clockCircleColor: colorManipulator_1.fade(colors_1.darkBlack, 0.07),
            shadowColor: colors_1.fullBlack,
        },
        appBar: {
            height: 44,
            color: '#262627',
            textColor: colors_1.white
        },
        checkbox: {
            checkedColor: "#FFC94D"
        },
        raisedButton: {
            primaryColor: colors_1.redA700,
            textColor: colors_1.white,
            primaryTextColor: colors_1.white,
            secondaryColor: colors_1.white
        }
    });
    return muiTheme;
};
exports.default = getTheme;


/***/ }),

/***/ "0wEB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("UcQW"));
__export(__webpack_require__("oSuS"));
__export(__webpack_require__("T97m"));
__export(__webpack_require__("XH46"));
__export(__webpack_require__("112b"));
__export(__webpack_require__("Yon6"));
__export(__webpack_require__("iZaU"));
__export(__webpack_require__("OwUa"));
__export(__webpack_require__("KxJN"));
__export(__webpack_require__("JW+s"));


/***/ }),

/***/ "112b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "3uhU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("U7vG");
var PropTypes = __webpack_require__("KSGD");
var material_ui_1 = __webpack_require__("Q4lS");
var SelectableList = material_ui_1.makeSelectable(material_ui_1.List);
var AppNavDrawer = /** @class */ (function (_super) {
    __extends(AppNavDrawer, _super);
    function AppNavDrawer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleTouchTapHeader = function () {
            // this.context.router.push('/')
            _this.props.onRequestChangeNavDrawer(false, '');
        };
        return _this;
    }
    AppNavDrawer.prototype.render = function () {
        var _a = this.props, docked = _a.docked, onRequestChangeNavDrawer = _a.onRequestChangeNavDrawer, onChangeList = _a.onChangeList, open = _a.open;
        return (React.createElement(material_ui_1.Drawer, { docked: docked, open: open, onRequestChange: onRequestChangeNavDrawer }));
    };
    AppNavDrawer.propTypes = {
        docked: PropTypes.bool.isRequired,
        onChangeList: PropTypes.func.isRequired,
        onRequestChangeNavDrawer: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
    };
    AppNavDrawer.contextTypes = {
    // router: PropTypes.object.isRequired
    };
    return AppNavDrawer;
}(React.Component));
exports.AppNavDrawer = AppNavDrawer;


/***/ }),

/***/ "DrRG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//  imports
var React = __webpack_require__("U7vG");
var material_ui_1 = __webpack_require__("Q4lS");
var group_1 = __webpack_require__("GXP5");
var cancel_1 = __webpack_require__("IRMx");
var visibility_1 = __webpack_require__("OmIV");
var visibility_off_1 = __webpack_require__("PF4U");
__webpack_require__("rplX");
var _1 = __webpack_require__("Wsg1");
var class_1 = __webpack_require__("0wEB");
var util_1 = __webpack_require__("OMJi");
var google = window.google;
var $ = __webpack_require__("7t+N");
var Ants = /** @class */ (function (_super) {
    __extends(Ants, _super);
    //# Lifecycle
    function Ants(props, state) {
        var _this = _super.call(this) || this;
        //
        _this.bind = function () {
            _this._handleCreateUser.bind(_this);
            _this._handleSelectUser.bind(_this);
            _this._handleModeAddClient.bind(_this);
            _this._handleAddClient.bind(_this);
            _this._handleSend.bind(_this);
            _this.setVehicleRoute.bind(_this);
        };
        _this.init = function (first) {
            if (first === void 0) { first = false; }
            _this.content = new class_1.Content();
            _this.users = new class_1.Users();
            _this.users.load();
            _this.selectedClients = {};
            if (!first) {
                _this.setState({ userSelectedID: "0", modeAddClient: false, modeListClients: false, numberOfSelectedClients: 0 });
            }
        };
        _this.erase = function () {
            _this.init();
            localStorage.clear();
            _this.setState({ userSelectedID: "0" });
        };
        _this.readJson = function (text) {
            var json = JSON.parse(text);
            // console.log(json)
            _this.content.getDistancesFromCoordinates(json["coordinates"]);
            _this.content.capacity = json["capacity"];
            _this.content.demand = json["demand"];
            _this.content.timeStart = _this.content.minuteToTime(json["timeStart"]).toISOString();
            _this.content.setTimesWindowsFromMinutes(json["timewindows"]);
            _this.content.setTimesStartFromMinutes(json["timesStart"]);
            _this.content.serviceTime = json["serviceTime"];
            _this.content.send(function (vehiclesRouting) {
                var duration = 0;
                var duration2 = 0;
                var routes = vehiclesRouting.filter(function (vehicleRouting) {
                    vehicleRouting.distance = vehicleRouting.distance / 60;
                    var distances = _this.content.distances.map(function (distances) {
                        return distances.map(function (distance) {
                            return distance / 60;
                        });
                    });
                    var path = vehicleRouting.path;
                    var IdPreStation;
                    path.map(function (idStation) {
                        if (idStation > 0) {
                            duration2 += distances[IdPreStation][idStation];
                        }
                        IdPreStation = idStation;
                    });
                    duration += vehicleRouting.distance;
                    return vehicleRouting.path.length > 1;
                });
                console.log(JSON.stringify(routes));
                console.log("routes : ", routes);
                console.log("distancia Total: ", duration);
                console.log("distancia sin espera: ", duration2);
            });
        };
        //# handles 
        _this._handleCreateUser = function (user) {
            _this.users.add(user);
            _this._handleSelectUser(user);
        };
        _this._handleSelectUser = function (user) {
            if (user !== undefined) {
                _this.setState({
                    userSelectedID: user.ID
                }, _this.selectAllClients);
                user.getDistances();
            }
            else {
                _this.setState({
                    userSelectedID: "0"
                });
            }
        };
        _this._handleChooseMap = function (event) {
            var userSelectedID = _this.state.userSelectedID;
            console.log(userSelectedID);
            if (userSelectedID !== "0") {
                var user_1 = _this.users.getUser(userSelectedID);
                var file_1 = event.target.files[0];
                var reader = new FileReader();
                reader.readAsText(file_1);
                reader.onload = function (event) {
                    var text = event.target.result;
                    var type = (file_1.type !== "") ? file_1.type : file_1.name.split(".")[1];
                    switch (type) {
                        case "kml":
                        case "application/vnd.google-earth.kml+xml":
                            _this.kml = new class_1.Kml(text);
                            var _a = _this.kml.getDepositsAndClients(), deposits = _a.deposits, clients = _a.clients;
                            console.log("deposits: ", deposits);
                            console.log("clients: ", clients);
                            user_1.places = new class_1.Places(deposits);
                            user_1.places.merge(clients);
                            user_1.saveClients();
                            user_1.saveDeposits();
                            _this.forceUpdate();
                            user_1.places.getDistances(function (useri) { useri.saveClients(); useri.saveDeposits(); }, user_1);
                            break;
                        case "json":
                        case "application/json":
                            _this.readJson(text);
                            break;
                    }
                };
            }
        };
        _this._handleSend = function () {
            var _a = _this.state, userSelectedID = _a.userSelectedID, numberOfVehicles = _a.numberOfVehicles, vehicleCapacity = _a.vehicleCapacity;
            if (userSelectedID !== "0") {
                var user = _this.users.getUser(userSelectedID);
                user.places.loadDemand();
                var placesToSend = _this.getPlacesToSend();
                user.send(placesToSend, numberOfVehicles, vehicleCapacity, _this.loadVehicleRoutes);
            }
        };
        _this._handleModeAddClient = function () {
            var modeAddClient = _this.state.modeAddClient;
            _this.setState({ modeAddClient: !modeAddClient });
        };
        _this._handleModeListClients = function () {
            console.log("list Clients: ", _this.selectedClients);
            var modeListClients = _this.state.modeListClients;
            _this.setState({ modeListClients: !modeListClients });
        };
        _this._handleAddClient = function (client, userID) {
            var user = _this.users.getUser(userID);
            user.places.push(client);
            user.saveClients();
            _this._handleModeAddClient();
            user.places.getDistances(function (useri) { useri.saveClients(); useri.saveDeposits(); }, user);
        };
        _this._handleDeleteClient = function (name) {
            console.log("name: ", name);
            var userSelectedID = _this.state.userSelectedID;
            if (userSelectedID != "0") {
                var user = _this.users.getUser(userSelectedID);
                user.places.delete(name);
                user.saveClients();
                user.saveDeposits();
                _this.forceUpdate();
            }
        };
        _this._handleChangeKeyWord = function (event, newKeyWord) {
            _this.setState({ keyWord: newKeyWord });
        };
        _this._handleChangeNumberOfVehicles = function (event, newNumberOfVehicles) {
            _this.setState({ numberOfVehicles: +newNumberOfVehicles });
        };
        _this._handleChangeVehicleCapacity = function (event, newCapacity) {
            _this.setState({ vehicleCapacity: +newCapacity });
        };
        _this.handleChangeRouteSelected = function (event, value) {
            // console.log(event,value)
            _this.setVehicleRoute(value);
        };
        // 
        //gets 
        _this.getDirection = function (positionOrigen, positionDestinate, directionsService, directionsDisplay, callback, callbackError) {
            console.trace("Ants getDirection");
            directionsService.route({
                origin: positionOrigen,
                destination: positionDestinate,
                travelMode: google.maps.TravelMode.DRIVING
            }, function (response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    directionsDisplay.setRouteIndex(1);
                    callback();
                }
                else {
                    callbackError();
                }
            });
        };
        _this.getStyles = function () {
            var styles = {
                uploadButton: {
                    verticalAlign: 'middle',
                },
                uploadInput: {
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: '100%',
                    opacity: 0,
                },
            };
            return styles;
        };
        _this.getTools = function (user) {
            var _a = _this.state, modeAddClient = _a.modeAddClient, modeListClients = _a.modeListClients, numberOfSelectedClients = _a.numberOfSelectedClients, routeSelected = _a.routeSelected;
            var vehicleRoutes = _this.vehicleRoutes;
            var styles = _this.getStyles();
            var userSelectedID = (user !== undefined) ? user.ID : "0";
            var disable = modeAddClient || modeListClients;
            var seeClientsTools = (user === undefined) ? null : (modeListClients) ? React.createElement("div", null,
                React.createElement(material_ui_1.IconButton, { onClick: _this._handleModeListClients, tooltip: "cancel", tooltipPosition: "top-center" },
                    " ",
                    React.createElement(cancel_1.default, null),
                    " ")) : React.createElement("div", null,
                React.createElement(material_ui_1.IconButton, { onClick: _this._handleModeListClients, disabled: modeAddClient, tooltip: "See Clients", tooltipPosition: "top-center" },
                    " ",
                    React.createElement(group_1.default, null),
                    " "));
            var menuSelect = (React.createElement(material_ui_1.DropDownMenu, { value: routeSelected, onChange: _this.handleChangeRouteSelected.bind(_this) }, vehicleRoutes.map(function (path, index) {
                return React.createElement(material_ui_1.MenuItem, { key: index, value: index, primaryText: "Vehiculo número " + index });
            })));
            var selectedVehicleRouteTool = (vehicleRoutes.length > 0) ? React.createElement("div", null,
                " ",
                menuSelect) : null;
            var readMapTool = (user === undefined) ? null : React.createElement("div", null,
                React.createElement(material_ui_1.FlatButton, { label: "read a map", labelPosition: "before", style: styles.uploadButton, containerElement: "label", disabled: disable },
                    React.createElement("input", { type: "file", style: styles.uploadInput, onChange: _this._handleChooseMap })));
            var disableSend = (util_1.isNullOrUndefined(_this.vehicleRoute)) ? false : true;
            var send = (numberOfSelectedClients > 0) ? React.createElement("div", null,
                React.createElement(material_ui_1.FlatButton, { label: "send", onClick: _this._handleSend, disabled: disableSend })) : null;
            return (React.createElement("div", { id: "controls" },
                React.createElement(material_ui_1.Toolbar, null,
                    React.createElement(material_ui_1.ToolbarGroup, { firstChild: true }),
                    React.createElement(material_ui_1.ToolbarGroup, null,
                        selectedVehicleRouteTool,
                        seeClientsTools,
                        readMapTool,
                        React.createElement("div", null,
                            React.createElement(_1.MenuUsers, { users: _this.users, userSelectedID: userSelectedID, createUser: _this._handleCreateUser, selectUser: _this._handleSelectUser })),
                        send))));
        };
        _this.getListClients = function () {
            var _a = _this.state, modeListClients = _a.modeListClients, userSelectedID = _a.userSelectedID, keyWord = _a.keyWord, numberOfVehicles = _a.numberOfVehicles, vehicleCapacity = _a.vehicleCapacity;
            var selectedClients = _this.selectedClients;
            var display = (modeListClients) ? "inherit" : "none";
            var listItems;
            var rg = new RegExp(keyWord.toLowerCase(), "g");
            if (modeListClients && userSelectedID !== "0") {
                listItems = _this.users.getUser(userSelectedID).places.getClients().filter(function (client) { var matchName = client.clientName.toLowerCase().match(rg); return (keyWord === "" || (!util_1.isNullOrUndefined(matchName) && matchName.length > 0)); }).map(function (client) {
                    return React.createElement("div", { key: client.name },
                        React.createElement(material_ui_1.Checkbox, { style: { display: "inline-block", width: "90%" }, disabled: !client.finalized, uncheckedIcon: React.createElement(visibility_off_1.default, null), checkedIcon: React.createElement(visibility_1.default, null), label: client.clientName, checked: (selectedClients[client.name] !== undefined), onCheck: _this.selectClient, value: client.clientName }),
                        React.createElement(material_ui_1.IconButton, { onClick: function () { _this._handleDeleteClient(client.name); }, tooltip: "cancel", tooltipPosition: "top-center" },
                            " ",
                            React.createElement(cancel_1.default, null),
                            " "));
                });
            }
            return React.createElement("div", { id: "listClients", className: display },
                React.createElement("br", null),
                React.createElement("div", null, " Informacion de vehiculos"),
                React.createElement("br", null),
                "N\u00FAmero de veh\u00EDculos:",
                React.createElement("br", null),
                React.createElement(material_ui_1.TextField, { value: numberOfVehicles, onChange: _this._handleChangeNumberOfVehicles, id: "numberOfVehiclesField", hintText: "Numero de vehiculos" }),
                React.createElement("br", null),
                "Capacidad de los veh\u00EDculos:",
                React.createElement("br", null),
                React.createElement(material_ui_1.TextField, { value: vehicleCapacity, onChange: _this._handleChangeVehicleCapacity, id: "vehicleCapacityField", hintText: "Capacidad de Vehiculos" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("div", null, " Lista de estaciones "),
                React.createElement("br", null),
                React.createElement(material_ui_1.TextField, { value: keyWord, onChange: _this._handleChangeKeyWord, id: "keyWordTextField", hintText: "Busqueda por nombre" }),
                React.createElement("br", null),
                listItems);
        };
        _this.getPlacesToSend = function () {
            var userSelectedID = _this.state.userSelectedID;
            if (userSelectedID !== "0") {
                var user = _this.users.getUser(userSelectedID);
                var placesToSend = new class_1.Places();
                placesToSend.push(user.places.getDeposits()[0]);
                var selectedClients = _this.selectedClients;
                for (var name in selectedClients) {
                    if (selectedClients.hasOwnProperty(name)) {
                        var client = user.places.getByName(name);
                        placesToSend.push(client);
                    }
                }
                return placesToSend;
            }
        };
        //
        // sets 
        _this.selectClient = function (event, isInputChecked) {
            var name = event.target.value;
            var numberOfSelectedClients = _this.state.numberOfSelectedClients;
            if (_this.selectedClients[name] === undefined) {
                var userSelectedID = _this.state.userSelectedID;
                var clients = _this.users.getUser(userSelectedID).places.getClients();
                var client = clients.filter(function (client) { return client.name === name; });
                if (client[0] !== undefined) {
                    _this.selectedClients[name] = client[0];
                    numberOfSelectedClients++;
                }
            }
            else {
                delete _this.selectedClients[name];
                numberOfSelectedClients--;
            }
            delete _this.vehicleRoute;
            // this.forceUpdate()
            _this.setState({ numberOfSelectedClients: numberOfSelectedClients });
        };
        _this.selectAllClients = function () {
            //    console.log("selectAllClients")
            var userSelectedID = _this.state.userSelectedID;
            var numberOfSelectedClients = 0;
            var user = _this.users.getUser(userSelectedID);
            if (user !== undefined) {
                var clients = _this.users.getUser(userSelectedID).places.getClients();
                //console.log("clients : ",clients)
                clients.forEach(function (client) {
                    _this.selectedClients[client.name] = client;
                    numberOfSelectedClients++;
                });
                _this.setState({ numberOfSelectedClients: numberOfSelectedClients });
            }
        };
        _this.setVehicleRoute = function (index) {
            _this.vehicleRoute = _this.vehicleRoutes[index];
            _this.setState({ routeSelected: index });
            //this.forceUpdate()
        };
        _this.loadVehicleRoutes = function (vehicleRoutes) {
            _this.vehicleRoutes = vehicleRoutes;
            _this.setVehicleRoute(0);
        };
        _this.state = { userSelectedID: "0", modeAddClient: false, modeListClients: false, numberOfSelectedClients: 0, keyWord: "", numberOfVehicles: 0, vehicleCapacity: 0, routeSelected: 0 };
        _this.init(true);
        _this.bind();
        _this.vehicleRoutes = [];
        return _this;
    }
    Ants.prototype.componentDidMount = function () {
    };
    Ants.prototype.componentDidUpdate = function () {
    };
    //
    Ants.prototype.render = function () {
        var _a = this.state, userSelectedID = _a.userSelectedID, modeAddClient = _a.modeAddClient, modeListClients = _a.modeListClients, routeSelected = _a.routeSelected;
        var user = this.users.getUser(userSelectedID);
        var tools = this.getTools(user);
        var placesToSend = this.getPlacesToSend();
        var vehicleRoute = this.vehicleRoute;
        console.log(vehicleRoute);
        var routeID = userSelectedID + routeSelected;
        // console.log("vehicleRoute: ",vehicleRoute)
        return (React.createElement("div", { id: "mcvrp" },
            this.getListClients(),
            React.createElement(_1.Map, { user: user, modeAddClient: modeAddClient, modeListClients: modeListClients, addClient: this._handleAddClient, selectedClients: this.selectedClients, vehicleRoute: vehicleRoute, placesToSend: placesToSend, routeID: routeID }),
            tools));
    };
    return Ants;
}(React.Component));
exports.Ants = Ants;


/***/ }),

/***/ "JW+s":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("0wEB");
var User = /** @class */ (function () {
    function User(name, ID, clients, deposits) {
        var _this = this;
        this.create = function (callback) {
            var create = confirm("Esta seguro de crear un nuevo usuario");
            if (create) {
                var users = JSON.parse(localStorage.getItem("users"));
                if (users == undefined) {
                    users = [];
                }
                users.push(_this.name);
                localStorage.setItem("users", JSON.stringify(users));
                _this.ID = _this.name;
                callback(_this);
            }
            else {
                alert("Usuario no creado");
            }
        };
        this.saveClients = function () {
            // console.log("saveClients",this.ID,this.places.clientsToJson())
            var clients = _this.places.clientsToJson();
            // console.trace("clients: ", clients)
            localStorage.setItem("clients" + _this.ID, JSON.stringify(clients));
        };
        this.saveDeposits = function () {
            // console.trace("saveDeposits",this.ID)
            var deposits = _this.places.depositsToJson();
            // console.log("deposits: ",deposits)
            localStorage.setItem("deposits" + _this.ID, JSON.stringify(deposits));
        };
        this.get = function () {
            var clients = JSON.parse(localStorage.getItem("clients" + _this.ID)) || [];
            var deposits = JSON.parse(localStorage.getItem("deposits" + _this.ID)) || [];
            _this.name = _this.ID;
            _this.places = new _1.Places(deposits, clients);
            _this.saveClients();
        };
        this.send = function (places, numberOfVehicles, vehicleCapacity, callback) {
            var body = JSON.stringify({
                stations: places.get().map(function (station) { return station.toJsonToSend(); }),
                vehicle: { capacity: vehicleCapacity, quantity: numberOfVehicles }
            });
            // console.log("body: ",body)
            fetch("api/pso", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            })
                .then(function (response) {
                if (response.status <= 400) {
                    response.json().then(function (vehiclesRouting) {
                        console.log("vehiclesRouting: ", vehiclesRouting);
                        if (vehiclesRouting.length > 0) {
                            //console.log("places: ",places.get())
                            //console.log("route: ",vehiclesRouting[0].path)
                            callback(vehiclesRouting);
                        }
                    });
                }
                else {
                    response.text().then(function (text) {
                        throw text;
                    });
                }
            });
        };
        this.getDistances = function () {
            // console.log("getDistances")
            _this.places.getDistances(function (user) { user.saveClients(); user.saveDeposits(); }, _this);
        };
        this.name = name;
        this.ID = ID;
        this.places = new _1.Places(deposits);
        this.places.merge(clients);
    }
    return User;
}());
exports.User = User;
var Users = /** @class */ (function () {
    function Users() {
        var _this = this;
        this.getUser = function (ID) {
            var usersFound = _this.users.filter(function (user) { return user.ID === ID; });
            var user = (usersFound.length > 0) ? usersFound[0] : undefined;
            return user;
        };
        this.load = function () {
            // console.log(data.name,doc.id,data.clients)
            var users = JSON.parse(localStorage.getItem("users"));
            if (users == undefined || users.length == 0) {
                var user = new User("User1", "0000000", [], []);
                _this.add(user);
            }
            else {
                users.forEach(function (userName) {
                    var user = new User(userName, userName, [], []);
                    user.get();
                    _this.add(user);
                });
            }
        };
        this.getClientsFromData = function (clientsData) {
            return clientsData.map(function (client, id) { return new _1.Client(client.name, new google.maps.LatLng(client.latLng.lat, client.latLng.lng), id, client.finalized, client.distances); });
        };
        this.getDepostisFromData = function (depositsData) {
            return depositsData.map(function (deposit) { return new _1.Deposit(deposit.name, new google.maps.LatLng(deposit.latLng.lat, deposit.latLng.lng), deposit.finalized, deposit.distances); });
        };
        this.add = function (user) {
            _this.users.push(user);
        };
        this.search = function (value) {
            var inputValue = value.trim().toLowerCase();
            var inputLength = inputValue.length;
            var usersFound = inputLength === 0 ? [] : _this.users.filter(function (user) {
                return user.name.toLowerCase().slice(0, inputLength) === inputValue;
            });
            return usersFound;
        };
        this.users = new Array();
    }
    return Users;
}());
exports.Users = Users;


/***/ }),

/***/ "KxJN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("0wEB");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(name, latLng, id, finalized, distances) {
        if (finalized === void 0) { finalized = false; }
        if (distances === void 0) { distances = {}; }
        var _this = _super.call(this, name, latLng, finalized, distances, id) || this;
        _this.loadDemand = function () {
            _this.demand = Math.floor((Math.random() * 10000) + 1);
        };
        _this.loadP = function () {
            _this.P = 0;
        };
        _this.clientName = name;
        latLng = (latLng instanceof google.maps.LatLng) ? latLng : new google.maps.LatLng(latLng.lat, latLng.lng);
        var infoWindow = new google.maps.InfoWindow({
            content: '<div>'
                + '<div> Nombre: ' + name + '</div>'
                + '</div>',
            position: latLng
        });
        _this.infoWindow = infoWindow;
        return _this;
    }
    Client.prototype.toJson = function () {
        var _a = this, id = _a.id, name = _a.name, clientName = _a.clientName, latLng = _a.latLng, distances = _a.distances, finalized = _a.finalized;
        return { id: id, name: name, clientName: clientName, latLng: { lat: latLng.lat(), lng: latLng.lng() }, distances: distances, finalized: finalized };
    };
    Client.prototype.toJsonToSend = function () {
        var _a = this, id = _a.id, name = _a.name, clientName = _a.clientName, latLng = _a.latLng, distances = _a.distances, P = _a.P, W = _a.W, B = _a.B, I = _a.I, demand = _a.demand;
        var distancesToSend = [];
        for (var key in distances) {
            if (distances.hasOwnProperty(key)) {
                if (typeof (distances[key]) !== "number") {
                    console.log(id, key, distances[key]);
                }
                distancesToSend.push(distances[key]);
            }
        }
        return { id: id, name: name, clientName: clientName, latLng: { lat: latLng.lat(), lng: latLng.lng() }, distances: distancesToSend, W: W, B: B, I: I, P: P, demand: demand };
    };
    return Client;
}(_1.Place));
exports.Client = Client;


/***/ }),

/***/ "OwUa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("0wEB");
var Deposit = /** @class */ (function (_super) {
    __extends(Deposit, _super);
    function Deposit(name, latLng, finalized, distances, Id) {
        if (finalized === void 0) { finalized = false; }
        if (distances === void 0) { distances = {}; }
        if (Id === void 0) { Id = 0; }
        var _this = _super.call(this, name, latLng, finalized, distances, Id) || this;
        _this.capacity = 9999999999;
        return _this;
    }
    return Deposit;
}(_1.Place));
exports.Deposit = Deposit;


/***/ }),

/***/ "T97m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "UcQW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("0wEB");
var $ = __webpack_require__("7t+N");
var Kml = /** @class */ (function () {
    function Kml(kml) {
        var _this = this;
        this.readFolders = function () {
            var $placemarks = new Array();
            _this.folders.each(function (i, folder) {
                var $folder = $(folder);
                var depositsReader, clientsReader;
                var $placemarksReader = _this.readFolder($folder);
                $placemarks = $placemarks.concat($placemarksReader);
            });
            return $placemarks;
        };
        this.readFolder = function (folder) {
            console.log("readFolder");
            // let name = folder.find('name')[0].innerHTML
            var $placemarks = new Array();
            folder.find('Placemark').each(function (i, placemark) {
                var $placemark = $(placemark);
                $placemarks.push($placemark);
            });
            return $placemarks;
        };
        this.readPlacemark = function ($placemark, id) {
            console.log("readPlacemark");
            var defaultName = 'Deposit';
            var name = $placemark.find('name')[0].innerHTML;
            var point = $placemark.find('Point')[0];
            // console.log("Point: ",point)
            if (point == undefined) {
                return undefined;
            }
            if (name == defaultName) {
                var deposit = _this.getDeposit($placemark);
                // console.log(" deposit",deposit)
                return deposit;
            }
            else {
                var client = _this.getClient($placemark, id);
                // console.log("client: ",client)
                return client;
            }
        };
        this.readPlacemarks = function ($placemarks) {
            var clients = [];
            var deposits = [];
            $placemarks.map(function ($placemark, id) {
                var place = _this.readPlacemark($placemark, id);
                if (place instanceof _1.Client) {
                    clients.push(place);
                }
                else if (place instanceof _1.Deposit) {
                    deposits.push(place);
                }
            });
            return { deposits: deposits, clients: clients };
        };
        this.getDepositsAndClients = function () {
            var $placemarks = _this.readFolders();
            var _a = _this.readPlacemarks($placemarks), deposits = _a.deposits, clients = _a.clients;
            console.log("{deposits,clients}: ", { deposits: deposits, clients: clients });
            return { deposits: deposits, clients: clients };
        };
        this.getDeposit = function ($placemark) {
            var name = $placemark.find('name')[0].innerHTML;
            var coordinates = $placemark.find('coordinates')[0].innerHTML.split(',');
            var latLng = new google.maps.LatLng(+coordinates[1], +coordinates[0]);
            var deposit = new _1.Deposit(name, latLng);
            return deposit;
        };
        this.getClient = function ($placemark, id) {
            var name = $placemark.find('name')[0].innerHTML;
            var coordinates = $placemark.find('coordinates')[0].innerHTML.split(',');
            var latLng = new google.maps.LatLng(+coordinates[1], +coordinates[0]);
            //let Data = $placemark.find("Data")
            //let clientName = $(Data[0]).find("value").text()
            var client = new _1.Client(name, latLng, id);
            return client;
        };
        this.kml = $(kml);
        this.folders = this.kml.find("Folder");
    }
    return Kml;
}());
exports.Kml = Kml;


/***/ }),

/***/ "Wsg1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("o/hy"));
__export(__webpack_require__("DrRG"));
__export(__webpack_require__("odQl"));
__export(__webpack_require__("3uhU"));
__export(__webpack_require__("nQEB"));


/***/ }),

/***/ "XH46":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "Yon6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("rplX");
var limit = 5;
var Content = /** @class */ (function () {
    function Content() {
        var _this = this;
        this.addDistances = function () {
        };
        this.getDistancesFromCoordinates = function (coordinates) {
            var distancesMinutes = coordinates.map(function (coordinate1) {
                return coordinates.map(function (coordinate2) {
                    var x = coordinate2[0] - coordinate1[0];
                    var y = coordinate2[1] - coordinate1[1];
                    var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                    return distance;
                });
            });
            _this.distances = distancesMinutes.map(function (distances) {
                return distances.map(function (distance) {
                    return distance * 60;
                });
            });
            _this.changeDistancesToDurations();
        };
        this.changeDistancesToDurations = function () {
            var speed = 1;
            _this.durations = _this.distances.map(function (distancesStation) {
                return distancesStation.map(function (distance) {
                    return distance / speed;
                });
            });
        };
        this.setTimesWindowsFromMinutes = function (minutes) {
            _this.timewindows = minutes.map(function (minute) {
                return _this.minuteToTime(minute).toISOString();
            });
        };
        this.setTimesStartFromMinutes = function (minutes) {
            _this.timesStart = minutes.map(function (minute) {
                return _this.minuteToTime(minute).toISOString();
            });
        };
        this.minuteToTime = function (minute) {
            var today = new Date();
            today = new Date(today.getFullYear(), today.getMonth(), today.getDay(), 0);
            var date = new Date(today.getTime() + (minute * 60000));
            return date;
        };
        this.updatePos = function () {
            var postEnd = _this.markers.length - 1;
            if (_this.posDestination + limit > postEnd) {
                _this.posDestination = 0;
                if (_this.posOrigin + limit > postEnd) {
                    _this.posOrigin = 0;
                }
                else {
                    _this.posOrigin += limit;
                }
            }
            else {
                _this.posDestination += limit;
            }
        };
        this.save = function () {
            localStorage.setItem('content', JSON.stringify(_this.toString()));
        };
        this.setLocalStorage = function (content) {
            _this.distances = JSON.parse(content.distances);
            _this.durations = JSON.parse(content.durations);
            _this.posOrigin = content.posOrigin;
            _this.posDestination = content.posDestination;
        };
        this.send = function (callback) {
            _this.durations = _this.durations.map(function (durations, i) {
                return durations.map(function (duration, j) {
                    if (duration == 0 && i != j) {
                        duration = 1;
                    }
                    return duration;
                });
            });
            var body = JSON.stringify({
                distances: _this.durations,
                demand: _this.demand,
                capacity: _this.capacity,
                serviceTime: _this.serviceTime,
                timewindows: _this.timewindows,
                timesStart: _this.timesStart,
                timeStart: _this.timeStart
            });
            console.log("this.durations ", _this.durations);
            fetch('api/ants', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            })
                .then(function (response) {
                if (response.status <= 400) {
                    response.json().then(function (vehiclesRouting) {
                        callback(vehiclesRouting);
                        //callback()
                    });
                }
                else {
                    response.text().then(function (text) {
                        throw text;
                    });
                }
            });
        };
        this.distances = new Array();
        this.durations = new Array();
        this.serviceTime = new Array();
        this.posOrigin = 0;
        this.posDestination = 0;
        this.demand = new Array();
        this.capacity = new Array();
        this.capacity = [550];
        this.timewindows = new Array();
        this.timesStart = new Array();
    }
    Content.prototype.toString = function () {
        return { distances: JSON.stringify(this.distances), durations: JSON.stringify(this.durations), posOrigin: this.posOrigin, posDestination: this.posDestination };
    };
    return Content;
}());
exports.Content = Content;


/***/ }),

/***/ "iZaU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("0wEB");
var util_1 = __webpack_require__("OMJi");
var Place = /** @class */ (function () {
    function Place(name, latLng, finalized, distances, id) {
        if (finalized === void 0) { finalized = false; }
        if (distances === void 0) { distances = {}; }
        if (id === void 0) { id = 0; }
        var _this = this;
        this.initW = function (length) {
            for (var index = 0; index < length; index++) {
                _this.W.push(0);
            }
            if (_this.id == 0) {
            }
        };
        this.initB = function (length) {
            for (var index = 0; index < length; index++) {
                _this.B.push(0);
            }
        };
        this.initI = function (length) {
            for (var index = 0; index < length; index++) {
                _this.I.push(1);
            }
        };
        this.loadW = function () {
            _this.loadI();
            _this.W.forEach(function (w, index) {
                if (_this.I[index] == 0) {
                    _this.W[index] = Math.floor((Math.random() * 3600));
                }
            });
        };
        this.loadI = function () {
            _this.I.forEach(function (I, index) {
                _this.I[index] = (Math.random() < 0.65) ? 0 : 1;
            });
        };
        this.isFinalized = function () {
            var finalized = true;
            for (var key in _this.distances) {
                if (_this.distances.hasOwnProperty(key)) {
                    var distance = _this.distances[key];
                    if (distance === false) {
                        finalized = false;
                        console.trace("isFinalized", finalized, key, distance);
                        return finalized;
                    }
                }
            }
            // console.trace("isFinalized",finalized)
            _this.finalized = finalized;
            return finalized;
        };
        latLng = (latLng instanceof google.maps.LatLng) ? latLng : new google.maps.LatLng(latLng.lat, latLng.lng);
        var infoWindow = new google.maps.InfoWindow({
            content: '<div>'
                + '<div> Name: ' + name + '</div>'
                + '</div>',
            position: latLng
        });
        this.id = id;
        this.name = name;
        this.latLng = latLng;
        this.infoWindow = infoWindow;
        this.distances = distances;
        this.distances[name] = 0;
        this.finalized = finalized;
        this.W = [];
        this.B = [];
        this.I = [];
    }
    Place.prototype.toJson = function () {
        var _a = this, name = _a.name, latLng = _a.latLng, distances = _a.distances, finalized = _a.finalized, id = _a.id;
        return { id: id, name: name, latLng: { lat: latLng.lat(), lng: latLng.lng() }, distances: distances, finalized: finalized };
    };
    Place.prototype.toJsonToSend = function () {
        var _a = this, name = _a.name, latLng = _a.latLng, distances = _a.distances, id = _a.id, W = _a.W, B = _a.B, I = _a.I;
        var distancesToSend = [];
        for (var key in distances) {
            if (distances.hasOwnProperty(key)) {
                if (typeof (distances[key]) !== "number") {
                    console.log(id, key, distances[key]);
                }
                distancesToSend.push(distances[key]);
            }
        }
        return { id: id, name: name, latLng: { lat: latLng.lat(), lng: latLng.lng() }, distances: distancesToSend, W: W, B: B, I: I };
    };
    return Place;
}());
exports.Place = Place;
var Places = /** @class */ (function () {
    function Places(deposits, clients) {
        if (deposits === void 0) { deposits = []; }
        if (clients === void 0) { clients = []; }
        var _this = this;
        this.setPosition = function (position) {
            _this.position = position;
        };
        this.push = function (place) {
            // console.trace("place to push: ",place.name,JSON.stringify(place.distances),place.distances)
            // console.log("place.name: ",place.name)
            if (!util_1.isNullOrUndefined(place)) {
                if (!_this.exists(place.name)) {
                    _this.places.map(function (placeIn) {
                        if (util_1.isNullOrUndefined(place.distances[placeIn.name])) {
                            place.distances[placeIn.name] = false;
                        }
                        if (util_1.isNullOrUndefined(placeIn.distances[place.name])) {
                            // console.log("entra ", placeIn.name,place.name)
                            placeIn.distances[place.name] = false;
                            placeIn.finalized = false;
                        }
                    });
                    // console.log("place pushed: ",place.finalized)      
                    _this.places.push(place);
                }
            }
            else {
                _this.places = [];
            }
        };
        this.merge = function (places) {
            // console.trace("merge")
            places.forEach(function (place) {
                _this.push(place);
            });
        };
        this.exists = function (name) {
            var placeFound = _this.getByName(name);
            return !util_1.isNullOrUndefined(placeFound);
        };
        this.loadDemand = function () {
            var nPlaces = _this.places.length;
            _this.places.forEach(function (place) {
                if (place instanceof _1.Client) {
                    place.loadDemand();
                    place.loadP();
                }
                place.initB(nPlaces);
                place.initI(nPlaces);
                place.initW(nPlaces);
                place.loadW();
            });
        };
        this.getByName = function (name) {
            var placeFound;
            var placesFound = _this.places.filter(function (place) {
                return place.name === name;
            });
            if (placesFound.length > 0) {
                placeFound = placesFound[0];
            }
            return placeFound;
        };
        this.clientsToJson = function () {
            return _this.getClients().map(function (client) {
                return client.toJson();
            });
        };
        this.depositsToJson = function () {
            return _this.getDeposits().map(function (deposit) {
                return deposit.toJson();
            });
        };
        this.get = function () {
            return _this.places;
        };
        this.getClients = function () {
            return _this.places.filter(function (place) {
                return place instanceof _1.Client;
            });
        };
        this.getDeposits = function () {
            return _this.places.filter(function (place) {
                return place instanceof _1.Deposit;
            });
        };
        this.getOriginsAndDestinations = function () {
            var limit = 5;
            var i = 0;
            var origins = [];
            var destinations = [];
            origins = _this.places.filter(function (origin) {
                if (origin.isFinalized() == false && i < limit) {
                    i++;
                    return true;
                }
                else {
                    return false;
                }
            });
            i = 0;
            origins.forEach(function (place) {
                var distances = place.distances;
                // console.log("place: ",place)
                var finalized = true;
                for (var name in distances) {
                    if (distances.hasOwnProperty(name) && distances[name] === false && i < 5) {
                        var destination = _this.getByName(name);
                        destinations.push(destination);
                        // finalized = false
                        i++;
                    }
                    else if (distances[name] === false) {
                        finalized = false;
                    }
                }
                place.finalized = finalized;
            });
            return { origins: origins.slice(), destinations: destinations.slice() };
        };
        this.getDistances = function (callback, user) {
            // console.log("getDistances")
            var service = new google.maps.DistanceMatrixService();
            var _a = _this.getOriginsAndDestinations(), origins = _a.origins, destinations = _a.destinations;
            var originsCoordinates = origins.map(function (place) { return place.latLng; });
            var destinationsCoordinates = destinations.map(function (place) { return place.latLng; });
            // console.log("origins: ",origins)
            // console.log("destinations: ",destinations)
            if (origins.length > 0 && destinations.length > 0) {
                var distances = localStorage.getItem("distances");
                if (!util_1.isNullOrUndefined(distances)) {
                    _this.readDistances(JSON.parse(distances), callback, user);
                }
                else {
                    service.getDistanceMatrix({
                        origins: originsCoordinates,
                        destinations: destinationsCoordinates,
                        travelMode: google.maps.TravelMode.DRIVING,
                    }, function (response, status) {
                        _this.readDistanceMatrix(response, status, origins, destinations, callback, user);
                    });
                }
            }
            else {
                callback(user);
            }
        };
        this.readDistances = function (distances, callback, user) {
            console.trace("readDistances");
            for (var name in distances) {
                if (distances.hasOwnProperty(name)) {
                    var place = _this.getByName(name);
                    var distanceVector = distances[name];
                    if (!util_1.isNullOrUndefined(place) && !util_1.isNullOrUndefined(distanceVector)) {
                        var i = 0;
                        place.finalized = true;
                        console.trace("name: ", name, " - ", place.distances, "finalized : ", true);
                        for (var key in place.distances) {
                            if (place.distances.hasOwnProperty(key)) {
                                // console.log("key: ",key, " - i: ",i)
                                var distance = distanceVector[i];
                                if (!util_1.isNullOrUndefined(distance)) {
                                    place.distances[_this.places[i].name] = distanceVector[i];
                                }
                                i++;
                            }
                        }
                    }
                }
            }
            localStorage.removeItem("distances");
            callback(user);
        };
        this.readDistanceMatrix = function (response, status, origins, destinations, callback, user) {
            //console.trace("staus ",status,callback)
            if (status === google.maps.DistanceMatrixStatus.OK) {
                var rows = response.rows;
                rows.map(function (row, positionOfOrigin) {
                    var elements = row.elements;
                    console.log("elements: ", elements);
                    var name = origins[positionOfOrigin].name;
                    var origin = _this.getByName(name);
                    // if (this.distances[posI] === undefined){ this.distances.push([])}
                    // if (this.durations[posI] === undefined){ this.durations.push([])}
                    elements.map(function (responseElement, positionOfDestination) {
                        if (responseElement.status == google.maps.DistanceMatrixElementStatus.OK) {
                            var destination = destinations[positionOfDestination];
                            origin.distances[destination.name] = responseElement.duration.value;
                            if (!util_1.isNullOrUndefined(user)) {
                                user.places.getByName(name).distances[destination.name] = responseElement.duration.value;
                            }
                            // this.distances[posI].push(responseElement.distance.value)
                            // this.durations[posI].push(responseElement.duration.value)                    
                        }
                    });
                });
                //this.save()
                callback(user);
                setTimeout(function () { _this.getDistances(callback, user); }, 3000);
            }
            else {
                console.log(status);
                setTimeout(function () { _this.getDistances(callback, user); }, 10000);
            }
        };
        this.save = function () {
            localStorage.setItem('clients', JSON.stringify(_this.clientsToJson()));
            localStorage.setItem("deposits", JSON.stringify(_this.depositsToJson()));
        };
        this.getDistancesToSend = function () {
            var distances = _this.places.map(function (clientI) {
                // return {name:clientI.name, distance: this.places.map((clientJ:|Deposit) => {
                return _this.places.map(function (clientJ) {
                    // return {name:clientJ.name,distance:clientI.distances[clientJ.name]}
                    return clientI.distances[clientJ.name];
                });
            });
            console.log("distances: ", distances);
            return distances;
        };
        this.delete = function (name) {
            _this.places = _this.places.filter(function (place) {
                delete place.distances[name];
                return place.name !== name;
            });
        };
        var Id = 0;
        this.places = deposits.map(function (deposit) {
            return new _1.Deposit(deposit.name, deposit.latLng, deposit.finalized, deposit.distances, Id++);
        });
        clients = clients.map(function (client, id) {
            return new _1.Client(client.name, client.latLng, Id++, client.finalized, client.distances);
        });
        this.merge(clients);
        this.limit = 5;
    }
    Places.prototype.toJson = function () {
        return this.places.map(function (place) {
            return place.toJson();
        });
    };
    return Places;
}());
exports.Places = Places;


/***/ }),

/***/ "nQEB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("U7vG");
var util_1 = __webpack_require__("OMJi");
var google = window.google;
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    // Lyfecicle
    function Map() {
        var _this = _super.call(this) || this;
        // 
        _this.addMarker = function (place) {
            var marker = new google.maps.Marker({
                position: place.latLng,
                title: place.name,
                label: '' + place.name
            });
            marker.addListener('click', function () {
                place.infoWindow.open(_this.map, marker);
            });
            _this.places.push(marker);
        };
        _this.erasePlaces = function () {
            _this.places.forEach(function (marker, index) {
                marker.setMap(null);
            });
        };
        _this.drawPlaces = function () {
            // console.trace("drawPlaces")
            // if (this.vehicleRoute ){
            _this.erasePlaces();
            _this.places.map(function (place) {
                place.setMap(_this.map);
            });
            // }
        };
        _this.drawRoutePlaces = function () {
            _this.erasePlaces();
            var vehicleRoute = _this.props.vehicleRoute;
            var places = _this.places;
            for (var index = 0; index < vehicleRoute.path.length; index++) {
                var element = vehicleRoute.path[index];
                places[element].setMap(_this.map);
            }
        };
        _this.erasePaths = function () {
            // console.trace("erasePaths")
            _this.directionsDisplay.forEach(function (directionDisplay) {
                directionDisplay.setMap(null);
            });
        };
        _this.drawPath = function () {
            _this.erasePaths();
            var directionsDisplay = _this.directionsDisplay;
            if (directionsDisplay) {
                directionsDisplay.forEach(function (directionDisplay) {
                    directionDisplay.setMap(_this.map);
                });
            }
        };
        _this.drawDirectionsResults = function () {
            _this.directionsResults.forEach(function (directionsResult, index) {
                var panel = document.getElementById("right-panel-" + index);
                var directionsDisplay = _this.directionsDisplay[index];
                console.log("directionsResult: ", directionsResult);
                directionsDisplay.setMap(_this.map);
                // console.log("i",index)
                // console.log(`right-panel-${index}`,panel)
                directionsDisplay.setPanel(panel);
                directionsDisplay.setDirections(directionsResult);
                directionsDisplay.setRouteIndex(1);
                // callback()
            });
        };
        // # Loads
        _this.loadDirections = function (position) {
            var newPosition = position + 1;
            var getDirection = _this.getDirections[newPosition];
            if (getDirection != undefined) {
                var callback = function () {
                    _this.getDirections.splice(0, 1);
                    _this.setState({ positionGetDirection: newPosition });
                };
                var callbackError = function () {
                    setTimeout(function () { _this.setState({ positionGetDirection: position }); }, 5000);
                };
                getDirection(callback, callbackError);
            }
        };
        // 
        // # gets 
        _this.getMenuSelect = function () {
            // const { routeSelected } = this.state         
            // let menuSelect = (<DropDownMenu value={routeSelected} onChange={this.handleChangeRouteSelected.bind(this)} > 
            //         {this.directionsDisplay.map((path:Array<google.maps.DirectionsRenderer>, index:number) => {
            //             return <MenuItem key={index} value={index} primaryText={"Vehiculo número "+index} />
            //         })}
            //     </DropDownMenu>)
            //     if ( this.vehicleRoute != undefined && this.vehicleRoute[routeSelected] != undefined){
            //         // console.log('path: ', this.vehicleRoute[routeSelected].path)
            //     }
            // return menuSelect;
        };
        _this.getPaths = function () {
            _this.paths = new Array();
            var directionsService = new google.maps.DirectionsService();
            var pathPolyline = new Array();
            // console.log("places: ",this.places)
            var getDirections = [];
            // console.log("path: ",this.vehicleRoute.path)
            _this.vehicleRoute.path.forEach(function (posMarker, i, path) {
                // console.log("i",i)
                if (i >= 1) {
                    // console.log("entra")
                    _this.directionsDisplay.push(new google.maps.DirectionsRenderer({
                        suppressMarkers: true
                    }));
                    var posPreMarker_1 = path[i - 1];
                    var positionOrigen_1 = _this.places[posPreMarker_1].getPosition();
                    var positionDestinate_1 = _this.places[posMarker].getPosition();
                    var coordinates = [
                        { lat: positionOrigen_1.lat(), lng: positionOrigen_1.lng() },
                        { lat: positionDestinate_1.lat(), lng: positionDestinate_1.lng() }
                    ];
                    // console.log("--",this.places[path[i-1]],path[i-1]," - ",this.places[posMarker],posMarker)
                    // console.log(path[i-1]," - ",posMarker)
                    var getDirection = function (index) {
                        console.log(positionOrigen_1, posPreMarker_1, " - ", positionDestinate_1, posMarker);
                        _this.getDirection(positionOrigen_1, positionDestinate_1, directionsService, _this.directionsDisplay[i - 1], index);
                    };
                    var polyline = new google.maps.Polyline({
                        path: coordinates,
                        geodesic: true,
                        strokeColor: '#4682B4',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });
                    pathPolyline.push(polyline);
                    getDirections.push(getDirection);
                }
                // console.log("getDirections: ",)
            });
            // console.log("getDirections: ",getDirections)
            // console.log("-------------------------------------------------------")
            _this.getDirections = getDirections;
            // console.log("this.getDirections: ",this.getDirections)
            // this.setState({positionGetDirection: 0})
            _this.paths.push(pathPolyline);
            _this.forceUpdate(function () { _this.getDirections[0](0); });
            _this.drawPath();
        };
        _this.getDirection = function (positionOrigen, positionDestinate, directionsService, directionsDisplay, index) {
            console.log("Map getDirection: ", positionOrigen, positionDestinate, index);
            directionsService.route({
                origin: positionOrigen,
                destination: positionDestinate,
                travelMode: google.maps.TravelMode.DRIVING,
            }, function (response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    _this.directionsResults.push(response);
                    if (!util_1.isNullOrUndefined(_this.getDirections[index + 1])) {
                        var getDirections_1 = _this.getDirections;
                        setTimeout(function () { getDirections_1[index + 1](index + 1); }, 1000);
                    }
                    else {
                        console.log("End");
                        _this.forceUpdate();
                    }
                }
                else {
                    console.error(response);
                    console.error(status);
                    // callbackError()
                    var getDirections_2 = _this.getDirections;
                    setTimeout(function () { getDirections_2[index](index); }, 15000);
                    //this.getDirections[index](index)
                }
            });
        };
        _this.getDOMNode = function () {
            var map = document.getElementById('map');
            return map;
        };
        _this.getMarkers = function () {
            _this.erasePlaces();
            _this.places = [];
            var places = _this.props.placesToSend;
            if (!util_1.isNullOrUndefined(places) && places.get().length <= 1) {
                places = _this.props.user.places;
            }
            // let {places} = this.props.user
            _this.places = new Array();
            var deposits = places.getDeposits(), clients = places.getClients();
            deposits.forEach(function (deposit, i) {
                _this.addMarker(deposit);
            });
            clients.forEach(function (client) {
                _this.addMarker(client);
            });
            if (_this.directionsDisplay.length > 0) {
                _this.drawRoutePlaces();
            }
            else {
                _this.drawPlaces();
            }
        };
        _this.paths = new Array();
        _this.directionsDisplay = new Array();
        _this.directionsResults = [];
        _this.places = new Array();
        // this.vehicleRoute = new Array()
        _this.getDirections = new Array();
        _this.state = { positionGetDirection: 0 };
        return _this;
    }
    Map.prototype.componentDidMount = function () {
        var mapOptions = {
            center: { lat: 7.107246, lng: -73.109486 },
            zoom: 12
        };
        this.map = new google.maps.Map(this.getDOMNode(), mapOptions);
    };
    Map.prototype.componentWillUpdate = function (nextProps) {
        var modeAddClient = nextProps.modeAddClient, vehicleRoute = nextProps.vehicleRoute, routeID = nextProps.routeID;
        var lastRouteID = this.props.routeID;
        this.vehicleRoute = vehicleRoute;
        if (!modeAddClient) {
            var input = document.getElementById("pac-input");
            if (input !== null) {
                var MapDiv = document.getElementById("Map");
                var mapDiv = document.getElementById("map");
                if (MapDiv !== null && mapDiv !== null) {
                    MapDiv.insertBefore(input, mapDiv);
                }
            }
        }
        if (lastRouteID !== routeID) {
            this.erasePaths();
            this.getDirections = new Array();
            this.paths = new Array();
            this.directionsDisplay = new Array();
            this.directionsResults = [];
            this.places = new Array();
        }
    };
    Map.prototype.componentDidUpdate = function (prepProps) {
        var _a = this, directionsDisplay = _a.directionsDisplay, directionsResults = _a.directionsResults;
        var positionGetDirection = this.state.positionGetDirection;
        var preRouteID = prepProps.routeID;
        var _b = this.props, user = _b.user, vehicleRoute = _b.vehicleRoute, routeID = _b.routeID;
        if (user !== undefined) {
            var places = user.places;
            if (places != undefined) {
                //this.drawPlaces()
                if ((!util_1.isNullOrUndefined(vehicleRoute) && util_1.isNullOrUndefined(prepProps.vehicleRoute))) {
                    this.getPaths();
                }
                if ((!util_1.isNullOrUndefined(vehicleRoute) && routeID !== preRouteID && directionsDisplay.length == 0 && vehicleRoute.path.length > 0)) {
                    this.getMarkers();
                    this.getPaths();
                }
                this.getMarkers();
            }
        }
        else {
            this.erasePlaces();
            this.erasePaths();
        }
        if (directionsDisplay.length > 0 && directionsDisplay.length === directionsResults.length) {
            this.drawDirectionsResults();
        }
        // this.loadDirections(positionGetDirection)
    };
    //
    Map.prototype.render = function () {
        var _a = this.props, modeAddClient = _a.modeAddClient, modeListClients = _a.modeListClients, vehicleRoute = _a.vehicleRoute, placesToSend = _a.placesToSend;
        var arrayPlacesTosend = (util_1.isNullOrUndefined(placesToSend)) ? [] : placesToSend.get();
        var _b = this, directionsDisplay = _b.directionsDisplay, directionsResults = _b.directionsResults;
        var display = (modeListClients) ? "none" : "inherit";
        var searchBox = (modeAddClient) ? React.createElement("input", { id: "pac-input", className: "controls", type: "text", placeholder: "Search the direction" }) : null;
        var halfPanel = (directionsDisplay.length > 0) ? "halfPanel" : "";
        //console.log("DirectionsResults: ",directionsResults)
        //console.log("directionsDisplay ",directionsDisplay)
        //console.log(directionsDisplay.length > 0 , directionsResults.length , directionsDisplay.length)
        if (directionsDisplay.length > 0) {
            this.erasePlaces();
        }
        var rightPanel = (directionsDisplay.length > 0 && directionsResults.length === directionsDisplay.length) ? React.createElement("div", { id: "right-panel", className: halfPanel },
            React.createElement("br", null),
            React.createElement("table", { style: { width: "100%" } },
                React.createElement("caption", null, "Destinos"),
                React.createElement("tbody", null, directionsDisplay.map(function (directionDisplay, index) {
                    var clientIN = arrayPlacesTosend[vehicleRoute.path[index + 1]];
                    return (React.createElement("tr", { key: index },
                        React.createElement("td", null, clientIN.name),
                        React.createElement("td", null, directionsResults[index].routes[0].legs[0].duration.text)));
                }))),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("div", null,
                directionsDisplay.map(function (directionDisplay, index) {
                    var nameOrigin = arrayPlacesTosend[vehicleRoute.path[index + 1]].name;
                    var nameDestinate = arrayPlacesTosend[vehicleRoute.path[index]].name;
                    return (React.createElement("div", { key: index },
                        React.createElement("div", null,
                            "from: ",
                            nameOrigin,
                            ", to ",
                            nameDestinate),
                        React.createElement("div", { id: "right-panel-" + index })));
                }),
                " ")) : null;
        return (React.createElement("div", { id: "Map", className: display },
            searchBox,
            React.createElement("div", { id: "map" }),
            rightPanel));
    };
    return Map;
}(React.Component));
exports.Map = Map;


/***/ }),

/***/ "o/hy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Autosuggest = __webpack_require__("bjhR");
var React = __webpack_require__("U7vG");
var material_ui_1 = __webpack_require__("Q4lS");
var class_1 = __webpack_require__("0wEB");
var MenuUsers = /** @class */ (function (_super) {
    __extends(MenuUsers, _super);
    function MenuUsers() {
        var _this = _super.call(this) || this;
        _this.onChange = function (event, _a) {
            var newValue = _a.newValue;
            _this.setState({
                value: newValue
            });
            if (newValue == "") {
                _this.props.selectUser(undefined);
            }
        };
        _this.getSuggestions = function (value) {
            var users = _this.props.users;
            var usersFound = users.search(value);
            var suggestions = new Array();
            suggestions = suggestions.concat(usersFound);
            suggestions.push({ name: value, ID: "-1" });
            return suggestions;
        };
        _this.getSuggestionValue = function (suggestion) { return suggestion.name; };
        _this.renderSuggestion = function (suggestion) {
            if (suggestion.ID === "-1") {
                return (React.createElement("div", null,
                    suggestion.name,
                    React.createElement(material_ui_1.FlatButton, { label: "Crear Usuario" })));
            }
            else {
                return (React.createElement("div", null, suggestion.name));
            }
        };
        _this.onSuggestionsFetchRequested = function (_a) {
            var value = _a.value;
            _this.setState({
                suggestions: _this.getSuggestions(value)
            });
        };
        _this.onSuggestionsClearRequested = function () {
            _this.setState({
                suggestions: []
            });
        };
        _this.onSuggestionSelected = function (event, _a) {
            var suggestion = _a.suggestion, suggestionValue = _a.suggestionValue, suggestionIndex = _a.suggestionIndex, method = _a.method;
            var _b = _this.props, createUser = _b.createUser, selectUser = _b.selectUser;
            if (suggestion.ID === "-1" && method === "click") {
                var user = new class_1.User(suggestion.name, "", [], []);
                user.create(createUser);
            }
            else if (suggestion.ID !== "-1") {
                selectUser(suggestion);
            }
            _this.setState({ value: suggestionValue });
        };
        _this.state = {
            value: '',
            suggestions: []
        };
        return _this;
    }
    MenuUsers.prototype.render = function () {
        var _a = this.state, value = _a.value, suggestions = _a.suggestions;
        var inputProps = {
            placeholder: 'Escriba el nombre del usuario',
            value: value,
            onChange: this.onChange
        };
        return (React.createElement(Autosuggest, { suggestions: suggestions, onSuggestionsFetchRequested: this.onSuggestionsFetchRequested, onSuggestionsClearRequested: this.onSuggestionsClearRequested, getSuggestionValue: this.getSuggestionValue, renderSuggestion: this.renderSuggestion, inputProps: inputProps, onSuggestionSelected: this.onSuggestionSelected }));
    };
    return MenuUsers;
}(React.Component));
exports.MenuUsers = MenuUsers;


/***/ }),

/***/ "oSuS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "odQl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("U7vG");
var react_title_component_1 = __webpack_require__("EyHW");
var material_ui_1 = __webpack_require__("Q4lS");
//import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
var _1 = __webpack_require__("Wsg1");
var Master = /** @class */ (function (_super) {
    __extends(Master, _super);
    function Master() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            navDrawerOpen: false,
            coverPageVisibility: true
        };
        _this.handleTouchTapLeftIconButton = function () {
            _this.setState({
                navDrawerOpen: !_this.state.navDrawerOpen,
            });
        };
        _this.handleChangeRequestNavDrawer = function (open) {
            _this.setState({
                navDrawerOpen: open,
            });
        };
        _this.handleChangeList = function (event, value) {
            _this.context.router.push(value);
            _this.setState({
                navDrawerOpen: false,
            });
        };
        _this._handleCoverPageVisibility = function () {
            var coverPageVisibility = _this.state.coverPageVisibility;
            _this.setState({ coverPageVisibility: !coverPageVisibility });
        };
        return _this;
    }
    Master.prototype.render = function () {
        var children = this.props.children;
        var _a = this.state, navDrawerOpen = _a.navDrawerOpen, coverPageVisibility = _a.coverPageVisibility;
        var router = this.context.router;
        var docked = false;
        var showMenuIconButton = false;
        //const styles = getStyles();
        var coverPage = React.createElement(_1.Ants, null);
        return (React.createElement("div", null,
            React.createElement(react_title_component_1.default, { render: "PSO" }),
            React.createElement(material_ui_1.AppBar, { onLeftIconButtonTouchTap: this.handleTouchTapLeftIconButton, title: "PSO", style: { position: "fixed" }, zDepth: 0 }),
            coverPage,
            React.createElement(_1.AppNavDrawer, { docked: docked, onRequestChangeNavDrawer: this.handleChangeRequestNavDrawer, onChangeList: this.handleChangeList, open: navDrawerOpen })));
    };
    Master.propTypes = {};
    Master.contextTypes = {
    // router: Proptypes.object.isRequired
    };
    return Master;
}(React.Component));
exports.default = Master;


/***/ }),

/***/ "qMEF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("U7vG");
var react_dom_1 = __webpack_require__("O27J");
var Master_1 = __webpack_require__("odQl");
var injectTapEventPlugin = __webpack_require__("S33B");
var MuiThemeProvider_1 = __webpack_require__("7L6O");
var muiTheme_1 = __webpack_require__("/MQU");
// window.React = React;
//window.Perf = require('react-addons-perf');
// require('./styles/main')
injectTapEventPlugin();
react_dom_1.render(React.createElement(MuiThemeProvider_1.default, { muiTheme: muiTheme_1.default() },
    React.createElement(Master_1.default, null)), document.getElementById('app'));


/***/ })

},["qMEF"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL211aVRoZW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcE5hdkRyYXdlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL3VzZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9jbGllbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9kZXBvc2l0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Mva21sLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzL2NvbnRlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jbGFzcy9wbGFjZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51VXNlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hc3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGdEQUF3RDtBQUN4RCxxREFBd0Q7QUFDeEQsMkNBTW1DO0FBRW5DLElBQUksUUFBUSxHQUFHO0lBRWYsSUFBTSxRQUFRLEdBQUcscUJBQVcsQ0FBQztRQUN6QixVQUFVLEVBQUUsb0JBQW9CO1FBQ2hDLE9BQU8sRUFBRTtZQUNULGFBQWEsRUFBRSxzQkFBYTtZQUM1QixhQUFhLEVBQUUsZ0JBQU87WUFDdEIsYUFBYSxFQUFFLGdCQUFPO1lBQ3RCLFlBQVksRUFBRSxpQkFBUTtZQUN0QixZQUFZLEVBQUUsZ0JBQU87WUFDckIsWUFBWSxFQUFFLGdCQUFPO1lBQ3JCLFNBQVMsRUFBRSxrQkFB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YWUzMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJ1xuaW1wb3J0IHtmYWRlfSBmcm9tICdtYXRlcmlhbC11aS91dGlscy9jb2xvck1hbmlwdWxhdG9yJztcbmltcG9ydCB7XG4gIGRlZXBPcmFuZ2U1MDAsIGRlZXBPcmFuZ2U1MCwgY3lhbjcwMCxcbiAgcGlua0EyMDAsXG4gIGdyZXkxMDAsIGdyZXkzMDAsIGdyZXk0MDAsIGdyZXk1MDAsXG4gIHdoaXRlLCBkYXJrQmxhY2ssIGZ1bGxCbGFjayxcbiAgcmVkQTcwMFxufSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzJztcblxubGV0IGdldFRoZW1lID0gKCkgPT57XG5cbmNvbnN0IG11aVRoZW1lID0gZ2V0TXVpVGhlbWUoe1xuICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8sIHNhbnMtc2VyaWYnLFxuICAgIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5MUNvbG9yOiBkZWVwT3JhbmdlNTAwLFxuICAgIHByaW1hcnkyQ29sb3I6IGN5YW43MDAsXG4gICAgcHJpbWFyeTNDb2xvcjogZ3JleTQwMCxcbiAgICBhY2NlbnQxQ29sb3I6IHBpbmtBMjAwLFxuICAgIGFjY2VudDJDb2xvcjogZ3JleTEwMCxcbiAgICBhY2NlbnQzQ29sb3I6IGdyZXk1MDAsXG4gICAgdGV4dENvbG9yOiBkYXJrQmxhY2ssXG4gICAgYWx0ZXJuYXRlVGV4dENvbG9yOiAnIzRiNGY1NicsXG4gICAgY2FudmFzQ29sb3I6IHdoaXRlLFxuICAgIGJvcmRlckNvbG9yOiBncmV5MzAwLFxuICAgIGRpc2FibGVkQ29sb3I6IGZhZGUoZGFya0JsYWNrLCAwLjMpLFxuICAgIHBpY2tlckhlYWRlckNvbG9yOiBkZWVwT3JhbmdlNTAwLFxuICAgIGNsb2NrQ2lyY2xlQ29sb3I6IGZhZGUoZGFya0JsYWNrLCAwLjA3KSxcbiAgICBzaGFkb3dDb2xvcjogZnVsbEJsYWNrLFxuICAgIH0sXG4gICAgYXBwQmFyOntcbiAgICAgICAgaGVpZ2h0OiA0NCxcbiAgICAgICAgY29sb3I6ICcjMjYyNjI3JyxcbiAgICAgICAgdGV4dENvbG9yOndoaXRlXG4gICAgfSxcbiAgICBjaGVja2JveDp7XG4gICAgICAgIGNoZWNrZWRDb2xvcjpcIiNGRkM5NERcIlxuICAgIH0sXG4gICAgcmFpc2VkQnV0dG9uOntcbiAgICAgICAgcHJpbWFyeUNvbG9yOiByZWRBNzAwLFxuICAgICAgICB0ZXh0Q29sb3I6IHdoaXRlLFxuICAgICAgICBwcmltYXJ5VGV4dENvbG9yOiB3aGl0ZSxcbiAgICAgICAgc2Vjb25kYXJ5Q29sb3I6IHdoaXRlXG4gICAgfVxufSlcblxucmV0dXJuIG11aVRoZW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRUaGVtZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGVzL211aVRoZW1lLnRzeCIsImV4cG9ydCAqIGZyb20gXCIuL2ttbFwiXG5leHBvcnQgKiBmcm9tICcuL2Jsb2NrcydcbmV4cG9ydCAqIGZyb20gJy4vc2hlbHRlcidcbmV4cG9ydCAqIGZyb20gJy4vc29sdXRpb24nXG5leHBvcnQgKiBmcm9tICcuL3ZlaGljbGVSb3V0aW5nJ1xuZXhwb3J0ICogZnJvbSAnLi9jb250ZW50J1xuZXhwb3J0ICogZnJvbSAnLi9wbGFjZSdcbmV4cG9ydCAqIGZyb20gJy4vZGVwb3NpdCdcbmV4cG9ydCAqIGZyb20gJy4vY2xpZW50J1xuZXhwb3J0ICogZnJvbSBcIi4vdXNlclwiXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsYXNzL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBEcmF3ZXIsIExpc3QsIExpc3RJdGVtLCBtYWtlU2VsZWN0YWJsZSwgRGl2aWRlciwgU3ViaGVhZGVyLCBEcm9wRG93bk1lbnUsIE1lbnVJdGVtIH0gZnJvbSAnbWF0ZXJpYWwtdWknXG5pbXBvcnQgeyBzcGFjaW5nLCB0eXBvZ3JhcGh5LCB6SW5kZXggfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMnXG5cbmNvbnN0IFNlbGVjdGFibGVMaXN0ID0gbWFrZVNlbGVjdGFibGUoTGlzdClcblxuaW50ZXJmYWNlIFByb3Bze1xuICAgIGRvY2tlZDogYm9vbGVhblxuICAgIG9uQ2hhbmdlTGlzdDogRnVuY3Rpb25cbiAgICBvblJlcXVlc3RDaGFuZ2VOYXZEcmF3ZXI6IChvcGVuaW5nOiBib29sZWFuLCByZWFzb246IHN0cmluZykgPT4gdm9pZFxuICAgIG9wZW46IGJvb2xlYW5cbn1cbmludGVyZmFjZSBDb250ZXh0e1xuICAgIC8vIHJvdXRlcjogT2JqZWN0XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBOYXZEcmF3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsQ29udGV4dD57XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZG9ja2VkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBvbkNoYW5nZUxpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uUmVxdWVzdENoYW5nZU5hdkRyYXdlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICB9XG4gICAgc3RhdGljIGNvbnRleHRUeXBlczpDb250ZXh0PXtcbiAgICAgICAgLy8gcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9XG4gICAgaGFuZGxlVG91Y2hUYXBIZWFkZXIgPSAoKSA9PntcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDaGFuZ2VOYXZEcmF3ZXIoZmFsc2UsICcnKVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgZG9ja2VkLCBvblJlcXVlc3RDaGFuZ2VOYXZEcmF3ZXIsIG9uQ2hhbmdlTGlzdCwgb3BlbiBcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8RHJhd2VyIFxuICAgICAgICAgICAgICAgIGRvY2tlZD17ZG9ja2VkfVxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2hhbmdlPXtvblJlcXVlc3RDaGFuZ2VOYXZEcmF3ZXJ9XG4gICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BcHBOYXZEcmF3ZXIudHN4IiwiLy8gIGltcG9ydHNcbiAgICAgICAgaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG4gICAgICAgIGltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuICAgICAgICBpbXBvcnQgeyBUb29sYmFyLCBUb29sYmFyR3JvdXAsIFRvb2xiYXJTZXBhcmF0b3IsIERyb3BEb3duTWVudSwgTWVudUl0ZW0sIEZsYXRCdXR0b24sIEljb25CdXR0b24sIENoZWNrYm94LCBUZXh0RmllbGQgfSBmcm9tICdtYXRlcmlhbC11aSdcbiAgICAgICAgaW1wb3J0IEdyb3VwIGZyb20gXCJtYXRlcmlhbC11aS9zdmctaWNvbnMvc29jaWFsL2dyb3VwXCJcbiAgICAgICAgaW1wb3J0IFBlcnNvbkFkZCBmcm9tIFwibWF0ZXJpYWwtdWkvc3ZnLWljb25zL3NvY2lhbC9wZXJzb24tYWRkXCJcbiAgICAgICAgaW1wb3J0IENhbmNlbCBmcm9tIFwibWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vY2FuY2VsXCJcbiAgICAgICAgaW1wb3J0IFZpc2liaWxpdHkgZnJvbSBcIm1hdGVyaWFsLXVpL3N2Zy1pY29ucy9hY3Rpb24vdmlzaWJpbGl0eVwiXG4gICAgICAgIGltcG9ydCBWaXNpYmlsaXR5T2ZmIGZyb20gXCJtYXRlcmlhbC11aS9zdmctaWNvbnMvYWN0aW9uL3Zpc2liaWxpdHktb2ZmXCJcbiAgICAgICAgaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG4gICAgICAgIGltcG9ydCAqIGFzIEF1dG9zdWdnZXN0IGZyb20gXCJyZWFjdC1hdXRvc3VnZ2VzdFwiXG5cbiAgICAgICAgaW1wb3J0IHtNZW51VXNlcnMsIE1hcH0gZnJvbSBcIi4vXCJcbiAgICAgICAgaW1wb3J0IHtGaXJlYmFzZUZpcmVzdG9yZX0gZnJvbSBcIi4uL2NvbmZpZy9maXJlYmFzZVwiXG5cbiAgICAgICAgaW1wb3J0IHsgVmVoaWNsZVJvdXRpbmcsIERlcG9zaXQsIENsaWVudCwgUGxhY2UsIENvbnRlbnQsIFVzZXIgLCBVc2VycywgS21sLCBQbGFjZXN9IGZyb20gJy4uL2NsYXNzJ1xuICAgICAgICBpbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gJ3V0aWwnO1xuICAgICAgICBpbXBvcnQgeyBFTkdJTkVfTUVUSE9EX0RJR0VTVFMgfSBmcm9tICdjb25zdGFudHMnO1xuXG4gICAgICAgIGxldCBnb29nbGUgPSB3aW5kb3cuZ29vZ2xlO1xuICAgICAgICBsZXQgICQgPSByZXF1aXJlKCdqcXVlcnknKVxuLy9cblxuXG5pbnRlcmZhY2UgUHJvcHN7XG5cbn1cbmludGVyZmFjZSBTdGF0ZXtcbiAgICB1c2VyU2VsZWN0ZWRJRDogc3RyaW5nXG4gICAgbW9kZUFkZENsaWVudDogYm9vbGVhblxuICAgIG1vZGVMaXN0Q2xpZW50czogYm9vbGVhblxuICAgIG51bWJlck9mU2VsZWN0ZWRDbGllbnRzOiBudW1iZXJcbiAgICBudW1iZXJPZlZlaGljbGVzOiBudW1iZXJcbiAgICB2ZWhpY2xlQ2FwYWNpdHk6IG51bWJlclxuICAgIGtleVdvcmQ6c3RyaW5nXG4gICAgcm91dGVTZWxlY3RlZDpudW1iZXJcbn1cblxuZXhwb3J0IGNsYXNzIEFudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsU3RhdGU+e1xuICAgIFxuICAgIGttbDpLbWxcbiAgICB1c2VyczpVc2Vyc1xuICAgIGNvbnRlbnQ6IENvbnRlbnRcbiAgICBzZWxlY3RlZENsaWVudHM6IHtba2V5OnN0cmluZ106Q2xpZW50fVxuICAgIHZlaGljbGVSb3V0ZTogVmVoaWNsZVJvdXRpbmdcbiAgICB2ZWhpY2xlUm91dGVzOlZlaGljbGVSb3V0aW5nW11cbiAgICBcblxuICAgIC8vIyBMaWZlY3ljbGVcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wczpQcm9wcyxzdGF0ZTpTdGF0ZSl7XG4gICAgICAgICAgICBzdXBlcigpXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0geyB1c2VyU2VsZWN0ZWRJRDpcIjBcIiwgbW9kZUFkZENsaWVudDpmYWxzZSwgbW9kZUxpc3RDbGllbnRzOmZhbHNlLCBudW1iZXJPZlNlbGVjdGVkQ2xpZW50czogMCwga2V5V29yZDogXCJcIiwgbnVtYmVyT2ZWZWhpY2xlczogMCwgdmVoaWNsZUNhcGFjaXR5OiAwICxyb3V0ZVNlbGVjdGVkOiAwfVxuICAgICAgICAgICAgdGhpcy5pbml0KHRydWUpICAgICAgXG4gICAgICAgICAgICB0aGlzLmJpbmQoKVxuICAgICAgICAgICAgdGhpcy52ZWhpY2xlUm91dGVzID0gW11cblxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKXsgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpeyAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgIC8vXG5cbiAgICBiaW5kID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVDcmVhdGVVc2VyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5faGFuZGxlU2VsZWN0VXNlci5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuX2hhbmRsZU1vZGVBZGRDbGllbnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLl9oYW5kbGVBZGRDbGllbnQuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLl9oYW5kbGVTZW5kLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zZXRWZWhpY2xlUm91dGUuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGluaXQgPSAoZmlyc3Q6Ym9vbGVhbj1mYWxzZSkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBuZXcgQ29udGVudCgpXG4gICAgICAgIHRoaXMudXNlcnMgPSBuZXcgVXNlcnMoKVxuICAgICAgICB0aGlzLnVzZXJzLmxvYWQoKVxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2xpZW50cyA9IHt9XG4gICAgICAgIGlmKCFmaXJzdCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlclNlbGVjdGVkSUQ6XCIwXCIsIG1vZGVBZGRDbGllbnQ6ZmFsc2UsIG1vZGVMaXN0Q2xpZW50czpmYWxzZSwgbnVtYmVyT2ZTZWxlY3RlZENsaWVudHM6IDAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXJhc2UgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyU2VsZWN0ZWRJRDogXCIwXCIgfSlcblxuICAgIH0gICBcblxuICAgIHJlYWRKc29uID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UodGV4dClcbiAgICAgICAgLy8gY29uc29sZS5sb2coanNvbilcbiAgICAgICAgdGhpcy5jb250ZW50LmdldERpc3RhbmNlc0Zyb21Db29yZGluYXRlcyhqc29uW1wiY29vcmRpbmF0ZXNcIl0pXG4gICAgICAgIHRoaXMuY29udGVudC5jYXBhY2l0eSA9IGpzb25bXCJjYXBhY2l0eVwiXVxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVtYW5kID0ganNvbltcImRlbWFuZFwiXVxuICAgICAgICB0aGlzLmNvbnRlbnQudGltZVN0YXJ0ID0gdGhpcy5jb250ZW50Lm1pbnV0ZVRvVGltZShqc29uW1widGltZVN0YXJ0XCJdKS50b0lTT1N0cmluZygpXG4gICAgICAgIHRoaXMuY29udGVudC5zZXRUaW1lc1dpbmRvd3NGcm9tTWludXRlcyhqc29uW1widGltZXdpbmRvd3NcIl0pXG4gICAgICAgIHRoaXMuY29udGVudC5zZXRUaW1lc1N0YXJ0RnJvbU1pbnV0ZXMoanNvbltcInRpbWVzU3RhcnRcIl0pXG5cbiAgICAgICAgdGhpcy5jb250ZW50LnNlcnZpY2VUaW1lID0ganNvbltcInNlcnZpY2VUaW1lXCJdXG5cbiAgICAgICAgdGhpcy5jb250ZW50LnNlbmQoKHZlaGljbGVzUm91dGluZyA6IEFycmF5PFZlaGljbGVSb3V0aW5nPikgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IGR1cmF0aW9uOm51bWJlciA9IDBcbiAgICAgICAgICAgICAgICBsZXQgZHVyYXRpb24yOm51bWJlciA9IDBcbiAgICAgICAgICAgICAgICBsZXQgcm91dGVzID0gdmVoaWNsZXNSb3V0aW5nLmZpbHRlcigodmVoaWNsZVJvdXRpbmc6VmVoaWNsZVJvdXRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWhpY2xlUm91dGluZy5kaXN0YW5jZSA9IHZlaGljbGVSb3V0aW5nLmRpc3RhbmNlLzYwXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2VzID0gdGhpcy5jb250ZW50LmRpc3RhbmNlcy5tYXAoKGRpc3RhbmNlczpBcnJheTxudW1iZXI+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZXMubWFwKChkaXN0YW5jZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzdGFuY2UvNjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXRoID0gdmVoaWNsZVJvdXRpbmcucGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBJZFByZVN0YXRpb246bnVtYmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aC5tYXAoKGlkU3RhdGlvbjpudW1iZXIpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkU3RhdGlvbj4wKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uMiArPSBkaXN0YW5jZXNbSWRQcmVTdGF0aW9uXVtpZFN0YXRpb25dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWRQcmVTdGF0aW9uID0gaWRTdGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiArPSB2ZWhpY2xlUm91dGluZy5kaXN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2ZWhpY2xlUm91dGluZy5wYXRoLmxlbmd0aCA+IDFcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJvdXRlcykpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicm91dGVzIDogXCIscm91dGVzKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpc3RhbmNpYSBUb3RhbDogXCIsIGR1cmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpc3RhbmNpYSBzaW4gZXNwZXJhOiBcIiwgZHVyYXRpb24yKVxuXG4gICAgICAgIH0pXG4gICAgfSAgIFxuXG4gICAgLy8jIGhhbmRsZXMgXG4gICAgICAgIF9oYW5kbGVDcmVhdGVVc2VyID0gKHVzZXI6VXNlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2Vycy5hZGQodXNlcikgICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZVNlbGVjdFVzZXIodXNlcilcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgX2hhbmRsZVNlbGVjdFVzZXIgPSAodXNlcjpVc2VyKSA9PiB7XG4gICAgICAgICAgICBpZih1c2VyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0ZWRJRDogdXNlci5JRFxuICAgICAgICAgICAgICAgIH0sdGhpcy5zZWxlY3RBbGxDbGllbnRzKVxuXG4gICAgICAgICAgICAgICAgdXNlci5nZXREaXN0YW5jZXMoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3RlZElEOiBcIjBcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIF9oYW5kbGVDaG9vc2VNYXAgPSAoZXZlbnQ6YW55KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHt1c2VyU2VsZWN0ZWRJRH0gPSB0aGlzLnN0YXRlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyU2VsZWN0ZWRJRClcbiAgICAgICAgICAgIGlmKHVzZXJTZWxlY3RlZElEICE9PSBcIjBcIil7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHRoaXMudXNlcnMuZ2V0VXNlcih1c2VyU2VsZWN0ZWRJRClcbiAgICAgICAgICAgICAgICBsZXQgZmlsZTpGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQ6YW55KSA9PntcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBldmVudC50YXJnZXQucmVzdWx0XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IChmaWxlLnR5cGUgIT09IFwiXCIpID8gZmlsZS50eXBlIDogZmlsZS5uYW1lLnNwbGl0KFwiLlwiKVsxXVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia21sXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXBwbGljYXRpb24vdm5kLmdvb2dsZS1lYXJ0aC5rbWwreG1sXCI6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmttbCA9IG5ldyBLbWwodGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHtkZXBvc2l0cyxjbGllbnRzfSA9IHRoaXMua21sLmdldERlcG9zaXRzQW5kQ2xpZW50cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZXBvc2l0czogXCIsZGVwb3NpdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGllbnRzOiBcIixjbGllbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIucGxhY2VzID0gbmV3IFBsYWNlcyhkZXBvc2l0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5wbGFjZXMubWVyZ2UoY2xpZW50cylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuc2F2ZUNsaWVudHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuc2F2ZURlcG9zaXRzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnBsYWNlcy5nZXREaXN0YW5jZXMoKHVzZXJpOlVzZXIpID0+IHt1c2VyaS5zYXZlQ2xpZW50cygpO3VzZXJpLnNhdmVEZXBvc2l0cygpfSx1c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImpzb25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhcHBsaWNhdGlvbi9qc29uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkSnNvbih0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfaGFuZGxlU2VuZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHt1c2VyU2VsZWN0ZWRJRCwgbnVtYmVyT2ZWZWhpY2xlcywgdmVoaWNsZUNhcGFjaXR5fSA9IHRoaXMuc3RhdGVcbiAgICAgICAgICAgIGlmKHVzZXJTZWxlY3RlZElEICE9PSBcIjBcIil7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHRoaXMudXNlcnMuZ2V0VXNlcih1c2VyU2VsZWN0ZWRJRClcbiAgICAgICAgICAgICAgICB1c2VyLnBsYWNlcy5sb2FkRGVtYW5kKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2VzVG9TZW5kID0gdGhpcy5nZXRQbGFjZXNUb1NlbmQoKVxuICAgICAgICAgICAgICAgIHVzZXIuc2VuZChwbGFjZXNUb1NlbmQsbnVtYmVyT2ZWZWhpY2xlcyx2ZWhpY2xlQ2FwYWNpdHksdGhpcy5sb2FkVmVoaWNsZVJvdXRlcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9oYW5kbGVNb2RlQWRkQ2xpZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge21vZGVBZGRDbGllbnR9ID0gdGhpcy5zdGF0ZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kZUFkZENsaWVudDohbW9kZUFkZENsaWVudH0pXG4gICAgICAgIH1cblxuICAgICAgICBfaGFuZGxlTW9kZUxpc3RDbGllbnRzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaXN0IENsaWVudHM6IFwiLHRoaXMuc2VsZWN0ZWRDbGllbnRzKVxuICAgICAgICAgICAgY29uc3Qge21vZGVMaXN0Q2xpZW50c30gPSB0aGlzLnN0YXRlXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RlTGlzdENsaWVudHM6IW1vZGVMaXN0Q2xpZW50c30pXG4gICAgICAgIH1cblxuICAgICAgICBfaGFuZGxlQWRkQ2xpZW50ID0gKGNsaWVudDpDbGllbnQsIHVzZXJJRDpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gdGhpcy51c2Vycy5nZXRVc2VyKHVzZXJJRClcbiAgICAgICAgICAgIHVzZXIucGxhY2VzLnB1c2goY2xpZW50KVxuICAgICAgICAgICAgdXNlci5zYXZlQ2xpZW50cygpXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVNb2RlQWRkQ2xpZW50KClcbiAgICAgICAgICAgIHVzZXIucGxhY2VzLmdldERpc3RhbmNlcygodXNlcmk6VXNlcikgPT4ge3VzZXJpLnNhdmVDbGllbnRzKCk7dXNlcmkuc2F2ZURlcG9zaXRzKCl9LHVzZXIpXG4gICAgICAgIH1cblxuICAgICAgICBfaGFuZGxlRGVsZXRlQ2xpZW50ID0gKG5hbWU6c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hbWU6IFwiLG5hbWUpXG4gICAgICAgICAgICBsZXQge3VzZXJTZWxlY3RlZElEfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgICAgIGlmKHVzZXJTZWxlY3RlZElEICE9IFwiMFwiKXtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMudXNlcnMuZ2V0VXNlcih1c2VyU2VsZWN0ZWRJRClcbiAgICAgICAgICAgICAgICB1c2VyLnBsYWNlcy5kZWxldGUobmFtZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB1c2VyLnNhdmVDbGllbnRzKClcbiAgICAgICAgICAgICAgICB1c2VyLnNhdmVEZXBvc2l0cygpXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfaGFuZGxlQ2hhbmdlS2V5V29yZCA9IChldmVudDphbnksIG5ld0tleVdvcmQ6c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtrZXlXb3JkOm5ld0tleVdvcmR9KVxuICAgICAgICB9XG5cbiAgICAgICAgX2hhbmRsZUNoYW5nZU51bWJlck9mVmVoaWNsZXMgPSAoZXZlbnQ6YW55LCBuZXdOdW1iZXJPZlZlaGljbGVzOnN0cmluZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bnVtYmVyT2ZWZWhpY2xlczogK25ld051bWJlck9mVmVoaWNsZXN9KVxuICAgICAgICB9XG5cbiAgICAgICAgX2hhbmRsZUNoYW5nZVZlaGljbGVDYXBhY2l0eSA9IChldmVudDphbnksIG5ld0NhcGFjaXR5OnN0cmluZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmVoaWNsZUNhcGFjaXR5OiArbmV3Q2FwYWNpdHl9KVxuICAgICAgICB9IFxuXG4gICAgICAgIGhhbmRsZUNoYW5nZVJvdXRlU2VsZWN0ZWQgPSAoZXZlbnQ6YW55LCB2YWx1ZTphbnkpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LHZhbHVlKVxuICAgICAgICAgICAgdGhpcy5zZXRWZWhpY2xlUm91dGUodmFsdWUpXG4gICAgICAgIH1cblxuICAgIC8vIFxuXG4gICAgLy9nZXRzIFxuXG4gICAgICAgIGdldERpcmVjdGlvbiA9IChwb3NpdGlvbk9yaWdlbjogZ29vZ2xlLm1hcHMuTGF0TG5nLCBwb3NpdGlvbkRlc3RpbmF0ZTogZ29vZ2xlLm1hcHMuTGF0TG5nLCBkaXJlY3Rpb25zU2VydmljZTpnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSwgZGlyZWN0aW9uc0Rpc3BsYXk6IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlciwgY2FsbGJhY2s6RnVuY3Rpb24sIGNhbGxiYWNrRXJyb3I6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKFwiQW50cyBnZXREaXJlY3Rpb25cIilcbiAgICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHtcbiAgICAgICAgICAgICAgICBvcmlnaW46IHBvc2l0aW9uT3JpZ2VuLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBwb3NpdGlvbkRlc3RpbmF0ZSxcbiAgICAgICAgICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkdcbiAgICAgICAgICAgIH0sIChyZXNwb25zZTogZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1Jlc3VsdCwgc3RhdHVzOiBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiggc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKXtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0Um91dGVJbmRleCgxKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrRXJyb3IoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBnZXRTdHlsZXMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZXM6IHt1cGxvYWRCdXR0b246UmVhY3QuQ1NTUHJvcGVydGllcywgdXBsb2FkSW5wdXQ6UmVhY3QuQ1NTUHJvcGVydGllc30gPSB7XG4gICAgICAgICAgICAgICAgdXBsb2FkQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBsb2FkSW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0VG9vbHMgPSAodXNlcjogVXNlcikgPT4ge1xuICAgICAgICAgICAgY29uc3Qge21vZGVBZGRDbGllbnQsIG1vZGVMaXN0Q2xpZW50cywgbnVtYmVyT2ZTZWxlY3RlZENsaWVudHMsIHJvdXRlU2VsZWN0ZWR9ID0gdGhpcy5zdGF0ZVxuICAgICAgICAgICAgY29uc3Qge3ZlaGljbGVSb3V0ZXN9ID0gdGhpc1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gdGhpcy5nZXRTdHlsZXMoKSAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCAgdXNlclNlbGVjdGVkSUQgPSAodXNlciE9PXVuZGVmaW5lZCkgPyB1c2VyLklEOlwiMFwiXG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlID0gbW9kZUFkZENsaWVudCB8fCBtb2RlTGlzdENsaWVudHNcblxuXG4gICAgICAgICAgICBjb25zdCBzZWVDbGllbnRzVG9vbHMgPSAodXNlciA9PT0gdW5kZWZpbmVkKSA/IG51bGwgOiAobW9kZUxpc3RDbGllbnRzKSA/IDxkaXY+PEljb25CdXR0b24gb25DbGljaz17dGhpcy5faGFuZGxlTW9kZUxpc3RDbGllbnRzfSB0b29sdGlwPVwiY2FuY2VsXCIgdG9vbHRpcFBvc2l0aW9uPVwidG9wLWNlbnRlclwiPiA8Q2FuY2VsIC8+IDwvSWNvbkJ1dHRvbj48L2Rpdj46PGRpdj48SWNvbkJ1dHRvbiBvbkNsaWNrPXt0aGlzLl9oYW5kbGVNb2RlTGlzdENsaWVudHN9IGRpc2FibGVkPXttb2RlQWRkQ2xpZW50fSB0b29sdGlwPVwiU2VlIENsaWVudHNcIiB0b29sdGlwUG9zaXRpb249XCJ0b3AtY2VudGVyXCIgPiA8IEdyb3VwIC8+IDwvSWNvbkJ1dHRvbj48L2Rpdj47XG5cbiAgICAgICAgICAgIFxuXG5cblxuICAgICAgICAgICAgICAgIGxldCBtZW51U2VsZWN0ID0gKDxEcm9wRG93bk1lbnUgdmFsdWU9e3JvdXRlU2VsZWN0ZWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVJvdXRlU2VsZWN0ZWQuYmluZCh0aGlzKX0gPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICB7dmVoaWNsZVJvdXRlcy5tYXAoKHBhdGg6VmVoaWNsZVJvdXRpbmcsIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4fSBwcmltYXJ5VGV4dD17XCJWZWhpY3VsbyBuw7ptZXJvIFwiK2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcERvd25NZW51PilcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWZWhpY2xlUm91dGVUb29sID0gKHZlaGljbGVSb3V0ZXMubGVuZ3RoID4gMCkgPyA8ZGl2PiB7bWVudVNlbGVjdH08L2Rpdj4gOiBudWxsO1xuXG5cblxuXG4gICAgICAgICAgICBjb25zdCByZWFkTWFwVG9vbCA9ICh1c2VyID09PSB1bmRlZmluZWQpID8gbnVsbCA6IDxkaXY+XG4gICAgICAgICAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJyZWFkIGEgbWFwXCIgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiIHN0eWxlPXtzdHlsZXMudXBsb2FkQnV0dG9ufSBjb250YWluZXJFbGVtZW50PVwibGFiZWxcIiBkaXNhYmxlZD17ZGlzYWJsZX0gPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHN0eWxlPXtzdHlsZXMudXBsb2FkSW5wdXR9IG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVDaG9vc2VNYXB9IC8+XG4gICAgICAgICAgICAgICAgPC9GbGF0QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+O1xuXG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlU2VuZCA9IChpc051bGxPclVuZGVmaW5lZCh0aGlzLnZlaGljbGVSb3V0ZSkpID8gZmFsc2U6dHJ1ZVxuICAgICAgICAgICAgY29uc3Qgc2VuZCA9IChudW1iZXJPZlNlbGVjdGVkQ2xpZW50cyA+IDApID8gPGRpdj4gXG4gICAgICAgICAgICAgICAgPEZsYXRCdXR0b24gbGFiZWw9XCJzZW5kXCIgb25DbGljaz17dGhpcy5faGFuZGxlU2VuZH0gZGlzYWJsZWQ9e2Rpc2FibGVTZW5kfSAvPiAgICBcbiAgICAgICAgICAgIDwvZGl2PiA6bnVsbFxuXG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2xiYXJHcm91cCBmaXJzdENoaWxkPXt0cnVlfSAvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sYmFyR3JvdXAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFZlaGljbGVSb3V0ZVRvb2x9ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VlQ2xpZW50c1Rvb2xzfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVhZE1hcFRvb2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxGbGF0QnV0dG9uIGxhYmVsPVwiRXJhc2VcIiBvblRvdWNoVGFwPXt0aGlzLmVyYXNlfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVVc2VycyB1c2Vycz17dGhpcy51c2Vyc30gdXNlclNlbGVjdGVkSUQ9e3VzZXJTZWxlY3RlZElEfSBjcmVhdGVVc2VyPXt0aGlzLl9oYW5kbGVDcmVhdGVVc2VyfSBzZWxlY3RVc2VyPXt0aGlzLl9oYW5kbGVTZWxlY3RVc2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0TGlzdENsaWVudHMgPSAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHttb2RlTGlzdENsaWVudHMsdXNlclNlbGVjdGVkSUQsIGtleVdvcmQsIG51bWJlck9mVmVoaWNsZXMsIHZlaGljbGVDYXBhY2l0eX0gPSB0aGlzLnN0YXRlXG4gICAgICAgICAgICBjb25zdCB7c2VsZWN0ZWRDbGllbnRzfSA9IHRoaXNcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSAobW9kZUxpc3RDbGllbnRzKSA/IFwiaW5oZXJpdFwiOlwibm9uZVwiXG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW1zOkpTWC5FbGVtZW50W11cbiAgICAgICAgICAgIGNvbnN0IHJnID0gbmV3IFJlZ0V4cChrZXlXb3JkLnRvTG93ZXJDYXNlKCksXCJnXCIpXG5cbiAgICAgICAgICAgIGlmKG1vZGVMaXN0Q2xpZW50cyAmJiB1c2VyU2VsZWN0ZWRJRCAhPT0gXCIwXCIpe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxpc3RJdGVtcyA9IHRoaXMudXNlcnMuZ2V0VXNlcih1c2VyU2VsZWN0ZWRJRCkucGxhY2VzLmdldENsaWVudHMoKS5maWx0ZXIoKGNsaWVudDpDbGllbnQpID0+IHsgY29uc3QgbWF0Y2hOYW1lID0gY2xpZW50LmNsaWVudE5hbWUudG9Mb3dlckNhc2UoKS5tYXRjaChyZyk7ICByZXR1cm4gKGtleVdvcmQgPT09IFwiXCIgfHwgKCAhaXNOdWxsT3JVbmRlZmluZWQobWF0Y2hOYW1lKSAmJiBtYXRjaE5hbWUubGVuZ3RoID4gMCkgKX0pLm1hcCgoY2xpZW50OkNsaWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2NsaWVudC5uYW1lfT48Q2hlY2tib3ggc3R5bGU9e3tkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCIsIHdpZHRoOlwiOTAlXCJ9fSBkaXNhYmxlZD17IWNsaWVudC5maW5hbGl6ZWR9IHVuY2hlY2tlZEljb249ezxWaXNpYmlsaXR5T2ZmIC8+fSBjaGVja2VkSWNvbj17IDxWaXNpYmlsaXR5IC8+fSBsYWJlbD17Y2xpZW50LmNsaWVudE5hbWV9IGNoZWNrZWQ9eyhzZWxlY3RlZENsaWVudHNbY2xpZW50Lm5hbWVdICE9PSB1bmRlZmluZWQpfSBvbkNoZWNrPXt0aGlzLnNlbGVjdENsaWVudH0gdmFsdWU9e2NsaWVudC5jbGllbnROYW1lfSAvPjxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IHt0aGlzLl9oYW5kbGVEZWxldGVDbGllbnQoY2xpZW50Lm5hbWUpfX0gdG9vbHRpcD1cImNhbmNlbFwiIHRvb2x0aXBQb3NpdGlvbj1cInRvcC1jZW50ZXJcIiA+IDxDYW5jZWwgLz4gPC9JY29uQnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGlkPVwibGlzdENsaWVudHNcIiBjbGFzc05hbWU9e2Rpc3BsYXl9ID5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PiBJbmZvcm1hY2lvbiBkZSB2ZWhpY3Vsb3M8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIE7Dum1lcm8gZGUgdmVow61jdWxvczogIFxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgIHZhbHVlPXtudW1iZXJPZlZlaGljbGVzfSBvbkNoYW5nZT17dGhpcy5faGFuZGxlQ2hhbmdlTnVtYmVyT2ZWZWhpY2xlc30gaWQ9XCJudW1iZXJPZlZlaGljbGVzRmllbGRcIiBoaW50VGV4dD1cIk51bWVybyBkZSB2ZWhpY3Vsb3NcIiAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIENhcGFjaWRhZCBkZSBsb3MgdmVow61jdWxvczogXG4gICAgICAgICAgICAgICAgPGJyIC8+PFRleHRGaWVsZCB2YWx1ZT17dmVoaWNsZUNhcGFjaXR5fSBvbkNoYW5nZT17dGhpcy5faGFuZGxlQ2hhbmdlVmVoaWNsZUNhcGFjaXR5fSBpZD1cInZlaGljbGVDYXBhY2l0eUZpZWxkXCIgaGludFRleHQ9XCJDYXBhY2lkYWQgZGUgVmVoaWN1bG9zXCIgLz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXY+IExpc3RhIGRlIGVzdGFjaW9uZXMgPC9kaXY+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17a2V5V29yZH0gb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUNoYW5nZUtleVdvcmR9IGlkPVwia2V5V29yZFRleHRGaWVsZFwiIGhpbnRUZXh0PVwiQnVzcXVlZGEgcG9yIG5vbWJyZVwiIC8+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICB7bGlzdEl0ZW1zfSBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIH1cblxuICAgICAgICBnZXRQbGFjZXNUb1NlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7dXNlclNlbGVjdGVkSUR9ID0gdGhpcy5zdGF0ZVxuICAgICAgICAgICAgaWYodXNlclNlbGVjdGVkSUQgIT09IFwiMFwiKXtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gdGhpcy51c2Vycy5nZXRVc2VyKHVzZXJTZWxlY3RlZElEKVxuICAgICAgICAgICAgICAgIGxldCBwbGFjZXNUb1NlbmQgPSBuZXcgUGxhY2VzKClcbiAgICAgICAgICAgICAgICBwbGFjZXNUb1NlbmQucHVzaCh1c2VyLnBsYWNlcy5nZXREZXBvc2l0cygpWzBdKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7c2VsZWN0ZWRDbGllbnRzfSA9IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IG5hbWUgaW4gc2VsZWN0ZWRDbGllbnRzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkQ2xpZW50cy5oYXNPd25Qcm9wZXJ0eShuYW1lKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdXNlci5wbGFjZXMuZ2V0QnlOYW1lKG5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VzVG9TZW5kLnB1c2goY2xpZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwbGFjZXNUb1NlbmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIC8vXG5cbiAgICAvLyBzZXRzIFxuXG4gICAgICAgc2VsZWN0Q2xpZW50ID0gKGV2ZW50Ok1vdXNlRXZlbnQ8e30+LGlzSW5wdXRDaGVja2VkOmJvb2xlYW4pID0+IHtcbiAgICAgXG4gICAgICAgICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgbGV0IHtudW1iZXJPZlNlbGVjdGVkQ2xpZW50c30gPSB0aGlzLnN0YXRlXG4gICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ2xpZW50c1tuYW1lXSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjb25zdCB7dXNlclNlbGVjdGVkSUR9ID0gdGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudHMgPSB0aGlzLnVzZXJzLmdldFVzZXIodXNlclNlbGVjdGVkSUQpLnBsYWNlcy5nZXRDbGllbnRzKClcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnQgPSBjbGllbnRzLmZpbHRlcigoY2xpZW50OkNsaWVudCkgPT4ge3JldHVybiBjbGllbnQubmFtZSA9PT0gbmFtZX0pXG4gICAgICAgICAgICAgICAgaWYoY2xpZW50WzBdICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2xpZW50c1tuYW1lXSA9IGNsaWVudFswXSBhcyBDbGllbnRcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZTZWxlY3RlZENsaWVudHMrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZENsaWVudHNbbmFtZV1cbiAgICAgICAgICAgICAgICBudW1iZXJPZlNlbGVjdGVkQ2xpZW50cy0tXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgdGhpcy52ZWhpY2xlUm91dGVcbiAgICAgICAgICAgIC8vIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bnVtYmVyT2ZTZWxlY3RlZENsaWVudHM6bnVtYmVyT2ZTZWxlY3RlZENsaWVudHN9KVxuICAgICAgIH1cblxuICAgICAgIHNlbGVjdEFsbENsaWVudHMgPSAoKSA9PiB7XG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwic2VsZWN0QWxsQ2xpZW50c1wiKVxuICAgICAgICAgICBsZXQge3VzZXJTZWxlY3RlZElEfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgICAgbGV0IG51bWJlck9mU2VsZWN0ZWRDbGllbnRzID0gMFxuICAgICAgICAgICBsZXQgdXNlciA9IHRoaXMudXNlcnMuZ2V0VXNlcih1c2VyU2VsZWN0ZWRJRClcblxuICAgICAgICAgICBpZih1c2VyICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbGV0IGNsaWVudHMgPSB0aGlzLnVzZXJzLmdldFVzZXIodXNlclNlbGVjdGVkSUQpLnBsYWNlcy5nZXRDbGllbnRzKClcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjbGllbnRzIDogXCIsY2xpZW50cylcbiAgICAgICAgICAgIGNsaWVudHMuZm9yRWFjaCgoY2xpZW50OkNsaWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDbGllbnRzW2NsaWVudC5uYW1lXSA9IGNsaWVudFxuICAgICAgICAgICAgICAgIG51bWJlck9mU2VsZWN0ZWRDbGllbnRzKytcbiAgICAgICAgICAgIH0pXG4gXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtudW1iZXJPZlNlbGVjdGVkQ2xpZW50czogbnVtYmVyT2ZTZWxlY3RlZENsaWVudHN9KVxuICAgICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgc2V0VmVoaWNsZVJvdXRlID0gKGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICAgICB0aGlzLnZlaGljbGVSb3V0ZSA9IHRoaXMudmVoaWNsZVJvdXRlc1tpbmRleF1cbiAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm91dGVTZWxlY3RlZDppbmRleH0pXG5cbiAgICAgICAgICAgLy90aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICB9XG5cbiAgICAgICBsb2FkVmVoaWNsZVJvdXRlcyA9ICh2ZWhpY2xlUm91dGVzOlZlaGljbGVSb3V0aW5nW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMudmVoaWNsZVJvdXRlcyA9IHZlaGljbGVSb3V0ZXM7XG4gICAgICAgICAgICB0aGlzLnNldFZlaGljbGVSb3V0ZSgwKVxuICAgICAgIH1cbiAgICAvL1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgdXNlclNlbGVjdGVkSUQsIG1vZGVBZGRDbGllbnQsIG1vZGVMaXN0Q2xpZW50cyxyb3V0ZVNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlIFxuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy51c2Vycy5nZXRVc2VyKHVzZXJTZWxlY3RlZElEKSAgICAgICAgXG4gICAgICAgIGNvbnN0IHRvb2xzID0gdGhpcy5nZXRUb29scyh1c2VyKVxuICAgICAgICBjb25zdCBwbGFjZXNUb1NlbmQgPSB0aGlzLmdldFBsYWNlc1RvU2VuZCgpXG4gICAgICAgIGNvbnN0IHZlaGljbGVSb3V0ZSA9IHRoaXMudmVoaWNsZVJvdXRlXG4gICAgICAgIGNvbnNvbGUubG9nKHZlaGljbGVSb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVJRCA9IHVzZXJTZWxlY3RlZElEK3JvdXRlU2VsZWN0ZWRcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2ZWhpY2xlUm91dGU6IFwiLHZlaGljbGVSb3V0ZSlcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBpZD1cIm1jdnJwXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0TGlzdENsaWVudHMoKX1cbiAgICAgICAgICAgICAgICA8TWFwIHVzZXI9e3VzZXJ9IG1vZGVBZGRDbGllbnQ9e21vZGVBZGRDbGllbnR9IG1vZGVMaXN0Q2xpZW50cz17bW9kZUxpc3RDbGllbnRzfSBhZGRDbGllbnQ9e3RoaXMuX2hhbmRsZUFkZENsaWVudH0gc2VsZWN0ZWRDbGllbnRzPXt0aGlzLnNlbGVjdGVkQ2xpZW50c30gdmVoaWNsZVJvdXRlPXt2ZWhpY2xlUm91dGV9ICBwbGFjZXNUb1NlbmQ9e3BsYWNlc1RvU2VuZH0gcm91dGVJRD17cm91dGVJRH0gIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAge3Rvb2xzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FudHMudHN4IiwiaW1wb3J0IHtDbGllbnQsRGVwb3NpdCxQbGFjZXMsIFZlaGljbGVSb3V0aW5nLCBQbGFjZX0gZnJvbSBcIi4vXCJcbmltcG9ydCBmaXJlYmFzZSwgeyBGaXJlYmFzZUZpcmVzdG9yZSB9IGZyb20gXCIuLi9jb25maWcvZmlyZWJhc2VcIlxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSBcInByb3AtdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIG5hbWU6c3RyaW5nXG4gICAgSUQ6c3RyaW5nXG4gICAgcGxhY2VzOlBsYWNlc1xuXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcsSUQ6c3RyaW5nLGNsaWVudHM6QXJyYXk8Q2xpZW50PixkZXBvc2l0czpBcnJheTxEZXBvc2l0Pil7XG4gICAgICAgIHRoaXMubmFtZT1uYW1lXG4gICAgICAgIHRoaXMuSUQ9SURcbiAgICAgICAgdGhpcy5wbGFjZXM9IG5ldyBQbGFjZXMoZGVwb3NpdHMpXG4gICAgICAgIHRoaXMucGxhY2VzLm1lcmdlKGNsaWVudHMpXG5cbiAgICB9XG5cbiAgICBjcmVhdGUgPSAoY2FsbGJhY2s6KHVzZXI6VXNlcik9PnZvaWQpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlID0gY29uZmlybShcIkVzdGEgc2VndXJvIGRlIGNyZWFyIHVuIG51ZXZvIHVzdWFyaW9cIilcbiAgICAgICAgaWYoY3JlYXRlKXtcbiAgICAgICAgICAgIGxldCB1c2VycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2Vyc1wiKSlcbiAgICAgICAgICAgIGlmICh1c2VycyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1c2VycyA9IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2Vycy5wdXNoKHRoaXMubmFtZSlcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2Vyc1wiLEpTT04uc3RyaW5naWZ5KHVzZXJzKSlcblxuICAgICAgICAgICAgdGhpcy5JRCA9IHRoaXMubmFtZVxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcylcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KFwiVXN1YXJpbyBubyBjcmVhZG9cIilcbiAgICAgICAgfSAgXG5cbiAgICB9XG5cbiAgICBzYXZlQ2xpZW50cyA9ICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzYXZlQ2xpZW50c1wiLHRoaXMuSUQsdGhpcy5wbGFjZXMuY2xpZW50c1RvSnNvbigpKVxuICAgICAgICBsZXQgY2xpZW50cyA9IHRoaXMucGxhY2VzLmNsaWVudHNUb0pzb24oKVxuICAgICAgICAvLyBjb25zb2xlLnRyYWNlKFwiY2xpZW50czogXCIsIGNsaWVudHMpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2xpZW50c1wiK3RoaXMuSUQsSlNPTi5zdHJpbmdpZnkoY2xpZW50cykpXG4gICAgfVxuXG4gICAgc2F2ZURlcG9zaXRzID0gKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLnRyYWNlKFwic2F2ZURlcG9zaXRzXCIsdGhpcy5JRClcblxuICAgICAgICBsZXQgZGVwb3NpdHMgPSB0aGlzLnBsYWNlcy5kZXBvc2l0c1RvSnNvbigpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGVwb3NpdHM6IFwiLGRlcG9zaXRzKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlcG9zaXRzXCIrdGhpcy5JRCxKU09OLnN0cmluZ2lmeShkZXBvc2l0cykpXG4gICAgfVxuXG4gICAgZ2V0ID0gKCkgPT4ge1xuIFxuICAgICAgICBsZXQgY2xpZW50cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGllbnRzXCIrdGhpcy5JRCkpIHx8IFtdXG4gICAgICAgIGxldCBkZXBvc2l0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkZXBvc2l0c1wiK3RoaXMuSUQpKSB8fCBbXVxuXG5cblxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLklEXG4gICAgICAgIHRoaXMucGxhY2VzID0gbmV3IFBsYWNlcyhkZXBvc2l0cyxjbGllbnRzKVxuICAgICAgICB0aGlzLnNhdmVDbGllbnRzKClcblxuICAgIH1cblxuICAgIHNlbmQgPSAocGxhY2VzOlBsYWNlcywgbnVtYmVyT2ZWZWhpY2xlczpudW1iZXIsdmVoaWNsZUNhcGFjaXR5Om51bWJlciwgY2FsbGJhY2s6RnVuY3Rpb24pID0+IHtcblxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc3RhdGlvbnM6IHBsYWNlcy5nZXQoKS5tYXAoKHN0YXRpb246RGVwb3NpdHxDbGllbnQpID0+IHtyZXR1cm4gc3RhdGlvbi50b0pzb25Ub1NlbmQoKX0pLFxuICAgICAgICAgICAgdmVoaWNsZTp7Y2FwYWNpdHk6dmVoaWNsZUNhcGFjaXR5LCBxdWFudGl0eTogbnVtYmVyT2ZWZWhpY2xlc31cbiAgICAgICAgfSkgICAgXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJib2R5OiBcIixib2R5KVxuXG4gICAgICAgIGZldGNoKGBhcGkvcHNvYCx7XG4gICAgICAgICAgICBtZXRob2Q6YHBvc3RgLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6Ym9keSAgXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZTpSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzIDw9IDQwMCl7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKHZlaGljbGVzUm91dGluZzpWZWhpY2xlUm91dGluZ1tdKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2ZWhpY2xlc1JvdXRpbmc6IFwiLHZlaGljbGVzUm91dGluZylcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHZlaGljbGVzUm91dGluZy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJwbGFjZXM6IFwiLHBsYWNlcy5nZXQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyb3V0ZTogXCIsdmVoaWNsZXNSb3V0aW5nWzBdLnBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh2ZWhpY2xlc1JvdXRpbmcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKCh0ZXh0OlN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXREaXN0YW5jZXMgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0RGlzdGFuY2VzXCIpXG4gICAgICAgIHRoaXMucGxhY2VzLmdldERpc3RhbmNlcygodXNlcjpVc2VyKSA9PiB7dXNlci5zYXZlQ2xpZW50cygpO3VzZXIuc2F2ZURlcG9zaXRzKCl9LHRoaXMpXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgY2xhc3MgVXNlcnN7XG4gICAgcHJpdmF0ZSB1c2VyczpBcnJheTxVc2VyPlxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudXNlcnMgPSBuZXcgQXJyYXkoKVxuICAgIH1cblxuICAgIGdldFVzZXIgPSAoSUQ6c3RyaW5nKSA9PiB7XG4gICAgICAgY29uc3QgdXNlcnNGb3VuZCA9IHRoaXMudXNlcnMuZmlsdGVyKCh1c2VyOlVzZXIpPT57cmV0dXJuIHVzZXIuSUQgPT09IElEfSlcbiAgICAgICBjb25zdCB1c2VyID0gKHVzZXJzRm91bmQubGVuZ3RoID4gMCkgPyB1c2Vyc0ZvdW5kWzBdOnVuZGVmaW5lZFxuICAgICAgIHJldHVybiB1c2VyXG4gICAgfVxuXG4gICAgbG9hZCA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEubmFtZSxkb2MuaWQsZGF0YS5jbGllbnRzKVxuICAgICAgICB2YXIgdXNlcnM6c3RyaW5nW10gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcnNcIikpXG4gICAgICAgIFxuICAgICAgICBpZih1c2VycyA9PSB1bmRlZmluZWQgfHwgdXNlcnMubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKFwiVXNlcjFcIixcIjAwMDAwMDBcIixbXSxbXSlcbiAgICAgICAgICAgIHRoaXMuYWRkKHVzZXIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlck5hbWU6c3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKHVzZXJOYW1lLHVzZXJOYW1lLFtdLFtdKVxuICAgICAgICAgICAgICAgIHVzZXIuZ2V0KClcbiAgICAgICAgICAgICAgICB0aGlzLmFkZCh1c2VyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBcblxuXG5cblxuXG5cbiAgICB9XG5cbiAgICBnZXRDbGllbnRzRnJvbURhdGEgPSAoY2xpZW50c0RhdGE6YW55KSA9PiB7XG4gICAgICAgIHJldHVybiBjbGllbnRzRGF0YS5tYXAoKGNsaWVudDphbnksaWQ6bnVtYmVyKT0+eyByZXR1cm4gbmV3IENsaWVudChjbGllbnQubmFtZSxuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGNsaWVudC5sYXRMbmcubGF0LGNsaWVudC5sYXRMbmcubG5nKSxpZCxjbGllbnQuZmluYWxpemVkLGNsaWVudC5kaXN0YW5jZXMpfSlcbiAgICB9XG5cbiAgICBnZXREZXBvc3Rpc0Zyb21EYXRhID0gKGRlcG9zaXRzRGF0YTphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlcG9zaXRzRGF0YS5tYXAoKGRlcG9zaXQ6YW55KSA9PiB7IHJldHVybiBuZXcgRGVwb3NpdChkZXBvc2l0Lm5hbWUsIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZGVwb3NpdC5sYXRMbmcubGF0LGRlcG9zaXQubGF0TG5nLmxuZyksZGVwb3NpdC5maW5hbGl6ZWQsZGVwb3NpdC5kaXN0YW5jZXMpfSlcbiAgICB9XG5cbiAgICBhZGQgPSAodXNlcjpVc2VyKT0+e1xuICAgICAgICB0aGlzLnVzZXJzLnB1c2godXNlcilcbiAgICB9XG4gICAgc2VhcmNoID0gKHZhbHVlOnN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gdmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGlucHV0TGVuZ3RoID0gaW5wdXRWYWx1ZS5sZW5ndGg7XG4gICAgICAgIGxldCB1c2Vyc0ZvdW5kOkFycmF5PFVzZXI+ID0gIGlucHV0TGVuZ3RoID09PSAwID8gW10gOnRoaXMudXNlcnMuZmlsdGVyKHVzZXIgPT5cbiAgICAgICAgICAgIHVzZXIubmFtZS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsIGlucHV0TGVuZ3RoKSA9PT0gaW5wdXRWYWx1ZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHVzZXJzRm91bmRcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsYXNzL3VzZXIudHN4IiwiXG5pbXBvcnQge1BsYWNlfSBmcm9tICcuLydcblxuXG5leHBvcnQgY2xhc3MgQ2xpZW50IGV4dGVuZHMgUGxhY2Uge1xuICAgIGNsaWVudE5hbWU6c3RyaW5nXG4gICAgZGVtYW5kOiBudW1iZXJcbiAgICBQOiBudW1iZXIgLy8gdGllbXBvIGRlIHZpc2l0YVxuXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcsbGF0TG5nOmdvb2dsZS5tYXBzLkxhdExuZyxpZDpudW1iZXIsZmluYWxpemVkOmJvb2xlYW4gPSBmYWxzZSwgZGlzdGFuY2VzOntba2V5OnN0cmluZ106bnVtYmVyfGJvb2xlYW59ID0ge30pe1xuICAgICAgICBzdXBlcihuYW1lLGxhdExuZyxmaW5hbGl6ZWQsZGlzdGFuY2VzLGlkKVxuICAgICAgICB0aGlzLmNsaWVudE5hbWUgPSBuYW1lXG4gICAgICAgIGxhdExuZyA9IChsYXRMbmcgaW5zdGFuY2VvZiBnb29nbGUubWFwcy5MYXRMbmcpID8gbGF0TG5nOm5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0TG5nLmxhdCxsYXRMbmcubG5nKTtcblxuICAgICAgICBsZXQgaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICc8ZGl2PidcbiAgICAgICAgICAgICAgICArJzxkaXY+IE5vbWJyZTogJysgbmFtZSArICc8L2Rpdj4nXG4gICAgICAgICAgICAgICAgKyc8L2Rpdj4nLFxuICAgICAgICAgICAgcG9zaXRpb246bGF0TG5nXG4gICAgICAgIH0pXG5cblxuICAgICAgICB0aGlzLmluZm9XaW5kb3cgPSBpbmZvV2luZG93XG4gICAgfVxuXG4gICAgbG9hZERlbWFuZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5kZW1hbmQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKjEwMDAwKSsxKVxuICAgIH1cblxuICAgIGxvYWRQID0gKCkgPT4ge1xuICAgICAgICB0aGlzLlAgPSAwXG4gICAgfVxuXG4gICAgdG9Kc29uKCl7XG4gICAgICAgIGNvbnN0IHtpZCxuYW1lLGNsaWVudE5hbWUsbGF0TG5nLGRpc3RhbmNlcyxmaW5hbGl6ZWR9ID0gdGhpc1xuICAgICAgICByZXR1cm4ge2lkLG5hbWUsY2xpZW50TmFtZSxsYXRMbmc6e2xhdDpsYXRMbmcubGF0KCksbG5nOmxhdExuZy5sbmcoKX0sZGlzdGFuY2VzLGZpbmFsaXplZH0gICBcbiAgICB9XG5cbiAgICB0b0pzb25Ub1NlbmQoKXtcbiAgICAgICAgY29uc3Qge2lkLG5hbWUsY2xpZW50TmFtZSxsYXRMbmcsZGlzdGFuY2VzLFAsVyxCLEksZGVtYW5kfSA9IHRoaXNcbiAgICAgICAgbGV0IGRpc3RhbmNlc1RvU2VuZCA9IFtdXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRpc3RhbmNlcykge1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGRpc3RhbmNlc1trZXldKSAhPT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkLGtleSAsIGRpc3RhbmNlc1trZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNUb1NlbmQucHVzaChkaXN0YW5jZXNba2V5XSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtpZCxuYW1lLGNsaWVudE5hbWUsbGF0TG5nOntsYXQ6bGF0TG5nLmxhdCgpLGxuZzpsYXRMbmcubG5nKCl9LGRpc3RhbmNlczpkaXN0YW5jZXNUb1NlbmQsVyxCLEksUCxkZW1hbmR9XG4gICAgfVxuXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGFzcy9jbGllbnQudHN4IiwiaW1wb3J0IHtQbGFjZSwgUG9zaXRpb259IGZyb20gJy4vJ1xuXG5leHBvcnQgY2xhc3MgRGVwb3NpdCBleHRlbmRzIFBsYWNlIHtcbiAgICBjYXBhY2l0eTpudW1iZXJcblxuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBsYXRMbmc6Z29vZ2xlLm1hcHMuTGF0TG5nLCBmaW5hbGl6ZWQ6Ym9vbGVhbj1mYWxzZSwgZGlzdGFuY2VzOntba2V5OnN0cmluZ106bnVtYmVyfGJvb2xlYW59ID0ge30sIElkOm51bWJlciA9IDApe1xuICAgICAgICBzdXBlcihuYW1lLGxhdExuZyxmaW5hbGl6ZWQsZGlzdGFuY2VzLElkKVxuICAgICAgICB0aGlzLmNhcGFjaXR5ID0gOTk5OTk5OTk5OVxuXG4gICAgfVxuXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsYXNzL2RlcG9zaXQudHN4IiwiaW1wb3J0IHtDbGllbnQsRGVwb3NpdH0gZnJvbSBcIi4vXCJcbmxldCAgJCA9IHJlcXVpcmUoJ2pxdWVyeScpXG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb257XG4gICAgbGF0OiBudW1iZXIsXG4gICAgbG5nOiBudW1iZXJcbn1cblxuZXhwb3J0IGNsYXNzIEttbCB7XG4gICAgcHJpdmF0ZSBrbWw6YW55O1xuICAgIHByaXZhdGUgZm9sZGVyczogYW55XG5cbiAgICBjb25zdHJ1Y3RvcihrbWw6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5rbWwgPSAkKGttbClcbiAgICAgICAgdGhpcy5mb2xkZXJzID0gdGhpcy5rbWwuZmluZChcIkZvbGRlclwiKVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVhZEZvbGRlcnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCAkcGxhY2VtYXJrczpBcnJheTxEZXBvc2l0PiA9IG5ldyBBcnJheSgpXG5cbiAgICAgICAgdGhpcy5mb2xkZXJzLmVhY2goKGk6IG51bWJlciwgZm9sZGVyOmFueSk9PntcbiAgICAgICAgICAgICBsZXQgJGZvbGRlciA9ICQoZm9sZGVyKVxuICAgICAgICAgICAgIGxldCBkZXBvc2l0c1JlYWRlcjpEZXBvc2l0W10sY2xpZW50c1JlYWRlcjpDbGllbnRbXVxuXG4gICAgICAgICAgICBsZXQgJHBsYWNlbWFya3NSZWFkZXIgPSB0aGlzLnJlYWRGb2xkZXIoJGZvbGRlcilcbiAgICAgICAgICAgICRwbGFjZW1hcmtzID0gJHBsYWNlbWFya3MuY29uY2F0KCRwbGFjZW1hcmtzUmVhZGVyKVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuICRwbGFjZW1hcmtzXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWFkRm9sZGVyID0gKGZvbGRlcjphbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWFkRm9sZGVyXCIpXG4gICAgICAgIC8vIGxldCBuYW1lID0gZm9sZGVyLmZpbmQoJ25hbWUnKVswXS5pbm5lckhUTUxcbiAgICAgICAgbGV0ICRwbGFjZW1hcmtzOkFycmF5PGFueT4gPSBuZXcgQXJyYXkoKVxuXG5cbiAgICAgICAgZm9sZGVyLmZpbmQoJ1BsYWNlbWFyaycpLmVhY2goKGk6bnVtYmVyLHBsYWNlbWFyazphbnkpID0+IHtcbiAgICAgICAgICAgIGxldCAkcGxhY2VtYXJrID0gJChwbGFjZW1hcmspXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICRwbGFjZW1hcmtzLnB1c2goJHBsYWNlbWFyaylcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gJHBsYWNlbWFya3NcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWFkUGxhY2VtYXJrID0gKCRwbGFjZW1hcms6YW55LGlkOm51bWJlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlYWRQbGFjZW1hcmtcIilcbiAgICAgICAgbGV0IGRlZmF1bHROYW1lID0gJ0RlcG9zaXQnXG4gICAgICAgIGNvbnN0IG5hbWUgPSAkcGxhY2VtYXJrLmZpbmQoJ25hbWUnKVswXS5pbm5lckhUTUxcbiAgICAgICAgY29uc3QgcG9pbnQgPSAkcGxhY2VtYXJrLmZpbmQoJ1BvaW50JylbMF1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJQb2ludDogXCIscG9pbnQpXG4gICAgICAgIGlmKCBwb2ludCA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIGlmKG5hbWUgPT0gZGVmYXVsdE5hbWUpe1xuICAgICAgICAgICAgY29uc3QgZGVwb3NpdCA9IHRoaXMuZ2V0RGVwb3NpdCgkcGxhY2VtYXJrKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIgZGVwb3NpdFwiLGRlcG9zaXQpXG4gICAgICAgICAgICByZXR1cm4gZGVwb3NpdFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuZ2V0Q2xpZW50KCRwbGFjZW1hcmssaWQpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNsaWVudDogXCIsY2xpZW50KVxuICAgICAgICAgICAgcmV0dXJuIGNsaWVudFxuICAgICAgICB9IFxuICAgIH1cblxuICAgIHByaXZhdGUgcmVhZFBsYWNlbWFya3MgPSAoJHBsYWNlbWFya3M6YW55W10pID0+IHtcbiAgICAgICAgbGV0IGNsaWVudHM6Q2xpZW50W10gPSBbXVxuICAgICAgICBsZXQgZGVwb3NpdHM6RGVwb3NpdFtdID0gW11cblxuICAgICAgICAkcGxhY2VtYXJrcy5tYXAoKCRwbGFjZW1hcms6YW55LGlkOm51bWJlcik9PntcbiAgICAgICAgICAgIGxldCBwbGFjZSA9IHRoaXMucmVhZFBsYWNlbWFyaygkcGxhY2VtYXJrLGlkKVxuICAgICAgICAgICAgaWYocGxhY2UgaW5zdGFuY2VvZiBDbGllbnQpe1xuICAgICAgICAgICAgICAgIGNsaWVudHMucHVzaChwbGFjZSlcbiAgICAgICAgICAgIH1lbHNlIGlmKHBsYWNlIGluc3RhbmNlb2YgRGVwb3NpdCl7XG4gICAgICAgICAgICAgICAgZGVwb3NpdHMucHVzaChwbGFjZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgXG4gICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtkZXBvc2l0cyxjbGllbnRzfVxuICAgIH1cblxuICAgIGdldERlcG9zaXRzQW5kQ2xpZW50cyA9ICgpID0+IHtcbiAgICAgICAgbGV0ICRwbGFjZW1hcmtzID0gdGhpcy5yZWFkRm9sZGVycygpICAgICAgXG4gICAgICAgbGV0IHtkZXBvc2l0cyxjbGllbnRzfSA9IHRoaXMucmVhZFBsYWNlbWFya3MoJHBsYWNlbWFya3MpXG4gICAgICAgY29uc29sZS5sb2coXCJ7ZGVwb3NpdHMsY2xpZW50c306IFwiLHtkZXBvc2l0cyxjbGllbnRzfSlcbiAgICAgICAgcmV0dXJuIHtkZXBvc2l0cyxjbGllbnRzfVxuICAgICAgICAgICAgIFxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBnZXREZXBvc2l0ID0gKCRwbGFjZW1hcms6IGFueSkgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9ICRwbGFjZW1hcmsuZmluZCgnbmFtZScpWzBdLmlubmVySFRNTFxuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSAkcGxhY2VtYXJrLmZpbmQoJ2Nvb3JkaW5hdGVzJylbMF0uaW5uZXJIVE1MLnNwbGl0KCcsJylcbiAgICAgICAgY29uc3QgbGF0TG5nOmdvb2dsZS5tYXBzLkxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoK2Nvb3JkaW5hdGVzWzFdLCArY29vcmRpbmF0ZXNbMF0pXG5cbiAgICAgICAgbGV0IGRlcG9zaXQgPSBuZXcgRGVwb3NpdChuYW1lLGxhdExuZylcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkZXBvc2l0XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDbGllbnQgPSAoJHBsYWNlbWFyazphbnksaWQpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSAkcGxhY2VtYXJrLmZpbmQoJ25hbWUnKVswXS5pbm5lckhUTUwgICAgICAgXG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9ICRwbGFjZW1hcmsuZmluZCgnY29vcmRpbmF0ZXMnKVswXS5pbm5lckhUTUwuc3BsaXQoJywnKVxuICAgICAgICBsZXQgbGF0TG5nOmdvb2dsZS5tYXBzLkxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoICtjb29yZGluYXRlc1sxXSwgK2Nvb3JkaW5hdGVzWzBdKVxuXG4gICAgICAgIC8vbGV0IERhdGEgPSAkcGxhY2VtYXJrLmZpbmQoXCJEYXRhXCIpXG4gICAgICAgIC8vbGV0IGNsaWVudE5hbWUgPSAkKERhdGFbMF0pLmZpbmQoXCJ2YWx1ZVwiKS50ZXh0KClcblxuXG5cblxuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KG5hbWUsIGxhdExuZyxpZClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsYXNzL2ttbC50c3giLCJleHBvcnQgKiBmcm9tIFwiLi9NZW51VXNlcnNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQW50c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9NYXN0ZXJcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwTmF2RHJhd2VyXCJcbmV4cG9ydCAqIGZyb20gXCIuL01hcFwiXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHN4IiwiaW1wb3J0IHsgUGxhY2UsIFZlaGljbGVSb3V0aW5nIH0gZnJvbSAnLi4vY2xhc3MnO1xuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRJIHtcbiAgICBkaXN0YW5jZXM6IEFycmF5PEFycmF5PG51bWJlcj4+XG4gICAgZHVyYXRpb25zOiBBcnJheTxBcnJheTxudW1iZXI+PlxuICAgIHNlcnZpY2VUaW1lOiBBcnJheTxudW1iZXI+XG4gICAgZGVtYW5kOiBBcnJheTxudW1iZXI+XG4gICAgY2FwYWNpdHk6IEFycmF5PG51bWJlcj5cbiAgICB0aW1ld2luZG93czogQXJyYXk8c3RyaW5nPlxuICAgIHRpbWVTdGFydDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGVudFRvU2VuZCB7XG5cbn1cbmxldCBsaW1pdCA9IDVcbmV4cG9ydCBjbGFzcyBDb250ZW50IGltcGxlbWVudHMgQ29udGVudEl7XG4gICAgZGlzdGFuY2VzOiBBcnJheTxBcnJheTxudW1iZXI+PlxuICAgIGR1cmF0aW9uczogQXJyYXk8QXJyYXk8bnVtYmVyPj5cbiAgICBzZXJ2aWNlVGltZTogQXJyYXk8bnVtYmVyPlxuICAgIHBvc09yaWdpbjogbnVtYmVyXG4gICAgcG9zRGVzdGluYXRpb246IG51bWJlclxuICAgIGRlbWFuZDogQXJyYXk8bnVtYmVyPlxuICAgIGNhcGFjaXR5OiBBcnJheTxudW1iZXI+XG4gICAgdGltZXdpbmRvd3M6IEFycmF5PHN0cmluZz5cbiAgICB0aW1lc1N0YXJ0OiBBcnJheTxzdHJpbmc+XG4gICAgdGltZVN0YXJ0OiBzdHJpbmdcbiAgICBtYXJrZXJzOiBBcnJheTxnb29nbGUubWFwcy5NYXJrZXI+XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VzID0gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5kdXJhdGlvbnMgPSBuZXcgQXJyYXkoKVxuICAgICAgICB0aGlzLnNlcnZpY2VUaW1lID0gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5wb3NPcmlnaW4gPSAwXG4gICAgICAgIHRoaXMucG9zRGVzdGluYXRpb24gPSAwXG4gICAgICAgIHRoaXMuZGVtYW5kID0gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5jYXBhY2l0eSA9IG5ldyBBcnJheSgpXG4gICAgICAgIHRoaXMuY2FwYWNpdHkgPSBbNTUwXVxuICAgICAgICB0aGlzLnRpbWV3aW5kb3dzID0gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy50aW1lc1N0YXJ0ID0gbmV3IEFycmF5KCkgICAgICAgIFxuICAgIH1cbiAgICBhZGREaXN0YW5jZXMgPSAoKSA9PntcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICBnZXREaXN0YW5jZXNGcm9tQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZXM6IEFycmF5PEFycmF5PG51bWJlcj4+KSA9PiB7XG4gICAgICAgIGxldCBkaXN0YW5jZXNNaW51dGVzID0gY29vcmRpbmF0ZXMubWFwKChjb29yZGluYXRlMTogQXJyYXk8bnVtYmVyPikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzLm1hcCgoY29vcmRpbmF0ZTI6IEFycmF5PG51bWJlcj4pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGUyWzBdLWNvb3JkaW5hdGUxWzBdXG4gICAgICAgICAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlMlsxXS1jb29yZGluYXRlMVsxXVxuICAgICAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdyh4LDIpICsgTWF0aC5wb3coeSwyKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5kaXN0YW5jZXMgPSBkaXN0YW5jZXNNaW51dGVzLm1hcCgoZGlzdGFuY2VzOkFycmF5PG51bWJlcj4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZXMubWFwKChkaXN0YW5jZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlKjYwXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLmNoYW5nZURpc3RhbmNlc1RvRHVyYXRpb25zKClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY2hhbmdlRGlzdGFuY2VzVG9EdXJhdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzcGVlZCA9IDFcbiAgICAgICAgdGhpcy5kdXJhdGlvbnMgPSB0aGlzLmRpc3RhbmNlcy5tYXAoKGRpc3RhbmNlc1N0YXRpb246IEFycmF5PG51bWJlcj4pID0+e1xuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlc1N0YXRpb24ubWFwKChkaXN0YW5jZTpudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzdGFuY2UgLyBzcGVlZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRUaW1lc1dpbmRvd3NGcm9tTWludXRlcyA9IChtaW51dGVzOiBBcnJheTxudW1iZXI+KSA9PiB7XG4gICAgICAgdGhpcy50aW1ld2luZG93cyA9ICBtaW51dGVzLm1hcCgobWludXRlOiBudW1iZXIpID0+IHsgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1pbnV0ZVRvVGltZShtaW51dGUpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRUaW1lc1N0YXJ0RnJvbU1pbnV0ZXMgPSAobWludXRlczpBcnJheTxudW1iZXI+KSA9PiB7XG4gICAgICAgIHRoaXMudGltZXNTdGFydCA9IG1pbnV0ZXMubWFwKChtaW51dGU6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5taW51dGVUb1RpbWUobWludXRlKS50b0lTT1N0cmluZygpXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBtaW51dGVUb1RpbWUgPSAobWludXRlIDogbnVtYmVyKTpEYXRlID0+IHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgICB0b2RheSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERheSgpLDApXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodG9kYXkuZ2V0VGltZSgpICsgKG1pbnV0ZSAqIDYwMDAwKSlcbiAgICAgICAgcmV0dXJuIGRhdGVcbiAgICB9XG5cblxuXG4gICAgdXBkYXRlUG9zID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBwb3N0RW5kID0gIHRoaXMubWFya2Vycy5sZW5ndGgtMVxuXG4gICAgICAgIGlmKHRoaXMucG9zRGVzdGluYXRpb24rbGltaXQgPiBwb3N0RW5kKXtcbiAgICAgICAgICAgIHRoaXMucG9zRGVzdGluYXRpb24gPSAwXG4gICAgICAgICAgICBpZih0aGlzLnBvc09yaWdpbitsaW1pdCA+IHBvc3RFbmQpe1xuICAgICAgICAgICAgICAgIHRoaXMucG9zT3JpZ2luID0gMFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NPcmlnaW4gKz0gbGltaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnBvc0Rlc3RpbmF0aW9uICs9IGxpbWl0XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNhdmUgPSAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb250ZW50JywgSlNPTi5zdHJpbmdpZnkodGhpcy50b1N0cmluZygpKSApXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKXsgIFxuICAgICAgICByZXR1cm4geyBkaXN0YW5jZXM6IEpTT04uc3RyaW5naWZ5KHRoaXMuZGlzdGFuY2VzKSwgZHVyYXRpb25zOiBKU09OLnN0cmluZ2lmeSh0aGlzLmR1cmF0aW9ucyksIHBvc09yaWdpbjogdGhpcy5wb3NPcmlnaW4sIHBvc0Rlc3RpbmF0aW9uOiB0aGlzLnBvc0Rlc3RpbmF0aW9ufVxuICAgIH1cblxuICAgIHNldExvY2FsU3RvcmFnZSA9IChjb250ZW50OmFueSkgPT4ge1xuICAgICAgICB0aGlzLmRpc3RhbmNlcyA9IEpTT04ucGFyc2UoY29udGVudC5kaXN0YW5jZXMpXG4gICAgICAgIHRoaXMuZHVyYXRpb25zID0gSlNPTi5wYXJzZShjb250ZW50LmR1cmF0aW9ucylcbiAgICAgICAgdGhpcy5wb3NPcmlnaW4gPSBjb250ZW50LnBvc09yaWdpblxuICAgICAgICB0aGlzLnBvc0Rlc3RpbmF0aW9uID0gY29udGVudC5wb3NEZXN0aW5hdGlvblxuICAgIH1cbiAgICBcbiAgICBcbiAgICBzZW5kID0gKGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xuXG4gICAgICAgIHRoaXMuZHVyYXRpb25zID0gdGhpcy5kdXJhdGlvbnMubWFwKChkdXJhdGlvbnM6QXJyYXk8bnVtYmVyPiwgaTpudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkdXJhdGlvbnMubWFwKChkdXJhdGlvbjpudW1iZXIsIGo6bnVtYmVyKT0+e1xuICAgICAgICAgICAgICAgIGlmKGR1cmF0aW9uID09IDAgJiYgaSAhPSBqKXtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkdXJhdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzOiB0aGlzLmR1cmF0aW9ucyxcbiAgICAgICAgICAgICAgICBkZW1hbmQ6IHRoaXMuZGVtYW5kLFxuICAgICAgICAgICAgICAgIGNhcGFjaXR5OiB0aGlzLmNhcGFjaXR5LFxuICAgICAgICAgICAgICAgIHNlcnZpY2VUaW1lOiB0aGlzLnNlcnZpY2VUaW1lLFxuICAgICAgICAgICAgICAgIHRpbWV3aW5kb3dzOiB0aGlzLnRpbWV3aW5kb3dzLFxuICAgICAgICAgICAgICAgIHRpbWVzU3RhcnQ6IHRoaXMudGltZXNTdGFydCxcbiAgICAgICAgICAgICAgICB0aW1lU3RhcnQ6IHRoaXMudGltZVN0YXJ0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuZHVyYXRpb25zIFwiLCB0aGlzLmR1cmF0aW9ucyk7XG4gICAgICAgICAgICBcblxuICAgICAgICBmZXRjaCgnYXBpL2FudHMnLHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IGJvZHlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOlJlc3BvbnNlKSA9PntcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA8PSA0MDApe1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKCh2ZWhpY2xlc1JvdXRpbmcgOiBBcnJheTxWZWhpY2xlUm91dGluZz4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodmVoaWNsZXNSb3V0aW5nKSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL2NhbGxiYWNrKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4oKHRleHQ6U3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGFzcy9jb250ZW50LnRzeCIsImltcG9ydCB7Q2xpZW50LCBEZXBvc2l0LCBVc2VyfSBmcm9tICcuLydcbmltcG9ydCB7IGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAndXRpbCc7XG5cblxuZXhwb3J0IGNsYXNzIFBsYWNlIHtcbiAgICBpZDpudW1iZXJcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICAgIGxhdExuZzogZ29vZ2xlLm1hcHMuTGF0TG5nXG4gICAgaW5mb1dpbmRvdzpnb29nbGUubWFwcy5JbmZvV2luZG93XG4gICAgZGlzdGFuY2VzOntba2V5OnN0cmluZ106bnVtYmVyfGJvb2xlYW59IC8vIENcbiAgICBmaW5hbGl6ZWQ6Ym9vbGVhblxuICAgIFc6bnVtYmVyW10gIC8vIHRpZW1wbyByZXF1ZXJpZG8gcGFyYSByZW1vdmVyIGxvcyBlc2NvbWJyb3MgZGUgbG9zIGFyY29zXG4gICAgQjpudW1iZXJbXSAgLy8gIDEgZXNjb21icm9zIHJlbW92aWRvc1xuICAgIEk6bnVtYmVyW10gIC8vICAwIGJsb3F1ZWFkbyBwb3IgZXNjb21icm9zXG5cblxuXG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOnN0cmluZyxsYXRMbmc6YW55LGZpbmFsaXplZDpib29sZWFuID0gZmFsc2UsIGRpc3RhbmNlczp7W2tleTpzdHJpbmddOm51bWJlcnxib29sZWFufSA9IHt9LGlkOm51bWJlciA9IDApe1xuICAgICAgICBsYXRMbmcgPSAobGF0TG5nIGluc3RhbmNlb2YgZ29vZ2xlLm1hcHMuTGF0TG5nKSA/IGxhdExuZzpuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdExuZy5sYXQsbGF0TG5nLmxuZyk7XG4gICAgICAgIGxldCBpbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgY29udGVudDogJzxkaXY+J1xuICAgICAgICAgICAgICAgICsnPGRpdj4gTmFtZTogJysgbmFtZSArICc8L2Rpdj4nXG4gICAgICAgICAgICAgICAgKyc8L2Rpdj4nLFxuICAgICAgICAgICAgcG9zaXRpb246bGF0TG5nXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaWQgPSBpZFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMubGF0TG5nID0gbGF0TG5nXG4gICAgICAgIHRoaXMuaW5mb1dpbmRvdyA9IGluZm9XaW5kb3cgICAgIFxuICAgICAgICB0aGlzLmRpc3RhbmNlcyA9IGRpc3RhbmNlc1xuICAgICAgICB0aGlzLmRpc3RhbmNlc1tuYW1lXSA9IDA7XG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gZmluYWxpemVkO1xuICAgICAgICB0aGlzLlcgPSBbXVxuICAgICAgICB0aGlzLkIgPSBbXVxuICAgICAgICB0aGlzLkkgPSBbXVxuICAgICAgICBcbiAgICB9XG5cbiAgICBpbml0VyA9IChsZW5ndGg6bnVtYmVyKSA9PiB7XG4gICAgICAgIFxuICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHsgICAgICAgICAgIFxuICAgICAgICAgICB0aGlzLlcucHVzaCgwKVxuICAgICAgIH1cblxuICAgICAgIGlmKHRoaXMuaWQgPT0gMCl7XG4gICAgICAgfVxuICAgIH1cblxuICAgIGluaXRCID0gKGxlbmd0aDpudW1iZXIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykgeyAgICAgICAgICAgXG4gICAgICAgICAgIHRoaXMuQi5wdXNoKDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0SSA9IChsZW5ndGg6bnVtYmVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHsgICAgICAgICAgIFxuICAgICAgICAgICB0aGlzLkkucHVzaCgxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFcgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEkoKVxuICAgICAgICB0aGlzLlcuZm9yRWFjaCgodzpudW1iZXIsaW5kZXg6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLklbaW5kZXhdID09IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuV1tpbmRleF0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKjM2MDApKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGxvYWRJID0gKCkgPT4ge1xuICAgICAgICB0aGlzLkkuZm9yRWFjaCgoSTpudW1iZXIsaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuSVtpbmRleF0gPSAoTWF0aC5yYW5kb20oKSA8IDAuNjUpID8gMDoxOyBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b0pzb24oKXtcbiAgICAgICAgY29uc3Qge25hbWUsbGF0TG5nLGRpc3RhbmNlcyxmaW5hbGl6ZWQsaWR9ID0gdGhpc1xuICAgICAgICByZXR1cm4ge2lkLG5hbWUsbGF0TG5nOntsYXQ6bGF0TG5nLmxhdCgpLGxuZzpsYXRMbmcubG5nKCl9LGRpc3RhbmNlcyxmaW5hbGl6ZWR9XG4gICAgfVxuICAgIHRvSnNvblRvU2VuZCgpe1xuICAgICAgICBjb25zdCB7bmFtZSxsYXRMbmcsZGlzdGFuY2VzLGlkLFcsQixJfSA9IHRoaXNcbiAgICAgICAgbGV0IGRpc3RhbmNlc1RvU2VuZCA9IFtdXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRpc3RhbmNlcykge1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mKGRpc3RhbmNlc1trZXldKSAhPT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkLGtleSAsIGRpc3RhbmNlc1trZXldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNUb1NlbmQucHVzaChkaXN0YW5jZXNba2V5XSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2lkLG5hbWUsbGF0TG5nOntsYXQ6bGF0TG5nLmxhdCgpLGxuZzpsYXRMbmcubG5nKCl9LGRpc3RhbmNlczpkaXN0YW5jZXNUb1NlbmQsVyxCLEl9XG4gICAgfVxuXG4gICAgaXNGaW5hbGl6ZWQgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBsZXQgZmluYWxpemVkID0gdHJ1ZVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRpc3RhbmNlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2VzW2tleV07XG4gICAgICAgICAgICAgICAgaWYoZGlzdGFuY2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsaXplZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoXCJpc0ZpbmFsaXplZFwiLGZpbmFsaXplZCxrZXksZGlzdGFuY2UpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbGl6ZWQ7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLnRyYWNlKFwiaXNGaW5hbGl6ZWRcIixmaW5hbGl6ZWQpXG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gZmluYWxpemVkO1xuICAgICAgICByZXR1cm4gZmluYWxpemVkXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgY2xhc3MgUGxhY2VzIHtcbiAgICBwcml2YXRlIGxpbWl0Om51bWJlcjtwb3NPcmlnaW46bnVtYmVyO3Bvc0Rlc3RpbmF0aW9uOm51bWJlclxuICAgIHByaXZhdGUgcGxhY2VzOihDbGllbnR8RGVwb3NpdClbXVxuICAgIHByaXZhdGUgcG9zaXRpb246bnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcihkZXBvc2l0czpEZXBvc2l0W10gPSBbXSxjbGllbnRzOkNsaWVudFtdID0gW10pe1xuICAgICAgICBsZXQgSWQgPSAwO1xuICAgICAgICB0aGlzLnBsYWNlcyA9IGRlcG9zaXRzLm1hcCgoZGVwb3NpdDpEZXBvc2l0KSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgRGVwb3NpdChkZXBvc2l0Lm5hbWUsZGVwb3NpdC5sYXRMbmcsZGVwb3NpdC5maW5hbGl6ZWQsZGVwb3NpdC5kaXN0YW5jZXMsIElkKyspXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBjbGllbnRzID0gY2xpZW50cy5tYXAoKGNsaWVudDpDbGllbnQsaWQ6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENsaWVudChjbGllbnQubmFtZSxjbGllbnQubGF0TG5nLElkKyssY2xpZW50LmZpbmFsaXplZCxjbGllbnQuZGlzdGFuY2VzKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubWVyZ2UoY2xpZW50cylcbiAgICAgICAgdGhpcy5saW1pdCA9IDVcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2V0UG9zaXRpb24gPSAocG9zaXRpb246bnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIH1cblxuICAgIHB1c2ggPSAocGxhY2U6Q2xpZW50fERlcG9zaXQpID0+e1xuICAgICAgICAvLyBjb25zb2xlLnRyYWNlKFwicGxhY2UgdG8gcHVzaDogXCIscGxhY2UubmFtZSxKU09OLnN0cmluZ2lmeShwbGFjZS5kaXN0YW5jZXMpLHBsYWNlLmRpc3RhbmNlcylcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwbGFjZS5uYW1lOiBcIixwbGFjZS5uYW1lKVxuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHBsYWNlKSl7XG4gICAgICAgIGlmKCF0aGlzLmV4aXN0cyhwbGFjZS5uYW1lKSl7XG4gICAgICAgICAgICB0aGlzLnBsYWNlcy5tYXAoKHBsYWNlSW46Q2xpZW50fERlcG9zaXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZihpc051bGxPclVuZGVmaW5lZChwbGFjZS5kaXN0YW5jZXNbcGxhY2VJbi5uYW1lXSkpe1xuICAgICAgICAgICAgICAgICAgICBwbGFjZS5kaXN0YW5jZXNbcGxhY2VJbi5uYW1lXSA9IGZhbHNlICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoaXNOdWxsT3JVbmRlZmluZWQocGxhY2VJbi5kaXN0YW5jZXNbcGxhY2UubmFtZV0pKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbnRyYSBcIiwgcGxhY2VJbi5uYW1lLHBsYWNlLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlSW4uZGlzdGFuY2VzW3BsYWNlLm5hbWVdID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VJbi5maW5hbGl6ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxhY2UgcHVzaGVkOiBcIixwbGFjZS5maW5hbGl6ZWQpICAgICAgXG4gICAgICAgICAgICB0aGlzLnBsYWNlcy5wdXNoKHBsYWNlKSAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5wbGFjZXMgPSBbXVxuICAgIH1cbiAgICB9XG5cbiAgICBtZXJnZSA9IChwbGFjZXM6KENsaWVudHxEZXBvc2l0KVtdKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUudHJhY2UoXCJtZXJnZVwiKVxuICAgICAgICBwbGFjZXMuZm9yRWFjaCgocGxhY2U6Q2xpZW50fERlcG9zaXQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHVzaChwbGFjZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBleGlzdHMgPSAobmFtZTpzdHJpbmcpID0+IHtcbiAgICAgICBsZXQgcGxhY2VGb3VuZCA9ICB0aGlzLmdldEJ5TmFtZShuYW1lKVxuXG4gICAgICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZmluZWQocGxhY2VGb3VuZClcbiAgICB9XG5cbiAgICBsb2FkRGVtYW5kID0gKCkgPT4ge1xuICAgICAgICBsZXQgblBsYWNlcyA9IHRoaXMucGxhY2VzLmxlbmd0aFxuXG4gICAgICAgIHRoaXMucGxhY2VzLmZvckVhY2goKHBsYWNlOkNsaWVudHxEZXBvc2l0KSA9PiB7XG4gICAgICAgICAgICBpZihwbGFjZSBpbnN0YW5jZW9mIENsaWVudCkge1xuICAgICAgICAgICAgICAgIHBsYWNlLmxvYWREZW1hbmQoKVxuICAgICAgICAgICAgICAgIHBsYWNlLmxvYWRQKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYWNlLmluaXRCKG5QbGFjZXMpXG4gICAgICAgICAgICBwbGFjZS5pbml0SShuUGxhY2VzKVxuICAgICAgICAgICAgcGxhY2UuaW5pdFcoblBsYWNlcylcbiAgICAgICAgICAgIHBsYWNlLmxvYWRXKClcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuXG5cbiAgICBnZXRCeU5hbWUgPSAobmFtZTpzdHJpbmcpID0+IHtcbiAgICAgICAgbGV0IHBsYWNlRm91bmQ6Q2xpZW50fERlcG9zaXRcbiAgICAgICAgbGV0IHBsYWNlc0ZvdW5kID0gIHRoaXMucGxhY2VzLmZpbHRlcigocGxhY2U6Q2xpZW50fERlcG9zaXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwbGFjZS5uYW1lID09PSBuYW1lXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYocGxhY2VzRm91bmQubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBwbGFjZUZvdW5kID0gcGxhY2VzRm91bmRbMF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwbGFjZUZvdW5kOyAgICAgICAgXG4gICAgfVxuXG4gICAgdG9Kc29uKCl7XG4gICAgICAgcmV0dXJuIHRoaXMucGxhY2VzLm1hcCgocGxhY2U6Q2xpZW50fERlcG9zaXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwbGFjZS50b0pzb24oKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNsaWVudHNUb0pzb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENsaWVudHMoKS5tYXAoKGNsaWVudDpDbGllbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjbGllbnQudG9Kc29uKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkZXBvc2l0c1RvSnNvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVwb3NpdHMoKS5tYXAoKGRlcG9zaXQ6RGVwb3NpdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRlcG9zaXQudG9Kc29uKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlc1xuICAgIH1cblxuICAgIGdldENsaWVudHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYWNlcy5maWx0ZXIoKHBsYWNlOkNsaWVudHxEZXBvc2l0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGxhY2UgaW5zdGFuY2VvZiBDbGllbnRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXREZXBvc2l0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhY2VzLmZpbHRlcigocGxhY2U6Q2xpZW50fERlcG9zaXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwbGFjZSBpbnN0YW5jZW9mIERlcG9zaXRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRPcmlnaW5zQW5kRGVzdGluYXRpb25zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsaW1pdCA9IDU7IFxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBvcmlnaW5zOihDbGllbnR8RGVwb3NpdClbXSA9IFtdO1xuICAgICAgICBsZXQgZGVzdGluYXRpb25zOihDbGllbnR8RGVwb3NpdClbXSA9IFtdO1xuXG4gICAgICAgIG9yaWdpbnMgPSB0aGlzLnBsYWNlcy5maWx0ZXIoKG9yaWdpbjpDbGllbnR8RGVwb3NpdCkgPT4ge1xuICAgICAgICAgICAgaWYob3JpZ2luLmlzRmluYWxpemVkKCkgPT0gZmFsc2UgJiYgaSA8IGxpbWl0KXtcbiAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgfSlcblxuXG4gICAgICAgIGkgPSAwXG4gICAgICAgIG9yaWdpbnMuZm9yRWFjaCgocGxhY2U6Q2xpZW50fERlcG9zaXQpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZXMgPSBwbGFjZS5kaXN0YW5jZXNcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxhY2U6IFwiLHBsYWNlKVxuICAgICAgICAgICAgbGV0IGZpbmFsaXplZDpib29sZWFuID0gdHJ1ZVxuICAgICAgICAgICAgZm9yKGNvbnN0IG5hbWUgaW4gZGlzdGFuY2VzKXtcbiAgICAgICAgICAgICAgICBpZihkaXN0YW5jZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgZGlzdGFuY2VzW25hbWVdID09PSBmYWxzZSAmJiBpIDwgNSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXN0aW5hdGlvbiA9IHRoaXMuZ2V0QnlOYW1lKG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9ucy5wdXNoKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5hbGl6ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihkaXN0YW5jZXNbbmFtZV0gPT09IGZhbHNlICl7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsaXplZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxhY2UuZmluYWxpemVkID0gZmluYWxpemVkXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHtvcmlnaW5zOm9yaWdpbnMuc2xpY2UoKSxkZXN0aW5hdGlvbnM6ZGVzdGluYXRpb25zLnNsaWNlKCl9XG4gICAgfVxuXG4gICAgZ2V0RGlzdGFuY2VzID0gKGNhbGxiYWNrOiBGdW5jdGlvbiwgdXNlcjpVc2VyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0RGlzdGFuY2VzXCIpXG4gICAgICAgIGxldCBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U2VydmljZSgpXG4gICAgICAgIGNvbnN0IHtvcmlnaW5zLGRlc3RpbmF0aW9uc30gPSB0aGlzLmdldE9yaWdpbnNBbmREZXN0aW5hdGlvbnMoKVxuICAgICAgICBjb25zdCBvcmlnaW5zQ29vcmRpbmF0ZXMgPSBvcmlnaW5zLm1hcCgocGxhY2U6Q2xpZW50fERlcG9zaXQpID0+IHsgcmV0dXJuIHBsYWNlLmxhdExuZ30pXG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uc0Nvb3JkaW5hdGVzID0gZGVzdGluYXRpb25zLm1hcCgocGxhY2U6Q2xpZW50fERlcG9zaXQpID0+IHsgcmV0dXJuIHBsYWNlLmxhdExuZ30pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib3JpZ2luczogXCIsb3JpZ2lucylcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkZXN0aW5hdGlvbnM6IFwiLGRlc3RpbmF0aW9ucylcbiAgICAgICAgaWYgKG9yaWdpbnMubGVuZ3RoID4gMCAmJiBkZXN0aW5hdGlvbnMubGVuZ3RoID4gMCkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkaXN0YW5jZXNcIilcblxuICAgICAgICAgICAgaWYoIWlzTnVsbE9yVW5kZWZpbmVkKGRpc3RhbmNlcykpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZERpc3RhbmNlcyhKU09OLnBhcnNlKGRpc3RhbmNlcyksY2FsbGJhY2ssdXNlcilcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNlcnZpY2UuZ2V0RGlzdGFuY2VNYXRyaXgoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5zOiBvcmlnaW5zQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uczogZGVzdGluYXRpb25zQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklORyxcbiAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTpnb29nbGUubWFwcy5EaXN0YW5jZU1hdHJpeFJlc3BvbnNlLCBzdGF0dXM6IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U3RhdHVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkRGlzdGFuY2VNYXRyaXgocmVzcG9uc2UsIHN0YXR1cywgb3JpZ2lucywgZGVzdGluYXRpb25zLCBjYWxsYmFjayx1c2VyKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZXsgXG5cbiAgICAgICAgICAgIGNhbGxiYWNrKHVzZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWFkRGlzdGFuY2VzID0gKGRpc3RhbmNlczp7W2tleTpzdHJpbmddOm51bWJlcltdfSxjYWxsYmFjazpGdW5jdGlvbix1c2VyOlVzZXIpID0+IHtcbiAgICAgICAgY29uc29sZS50cmFjZShcInJlYWREaXN0YW5jZXNcIilcbiAgICAgICAgZm9yKHZhciBuYW1lIGluIGRpc3RhbmNlcyl7XG4gICAgICAgICAgICBpZihkaXN0YW5jZXMuaGFzT3duUHJvcGVydHkobmFtZSkpe1xuICAgICAgICAgICAgICAgIGxldCBwbGFjZSA9IHRoaXMuZ2V0QnlOYW1lKG5hbWUpXG4gICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlVmVjdG9yID0gZGlzdGFuY2VzW25hbWVdXG4gICAgICAgICAgICAgICAgaWYoIWlzTnVsbE9yVW5kZWZpbmVkKHBsYWNlKSAmJiAhaXNOdWxsT3JVbmRlZmluZWQoZGlzdGFuY2VWZWN0b3IpKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlLmZpbmFsaXplZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS50cmFjZShcIm5hbWU6IFwiLG5hbWUsXCIgLSBcIixwbGFjZS5kaXN0YW5jZXMsXCJmaW5hbGl6ZWQgOiBcIix0cnVlKVxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGtleSBpbiBwbGFjZS5kaXN0YW5jZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGxhY2UuZGlzdGFuY2VzLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5OiBcIixrZXksIFwiIC0gaTogXCIsaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGRpc3RhbmNlVmVjdG9yW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWlzTnVsbE9yVW5kZWZpbmVkKGRpc3RhbmNlKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlLmRpc3RhbmNlc1t0aGlzLnBsYWNlc1tpXS5uYW1lXSA9IGRpc3RhbmNlVmVjdG9yW2ldICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGlzdGFuY2VzXCIpXG4gICAgICAgIGNhbGxiYWNrKHVzZXIpXG5cbiAgICB9XG5cbiAgICByZWFkRGlzdGFuY2VNYXRyaXggPSAocmVzcG9uc2U6Z29vZ2xlLm1hcHMuRGlzdGFuY2VNYXRyaXhSZXNwb25zZSwgc3RhdHVzOiBnb29nbGUubWFwcy5EaXN0YW5jZU1hdHJpeFN0YXR1cyxvcmlnaW5zOihDbGllbnR8RGVwb3NpdClbXSwgZGVzdGluYXRpb25zOihDbGllbnR8RGVwb3NpdClbXSwgY2FsbGJhY2s6IEZ1bmN0aW9uLHVzZXI6VXNlcikgPT4ge1xuICAgICAgICAvL2NvbnNvbGUudHJhY2UoXCJzdGF1cyBcIixzdGF0dXMsY2FsbGJhY2spXG4gICAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U3RhdHVzLk9LKXtcbiAgICAgICAgICAgIGxldCByb3dzID0gcmVzcG9uc2Uucm93c1xuICAgICAgICAgICAgcm93cy5tYXAoKHJvdzogZ29vZ2xlLm1hcHMuRGlzdGFuY2VNYXRyaXhSZXNwb25zZVJvdywgcG9zaXRpb25PZk9yaWdpbjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gcm93LmVsZW1lbnRzXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50czogXCIsZWxlbWVudHMpXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IG9yaWdpbnNbcG9zaXRpb25PZk9yaWdpbl0ubmFtZVxuICAgICAgICAgICAgICAgIGxldCBvcmlnaW4gPSB0aGlzLmdldEJ5TmFtZShuYW1lKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmRpc3RhbmNlc1twb3NJXSA9PT0gdW5kZWZpbmVkKXsgdGhpcy5kaXN0YW5jZXMucHVzaChbXSl9XG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuZHVyYXRpb25zW3Bvc0ldID09PSB1bmRlZmluZWQpeyB0aGlzLmR1cmF0aW9ucy5wdXNoKFtdKX1cbiAgICAgICAgICAgICAgICBlbGVtZW50cy5tYXAoKHJlc3BvbnNlRWxlbWVudDogZ29vZ2xlLm1hcHMuRGlzdGFuY2VNYXRyaXhSZXNwb25zZUVsZW1lbnQsIHBvc2l0aW9uT2ZEZXN0aW5hdGlvbjpudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZUVsZW1lbnQuc3RhdHVzID09IGdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4RWxlbWVudFN0YXR1cy5PSyl7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zW3Bvc2l0aW9uT2ZEZXN0aW5hdGlvbl1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbi5kaXN0YW5jZXNbZGVzdGluYXRpb24ubmFtZV0gPSByZXNwb25zZUVsZW1lbnQuZHVyYXRpb24udmFsdWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWlzTnVsbE9yVW5kZWZpbmVkKHVzZXIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnBsYWNlcy5nZXRCeU5hbWUobmFtZSkuZGlzdGFuY2VzW2Rlc3RpbmF0aW9uLm5hbWVdID0gcmVzcG9uc2VFbGVtZW50LmR1cmF0aW9uLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmRpc3RhbmNlc1twb3NJXS5wdXNoKHJlc3BvbnNlRWxlbWVudC5kaXN0YW5jZS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZHVyYXRpb25zW3Bvc0ldLnB1c2gocmVzcG9uc2VFbGVtZW50LmR1cmF0aW9uLnZhbHVlKSAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAvL3RoaXMuc2F2ZSgpXG5cbiAgICAgICAgICAgIGNhbGxiYWNrKHVzZXIpIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3RoaXMuZ2V0RGlzdGFuY2VzKGNhbGxiYWNrLHVzZXIpfSwgMzAwMClcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cylcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9Pnt0aGlzLmdldERpc3RhbmNlcyhjYWxsYmFjayx1c2VyKX0sIDEwMDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZSA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NsaWVudHMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNsaWVudHNUb0pzb24oKSkgKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlcG9zaXRzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGVwb3NpdHNUb0pzb24oKSkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldERpc3RhbmNlc1RvU2VuZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VzID0gdGhpcy5wbGFjZXMubWFwKChjbGllbnRJOkNsaWVudHxEZXBvc2l0KSA9PiB7XG4gICAgICAgICAgICAvLyByZXR1cm4ge25hbWU6Y2xpZW50SS5uYW1lLCBkaXN0YW5jZTogdGhpcy5wbGFjZXMubWFwKChjbGllbnRKOnxEZXBvc2l0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIHRoaXMucGxhY2VzLm1hcCgoY2xpZW50Sjp8RGVwb3NpdCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB7bmFtZTpjbGllbnRKLm5hbWUsZGlzdGFuY2U6Y2xpZW50SS5kaXN0YW5jZXNbY2xpZW50Si5uYW1lXX1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50SS5kaXN0YW5jZXNbY2xpZW50Si5uYW1lXVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcImRpc3RhbmNlczogXCIsZGlzdGFuY2VzKVxuICAgICAgICByZXR1cm4gZGlzdGFuY2VzXG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgZGVsZXRlID0gKG5hbWU6c3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucGxhY2VzID0gdGhpcy5wbGFjZXMuZmlsdGVyKChwbGFjZTpDbGllbnR8RGVwb3NpdCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIHBsYWNlLmRpc3RhbmNlc1tuYW1lXTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwbGFjZS5uYW1lICE9PSBuYW1lXG4gICAgICAgIH0pXG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsYXNzL3BsYWNlLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7VmVoaWNsZVJvdXRpbmcsRGVwb3NpdCxDbGllbnQsUGxhY2UsVXNlciwgUGxhY2VzfSBmcm9tIFwiLi4vY2xhc3NcIlxuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tIFwidXRpbFwiO1xuXG5sZXQgZ29vZ2xlID0gd2luZG93Lmdvb2dsZTtcblxuaW50ZXJmYWNlIFByb3Bze1xuICAgIHVzZXI6VXNlclxuICAgIG1vZGVBZGRDbGllbnQ6Ym9vbGVhblxuICAgIG1vZGVMaXN0Q2xpZW50czpib29sZWFuXG4gICAgc2VsZWN0ZWRDbGllbnRzOiB7W2tleTpzdHJpbmddOkNsaWVudH1cbiAgICB2ZWhpY2xlUm91dGU6IFZlaGljbGVSb3V0aW5nXG4gICAgcGxhY2VzVG9TZW5kOlBsYWNlc1xuICAgIGFkZENsaWVudDogKGNsaWVudDpDbGllbnQsdXNlcklEOnN0cmluZyk9PnZvaWRcbiAgICByb3V0ZUlEOnN0cmluZ1xuXG59XG5cbmludGVyZmFjZSBTdGF0ZXtcbiAgICBwb3NpdGlvbkdldERpcmVjdGlvbjogbnVtYmVyXG4gICAgXG59XG5cbmV4cG9ydCBjbGFzcyBNYXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsU3RhdGU+e1xuICAgIG1hcDpnb29nbGUubWFwcy5NYXA7ICAgIFxuICAgIHZlaGljbGVSb3V0ZTogVmVoaWNsZVJvdXRpbmdcbiAgICBwbGFjZXM6IEFycmF5PGdvb2dsZS5tYXBzLk1hcmtlcj5cbiAgICBwYXRoczogQXJyYXk8QXJyYXk8Z29vZ2xlLm1hcHMuUG9seWxpbmU+PlxuICAgIGRpcmVjdGlvbnNEaXNwbGF5OiBBcnJheTxnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXI+XG4gICAgZ2V0RGlyZWN0aW9uczogQXJyYXk8RnVuY3Rpb24+XG4gICAgZGlyZWN0aW9uc1Jlc3VsdHM6Z29vZ2xlLm1hcHMuRGlyZWN0aW9uc1Jlc3VsdFtdXG4gICBcbiAgICAvLyBMeWZlY2ljbGVcblxuICAgICAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAgICAgc3VwZXIoKVxuXG4gICAgICAgICAgICB0aGlzLnBhdGhzID0gbmV3IEFycmF5KClcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgQXJyYXkoKVxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zUmVzdWx0cyA9IFtdXG4gICAgICAgICAgICB0aGlzLnBsYWNlcyA9IG5ldyBBcnJheSgpXG4gICAgICAgICAgICAvLyB0aGlzLnZlaGljbGVSb3V0ZSA9IG5ldyBBcnJheSgpXG4gICAgICAgICAgICB0aGlzLmdldERpcmVjdGlvbnMgPSBuZXcgQXJyYXkoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge3Bvc2l0aW9uR2V0RGlyZWN0aW9uOiAwfVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICAgICAgbGV0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiB7IGxhdDogNy4xMDcyNDYsIGxuZzogLTczLjEwOTQ4NiB9LFxuICAgICAgICAgICAgICAgIHpvb206IDEyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodGhpcy5nZXRET01Ob2RlKCksIG1hcE9wdGlvbnMpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzOlByb3BzKXtcbiAgICAgICAgICAgIGNvbnN0IHttb2RlQWRkQ2xpZW50LHZlaGljbGVSb3V0ZSwgcm91dGVJRH0gPSBuZXh0UHJvcHNcbiAgICAgICAgICAgIGxldCBsYXN0Um91dGVJRCA9IHRoaXMucHJvcHMucm91dGVJRFxuICAgICAgICAgICAgdGhpcy52ZWhpY2xlUm91dGUgPSB2ZWhpY2xlUm91dGU7XG4gICAgICAgICAgICBpZighbW9kZUFkZENsaWVudCl7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWMtaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgIGlmKGlucHV0ICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IE1hcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFwXCIpIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBpZihNYXBEaXYgIT09IG51bGwgJiYgbWFwRGl2ICE9PSBudWxsKXsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hcERpdi5pbnNlcnRCZWZvcmUoaW5wdXQsbWFwRGl2KSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGxhc3RSb3V0ZUlEICE9PSByb3V0ZUlEKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVyYXNlUGF0aHMoKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGlyZWN0aW9ucyA9IG5ldyBBcnJheSgpXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRocyA9IG5ldyBBcnJheSgpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zRGlzcGxheSA9IG5ldyBBcnJheSgpXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zUmVzdWx0cyA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZXMgPSBuZXcgQXJyYXkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXBQcm9wczpQcm9wcyl7XG4gICAgICAgICAgICBjb25zdCB7ZGlyZWN0aW9uc0Rpc3BsYXksZGlyZWN0aW9uc1Jlc3VsdHN9ID0gdGhpc1xuICAgICAgICAgICAgY29uc3Qge3Bvc2l0aW9uR2V0RGlyZWN0aW9ufSA9IHRoaXMuc3RhdGUgICBcbiAgICAgICAgICAgIGNvbnN0IHByZVJvdXRlSUQgPSBwcmVwUHJvcHMucm91dGVJRFxuICAgICAgICAgICAgbGV0IHt1c2VyLCB2ZWhpY2xlUm91dGUscm91dGVJRH0gPSB0aGlzLnByb3BzXG5cblxuXG4gICAgICAgICAgICBpZih1c2VyICE9PSB1bmRlZmluZWQpeyAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc3Qge3BsYWNlc30gPSB1c2VyXG4gICAgICAgICAgICAgICAgaWYgKCBwbGFjZXMgIT0gdW5kZWZpbmVkICl7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5kcmF3UGxhY2VzKClcbiAgICAgICAgICAgICAgICAgICAgaWYoKCFpc051bGxPclVuZGVmaW5lZCh2ZWhpY2xlUm91dGUpICYmIGlzTnVsbE9yVW5kZWZpbmVkKHByZXBQcm9wcy52ZWhpY2xlUm91dGUpKSl7XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoKCFpc051bGxPclVuZGVmaW5lZCh2ZWhpY2xlUm91dGUpICYmIHJvdXRlSUQgIT09IHByZVJvdXRlSUQgJiYgZGlyZWN0aW9uc0Rpc3BsYXkubGVuZ3RoID09IDAgJiYgdmVoaWNsZVJvdXRlLnBhdGgubGVuZ3RoPjApKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWFya2VycygpIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQYXRocygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNYXJrZXJzKCkgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmVyYXNlUGxhY2VzKClcbiAgICAgICAgICAgICAgICB0aGlzLmVyYXNlUGF0aHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGlyZWN0aW9uc0Rpc3BsYXkubGVuZ3RoID4gMCAmJiBkaXJlY3Rpb25zRGlzcGxheS5sZW5ndGggPT09IGRpcmVjdGlvbnNSZXN1bHRzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3RGlyZWN0aW9uc1Jlc3VsdHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdGhpcy5sb2FkRGlyZWN0aW9ucyhwb3NpdGlvbkdldERpcmVjdGlvbilcblxuICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgLy8gXG5cbiAgICBhZGRNYXJrZXIgPSAocGxhY2U6UGxhY2UpID0+IHsgXG4gICAgICAgIFxuICAgICAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogcGxhY2UubGF0TG5nLFxuICAgICAgICAgICAgdGl0bGU6IHBsYWNlLm5hbWUsXG4gICAgICAgICAgICBsYWJlbDogJycrcGxhY2UubmFtZVxuICAgICAgICB9KVxuXG4gXG4gICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwbGFjZS5pbmZvV2luZG93Lm9wZW4odGhpcy5tYXAsIG1hcmtlcilcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnBsYWNlcy5wdXNoKG1hcmtlcilcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZXJhc2VQbGFjZXMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucGxhY2VzLmZvckVhY2goKG1hcmtlcjpnb29nbGUubWFwcy5NYXJrZXIsaW5kZXg6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBtYXJrZXIuc2V0TWFwKG51bGwpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZHJhd1BsYWNlcyA9ICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS50cmFjZShcImRyYXdQbGFjZXNcIilcbiAgICAgICAgLy8gaWYgKHRoaXMudmVoaWNsZVJvdXRlICl7XG4gICAgICAgICAgICB0aGlzLmVyYXNlUGxhY2VzKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wbGFjZXMubWFwKChwbGFjZTphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBwbGFjZS5zZXRNYXAodGhpcy5tYXApXG4gICAgICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhd1JvdXRlUGxhY2VzID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmVyYXNlUGxhY2VzKClcbiAgICAgICAgbGV0IHt2ZWhpY2xlUm91dGV9ID0gdGhpcy5wcm9wc1xuICAgICAgICBsZXQge3BsYWNlc30gPSB0aGlzXG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlaGljbGVSb3V0ZS5wYXRoLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHZlaGljbGVSb3V0ZS5wYXRoW2luZGV4XTtcblxuICAgICAgICAgICAgcGxhY2VzW2VsZW1lbnRdLnNldE1hcCh0aGlzLm1hcClcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZXJhc2VQYXRocyA9ICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS50cmFjZShcImVyYXNlUGF0aHNcIilcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc0Rpc3BsYXkuZm9yRWFjaCgoZGlyZWN0aW9uRGlzcGxheTpnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25EaXNwbGF5LnNldE1hcChudWxsKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkcmF3UGF0aCA9ICgpID0+e1xuICAgICAgICB0aGlzLmVyYXNlUGF0aHMoKVxuICAgICAgICBcbiAgICAgICAgbGV0IGRpcmVjdGlvbnNEaXNwbGF5ID0gdGhpcy5kaXJlY3Rpb25zRGlzcGxheVxuICAgICAgICBpZiAoZGlyZWN0aW9uc0Rpc3BsYXkpe1xuICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuZm9yRWFjaCgoZGlyZWN0aW9uRGlzcGxheTpnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIpID0+IHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25EaXNwbGF5LnNldE1hcCh0aGlzLm1hcClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXdEaXJlY3Rpb25zUmVzdWx0cyA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uc1Jlc3VsdHMuZm9yRWFjaCgoZGlyZWN0aW9uc1Jlc3VsdDpnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVzdWx0LGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByaWdodC1wYW5lbC0ke2luZGV4fWApXG4gICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25zRGlzcGxheSA9IHRoaXMuZGlyZWN0aW9uc0Rpc3BsYXlbaW5kZXhdXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpcmVjdGlvbnNSZXN1bHQ6IFwiLGRpcmVjdGlvbnNSZXN1bHQpXG4gICAgICAgICAgICBkaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAodGhpcy5tYXApXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlcIixpbmRleClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGByaWdodC1wYW5lbC0ke2luZGV4fWAscGFuZWwpXG4gICAgICAgICAgICBkaXJlY3Rpb25zRGlzcGxheS5zZXRQYW5lbChwYW5lbClcbiAgICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMoZGlyZWN0aW9uc1Jlc3VsdClcbiAgICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldFJvdXRlSW5kZXgoMSlcbiAgICAgICAgICAgIC8vIGNhbGxiYWNrKClcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vICMgTG9hZHNcblxuICAgICAgICBsb2FkRGlyZWN0aW9ucyA9IChwb3NpdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gcG9zaXRpb24rMVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZ2V0RGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb25zW25ld1Bvc2l0aW9uXVxuICAgICAgICAgICAgaWYgKGdldERpcmVjdGlvbiAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGxldCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREaXJlY3Rpb25zLnNwbGljZSgwLDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bvc2l0aW9uR2V0RGlyZWN0aW9uOm5ld1Bvc2l0aW9ufSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGNhbGxiYWNrRXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHt0aGlzLnNldFN0YXRlKHtwb3NpdGlvbkdldERpcmVjdGlvbjpwb3NpdGlvbn0pfSw1MDAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZXREaXJlY3Rpb24oY2FsbGJhY2ssIGNhbGxiYWNrRXJyb3IpXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgIC8vIFxuXG4gICAgLy8gIyBnZXRzIFxuXG4gICAgICAgIGdldE1lbnVTZWxlY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCB7IHJvdXRlU2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGUgICAgICAgICBcbiAgICAgICAgICAgIC8vIGxldCBtZW51U2VsZWN0ID0gKDxEcm9wRG93bk1lbnUgdmFsdWU9e3JvdXRlU2VsZWN0ZWR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZVJvdXRlU2VsZWN0ZWQuYmluZCh0aGlzKX0gPiBcbiAgICAgICAgICAgIC8vICAgICAgICAge3RoaXMuZGlyZWN0aW9uc0Rpc3BsYXkubWFwKChwYXRoOkFycmF5PGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcj4sIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9IHByaW1hcnlUZXh0PXtcIlZlaGljdWxvIG7Dum1lcm8gXCIraW5kZXh9IC8+XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pfVxuICAgICAgICAgICAgLy8gICAgIDwvRHJvcERvd25NZW51PilcbiAgICAgICAgICAgIC8vICAgICBpZiAoIHRoaXMudmVoaWNsZVJvdXRlICE9IHVuZGVmaW5lZCAmJiB0aGlzLnZlaGljbGVSb3V0ZVtyb3V0ZVNlbGVjdGVkXSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygncGF0aDogJywgdGhpcy52ZWhpY2xlUm91dGVbcm91dGVTZWxlY3RlZF0ucGF0aClcbiAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJldHVybiBtZW51U2VsZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0UGF0aHMgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhdGhzID0gbmV3IEFycmF5KClcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zU2VydmljZTpnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpXG4gICAgICAgICAgICAgICAgbGV0IHBhdGhQb2x5bGluZTpBcnJheTxnb29nbGUubWFwcy5Qb2x5bGluZT4gPSBuZXcgQXJyYXkoKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxhY2VzOiBcIix0aGlzLnBsYWNlcylcbiAgICAgICAgICAgICAgICBsZXQgZ2V0RGlyZWN0aW9uczpGdW5jdGlvbltdPVtdXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYXRoOiBcIix0aGlzLnZlaGljbGVSb3V0ZS5wYXRoKVxuICAgICAgICAgICAgICAgIHRoaXMudmVoaWNsZVJvdXRlLnBhdGguZm9yRWFjaCgocG9zTWFya2VyOm51bWJlcixpOm51bWJlcixwYXRoOm51bWJlcltdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaVwiLGkpXG4gICAgICAgICAgICAgICAgICAgIGlmICggaSA+PSAxKXsgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVudHJhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnNEaXNwbGF5LnB1c2gobmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc1ByZU1hcmtlciA9IHBhdGhbaS0xXVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25PcmlnZW4gPSB0aGlzLnBsYWNlc1twb3NQcmVNYXJrZXJdLmdldFBvc2l0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uRGVzdGluYXRlID0gdGhpcy5wbGFjZXNbcG9zTWFya2VyXS5nZXRQb3NpdGlvbigpXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYXQ6IHBvc2l0aW9uT3JpZ2VuLmxhdCgpLCBsbmc6IHBvc2l0aW9uT3JpZ2VuLmxuZygpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYXQ6IHBvc2l0aW9uRGVzdGluYXRlLmxhdCgpLCBsbmc6IHBvc2l0aW9uRGVzdGluYXRlLmxuZygpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS1cIix0aGlzLnBsYWNlc1twYXRoW2ktMV1dLHBhdGhbaS0xXSxcIiAtIFwiLHRoaXMucGxhY2VzW3Bvc01hcmtlcl0scG9zTWFya2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF0aFtpLTFdLFwiIC0gXCIscG9zTWFya2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnZXREaXJlY3Rpb24gPSAgKGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uT3JpZ2VuLHBvc1ByZU1hcmtlcixcIiAtIFwiLHBvc2l0aW9uRGVzdGluYXRlLHBvc01hcmtlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERpcmVjdGlvbihwb3NpdGlvbk9yaWdlbixwb3NpdGlvbkRlc3RpbmF0ZSxkaXJlY3Rpb25zU2VydmljZSx0aGlzLmRpcmVjdGlvbnNEaXNwbGF5W2ktMV0sIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvbHlsaW5lID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBjb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9kZXNpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogJyM0NjgyQjQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDEuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhQb2x5bGluZS5wdXNoKHBvbHlsaW5lKVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGlyZWN0aW9ucy5wdXNoKGdldERpcmVjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0RGlyZWN0aW9uczogXCIsKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldERpcmVjdGlvbnM6IFwiLGdldERpcmVjdGlvbnMpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREaXJlY3Rpb25zID0gZ2V0RGlyZWN0aW9uc1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5nZXREaXJlY3Rpb25zOiBcIix0aGlzLmdldERpcmVjdGlvbnMpXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7cG9zaXRpb25HZXREaXJlY3Rpb246IDB9KVxuICAgICAgICAgICAgICAgIHRoaXMucGF0aHMucHVzaChwYXRoUG9seWxpbmUpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCgpID0+IHt0aGlzLmdldERpcmVjdGlvbnNbMF0oMCl9KVxuICAgICAgICAgICAgdGhpcy5kcmF3UGF0aCgpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZ2V0RGlyZWN0aW9uID0gKHBvc2l0aW9uT3JpZ2VuOiBnb29nbGUubWFwcy5MYXRMbmcsIHBvc2l0aW9uRGVzdGluYXRlOiBnb29nbGUubWFwcy5MYXRMbmcsIGRpcmVjdGlvbnNTZXJ2aWNlOmdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlLCBkaXJlY3Rpb25zRGlzcGxheTogZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyLGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXAgZ2V0RGlyZWN0aW9uOiBcIixwb3NpdGlvbk9yaWdlbixwb3NpdGlvbkRlc3RpbmF0ZSxpbmRleClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUoe1xuICAgICAgICAgICAgICAgIG9yaWdpbjogcG9zaXRpb25PcmlnZW4sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246IHBvc2l0aW9uRGVzdGluYXRlLFxuICAgICAgICAgICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklORyxcbiAgICAgICAgICAgIH0sIChyZXNwb25zZTogZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1Jlc3VsdCwgc3RhdHVzOiBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiggc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zUmVzdWx0cy5wdXNoKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuZ2V0RGlyZWN0aW9uc1tpbmRleCsxXSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdldERpcmVjdGlvbnMgPSB0aGlzLmdldERpcmVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtnZXREaXJlY3Rpb25zW2luZGV4KzFdKGluZGV4KzEpfSwxMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbmRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsYmFja0Vycm9yKClcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdldERpcmVjdGlvbnMgPSB0aGlzLmdldERpcmVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2dldERpcmVjdGlvbnNbaW5kZXhdKGluZGV4KX0sMTUwMDApXG5cbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmdldERpcmVjdGlvbnNbaW5kZXhdKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RE9NTm9kZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBtYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJylcbiAgICAgICAgICAgIHJldHVybiBtYXBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBnZXRNYXJrZXJzID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcmFzZVBsYWNlcygpXG4gICAgICAgICAgICB0aGlzLnBsYWNlcyA9IFtdXG4gICAgICAgICAgICBsZXQgcGxhY2VzID0gdGhpcy5wcm9wcy5wbGFjZXNUb1NlbmRcbiAgICAgICAgICAgIGlmKCFpc051bGxPclVuZGVmaW5lZChwbGFjZXMpICYmIHBsYWNlcy5nZXQoKS5sZW5ndGggPD0gMSl7XG4gICAgICAgICAgICAgcGxhY2VzID0gdGhpcy5wcm9wcy51c2VyLnBsYWNlcyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxldCB7cGxhY2VzfSA9IHRoaXMucHJvcHMudXNlclxuICAgICAgICAgICAgdGhpcy5wbGFjZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlcG9zaXRzID0gcGxhY2VzLmdldERlcG9zaXRzKCksIGNsaWVudHMgPSBwbGFjZXMuZ2V0Q2xpZW50cygpO1xuXG4gICAgICAgICAgICBkZXBvc2l0cy5mb3JFYWNoKChkZXBvc2l0OiBEZXBvc2l0LGk6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIoZGVwb3NpdCBhcyBQbGFjZSlcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBjbGllbnRzLmZvckVhY2goKGNsaWVudDpDbGllbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1hcmtlcihjbGllbnQgYXMgUGxhY2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbnNEaXNwbGF5Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JvdXRlUGxhY2VzKClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BsYWNlcygpXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAvL1xuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHttb2RlQWRkQ2xpZW50LCBtb2RlTGlzdENsaWVudHMsIHZlaGljbGVSb3V0ZSxwbGFjZXNUb1NlbmR9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCBhcnJheVBsYWNlc1Rvc2VuZCA9IChpc051bGxPclVuZGVmaW5lZChwbGFjZXNUb1NlbmQpKSA/IFtdOnBsYWNlc1RvU2VuZC5nZXQoKVxuICAgICAgICBjb25zdCB7ZGlyZWN0aW9uc0Rpc3BsYXksZGlyZWN0aW9uc1Jlc3VsdHN9ID0gdGhpc1xuICAgICAgICBjb25zdCBkaXNwbGF5ID0gKG1vZGVMaXN0Q2xpZW50cykgPyBcIm5vbmVcIjpcImluaGVyaXRcIlxuICAgICAgICBjb25zdCBzZWFyY2hCb3ggPSAobW9kZUFkZENsaWVudCkgPyA8aW5wdXQgaWQ9XCJwYWMtaW5wdXRcIiBjbGFzc05hbWU9XCJjb250cm9sc1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdGhlIGRpcmVjdGlvblwiIC8+Om51bGw7XG4gICAgICAgIGNvbnN0IGhhbGZQYW5lbCA9IChkaXJlY3Rpb25zRGlzcGxheS5sZW5ndGggPiAwICkgPyBcImhhbGZQYW5lbFwiOlwiXCI7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJEaXJlY3Rpb25zUmVzdWx0czogXCIsZGlyZWN0aW9uc1Jlc3VsdHMpXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkaXJlY3Rpb25zRGlzcGxheSBcIixkaXJlY3Rpb25zRGlzcGxheSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkaXJlY3Rpb25zRGlzcGxheS5sZW5ndGggPiAwICwgZGlyZWN0aW9uc1Jlc3VsdHMubGVuZ3RoICwgZGlyZWN0aW9uc0Rpc3BsYXkubGVuZ3RoKVxuXG4gICAgICAgIGlmKGRpcmVjdGlvbnNEaXNwbGF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZXJhc2VQbGFjZXMoKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmlnaHRQYW5lbCA9IChkaXJlY3Rpb25zRGlzcGxheS5sZW5ndGggPiAwICYmIGRpcmVjdGlvbnNSZXN1bHRzLmxlbmd0aCA9PT0gZGlyZWN0aW9uc0Rpc3BsYXkubGVuZ3RoKSA/PGRpdiBpZD1cInJpZ2h0LXBhbmVsXCIgY2xhc3NOYW1lPXtoYWxmUGFuZWx9ID5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSA+XG4gICAgICAgICAgICAgICAgPGNhcHRpb24+RGVzdGlub3M8L2NhcHRpb24+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25zRGlzcGxheS5tYXAoKGRpcmVjdGlvbkRpc3BsYXk6Z29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyLGluZGV4KSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudElOID0gYXJyYXlQbGFjZXNUb3NlbmRbdmVoaWNsZVJvdXRlLnBhdGhbaW5kZXgrMV1dIGFzIENsaWVudDsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NsaWVudElOLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkaXJlY3Rpb25zUmVzdWx0c1tpbmRleF0ucm91dGVzWzBdLmxlZ3NbMF0uZHVyYXRpb24udGV4dH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuXG4gICAgICAgICAgICA8ZGl2ID4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkubWFwKChkaXJlY3Rpb25EaXNwbGF5LGluZGV4KSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZU9yaWdpbiA9IGFycmF5UGxhY2VzVG9zZW5kW3ZlaGljbGVSb3V0ZS5wYXRoW2luZGV4KzFdXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZURlc3RpbmF0ZSA9IGFycmF5UGxhY2VzVG9zZW5kW3ZlaGljbGVSb3V0ZS5wYXRoW2luZGV4XV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiB7bmFtZU9yaWdpbn0sIHRvIHtuYW1lRGVzdGluYXRlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtgcmlnaHQtcGFuZWwtJHtpbmRleH1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSA8L2Rpdj48L2Rpdj46bnVsbCBcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGlkPVwiTWFwXCIgY2xhc3NOYW1lPXtkaXNwbGF5fSA+XG4gICAgICAgICAgICAgICAge3NlYXJjaEJveH1cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFwXCIgLz5cbiAgICAgICAgICAgICAgICB7cmlnaHRQYW5lbH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFwLnRzeCIsImltcG9ydCAqIGFzIEF1dG9zdWdnZXN0IGZyb20gJ3JlYWN0LWF1dG9zdWdnZXN0JztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQge0ZsYXRCdXR0b259IGZyb20gXCJtYXRlcmlhbC11aVwiXG5cbmltcG9ydCB7VXNlcixVc2Vyc30gZnJvbSBcIi4uL2NsYXNzXCJcblxuaW50ZXJmYWNlIENyZWF0ZXtcbiAgICBuYW1lOnN0cmluZ1xuICAgIElEOnN0cmluZ1xufVxuXG50eXBlIFN1Z2dlc3Rpb24gPSBVc2VyfENyZWF0ZVxuIFxuaW50ZXJmYWNlIFByb3Bze1xuICAgIHVzZXJzOlVzZXJzXG4gICAgdXNlclNlbGVjdGVkSUQ6c3RyaW5nXG4gICAgY3JlYXRlVXNlcjogKHVzZXI6VXNlcik9PnZvaWRcbiAgICBzZWxlY3RVc2VyOiAodXNlcjpVc2VyKT0+dm9pZFxufVxuaW50ZXJmYWNlIFN0YXRle1xuICAgIHZhbHVlOnN0cmluZyxcbiAgICBzdWdnZXN0aW9uczpBcnJheTxTdWdnZXN0aW9uPlxufVxuXG5leHBvcnQgY2xhc3MgTWVudVVzZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLFN0YXRlPiB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gKGV2ZW50OmFueSwgeyBuZXdWYWx1ZSB9OmFueSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAgICAgfSk7ICAgICAgXG4gICAgICBpZihuZXdWYWx1ZSA9PSBcIlwiKXtcbiAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RVc2VyKHVuZGVmaW5lZClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0U3VnZ2VzdGlvbnMgPSAodmFsdWU6c3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB7dXNlcnN9ID0gdGhpcy5wcm9wc1xuICAgIFxuICAgICAgbGV0IHVzZXJzRm91bmQgPSB1c2Vycy5zZWFyY2godmFsdWUpXG4gICAgICBsZXQgc3VnZ2VzdGlvbnM6QXJyYXk8VXNlcnxDcmVhdGU+ID0gbmV3IEFycmF5KClcbiAgICAgIHN1Z2dlc3Rpb25zID0gc3VnZ2VzdGlvbnMuY29uY2F0KHVzZXJzRm91bmQpXG4gICAgICBzdWdnZXN0aW9ucy5wdXNoKHtuYW1lOiB2YWx1ZSwgSUQ6XCItMVwifSlcblxuICAgICAgcmV0dXJuIHN1Z2dlc3Rpb25zXG4gICAgfTtcbiAgICBcblxuICAgIGdldFN1Z2dlc3Rpb25WYWx1ZSA9IChzdWdnZXN0aW9uOlN1Z2dlc3Rpb24pID0+IHN1Z2dlc3Rpb24ubmFtZTtcbiAgICBcbiAgICByZW5kZXJTdWdnZXN0aW9uID0gKHN1Z2dlc3Rpb246U3VnZ2VzdGlvbikgPT4ge1xuICAgICAgaWYoc3VnZ2VzdGlvbi5JRCA9PT0gXCItMVwiKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7c3VnZ2VzdGlvbi5uYW1lfTxGbGF0QnV0dG9uIGxhYmVsPVwiQ3JlYXIgVXN1YXJpb1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtzdWdnZXN0aW9uLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgIH07XG5cblxuICAgIG9uU3VnZ2VzdGlvbnNGZXRjaFJlcXVlc3RlZCA9ICh7IHZhbHVlIH06YW55KSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3VnZ2VzdGlvbnM6IHRoaXMuZ2V0U3VnZ2VzdGlvbnModmFsdWUpXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25TdWdnZXN0aW9uc0NsZWFyUmVxdWVzdGVkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN1Z2dlc3Rpb25zOiBbXVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uU3VnZ2VzdGlvblNlbGVjdGVkID0gKGV2ZW50OmFueSx7c3VnZ2VzdGlvbixzdWdnZXN0aW9uVmFsdWUsc3VnZ2VzdGlvbkluZGV4LCBtZXRob2R9OntzdWdnZXN0aW9uOlN1Z2dlc3Rpb24sc3VnZ2VzdGlvblZhbHVlOnN0cmluZyxzdWdnZXN0aW9uSW5kZXg6bnVtYmVyLG1ldGhvZDpzdHJpbmd9KSA9PiB7XG4gICAgICBjb25zdCB7Y3JlYXRlVXNlcixzZWxlY3RVc2VyfSA9IHRoaXMucHJvcHNcbiAgICAgIGlmKHN1Z2dlc3Rpb24uSUQgPT09IFwiLTFcIiAmJiBtZXRob2QgPT09IFwiY2xpY2tcIil7XG4gICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihzdWdnZXN0aW9uLm5hbWUsXCJcIixbXSxbXSlcbiAgICAgICAgICB1c2VyLmNyZWF0ZShjcmVhdGVVc2VyKVxuICAgICAgfWVsc2UgaWYoc3VnZ2VzdGlvbi5JRCAhPT0gXCItMVwiKXtcbiAgICAgICAgICBzZWxlY3RVc2VyKHN1Z2dlc3Rpb24gYXMgVXNlcilcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOnN1Z2dlc3Rpb25WYWx1ZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgc3VnZ2VzdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGNvbnN0IGlucHV0UHJvcHMgPSB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXNjcmliYSBlbCBub21icmUgZGVsIHVzdWFyaW8nLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRvc3VnZ2VzdFxuICAgICAgICAgIHN1Z2dlc3Rpb25zPXtzdWdnZXN0aW9uc31cbiAgICAgICAgICBvblN1Z2dlc3Rpb25zRmV0Y2hSZXF1ZXN0ZWQ9e3RoaXMub25TdWdnZXN0aW9uc0ZldGNoUmVxdWVzdGVkfVxuICAgICAgICAgIG9uU3VnZ2VzdGlvbnNDbGVhclJlcXVlc3RlZD17dGhpcy5vblN1Z2dlc3Rpb25zQ2xlYXJSZXF1ZXN0ZWR9XG4gICAgICAgICAgZ2V0U3VnZ2VzdGlvblZhbHVlPXt0aGlzLmdldFN1Z2dlc3Rpb25WYWx1ZX1cbiAgICAgICAgICByZW5kZXJTdWdnZXN0aW9uPXt0aGlzLnJlbmRlclN1Z2dlc3Rpb259XG4gICAgICAgICAgaW5wdXRQcm9wcz17aW5wdXRQcm9wc31cbiAgICAgICAgICBvblN1Z2dlc3Rpb25TZWxlY3RlZD17dGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWVudVVzZXJzLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUHJvcHR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVGl0bGUgZnJvbSAncmVhY3QtdGl0bGUtY29tcG9uZW50J1xuaW1wb3J0IHsgQXBwQmFyLCBJY29uQnV0dG9uLCBGbGF0QnV0dG9uIH0gZnJvbSAnbWF0ZXJpYWwtdWknXG5pbXBvcnQgeyBzcGFjaW5nLCBnZXRNdWlUaGVtZSB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcydcbi8vaW1wb3J0IHdpdGhXaWR0aCwge01FRElVTSwgTEFSR0V9IGZyb20gJ21hdGVyaWFsLXVpL3V0aWxzL3dpdGhXaWR0aCc7XG5cbmltcG9ydCB7QW50cyxBcHBOYXZEcmF3ZXJ9IGZyb20gXCIuL1wiXG4vL2ltcG9ydCBGdWxsV2lkdGhTZWN0aW9uIGZyb20gJy4vRnVsbFdpZGhTZWN0aW9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbn1cbmludGVyZmFjZSBDb250ZXh0IHtcblxufVxuXG5jbGFzcyBNYXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsQ29udGV4dD57XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIH1cblxuICAgIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgICAgIC8vIHJvdXRlcjogUHJvcHR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfVxuICAgIHN0YXRlID0ge1xuICAgICAgICBuYXZEcmF3ZXJPcGVuOiBmYWxzZSxcbiAgICAgICAgY292ZXJQYWdlVmlzaWJpbGl0eTogdHJ1ZVxuICAgIH1cblxuICAgIGhhbmRsZVRvdWNoVGFwTGVmdEljb25CdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmF2RHJhd2VyT3BlbjogIXRoaXMuc3RhdGUubmF2RHJhd2VyT3BlbixcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VSZXF1ZXN0TmF2RHJhd2VyID0gKG9wZW46Ym9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hdkRyYXdlck9wZW46IG9wZW4sXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlTGlzdCA9IChldmVudDphbnksIHZhbHVlOmFueSkgPT57XG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaCh2YWx1ZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYXZEcmF3ZXJPcGVuOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUNvdmVyUGFnZVZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY292ZXJQYWdlVmlzaWJpbGl0eSB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3ZlclBhZ2VWaXNpYmlsaXR5OiFjb3ZlclBhZ2VWaXNpYmlsaXR5fSlcblxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7ICBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBsZXQgeyBuYXZEcmF3ZXJPcGVuLCBjb3ZlclBhZ2VWaXNpYmlsaXR5IH0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuY29udGV4dC5yb3V0ZXJcbiAgICAgICAgbGV0IGRvY2tlZDpib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGxldCBzaG93TWVudUljb25CdXR0b246Ym9vbGVhbiA9IGZhbHNlOyBcbiAgICAgICAgLy9jb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoKTtcbiAgICAgICAgY29uc3QgY292ZXJQYWdlID0gPEFudHMgLz47XG4gICAgICAgIFxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxUaXRsZSByZW5kZXI9XCJQU09cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QXBwQmFyIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25MZWZ0SWNvbkJ1dHRvblRvdWNoVGFwPXt0aGlzLmhhbmRsZVRvdWNoVGFwTGVmdEljb25CdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJQU09cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246XCJmaXhlZFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHpEZXB0aD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtjb3ZlclBhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDxBcHBOYXZEcmF3ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NrZWQ9e2RvY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdENoYW5nZU5hdkRyYXdlcj17dGhpcy5oYW5kbGVDaGFuZ2VSZXF1ZXN0TmF2RHJhd2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VMaXN0PXt0aGlzLmhhbmRsZUNoYW5nZUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtuYXZEcmF3ZXJPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTWFzdGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IE1hc3RlciBmcm9tICcuL2NvbXBvbmVudHMvTWFzdGVyJztcbmltcG9ydCB7Y3JlYXRlSGFzaEhpc3Rvcnl9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luID0gcmVxdWlyZShcInJlYWN0LXRhcC1ldmVudC1wbHVnaW5cIik7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgZ2V0VGhlbWUgZnJvbSAnLi9zdHlsZXMvbXVpVGhlbWUnO1xuXG4vLyB3aW5kb3cuUmVhY3QgPSBSZWFjdDtcbi8vd2luZG93LlBlcmYgPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtcGVyZicpO1xuXG4vLyByZXF1aXJlKCcuL3N0eWxlcy9tYWluJylcbmluamVjdFRhcEV2ZW50UGx1Z2luKCk7XG5cbnJlbmRlcihcbiAgPE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e2dldFRoZW1lKCl9PlxuICAgPE1hc3RlciAvPlxuICA8L011aVRoZW1lUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==