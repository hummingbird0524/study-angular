/****************************************************************************************************
 * src/message.service.ts
 *    メッセージに関するデータ管理を行うサービス
 ****************************************************************************************************/

/* --------------------------------------------------------------------------------------------------
 * import構文
 *    import { インポートするクラス as 別名 } from 'インポート元モジュール';
 * ------------------------------------------------------------------------------------------------ */

import { Injectable } from '@angular/core';

/* --------------------------------------------------------------------------------------------------
 * @Injectable
 *    コンポーネントに対してサービスを引き渡せることを意味するデコレーター
 *    providedIn:   インスタンス1つに対する単位を指定する(rootの場合、全体で1つのインスタンス)
 * ------------------------------------------------------------------------------------------------ */

@Injectable({
  providedIn: 'root'
})

/* --------------------------------------------------------------------------------------------------
 * クラス定義
 *    export class クラス名 { }
 *    ※exportを付けると、他クラスから参照(import)可能となる
 * ------------------------------------------------------------------------------------------------ */

export class MessageService {
  /* --------------------------------------------------------------------------------------------------
  * フィールド定義
  *    フィールド名: 型名;
  *    ※使用できる主な型は、
  *     ・any       型指定なし
  *     ・number    数値(浮動小数含む)
  *     ・boolean   真偽値
  *     ・string    文字列
  *     ・enum      列挙
  *    ※配列は、型[]／Array<型> で指定
  *    ※タプルは、[型, 型, …]
  * ------------------------------------------------------------------------------------------------ */
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
