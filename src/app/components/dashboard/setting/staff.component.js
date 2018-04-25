"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var StaffComponent = (function () {
    function StaffComponent() {
        this.roles = ['Doctor', 'Nurse', 'Receptionist', 'Cashier', 'SuperAdmin'];
        this.default = 'SuperAdmin';
    }
    StaffComponent.prototype.ngOnInit = function () {
        this.searchForm = new forms_1.FormGroup({
            role: new forms_1.FormControl(null),
            name: new forms_1.FormControl(null),
            email: new forms_1.FormControl(null)
        });
        this.searchForm.controls['role'].setValue(this.default, { onlySelf: true });
    };
    StaffComponent = __decorate([
        core_1.Component({
            selector: 'staff-component',
            templateUrl: '../../../templates/dashboard/setting/staff.template.html',
        }),
        __metadata("design:paramtypes", [])
    ], StaffComponent);
    return StaffComponent;
}());
exports.StaffComponent = StaffComponent;
//# sourceMappingURL=staff.component.js.map