webpackJsonp([4],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base_service__ = __webpack_require__(81);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = (function (_super) {
    __extends(ChatService, _super);
    function ChatService(af, http) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.http = http;
        _this.setChats();
        return _this;
    }
    ChatService.prototype.setChats = function () {
        var _this = this;
        this.af.auth
            .subscribe(function (authState) {
            // if user is logged in
            if (authState) {
                // auth is the user's node (if any)
                _this.chats = _this.af.database.list("/chats/" + authState.auth.uid, {
                    query: {
                        orderByChild: 'timeStamp' // returns in GROWING order (q must be descending, ie the most recent message)
                    }
                }).map(function (chats) {
                    return chats.reverse(); // reverse array order
                }).catch(_this.handleObservableError);
            }
        });
    };
    ChatService.prototype.create = function (chat, userId1, userId2) {
        return this.af.database.object("/chats/" + userId1 + "/" + userId2)
            .set(chat)
            .catch(this.handlePromiseError);
        // chats nodes are composed by the id of the 2 users
    };
    ChatService.prototype.getDeepChat = function (userId1, userId2) {
        return this.af.database.object("/chats/" + userId1 + "/" + userId2)
            .catch(this.handleObservableError);
    };
    ChatService.prototype.updatePhoto = function (chat, chatPhoto, recipientUserPhoto) {
        if (chatPhoto != recipientUserPhoto) {
            // Then you have to update the chat photo.
            return chat.update({
                photo: recipientUserPhoto
            }).then(function () {
                return true;
            }).catch(this.handlePromiseError);
        }
        return Promise.resolve();
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ChatService);
    return ChatService;
}(__WEBPACK_IMPORTED_MODULE_4__base_base_service__["a" /* BaseService */]));

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, username, email, photo) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.photo = photo;
    }
    ;
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_message_model__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_message_message_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatPage = (function () {
    function ChatPage(authService, chatService, messageService, navCtrl, navParams, userService) {
        this.authService = authService;
        this.chatService = chatService;
        this.messageService = messageService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
    }
    ChatPage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.recipient = this.navParams.get('recipientUser'); //receives from parameter in home.ts
        this.pageTitle = this.recipient.name;
        this.userService.currentUser
            .first()
            .subscribe(function (currentUser) {
            _this.sender = currentUser;
            // take the chats for the sender and the recipient
            _this.chat1 = _this.chatService.getDeepChat(_this.sender.$key, _this.recipient.$key);
            _this.chat2 = _this.chatService.getDeepChat(_this.recipient.$key, _this.sender.$key);
            // update user's photo
            if (_this.recipient.photo) {
                _this.chat1
                    .first()
                    .subscribe(function (chat) {
                    _this.chatService.updatePhoto(_this.chat1, chat.photo, _this.recipient.photo);
                });
            }
            var doSubscription = function () {
                _this.messages.subscribe(function (messages) {
                    _this.scrollToBottom();
                });
            };
            var updateSenderReadMessage = function () {
                _this.messages.subscribe(function (message) {
                    message.filter(function (msg) {
                        if ((msg.read == false || msg.read == undefined) && msg.userId != _this.sender.$key) {
                            _this.messageService.setMessageRead(_this.sender.$key, _this.recipient.$key, msg.$key);
                        }
                    });
                });
            };
            var updateRecipientReadMessage = function () {
                _this.messages.subscribe(function (message) {
                    message.filter(function (msg) {
                        if ((msg.read == false || msg.read == undefined) && msg.userId != _this.sender.$key) {
                            _this.messageService.setMessageRead(_this.recipient.$key, _this.sender.$key, msg.$key);
                        }
                    });
                });
            };
            // search for chat messages: (have to see if the user order is right
            // sometimes the sender (id 1) in vdd is the recipient (id 2) and vice versa
            _this.messages = _this.messageService.getMessages(_this.sender.$key, _this.recipient.$key);
            // check if there is any message in this type of chat
            _this.messages
                .first()
                .subscribe(function (messageList) {
                if (messageList.length === 0) {
                    // make the search with the ID's changed order
                    _this.messages = _this.messageService.getMessages(_this.recipient.$key, _this.sender.$key);
                    updateRecipientReadMessage();
                }
                else {
                    // if the chat Node is the first sender ID of the sender
                    updateSenderReadMessage();
                }
                doSubscription();
            });
        });
    };
    ChatPage.prototype.sendMessage = function (newMessage) {
        var _this = this;
        if (newMessage) {
            var currentTimeStamp_1 = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database.ServerValue.TIMESTAMP;
            this.messageService
                .create(// create method parameters
            new __WEBPACK_IMPORTED_MODULE_4__models_message_model__["a" /* Message */](this.sender.$key, newMessage, currentTimeStamp_1, false), this.messages).then(function () {
                //update last message and timestamp of 2 cheats
                _this.chat1
                    .update({
                    lastMessage: newMessage,
                    timeStamp: currentTimeStamp_1
                });
                _this.chat2
                    .update({
                    lastMessage: newMessage,
                    timeStamp: currentTimeStamp_1
                });
            });
        }
    };
    // optional animation duration parameter
    ChatPage.prototype.scrollToBottom = function (duration) {
        var _this = this;
        setTimeout(function () {
            if (_this.content) {
                _this.content.scrollToBottom(duration || 300);
            }
        }, 50);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/pages/chat/chat.html"*/'<ion-header>\n\n  <custom-logged-header [title]="pageTitle" [user]="recipient"></custom-logged-header>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines>\n    \n    <message-box *ngFor="let message of messages | async" [message]="message" \n                  [isFromSender]="(message.userId == sender.$key)" [alreadyRead]="(message.read)">\n                  <!-- If the user id (sender. $ Key) is equal to the id of the message owner (message.userId) then it will return true -->\n    </message-box>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n    <ion-item no-lines>\n      <ion-input type="text" (keyup.enter)="sendMessage(newMessage); newMessage = \'\' "\n                 placeholder="Type here..." [(ngModel)]="newMessage">\n                 <!-- key up detects if pressing enter activates the send msg function -->\n      </ion-input>\n      <button ion-button item-right (click)="sendMessage(newMessage); newMessage = \'\' "> \n        <!-- dps q call function, new message turns an empty string-->\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_message_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user_service__["a" /* UserService */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfilePage = (function () {
    // store the most current photo of the user (which is in the form)
    function UserProfilePage(authService, cd, navCtrl, navParams, userService) {
        this.authService = authService;
        this.cd = cd;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.canEdit = false;
    }
    UserProfilePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    UserProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    UserProfilePage.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault(); // Do not refresh the page
        if (this.filePhoto) {
            var uploadTask_1 = this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key);
            // will hear the status change of this task (when completing)
            // the snapshot is a callback to access the current state of the upload
            uploadTask_1.on('state_changed', function (snapshot) {
                _this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                // divide the amount that has already been sent by the total and multiply by 100 to obtain the percentage
                _this.cd.detectChanges();
                // detect the changes that occurred in the calculation to update the template
            }, function (error) {
                //catch error
            }, function () {
                _this.editUser(uploadTask_1.snapshot.downloadURL); // complete the url
            });
        }
        else {
            this.editUser(); // calls the private function
        }
    };
    UserProfilePage.prototype.onPhoto = function (event) {
        this.filePhoto = event.target.files[0]; // Since you are uploading only 1 photo, we use the index 0
    };
    UserProfilePage.prototype.editUser = function (photoUrl) {
        var _this = this;
        this.userService.edit({
            name: this.currentUser.name,
            username: this.currentUser.username,
            photo: photoUrl || this.currentUser.photo || ''
            // if you have received a new photo, put the new photo, if not, use the old one, if it is not already empty
        }).then(function () {
            _this.canEdit = false; // close the form
            _this.filePhoto = undefined; // resets the attribute
            _this.uploadProgress = 0; // progress bar is 0%;
            _this.cd.detectChanges();
        });
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/pages/user-profile/user-profile.html"*/'<ion-header>\n\n  <custom-logged-header [title]=" \'User Profile\' "></custom-logged-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <user-info [user]="currentUser"></user-info>\n\n  <button ion-button block (click)="canEdit = !canEdit">\n   \n    Edit Profile\n  </button>\n\n  <form (ngSubmit)="onSubmit($event)" *ngIf="canEdit" #profileForm="ngForm">\n  \n    <ion-item>\n      <ion-icon name="person" item-left></ion-icon>\n      <ion-input type="text" placeholder="Name" [(ngModel)]="currentUser.name"\n                 name="name" required minlength="3">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="at" item-left></ion-icon>\n      <ion-input type="text" placeholder="Username" [(ngModel)]="currentUser.username"\n                 name="username" required minlength="3">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="image" item-left></ion-icon>\n      <input type="file" accept="image/*" (change)="onPhoto($event)">\n        </ion-item>\n\n    <progress-bar *ngIf="uploadProgress" [progress]="uploadProgress"></progress-bar>\n    \n    <br/>\n    <button ion-button block type="submit" [disabled]="profileForm.form.invalid">Save</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/pages/user-profile/user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user_service__["a" /* UserService */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		610,
		3
	],
	"../pages/signin/signin.module": [
		612,
		2
	],
	"../pages/signup/signup.module": [
		611,
		1
	],
	"../pages/user-profile/user-profile.module": [
		613,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(userId, text, timeStamp, read) {
        this.userId = userId;
        this.text = text;
        this.timeStamp = timeStamp;
        this.read = read;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(87);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageService = (function (_super) {
    __extends(MessageService, _super);
    function MessageService(http, af) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.af = af;
        return _this;
    }
    MessageService.prototype.getMessages = function (userId1, userId2) {
        return this.af.database.list("/messages/" + userId1 + "-" + userId2, {
            query: {
                orderByChild: 'timeStamp',
                limitToLast: 30 // limits to get the last 30 messages
            }
        }).catch(this.handleObservableError);
    };
    MessageService.prototype.setMessageRead = function (userId1, userId2, messageId) {
        // this.af.database.list (`/ messages / $ {userId1} - $ {userId2} / $ {messageId}`)
        this.af.database.list("/messages/" + userId1 + "-" + userId2)
            .update(messageId, {
            read: true
        });
    };
    MessageService.prototype.create = function (message, listMessages) {
        return listMessages.push(message)
            .catch(this.handlePromiseError);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFire */]])
    ], MessageService);
    return MessageService;
}(__WEBPACK_IMPORTED_MODULE_3__base_base_service__["a" /* BaseService */]));

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_signin_signin__ = __webpack_require__(95);

