/*
* @Author: lhl
* @Date:   2018-05-06 16:09:16
* @Last Modified by:   lhl
* @Last Modified time: 2018-05-07 02:09:57
*/

'use strict';

//系统菜单结构
let menuData={
    "entity": null,
    "childs": [
        {
            "entity": {
                "id": 1,
                "parentMenuId": 0,
                "name": "systemManage",
                "icon": "el-icon-setting\r\n",
                "alias": "系统管理",
                "state": "ENABLE",
                "sort": 0,
                "menu": null,
                "type": "NONE",
                "discription": "用于系统管理的菜单",
                "createUserId": 1
            },
            "childs": [
                {
                    "entity": {
                        "id": 2,
                        "parentMenuId": 1,
                        "name": "authManage",
                        "icon": "el-icon-loading",
                        "alias": "权限管理",
                        "state": "ENABLE",
                        "sort": 0,
                        "menu": "/test1",
                        "type": "LINK",
                        "discription": "用于权限管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 3,
                        "parentMenuId": 1,
                        "name": "roleManage",
                        "icon": "el-icon-bell",
                        "alias": "角色管理",
                        "state": "ENABLE",
                        "sort": 1,
                        "menu": "/test2",
                        "type": "LINK",
                        "discription": "用于角色管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 4,
                        "parentMenuId": 1,
                        "name": "menuManage",
                        "icon": "el-icon-edit",
                        "alias": "菜单管理",
                        "state": "ENABLE",
                        "sort": 2,
                        "menu": "/test3",
                        "type": "LINK",
                        "discription": "用于菜单管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 5,
                        "parentMenuId": 1,
                        "name": "groupManage",
                        "icon": "el-icon-mobile-phone\r\n",
                        "alias": "分组管理",
                        "state": "ENABLE",
                        "sort": 3,
                        "menu": "/test4",
                        "type": "LINK",
                        "discription": "用于分组管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 6,
                        "parentMenuId": 6,
                        "name": "accountManage",
                        "icon": "el-icon-phone-outline\r\n",
                        "alias": "等级管理",
                        "state": "ENABLE",
                        "sort": 0,
                        "menu": "",
                        "type": "NONE",
                        "discription": "用于帐号管理的菜单",
                        "createUserId": 1
                    },
                    "childs": [
                        {
                            "entity": {
                                "id": 7,
                                "parentMenuId": 7,
                                "name": "emailManage",
                                "icon": "el-icon-sold-out\r\n",
                                "alias": "等级设定",
                                "state": "ENABLE",
                                "sort": 0,
                                "menu": "/test5",
                                "type": "LINK",
                                "discription": "用于邮箱管理的菜单",
                                "createUserId": 1
                            },
                            "childs": null
                        },
                        {
                            "entity": {
                                "id": 8,
                                "parentMenuId": 7,
                                "name": "passManage",
                                "icon": "el-icon-service\r\n",
                                "alias": "等级修改",
                                "state": "ENABLE",
                                "sort": 1,
                                "menu": "/test6",
                                "type": "LINK",
                                "discription": "用于密码管理的菜单",
                                "createUserId": 1
                            },
                            "childs": null
                        }
                    ]
                },
                {
                    "entity": {
                        "id": 9,
                        "parentMenuId": 6,
                        "name": "accountManage",
                        "icon": "el-icon-phone-outline\r\n",
                        "alias": "会员管理",
                        "state": "ENABLE",
                        "sort": 0,
                        "menu": "",
                        "type": "NONE",
                        "discription": "用于帐号管理的菜单",
                        "createUserId": 1
                    },
                    "childs": [
                        {
                            "entity": {
                                "id": 10,
                                "parentMenuId": 7,
                                "name": "emailManage",
                                "icon": "el-icon-sold-out\r\n",
                                "alias": "初级会员",
                                "state": "ENABLE",
                                "sort": 0,
                                "menu": "/content/email",
                                "type": "LINK",
                                "discription": "用于邮箱管理的菜单",
                                "createUserId": 1
                            },
                            "childs": null
                        },
                        {
                            "entity": {
                                "id": 11,
                                "parentMenuId": 7,
                                "name": "passManage",
                                "icon": "el-icon-service\r\n",
                                "alias": "中级会员",
                                "state": "ENABLE",
                                "sort": 1,
                                "menu": "/content/pass",
                                "type": "LINK",
                                "discription": "用于密码管理的菜单",
                                "createUserId": 1
                            },
                            "childs": null
                        }
                    ]
                },
                {
                    "entity": {
                        "id": 11,
                        "parentMenuId": 6,
                        "name": "accountManage",
                        "icon": "el-icon-phone-outline\r\n",
                        "alias": "信息管理",
                        "state": "ENABLE",
                        "sort": 0,
                        "menu": "",
                        "type": "NONE",
                        "discription": "用于帐号管理的菜单",
                        "createUserId": 1
                    },
                    "childs": [
                        {
                            "entity": {
                                "id": 13,
                                "parentMenuId": 7,
                                "name": "emailManage",
                                "icon": "el-icon-sold-out\r\n",
                                "alias": "账号信息",
                                "state": "ENABLE",
                                "sort": 0,
                                "menu": "/content/email",
                                "type": "LINK",
                                "discription": "用于邮箱管理的菜单",
                                "createUserId": 1
                            },
                            "childs": null
                        },
                        {
                            "entity": {
                                "id": 14,
                                "parentMenuId": 7,
                                "name": "passManage",
                                "icon": "el-icon-service\r\n",
                                "alias": "安全信息",
                                "state": "ENABLE",
                                "sort": 1,
                                "menu": "/content/pass",
                                "type": "LINK",
                                "discription": "用于密码管理的菜单",
                                "createUserId": 1
                            },
                            "childs": null
                        }
                    ]
                },
            ]
        },
        {
            "entity": {
                "id": 15,
                "parentMenuId": 0,
                "name": "userManage",
                "icon": "el-icon-news",
                "alias": "用户管理",
                "state": "ENABLE",
                "sort": 1,
                "menu": null,
                "type": "NONE",
                "discription": "用于用户管理的菜单",
                "createUserId": 1
            },
            "childs": [
                {
                    "entity": {
                        "id": 16,
                        "parentMenuId": 6,
                        "name": "accountManage",
                        "icon": "el-icon-phone-outline\r\n",
                        "alias": "帐号管理",
                        "state": "ENABLE",
                        "sort": 0,
                        "menu": "",
                        "type": "NONE",
                        "discription": "用于帐号管理的菜单",
                        "createUserId": 1
                    },
                    "childs": [
                        {
                            "entity": {
                                "id": 17,
                                "parentMenuId": 7,
                                "name": "emailManage",
                                "icon": "el-icon-sold-out\r\n",
                                "alias": "邮箱管理",
                                "state": "ENABLE",
                                "sort": 0,
                                "menu": "/content/email",
                                "type": "LINK",
                                "discription": "用于邮箱管理的菜单",
                                "createUserId": 1
                            },
                            "childs": null
                        },
                        {
                            "entity": {
                                "id": 18,
                                "parentMenuId": 7,
                                "name": "passManage",
                                "icon": "el-icon-service\r\n",
                                "alias": "密码管理",
                                "state": "ENABLE",
                                "sort": 1,
                                "menu": "/content/pass",
                                "type": "LINK",
                                "discription": "用于密码管理的菜单",
                                "createUserId": 1
                            },
                            "childs": null
                        }
                    ]
                },
                {
                    "entity": {
                        "id": 19,
                        "parentMenuId": 6,
                        "name": "integralManage",
                        "icon": "el-icon-picture",
                        "alias": "积分管理",
                        "state": "ENABLE",
                        "sort": 1,
                        "menu": "/user/integral",
                        "type": "LINK",
                        "discription": "用于积分管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                }
            ]
        },
        {
            "entity": {
                "id": 20,
                "parentMenuId": 0,
                "name": "contentManage",
                "icon": "el-icon-rank",
                "alias": "内容管理",
                "state": "ENABLE",
                "sort": 2,
                "menu": null,
                "type": "NONE",
                "discription": "用于内容管理的菜单",
                "createUserId": 1
            },
            "childs": [
                {
                    "entity": {
                        "id": 21,
                        "parentMenuId": 9,
                        "name": "classifyManage",
                        "icon": "el-icon-printer",
                        "alias": "分类管理",
                        "state": "ENABLE",
                        "sort": 0,
                        "menu": "/content/classify",
                        "type": "LINK",
                        "discription": "用于分类管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 22,
                        "parentMenuId": 9,
                        "name": "articleManage",
                        "icon": "el-icon-star-on",
                        "alias": "文章管理",
                        "state": "ENABLE",
                        "sort": 1,
                        "menu": "/content/article",
                        "type": "LINK",
                        "discription": "用于文章管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                },
                {
                    "entity": {
                        "id": 23,
                        "parentMenuId": 9,
                        "name": "commentManage",
                        "icon": "el-icon-share",
                        "alias": "评论管理",
                        "state": "ENABLE",
                        "sort": 2,
                        "menu": "/content/comment",
                        "type": "LINK",
                        "discription": "用于评论管理的菜单",
                        "createUserId": 1
                    },
                    "childs": null
                }
            ]
        }
    ]
}

module.exports=menuData;