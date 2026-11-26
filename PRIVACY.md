# Privacy Policy / 隐私权政策

**ToDo Hub**  
**Effective Date: November 25, 2026**  
**Last Updated: November 25, 2026**

---

## English

### 1. Introduction

ToDo Hub ("the Extension") is a browser extension that provides task management for Google Tasks and Microsoft To Do, a desktop new tab page with website bookmarks, an RSS feed reader, mind map, data dashboard, pomodoro timer, sticky notes, and weather widget. This Privacy Policy explains what data we collect, how we use it, and how we protect your privacy.

Because Microsoft has announced that Microsoft To Do will be discontinued on June 30, 2027, the Extension now supports Google Tasks, with Google accounts as the primary sign-in method; Microsoft accounts remain available until Microsoft's service is shut down. When you sign in with a Google account, the Extension's use of Google APIs complies with the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements (see Section 6).

### 2. Data We Collect

#### 2.1 Google Account Information (User-Initiated, Optional)

When you choose to log in with your Google account, we access the following information through Google OAuth 2.0 authorization and Google's user info endpoints, using the `userinfo.email` and `userinfo.profile` scopes:

- **Email address**
- **Name**
- **Profile picture**

**Purpose:** To authenticate your identity and display your user profile within the extension.

**Storage:** This information is cached locally in your browser (IndexedDB and chrome.storage.local) for offline access.

#### 2.2 Google Tasks Data (User-Initiated, Optional)

When logged in, the extension reads and writes your Google Tasks data through the Google Tasks API (scope `https://www.googleapis.com/auth/tasks`), including:

- Task lists
- Tasks (titles, notes, completion status, due dates, ordering, and parent/child hierarchy)

**Purpose:** To provide task management functionality with cloud synchronization.

**Storage:** Task data is stored locally in IndexedDB for offline access and synchronized bidirectionally with Google Tasks API servers.

#### 2.3 Microsoft Account & To-Do Data (Transitional, User-Initiated, Optional)

Until Microsoft To Do is discontinued, you may still sign in with a Microsoft account. In that case we access your email address, display name, and profile picture through the Microsoft Graph API; if a mobile phone number is returned by the authorization result, it is used only for local profile display. The extension then synchronizes your Microsoft To Do data (todo lists, tasks, and subtasks). The purposes and storage practices are the same as in Sections 2.1 and 2.2.

**Storage:** Cached locally in IndexedDB and chrome.storage.local, and synchronized bidirectionally with Microsoft Graph API servers.

#### 2.4 User Information Sync (User-Initiated, Optional)