// import { App } from 'ionic-angular/components/app/app';
// import { MenuController } from 'ionic-angular/components/app/menu-controller';
var baseComponent = (function () {
    /*  You can use this component within a menu or page header
         Well, take the current navigation (ngOnInit) */
    function baseComponent(alertCtrl, authService, app, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.app = app;
        this.menuCtrl = menuCtrl;
    }
    baseComponent.prototype.ngOnInit = function () {
        // this.navCtrl = this.app.getActiveNav(); // receives the used navController
        this.navCtrl = this.app.getActiveNavs()[0];
    };
    baseComponent.prototype.onLogOut = function () {
        var _this = this;
        this.alertCtrl.create({
            message: "Do you wanna quit?",
            buttons: [
                {
                    text: "Yes",
                    handler: function () {
                        _this.authService.logOut()
                            .then(function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_signin_signin__["a" /* SigninPage */]);
                            _this.menuCtrl.enable(false, 'user-menu');
                        });
                    }
                },
                { text: "No" }
            ]
        }).present(); // show the alert
    };
    return baseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(280);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_capitalize_capitalize__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_chat_chat_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_custom_logged_header_custom_logged_header_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_message_box_message_box_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_message_message_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_progress_bar_progress_bar_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signin_signin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_info_user_info_component__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_menu_user_menu_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_user_user_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_user_profile_user_profile__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 //importa o firebase app config
















