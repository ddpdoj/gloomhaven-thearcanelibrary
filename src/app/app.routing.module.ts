import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'global/scenarios',
    loadChildren: './global/scenarios/scenarios.module#ScenariosModule'
  },
  {
    path: 'global/prosperity',
    loadChildren: './global/prosperity/prosperity.module#ProsperityModule'
  },
  {
    path: 'global/achievements',
    loadChildren: './global/achievements/achievements.module#AchievementsModule'
  },
  {
    path: 'global',
    redirectTo: '/global/scenarios',
    pathMatch: 'full'
  },
  {
    path: 'party',
    loadChildren: './party/party/party.module#PartyModule'
  },
  {
    path: 'utilities/scenario-level',
    loadChildren: './utilities/scenario-level/scenario-level.module#ScenarioLevelModule'
  },
  {
    path: 'utilities/enhancement-calculator',
    loadChildren: './utilities/enhancement-calculator/enhancement-calculator.module#EnhancementCalculatorModule'
  },
  {
    path: 'utilities/monster-health',
    loadChildren: './utilities/monster-health/monster-health.module#MonsterHealthModule'
  },
  {
    path: 'utilities',
    redirectTo: '/utilities/monster-health',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}