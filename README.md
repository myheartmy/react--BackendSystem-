This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



manage 管理

## 项目结构

```
登录

首页

文章管理  Article
	轮播图管理   slideShow-manage
        轮播图列表  slideShow-list
        新增(编辑)轮播图  slideShow-edit
        轮播图回收站  slideShow-recycled
	课程管理 course-manage
        课程管理列表 course-list
        新增(编辑)课程 course-edit
        课程回收站 course-recycled
    教育头条  education-manage
        教育头条列表 education-list
        新增(编辑)教育头条 education-edit
        教育头条回收站 education-recycled
    活动列表  activity
        活动列表  activity-list
        新增(编辑)活动 activity-edit
        活动回收站 activity-recycled
        活动报名信息  activity-registration
    明星教师 StarProfessors
        明星教师列表 StarProfessors-list
        新增(编辑)明星教师  StarProfessors-edit
        明星教师回收站   StarProfessors-recycled

订单管理 order
    订单列表  order-list
    订单详情  order-details

用户管理 user
    用户列表  user-list
    用户编辑详情  user-editDetail
	
财务管理 finance
    财务管理,流水列表  Finance-list     

客服系统 service
    当前会话  current-session
    客户中心   customer-sevice
    工单中心   order-center
    会话统计   session-statistics

设置 Setting
	通用设置  general-setting
	关于我们  about-us
    员工管理  staff
        员工列表  staff-list
        新建编辑员工 staff-edit
    角色管理  character
        角色列表  character-list
        新建/编辑角色  character-edit
    操作日志   ulog
```