var firebaseAppConfig = {
    apiKey: "AIzaSyD6hBifmAuDZWHcjQch5MrTRv70e_cQrpo",
    authDomain: "fir-chat-c9b65.firebaseapp.com",
    databaseURL: "https://fir-chat-c9b65.firebaseio.com",
    storageBucket: "fir-chat-c9b65.appspot.com",
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["d" /* AuthProviders */].Custom,
    method: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["c" /* AuthMethods */].Password
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__pipes_capitalize_capitalize__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_custom_logged_header_custom_logged_header_component__["a" /* CustomLoggedHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__components_message_box_message_box_component__["a" /* MessageBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__components_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_19__components_user_info_user_info_component__["a" /* UserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_user_menu_user_menu_component__["a" /* UserMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_user_profile_user_profile__["a" /* UserProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["b" /* AngularFireModule */].initializeApp(firebaseAppConfig, firebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_user_profile_user_profile__["a" /* UserProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_chat_chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_message_message_service__["a" /* MessageService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base_service__ = __webpack_require__(81);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService(auth, http) {
        var _this = _super.call(this) || this;
        _this.auth = auth;
        _this.http = http;
        return _this;
    }
    AuthService.prototype.createAuthUser = function (user) {
        // function with parameter user object, return a firebase promise of type firebaseauthstate
        // create an authentication user with the Angular Fire Auth service
        return this.auth.createUser(user)
            .catch(this.handlePromiseError);
    };
    AuthService.prototype.signInWithEmail = function (user) {
        return this.auth.login(user)
            .then(function (authState) {
            return authState != null; // returns true if authState is other than null (ie, logout)
        })
            .catch(this.handlePromiseError);
    };
    AuthService.prototype.logOut = function () {
        return this.auth.logout();
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.auth
                    .first() // just get the first change
                    .subscribe(function (authState) {
                    // (authState) ? resolve(true) : reject(false); // if authState is true, returns true
                    (authState) ? resolve(true) : reject(Error); // if authState is true, returns true
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}(__WEBPACK_IMPORTED_MODULE_4__base_base_service__["a" /* BaseService */]));

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base_service__ = __webpack_require__(81);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(af, // injects the angular fire to be able to mess with the real time
        // @Inject (FirebaseApp) public firebaseApp: FirebaseApp, // firebaseApp is of type any but the type of instance is to look in dependence on FirebaseApp
        firebaseApp, // firebaseApp is of type any but the type of the instance is to look for dependency of the FirebaseApp
        http) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.firebaseApp = firebaseApp;
        _this.http = http;
        // this.users = this.af.database.list(`/users`);
        _this.listenAuthState();
        return _this;
    }
    UserService.prototype.listenAuthState = function () {
        var _this = this;
        this.af.auth.subscribe(function (authState) {
            if (authState) {
                _this.currentUser = _this.af.database.object("/users/" + authState.auth.uid);
                _this.setUsers(authState.auth.uid);
                // atribui o usuario logado ao current user
            }
        });
    };
    UserService.prototype.setUsers = function (uidToExclude) {
        this.users = this.af.database.list("/users", {
            query: {
                orderByChild: 'name' // order by name
            }
        }).map(function (users) {
            return users.filter(function (user) { return user.$key == uidToExclude; });
            // will only catch users who do not have the same id as the current user (uid to exclude0)
        });
    };
    UserService.prototype.create = function (user, userUniqueId) {
        // The create function has the user parameter of type User (folder models) and returns a firebase.promise EMPTY (void)
        // return this.users.push (user); // the users attribute is a listing of the '/ users' node. The push method is to add
        // If the path does not exist (from the parameter below), it will set (.set ()) the user in that path (not to duplicate)
        return this.af.database.object("/users/" + userUniqueId)
            .set(user)
            .catch(this.handlePromiseError);
    };
    UserService.prototype.edit = function (user) {
        return this.currentUser
            .update(user)
            .catch(this.handlePromiseError);
    };
    UserService.prototype.userExists = function (username) {
        return this.af.database.list("/users", {
            query: {
                orderByChild: 'username',
                equalTo: username // that is equal to the username passed
            }
        }).map(function (users) {
            return users.length > 0; // if the users array is greater than 0, it returns TRUE, if not, FALSE
        }).catch(this.handleObservableError); // Error handling with BaseService handleObservableError method
        // return null;
    };
    UserService.prototype.emailAlreadyInUse = function (email) {
        return this.af.database.list("/users", {
            query: {
                orderByChild: 'email',
                equalTo: email // that is equal to the last username
            }
        }).map(function (users) {
            return users.length > 0; // if the users array is greater than 0, it returns TRUE, if not, FALSE
        }).catch(this.handleObservableError); // Error handling with BaseService handleObservableError method
        // return null;
    };
    UserService.prototype.getUser = function (userId) {
        return this.af.database.object("/users/" + userId)
            .catch(this.handleObservableError);
    };
    UserService.prototype.uploadPhoto = function (photoFile, userId) {
        // I could get the userId by this.currentUser. $ key
        return this.firebaseApp
            .storage()
            .ref() // if left here it would store in root
            .child("/ users/" + userId) // stores in the users node with the key userId
            .put(photoFile); // the parameter is the file that will be stored
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3_angularfire2__["e" /* FirebaseApp */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */]) === "function" && _a || Object, Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _b || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_4__base_base_service__["a" /* BaseService */]));

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
var Chat = (function () {
    // não passa no construtor pq esse $key é gerado automaticamente no firebase e ia dar conflito na hora de criar o chat
    function Chat(lastMessage, timeStamp, title, photo) {
        this.lastMessage = lastMessage;
        this.timeStamp = timeStamp;
        this.title = title;
        this.photo = photo;
    }
    return Chat;
}());

