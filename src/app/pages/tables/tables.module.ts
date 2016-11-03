import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {routing} from "./tables.routing";
import {Tables} from "./tables.component";
import {LinkTables} from "./components/webLinks/linkTables.component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {LinkTablesService} from "./components/webLinks/linkTables.service";
import {AdminUserTables} from "./components/adminUsers/adminUserTables.component";
import {AdminUserTablesService} from "./components/adminUsers/adminUserTables.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Tables,
    AdminUserTables,
    LinkTables,
  ],
  providers: [
    AdminUserTablesService,
    LinkTablesService
  ]
})
export default class TablesModule {
}
