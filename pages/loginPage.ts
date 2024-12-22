import { Locator, Page } from "@playwright/test";

export class LoginPage{
    private page:Page; //variable declaration
    private usernameField:Locator; //variable declaration
    private passwordField:Locator;
    private loginButton:Locator;
    constructor(page:Page)
    {//name of this method is constructor or loginpage?
        this.page=page;
        this.usernameField=this.page.locator("input[name='username']");
        this.passwordField=this.page.locator("input[name='password']");
        this.loginButton=this.page.locator("button[type='submit']"); 
        
        

    }
    async goToOrangeHRM(){
        this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async login(username:string,password:string){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}