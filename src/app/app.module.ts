/****************************************************************************************************
 * src/app.module.ts
 *    Angular アプリのルートモジュール
 ****************************************************************************************************/

/* --------------------------------------------------------------------------------------------------
 * import構文
 *    import { インポートするクラス as 別名 } from 'インポート元モジュール';
 * ------------------------------------------------------------------------------------------------ */

// ライブラリーからのインポート(ダイレクト記載)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// ローカルファイルのインポート(相対パス記載)
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasteredComponent } from './mastered/mastered.component';
import { MasteredDetailComponent } from './mastered-detail/mastered-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TechnologyService } from './technology.service';
import { MessageService } from './message.service';

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
  declarations: [
    AppComponent,
    MasteredComponent,
    MasteredDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [                  // 他モジュールの読み込み
    BrowserModule,
    FormsModule,
    AppRoutingModule,                                   // ルーティング定義モジュールをインポート
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [                // DI元クラスの登録
    TechnologyService,
    MessageService
  ],
  bootstrap: [                // 初期起動コンポーネントの設定
    AppComponent
  ]
})

/* --------------------------------------------------------------------------------------------------
 * クラス定義
 *    export class クラス名 { }
 *    ※exportを付けると、他クラスから参照(import)可能となる
 * ------------------------------------------------------------------------------------------------ */

export class AppModule { }