//# sourceMappingURL=chat.model.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, onlyFirst) {
        // return value.toLowerCase();
        if (onlyFirst) {
            return value.charAt(0).toUpperCase() + value.substr(1);
        }
        var words = value.split(' ');
        var final = '';
        words.forEach(function (value, index, words) {
            final += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' ';
        });
        return final;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
            name: 'capitalize',
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomLoggedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(152);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomLoggedHeaderComponent = (function (_super) {
    __extends(CustomLoggedHeaderComponent, _super);
    function CustomLoggedHeaderComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CustomLoggedHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */])
    ], CustomLoggedHeaderComponent.prototype, "user", void 0);
    CustomLoggedHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'custom-logged-header',template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/components/custom-logged-header/custom-logged-header.component.html"*/'<ion-navbar>\n    <button ion-button menuToggle="user-menu">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  <ion-title>\n\n    <ion-item detail-none no-lines color="transparent" *ngIf="user; else titleTemplate">\n      \n      <ion-avatar item-start>\n        <img [src]="user.photo || \'assets/imgs/no-photo.jpg\' ">\n      </ion-avatar>\n      {{ title }}\n    </ion-item>\n\n    <ng-template #titleTemplate>\n      {{ title }}\n    </ng-template>\n  \n  </ion-title>\n\n  <ion-buttons end>\n    <button ion-button icon-only (click)="onLogOut()">\n      <ion-icon name="exit"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-navbar>'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/components/custom-logged-header/custom-logged-header.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */]])
    ], CustomLoggedHeaderComponent);
    return CustomLoggedHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_component__["a" /* baseComponent */]));

