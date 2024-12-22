import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';


test('Should succesfully login', async ({ page }) => {
  const loginPage=new LoginPage(page);
  const dashboardPage=new DashboardPage(page);
  await loginPage.goToOrangeHRM();
  await loginPage.login("Admin","admin123");
  await expect(dashboardPage.dashboardTitle).toContainText("Dashboard");
});

test('Should not able to login with invalid credentials', async ({ page }) => {
  const loginPage=new LoginPage(page);
  const dashboardPage=new DashboardPage(page);
  await loginPage.goToOrangeHRM();
  await loginPage.login("Admin","admin2123");
  await dashboardPage.validateDashboardPage();
  await expect(dashboardPage.dashboardTitle).not.toBeVisible();
});


