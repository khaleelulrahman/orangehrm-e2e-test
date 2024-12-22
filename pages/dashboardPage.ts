import { Locator, Page, expect } from "@playwright/test";
import { MyloginPage } from "./myloginpage";

export class DashboardPage{
    private page:Page;
    public dashboardTitle:Locator;
    constructor(page:Page){
        this.page=page;
        this.dashboardTitle=this.page.locator("//h6");
    }
    async validateDashboardPage(){
        await expect(this.dashboardTitle).toContainText("Dashboard")
    }
}