Once per day (upon login, or when opening the extension's new tab / desktop pages while logged in), the following user information is synced to our backend server (`api.mstodo.dpdns.org`):

- Email address
- Display name
- Extension version number

**Purpose:** To maintain user records and provide version-specific support. This sync occurs at most once per day and only when you are logged in.

**Data Controller:** The backend server is operated by the extension developer. Data is stored securely, is not shared with third parties, and is not used for advertising, sale, or any purpose unrelated to this section.

#### 2.5 RSS Subscriptions (Local Only, Optional)

RSS feed subscriptions (feed URLs, titles, tags, descriptions) are stored locally in your browser. If you are logged in, they may be synchronized to your task account under a dedicated "Todo-RSS" list (Google Tasks or Microsoft To Do, depending on your sign-in method) for cross-device sync.

#### 2.6 Usage Statistics (Local Only)

The extension tracks anonymous usage statistics locally, including:

- Counts of operations (list/task/subtask creation, editing, deletion, completion)
- API request counts
- Link click counts

**Purpose:** To display a user dashboard with productivity insights.

**Storage:** All statistics are stored exclusively in your local browser storage (chrome.storage.local). **No usage statistics are transmitted to any server.**

#### 2.7 Weather Data (Optional)

If you enable the desktop weather widget, the extension requests weather forecast data directly from the Open-Meteo API (a free, open weather service) using your approximate geographic coordinates (latitude/longitude). City name lookup uses the BigDataCloud reverse-geocode API.

**Purpose:** To display local weather forecasts in the desktop mode top bar.

**Note:** Location coordinates are sent directly to the Open-Meteo and BigDataCloud APIs. We do not collect, store, or process your location data on our servers. Weather data is cached locally in your browser for up to 2 hours to reduce API calls.

#### 2.8 Desktop Mode Data (Local Only, Optional)

Desktop mode stores the following data locally in your browser:

- Bookmark websites (names, URLs, tags, icons, sort order)
- Search engine preferences
- Background image settings
- Widget display preferences (weather, clock, daily quote, pomodoro, sticky notes)
- Idle effect settings (snow, rain, cherry blossom, firefly)

**Storage:** If you are logged in, bookmark websites are synchronized to your task account under a dedicated "Todo-Desktop" list (Google Tasks or Microsoft To Do, depending on your sign-in method) for cross-device sync. All other desktop settings are stored exclusively in your local browser storage.

#### 2.9 Sticky Notes (Local Only, Optional)

Sticky notes (text content and images) are stored locally in your browser using a dedicated IndexedDB database (`StickyNotesDB`). Images are stored as Blob data separately from text.

**Storage:** Sticky notes data never leaves your browser and is not synchronized to any server.

#### 2.10 Pomodoro Timer (Local Only, Optional)

Pomodoro timer state (running status, remaining time, daily completion count) is stored locally in your browser's localStorage.

**Storage:** Pomodoro data never leaves your browser.

#### 2.11 Data Dashboard (Local Only)

The data dashboard displays productivity insights based on your task data. All statistics (overview counts, completion trends, status distribution, list distribution) are computed locally from your IndexedDB data.

**Storage:** Dashboard statistics are computed in real-time from local data and are never transmitted to any server. Task completion logs are stored locally in IndexedDB for trend chart accuracy.

#### 2.12 Version Check (Optional)

When you open the Desktop Settings panel, the desktop mode page sends the current extension version number to our backend server (`api.mstodo.dpdns.org`) to check whether the installed version is still supported (multi-version whitelist comparison). No user identifiers, account information, or other personal data are sent.

**Purpose:** To notify you when a newer version is available so you can update the extension.

**Note:** The version number is not stored on the server for this check. The check is only performed when you open Desktop Settings; no automatic background checks are performed.

### 3. Data We Do NOT Collect

- We do **not** collect your browsing history
- We do **not** read or transmit the content of web pages you visit (the content script only scans for RSS feed `<link>` tags)
- We do **not** access your data in other Google services such as Gmail, Google Calendar, or Google Drive; the extension only requests the Tasks and basic profile scopes described above
- We do **not** collect personal data from children under 13
- We do **not** sell or share your data with third parties for advertising, and we do **not** use Google user data to train artificial intelligence or machine learning models
- We do **not** use your data for any purpose other than those described in this policy

### 4. Permissions Used

| Permission | Purpose |
|---|---|
| `identity` | Google and Microsoft OAuth 2.0 login |
| `storage` | Store tasks, settings, and tokens locally |
| `alarms` | Schedule task due reminders |
| `notifications` | Display task reminder notifications |
| `content_scripts` | Detect RSS feeds on web pages (read-only scan for `<link>` tags only) |

### 5. Third-Party Services

The extension interacts with the following third-party services only when you use corresponding features:

| Service | When | Data Shared |
|---|---|---|
| Google Tasks API (tasks.googleapis.com) | Task sync after Google sign-in | OAuth tokens, task data |
| Google Identity Services (accounts.google.com) | Google login & authorization | OAuth authorization |
| Google user info endpoint | Basic profile retrieval after login | OAuth token (returns email, name, picture) |
| Microsoft Graph API | Microsoft sign-in & task sync (transitional) | OAuth tokens, task data |
| Microsoft Login (login.microsoftonline.com) | Microsoft sign-in | OAuth authorization |
| Open-Meteo API | Weather widget (direct, no proxy) | Geographic coordinates |
| BigDataCloud API | Reverse geocoding (city name lookup) | Geographic coordinates |
| Google Favicon Service | Website icons (via our proxy) | Website domain names |

**Note:** User data obtained through Google APIs is additionally governed by Section 6, "Google API Services User Data Policy & Limited Use".

### 6. Google API Services User Data Policy & Limited Use

**Limited Use disclosure:** ToDo Hub's use and transfer to any other app of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

Specifically, we commit to the following with respect to Google user data:

- We use Google user data only to provide or improve user-facing features that are prominently described in this policy (task management, cross-device sync, and account profile display);
- We do not sell Google user data to third parties;
- We do not use Google user data for advertising purposes, including personalized advertising, retargeting, or audience targeting;
- We do not use Google user data to train or improve generalized/foundational artificial intelligence or machine learning models;
- We do not use Google user data to determine creditworthiness or for lending purposes or related uses;
- We do not allow humans to read Google user data unless: you have given your affirmative consent for specific data, it is necessary for security purposes such as investigating abuse, or it is required by applicable law.

We share Google user data with our backend server only to the extent described in this policy (email address, display name, and extension version number, see Section 2.4), and such sharing is subject to the same Limited Use requirements. For more information on how Google handles data, please refer to the [Google Privacy Policy](https://policies.google.com/privacy).

### 7. Data Security

- OAuth tokens (Google and Microsoft Access Tokens and Refresh Tokens) are stored locally in your browser and are never transmitted to any server other than the corresponding official authentication endpoints and the OAuth proxy worker used to complete the authorization code exchange.
- All API communications use HTTPS encryption.
- Our backend server (`api.mstodo.dpdns.org`) uses HMAC-SHA256 signature verification to ensure request integrity.

### 8. Data Retention & Deletion

- All locally stored data (tasks, tokens, settings, statistics) is stored in your browser and can be deleted at any time by:
  - Uninstalling the extension
  - Using the "Logout" function within the extension (clears local tokens and account information)
  - Clearing browser data for the extension
- You may also revoke the extension's access to your account at any time:
  - Google: visit [Third-party apps & services](https://myaccount.google.com/permissions) in your Google Account and remove ToDo Hub's access; once revoked, we can no longer access your Google user data.
  - Microsoft: visit [Apps and services that can access your data](https://account.live.com/consent/Manage) and remove the authorization.
- Server-side user records (email address, display name, and extension version number) can be deleted by contacting us (see Section 10); we will delete them promptly after verification.

### 9. Changes to This Policy

We may update this Privacy Policy from time to time. Updated versions will be published on the extension's store listing and/or our project repository, together with an updated effective date and last-updated date. If a change affects how Google user data is used, we will provide notice through an in-extension prompt or a store listing announcement before it takes effect.

### 10. Contact

If you have questions about this Privacy Policy or wish to request deletion of your data, please contact us:

- GitHub Issues: https://github.com/cuifuq7/ms-todo-page/issues

---

## 中文

### 1. 引言

ToDo Hub（以下简称"本扩展"）是一款浏览器扩展，提供 Google Tasks 与 Microsoft To Do 任务管理、桌面新标签页（含网站书签导航）、RSS 信息聚合阅读、思维导图、数据看板、番茄钟计时器、便签和天气小组件功能。本隐私权政策说明我们收集哪些数据、如何使用这些数据，以及我们如何保护您的隐私。

由于 Microsoft 已宣布 Microsoft To Do 将于 2027 年 6 月 30 日停止服务，本扩展已完成 Google Tasks 对接，Google 账户为主推登录方式；在微软服务正式关闭前，Microsoft 账户仍可继续使用。当您使用 Google 账户登录时，本扩展对 Google API 的访问遵循 [Google API 服务用户数据政策](https://developers.google.com/terms/api-services-user-data-policy)（含有限使用要求），详见第 6 条。

### 2. 我们收集的数据

#### 2.1 Google 账户信息（用户主动操作，可选）

当您选择使用 Google 账户登录时，我们通过 Google OAuth 2.0 授权与 Google 用户信息接口访问以下信息，对应的授权范围为 `userinfo.email` 与 `userinfo.profile`：

- **电子邮箱地址**
- **姓名**
- **个人头像**

**用途：** 用于身份认证及在扩展内展示您的用户资料。

**存储：** 这些信息缓存在您的浏览器本地（IndexedDB 和 chrome.storage.local），以便离线使用。

#### 2.2 Google Tasks 任务数据（用户主动操作，可选）

登录后，扩展会通过 Google Tasks API（授权范围 `https://www.googleapis.com/auth/tasks`）读写您的 Google Tasks 数据，包括：

- 任务列表
- 任务（标题、备注、完成状态、截止日期、排序以及父子层级/子任务）

**用途：** 提供具有云端同步功能的任务管理服务。

**存储：** 任务数据存储在本地 IndexedDB 中以便离线使用，并与 Google Tasks API 服务器进行双向同步。

#### 2.3 Microsoft 账户与 To-Do 数据（过渡期保留，用户主动操作，可选）

在 Microsoft To Do 停止服务前，您仍可选择使用 Microsoft 账户登录。此时我们通过 Microsoft Graph API 访问您的电子邮箱地址、显示名称与个人头像；若授权结果返回手机号码，该字段仅用于本地资料展示。登录后扩展会同步您的 Microsoft To Do 任务数据（待办列表、任务及子任务）。上述数据的用途与存储方式与 2.1、2.2 相同。

**存储：** 本地缓存在 IndexedDB 与 chrome.storage.local，并与 Microsoft Graph API 服务器双向同步。

#### 2.4 用户信息同步（用户主动操作，可选）

每天一次（登录时，或已登录状态下打开插件的新标签页/桌面页时），以下用户信息会同步到我们的后端服务器（`api.mstodo.dpdns.org`）：

- 电子邮箱地址
- 显示名称
- 扩展版本号

**用途：** 用于维护用户记录和提供版本支持。该同步每天最多执行一次，且仅在您已登录时进行。

**数据控制方：** 后端服务器由扩展开发者运营。数据安全存储，不会与第三方共享，也不会用于广告、出售或与本节所述无关的任何目的。

#### 2.5 RSS 订阅（仅本地，可选）

RSS 订阅数据（订阅源 URL、标题、标签、描述）存储在您的浏览器本地。如果您已登录，这些数据可能会同步到您任务账户中的 "Todo-RSS" 列表下（Google Tasks 或 Microsoft To Do，取决于您的登录方式），以实现跨设备同步。

#### 2.6 使用统计（仅本地）

扩展在本地追踪匿名使用统计，包括：

- 操作次数（列表/任务/子任务的新增、编辑、删除、完成）
- API 请求次数
- 链接点击次数

**用途：** 用于在数据看板中展示您的使用效率洞察。

**存储：** 所有统计数据仅存储在您的浏览器本地存储（chrome.storage.local）中。**不会将任何使用统计数据传输到任何服务器。**

#### 2.7 天气数据（可选）

如果您启用了桌面天气小组件，扩展会直接通过 Open-Meteo API（一个免费的开放天气服务）请求天气预报数据，需要使用您的大致地理坐标（经度/纬度）。城市名称查询使用 BigDataCloud 反向地理编码 API。

**用途：** 用于在桌面模式顶栏显示本地天气预报。

**说明：** 地理坐标直接发送至 Open-Meteo 和 BigDataCloud API。我们不会在我们的服务器上收集、存储或处理您的位置数据。天气数据在浏览器本地缓存最多 2 小时，以减少 API 请求。

#### 2.8 桌面模式数据（仅本地，可选）

桌面模式在浏览器本地存储以下数据：

- 收藏网站（名称、URL、标签、图标、排序）
- 搜索引擎偏好
- 背景图片设置
- 小组件显示偏好（天气、时钟、每日一言、番茄钟、便签）
- 空闲特效设置（雪花、下雨、樱花、萤火虫）

**存储：** 如果您已登录，收藏网站会同步到您任务账户中的「Todo-Desktop」列表下（Google Tasks 或 Microsoft To Do，取决于您的登录方式），以实现跨设备同步。其他所有桌面设置仅存储在您的浏览器本地存储中。

#### 2.9 便签（仅本地，可选）

便签（文本内容和图片）存储在浏览器本地的专用 IndexedDB 数据库（`StickyNotesDB`）中。图片以 Blob 数据形式与文本分离存储。

**存储：** 便签数据不会离开您的浏览器，也不会同步到任何服务器。

#### 2.10 番茄钟（仅本地，可选）

番茄钟计时器状态（运行状态、剩余时间、每日完成次数）存储在浏览器本地的 localStorage 中。

**存储：** 番茄钟数据不会离开您的浏览器。

#### 2.11 数据看板（仅本地）

数据看板基于您的任务数据展示使用效率洞察。所有统计数据（概览计数、完成趋势、状态分布、列表分布）均从 IndexedDB 本地数据实时计算得出。

**存储：** 看板统计数据实时从本地数据计算，不会传输到任何服务器。任务完成日志存储在本地 IndexedDB 中，用于趋势图的精确统计。

#### 2.12 版本检测（可选）

当您打开桌面设置面板时，桌面模式页面会将当前扩展版本号发送至我们的后端服务器（`api.mstodo.dpdns.org`），用于检测当前版本是否仍受支持（多版本白名单比对）。不会发送任何用户标识、账户信息或其他个人数据。

**用途：** 在有新版本可用时提醒您更新扩展。

**说明：** 本次检测不会在服务器存储版本号。检测仅在您打开桌面设置时执行，不会进行任何自动后台检测。

### 3. 我们不收集的数据

- 我们**不**收集您的浏览历史
- 我们**不**读取或传输您访问的网页内容（内容脚本仅扫描 RSS 订阅源的 `<link>` 标签）
- 我们**不**访问您在 Gmail、Google 日历、Google 云端硬盘等其他 Google 服务中的数据，本扩展仅申请 Tasks 与基本资料授权
- 我们**不**收集 13 岁以下儿童的个人数据
- 我们**不**将您的数据出售或分享给第三方用于广告，也不会将 Google 用户数据用于训练人工智能或机器学习模型
- 我们**不**将您的数据用于本政策所述以外的任何目的

### 4. 使用的权限

| 权限 | 用途 |
|---|---|
| `identity` | Google 与 Microsoft OAuth 2.0 登录认证 |
| `storage` | 在本地存储任务、设置和令牌 |
| `alarms` | 安排任务到期提醒 |
| `notifications` | 显示任务提醒通知 |
| `content_scripts` | 在网页上检测 RSS 订阅源（仅只读扫描 `<link>` 标签） |

### 5. 第三方服务

本扩展仅在使用相应功能时与以下第三方服务交互：

| 服务 | 使用时机 | 共享数据 |
|---|---|---|
| Google Tasks API (tasks.googleapis.com) | Google 账户登录后的任务同步 | OAuth 令牌、任务数据 |
| Google 身份服务 (accounts.google.com) | Google 登录与授权 | OAuth 授权信息 |
| Google 用户信息接口 | Google 登录后读取基本资料 | OAuth 令牌（返回邮箱、姓名、头像） |
| Microsoft Graph API | Microsoft 账户登录与任务同步（过渡期） | OAuth 令牌、任务数据 |
| Microsoft 登录 (login.microsoftonline.com) | Microsoft 账户登录时 | OAuth 授权信息 |
| Open-Meteo API | 天气小组件（直连，无代理） | 地理坐标 |
| BigDataCloud API | 反向地理编码（城市名称查询） | 地理坐标 |
| Google Favicon 服务 | 网站图标（通过我们的代理） | 网站域名 |

**说明：** 通过 Google API 获取的用户数据另受第 6 条「Google API 服务用户数据政策与有限使用」约束。

### 6. Google API 服务用户数据政策与有限使用

**有限使用声明：** ToDo Hub 对通过 Google API 获取的信息的使用，以及向任何其他应用传输该等信息的行为，均将遵守 [Google API 服务用户数据政策](https://developers.google.com/terms/api-services-user-data-policy)（Google API Services User Data Policy），包括其中的有限使用（Limited Use）要求。

具体而言，我们对 Google 用户数据作出以下承诺：

- 仅将 Google 用户数据用于提供或改进本政策中明确说明、且用户可见的功能（任务管理、跨设备同步、账户资料展示）；
- 不将 Google 用户数据出售给第三方；
- 不将 Google 用户数据用于广告目的，包括个性化广告、再营销或受众定向；
- 不将 Google 用户数据用于训练或改进通用/基础人工智能或机器学习模型；
- 不将 Google 用户数据用于确定信用度、放贷目的或与之相关的用途；
- 不允许人工读取 Google 用户数据，除非：您对特定数据作出明确同意、出于安全目的（如调查滥用行为）确有必要，或法律强制要求。

我们仅在本政策明确说明的范围内与我们的后端服务器共享 Google 用户数据（电子邮箱地址、显示名称、扩展版本号，见第 2.4 条），该等共享同样受上述有限使用要求约束。更多关于 Google 如何处理数据的信息，请参阅 [Google 隐私权政策](https://policies.google.com/privacy)。

### 7. 数据安全

- OAuth 令牌（Google 与 Microsoft 的 Access Token、Refresh Token）存储在您的浏览器本地，除对应的官方认证端点及用于完成授权码交换的 OAuth 代理 Worker 外，不会传输到任何其他服务器。
- 所有 API 通信均使用 HTTPS 加密。
- 我们的后端服务器（`api.mstodo.dpdns.org`）使用 HMAC-SHA256 签名验证来确保请求完整性。

### 8. 数据保留与删除

- 所有本地存储的数据（任务、令牌、设置、统计）均存储在您的浏览器中，您可以随时通过以下方式删除：
  - 卸载本扩展
  - 使用扩展内的"退出登录"功能（将清除本地令牌与账户信息）
  - 清除该扩展的浏览器数据
- 您也可以随时撤销本扩展对账户的访问授权：
  - Google：前往 [Google 账号第三方访问权限](https://myaccount.google.com/permissions)，移除 ToDo Hub 的访问权限；撤销后我们将无法继续访问您的 Google 用户数据。
  - Microsoft：前往 [Microsoft 应用与服务的授权管理](https://account.live.com/consent/Manage) 移除授权。
- 服务器端的用户记录（电子邮箱地址、显示名称、扩展版本号）可通过联系我们申请删除（见第 10 条），我们将在核实后及时删除。

### 9. 政策变更

我们可能会不时更新本隐私权政策。更新后的版本将在扩展商店页面和/或我们的项目仓库中发布，并同步更新生效日期与最后更新日期。若变更涉及 Google 用户数据的使用方式，我们会在生效前通过扩展内提示或商店页面公告予以说明。

### 10. 联系方式

如果您对本隐私权政策有任何疑问，或希望申请删除您的数据，请通过以下方式联系我们：

- GitHub Issues: https://github.com/cuifuq7/ms-todo-page/issues
