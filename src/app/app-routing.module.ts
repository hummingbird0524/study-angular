/****************************************************************************************************
 * src/app-routing.module.ts
 *    Angular アプリのルーティングを定義するモジュール
 ****************************************************************************************************/

/* --------------------------------------------------------------------------------------------------
 * import構文
 *    import { インポートするクラス as 別名 } from 'インポート元モジュール';
 * ------------------------------------------------------------------------------------------------ */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasteredComponent } from './mastered/mastered.component';
import { MasteredDetailComponent } from './mastered-detail/mastered-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/* --------------------------------------------------------------------------------------------------
 * 定数定義
 *    const 定数名: 型 = 設定値;
 * ------------------------------------------------------------------------------------------------ */

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},         // ~/dashboard => DashboardComponent
  {path: 'mastered', component: MasteredComponent},           // ~/mastered => MasteredComponent
  {path: 'detail/:id', component: MasteredDetailComponent},   // ~/detail/xx => MasteredDetailComponent
  {path: '', redirectTo: '/dashboard', pathMatch: 'prefix'}   // 上記以外 => ~/dashboard
];

/* --------------------------------------------------------------------------------------------------
 * @NgModule
 *    モジュールの構成情報を宣言するデコレーター
 *    declarations: []  構成要素の宣言               現在のモジュールに属するコンポーネントを宣言
 *    imports: []       他モジュールの読み込み        現在のモジュールで使用する他のモジュールを宣言
 *    exports: []       モジュールの外部公開          外部に公開するモジュールを宣言
 *    providers: []     DI元クラスの登録             利用したいサービスを指定
 *    bootstrap: []     初期起動コンポーネントの設定  アプリで最初に起動するコンポーネントを指定
 * ------------------------------------------------------------------------------------------------ */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/* --------------------------------------------------------------------------------------------------
 * クラス定義
 *    export class クラス名 { }
 *    ※exportを付けると、他クラスから参照(import)可能となる
 * ------------------------------------------------------------------------------------------------ */

export class AppRoutingModule { }