//# sourceMappingURL=custom-logged-header.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message_model__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* no host fica tipo assim
  <message-box [style.justify-content]="flex-start"> </message-box>
*/
var MessageBoxComponent = (function () {
    function MessageBoxComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_message_model__["a" /* Message */])
    ], MessageBoxComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MessageBoxComponent.prototype, "isFromSender", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MessageBoxComponent.prototype, "alreadyRead", void 0);
    MessageBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'message-box',template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/components/message-box/message-box.component.html"*/' <div class="text" [ngClass]="{\'sender-background\' : isFromSender}">\n  <p>{{ message.text }}</p>\n  <!-- <p class="timestamp"> {{ message.timeStamp | date:\'dd/MM/y H:mm\' }}</p> -->\n  <p class="timestamp" > {{ message.timeStamp | date: \'HH:mm\' }}\n    <ion-icon class="primeiro-icone" name="md-checkmark" [ngClass]="{\'ja-leu\' : alreadyRead}" *ngIf="isFromSender"></ion-icon>\n    <ion-icon class="segundo-icone" name="md-checkmark" [ngClass]="{\'ja-leu\' : alreadyRead}" *ngIf="isFromSender"></ion-icon>\n  </p>\n\n \n</div>'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/components/message-box/message-box.component.html"*/,
            host: {
                // can take properties in the element and make input property (placing a style (class) conditionally)
                '[style.justify-content]': '((!isFromSender) ? "flex-start" : "flex-end")',
            }
        }),
        __metadata("design:paramtypes", [])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());

//# sourceMappingURL=message-box.component.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { FirebaseAuthState } from 'angularfire2/auth';
var MyApp = (function () {
    function MyApp(authService, platform, statusBar, splashScreen, userService) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        authService.auth.subscribe(function (authState) {
            if (authState) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                userService.currentUser.subscribe(function (user) {
                    _this.currentUser = user; // receives the user who is currently logged in
                });
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
            }
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/app/app.html"*/'<ion-menu [content]="minhaNav" enabled="false" id="user-menu" persistent="false">\n    <user-menu [user]="currentUser">\n\n    </user-menu>\n</ion-menu>\n\n<ion-nav #minhaNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user_service__["a" /* UserService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/components/progress-bar/progress-bar.component.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    <!--  width increases as the number of progress increases\n        and will increase percentage because of the concatenation (%) -->\n    {{ progress }}%\n  </div>\n</div>'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/components/progress-bar/progress-bar.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoComponent = (function () {
    function UserInfoComponent() {
        this.isMenu = false;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */])
    ], UserInfoComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UserInfoComponent.prototype, "isMenu", void 0);
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-info',template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/components/user-info/user-info.component.html"*/'<div *ngIf="user">\n  <ion-avatar [ngClass]="{\'custom-background\': isMenu}">\n    <img class="round" [src]="user.photo || \'assets/imgs/no-photo.jpg\' ">\n  </ion-avatar>\n  <h2 text-center> {{ user.name }}</h2>\n  <p text-center> @{{ user.username }}</p>\n</div>'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/components/user-info/user-info.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());

//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_user_profile_user_profile__ = __webpack_require__(154);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserMenuComponent = (function (_super) {
    __extends(UserMenuComponent, _super);
    function UserMenuComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    UserMenuComponent.prototype.onProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_user_profile_user_profile__["a" /* UserProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('user'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */])
    ], UserMenuComponent.prototype, "currentUser", void 0);
    UserMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-menu',template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/components/user-menu/user-menu.component.html"*/'<ion-content>\n    <!-- takes the attribute of the current user of the user-menu.component and passes of parameter pro user-info-->\n    <user-info [user]="currentUser" [isMenu]="true"></user-info>\n\n    <ion-list no-lines>\n        <button ion-item icon-right detail-none menuClose="user-menu" (click)="onProfile()">\n            Profile\n            <ion-icon name="person" item-right></ion-icon>\n        </button>\n        <button ion-item icon-right detail-none menuClose="user-menu" (click)="onLogOut()">\n            Log Out\n            <ion-icon name="log-out" item-right></ion-icon>\n        </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/components/user-menu/user-menu.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], UserMenuComponent);
    return UserMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_component__["a" /* baseComponent */]));

//# sourceMappingURL=user-menu.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);


var extractError = function (error) {
    // In a real world app, we might use a remote logging infrastructure
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
};
var BaseService = (function () {
    function BaseService() {
    }
    // exporting abstract class that can not be instantiated. It just needs to be INHERITED by other classes!
    BaseService.prototype.handlePromiseError = function (error) {
        return Promise.reject(extractError(error));
    };
    BaseService.prototype.handleObservableError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(extractError(error));
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_chat_model__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_chat_chat_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(authService, chatService, loadingCtrl, menuCtrl, navCtrl, userService) {
        this.authService = authService;
        this.chatService = chatService;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.view = 'chats';
    }
    HomePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.showLoading();
        this.chats = this.chatService.chats;
        this.users = this.userService.users;
        //the users attribute of this page is the same as the attribute of the user service
        this.menuCtrl.enable(true, 'user-menu'); // enable the menu when entering the home page
    };
    HomePage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.onChatCreate = function (recipientUser) {
        var _this = this;
        this.userService.currentUser //has to have the subscribe for being a promise and we are 'listening' to the changes
            .first()
            .subscribe(function (currentUser) {
            _this.chatService.getDeepChat(currentUser.$key, recipientUser.$key) //passes the users UID
                .first()
                .subscribe(function (chat) {
                if (chat.hasOwnProperty('$value')) {
                    // If you have, it does not exist
                    var timestamp = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database.ServerValue.TIMESTAMP; // take the timestamp from the server
                    var chat1 = new __WEBPACK_IMPORTED_MODULE_3__models_chat_model__["a" /* Chat */]('', timestamp, recipientUser.name, (recipientUser.photo || '')); // take the timestamp from the server
                    _this.chatService.create(chat1, currentUser.$key, recipientUser.$key);
                    var chat2 = new __WEBPACK_IMPORTED_MODULE_3__models_chat_model__["a" /* Chat */]('', timestamp, currentUser.name, (currentUser.photo || ''));
                    _this.chatService.create(chat2, recipientUser.$key, currentUser.$key);
                }
            });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */], {
            recipientUser: recipientUser // sends the parameter that is the recipient of the message to the ChatPage page
        });
    };
    HomePage.prototype.onChatOpen = function (chat) {
        var _this = this;
        var recipientUserId = chat.$key; // receives the recipient user ID
        this.userService.getUser(recipientUserId)
            .first()
            .subscribe(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */], {
                recipientUser: user // sends the parameter that is the recipient of the message to the ChatPage page
            });
        });
    };
    HomePage.prototype.filterItems = function (event) {
        var searchTerm = event.target.value;
        this.chats = this.chatService.chats;
        this.users = this.userService.users;
        if (searchTerm) {
            switch (this.view) {
                case 'chats':
                    this.chats = this.chats
                        .map(function (chats) {
                        return chats.filter(function (chat) {
                            // play in small to not have error in comparison
                            // if you return -1 there is no search term
                            return (chat.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                        });
                    });
                    break;
                case 'users':
                    this.users = this.users
                        .map(function (users) {
                        return users.filter(function (user) {
                            // play in small to not have error in comparison
                            // if you return -1 there is no search term
                            return (user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                        });
                    });
                    break;
            }
        }
    };
    HomePage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 200
        });
        loading.present();
        return loading;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/pages/home/home.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title> \n  </ion-navbar>\n-->\n<custom-logged-header [title]="view | capitalize: true"></custom-logged-header>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="view"> <!-- this ng model will show which of the 2 tabs will show-->\n      <ion-segment-button value="chats">\n        Chats\n      </ion-segment-button>\n      <ion-segment-button value="users">\n        Users\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="filterItems($event)"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div [ngSwitch]="view">  <!-- the ng switch will stay listening to the ng model VIEW-->\n\n    <ion-list no-lines *ngSwitchCase=" \'chats\' "> <!-- if the view is CHATS-->\n      <button ion-item *ngFor="let chat of chats | async" (click)="onChatOpen(chat)">\n        <ion-avatar item-start>\n          <img [src]="chat.photo || \'assets/imgs/no-photo.jpg\'">\n        </ion-avatar>\n        <h2>{{ chat.title }}</h2>\n        <!-- if c.lastMessage is FALSE, it drops into else, which will call the element below (through #) -->\n        <!-- <p *ngIf="chat.lastMessage; else customMessage"> {{ chat.timeStamp | date: \'dd/MM/yyyy HH:mm\'}} - {{ chat.lastMessage }}</p>\n        <ng-template #customMessage>\n          <p>No messages.</p>\n        </ng-template> -->\n        <p *ngIf="chat.lastMessage"> {{ chat.timeStamp | date: \'dd/MM/yyyy HH:mm\'}} - {{ chat.lastMessage }}</p>\n        <p *ngIf="!chat.lastMessage">No messages.</p>\n      </button>\n    </ion-list>\n    <ion-list no-lines *ngSwitchCase=" \'users\' "> <!-- if the view is USERS -->\n      <!-- the pipe (| async) is to expect to return the server\'s observable response  -->\n      <button ion-item *ngFor="let user of users | async" (click)="onChatCreate(user)">\n        <ion-avatar item-left>\n          <img [src]="user.photo || \'assets/imgs/no-photo.jpg\'">\n        </ion-avatar>\n        {{user.name}} \n      </button> \n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_chat_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user_service__["a" /* UserService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { User } from '../../models/user.model';

// import { emailValidator } from '../../validators/email';
var SignupPage = (function () {
    function SignupPage(alertCtrl, authService, // service de criação de usuario de autenticação
        formBuilder, // para trabalhar com formulário
        loadingCtrl, // mostrar o loading
        navCtrl, navParams, userService) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.checkingEmail = true;
        // variavel com a expressão regular de validação de e-mail
        // let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.signupForm = this.formBuilder.group({
            // o primeiro item do array é o valor inicial, o segundo é o array de validators
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            // email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)]), emailValidator.checkEmail ], // validator tem q ser obrigatório E seguir a expressão regular do emailRegex
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
        });
    }
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        // para pegar os atributos do formulario: this.signupForm.value (retorna o objeto inteiro)
        // let user: User = this.signupForm.value; não é mais do tipo User pq tirou a senha do model
        var formUser = this.signupForm.value;
        var username = formUser.username;
        this.userService.userExists(username) // retorna um observable
            .first() // recebe o primeiro valor recebido pelo observable, o resto será ignorado
            .subscribe(function (userExists) {
            if (!userExists) {
                _this.authService.createAuthUser({
                    // cria o objeto de usuario para criar um usuário de autenticação no service Auth
                    email: formUser.email,
                    password: formUser.password,
                }).then(function (authState) {
                    //depois de cadastrar o usuário de autenticação:
                    // pra não ter que passar o atributo PASSWORD do objeto formUser, tem q deletar este atributo
                    delete formUser.password;
                    // tem q adicionar o uid (id Único) criado na criação de usuário de autenticação (funçao createAuthUser)
                    // formUser.uid = authState.auth.uid;
                    var userUniqueId = authState.auth.uid;
                    _this.userService.create(formUser, userUniqueId) // cria usuario (nó no database)
                        .then(function () {
                        loading.dismiss();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                    }).catch(function (error) {
                        loading.dismiss();
                        _this.showAlert(error);
                    });
                }).catch(function (error) {
                    loading.dismiss();
                    _this.showAlert(error);
                });
            }
            else {
                _this.showAlert("Username already in use! Pick another one.");
                loading.dismiss();
            }
        });
    };
    SignupPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        return loading;
    };
    SignupPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['Ok']
        }).present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1 text-center>\n    <ion-icon name="person-add" color="primary" class="auth-icon"></ion-icon>\n  </h1>\n\n \n  <form (ngSubmit)="onSubmit()" [formGroup]="signupForm">\n  \n    <ion-item [class.invalid]="!signupForm.controls.name.valid && signupForm.controls.name.dirty">\n      <ion-icon [class.invalid-icon]="!signupForm.controls.name.valid && signupForm.controls.name.dirty" name="person" item-left color="primary"></ion-icon>\n      <ion-input type="text" placeholder="Name" formControlName="name"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls.name.valid  && signupForm.controls.name.dirty">\n      <p class="invalid-icon" *ngIf="signupForm.controls.name.errors.required">Please enter a valid name.</p>\n      <p class="invalid-icon" *ngIf="signupForm.controls.name.errors.minlength">Your name must have at least 3 characteres</p>\n    </ion-item>\n    \n    <ion-item [class.invalid]="!signupForm.controls.username.valid && signupForm.controls.username.dirty">\n      <ion-icon [class.invalid-icon]="!signupForm.controls.username.valid && signupForm.controls.username.dirty" name="at" item-left color="primary"></ion-icon>\n      <ion-input type="text" placeholder="Username" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls.username.valid  && (signupForm.controls.username.dirty || signupForm.controls.username.touched)">\n      <p class="invalid-icon" *ngIf="signupForm.controls.username.errors.required">Please enter a valid username.</p>\n      <p class="invalid-icon" *ngIf="signupForm.controls.username.errors.minlength">Your username must have at least 3 characteres.</p>\n    </ion-item>\n    \n    <ion-item [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty">\n      <ion-icon [class.invalid-icon]="!signupForm.controls.email.valid && signupForm.controls.email.dirty" name="mail" item-left color="primary"></ion-icon>\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input> \n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls.email.valid && (signupForm.controls.email.dirty || signupForm.controls.email.touched)">\n      <p class="invalid-icon" *ngIf="!signupForm.controls.email.pending">Please enter a valid email.</p>\n    </ion-item>\n \n    \n    <ion-item [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty">\n      <ion-icon [class.invalid-icon]="!signupForm.controls.password.valid && signupForm.controls.password.dirty" name="lock" item-left color="primary"></ion-icon>\n      <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!signupForm.controls.password.valid  && (signupForm.controls.password.dirty || signupForm.controls.password.touched)">\n      <p class="invalid-icon" *ngIf="signupForm.controls.password.errors.required">Please enter a valid password.</p>\n      <p class="invalid-icon" *ngIf="signupForm.controls.password.errors.minlength">Your password must have at least 6 characters.</p>\n    </ion-item>\n    <br>\n\n    <button ion-button full type="submit" [disabled]="signupForm.invalid">Create Account</button>\n     \n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user_service__["a" /* UserService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninPage = (function () {
    function SigninPage(alertCtrl, authService, formBuilder, loadingCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signinForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]]
        });
    }
    SigninPage.prototype.onSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading(); // return o loading
        var user = this.signinForm.value;
        this.authService.signInWithEmail(user)
            .then(function (isLogged) {
            if (isLogged) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                loading.dismiss();
            }
        })
            .catch(function (er) {
            loading.dismiss();
            _this.showAlert(er);
        });
    };
    SigninPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        return loading;
    };
    SigninPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['Ok']
        }).present();
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/surendra/Desktop/ionic/firebase-chat/src/pages/signin/signin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1 text-center>\n    <ion-icon name="chatboxes" color="primary" class="auth-icon"></ion-icon>\n  </h1>\n\n  <form (ngSubmit)="onSubmit()" [formGroup]="signinForm">\n  \n    <ion-item>\n      <ion-icon name="mail" item-left color="primary"></ion-icon>\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="lock" item-left color="primary"></ion-icon>\n      <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n    </ion-item>\n    <br>\n\n    <button ion-button full type="submit" [disabled]="signinForm.invalid">Log in</button>\n    \n  </form>\n  \n  <button ion-button full clear text-center (click)="onSignUp()">Sign Up</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/surendra/Desktop/ionic/firebase-chat/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.js.map