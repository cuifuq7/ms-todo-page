# Privacy Policy / 隐私权政策

**MS-ToDo Hub**  
**Effective Date: September 18, 2026**  
**Last Updated: September 18, 2026**

---

## English

### 1. Introduction

MS-ToDo Hub ("the Extension") is a browser extension that provides Microsoft To-Do task management, desktop new tab page with website bookmarks, RSS feed reader, mind map, data dashboard, pomodoro timer, sticky notes, and weather widget. This Privacy Policy explains what data we collect, how we use it, and how we protect your privacy.

### 2. Data We Collect

#### 2.1 Microsoft Account Information (User-Initiated, Optional)

When you choose to log in with your Microsoft account, we access the following information through the Microsoft Graph API:

- **Email address** (mail)
- **Display name** (displayName)
- **Given name and surname** (givenName, surname)
- **Mobile phone number** (mobilePhone)
- **Profile photo**

**Purpose:** To authenticate your identity and display your user profile within the extension.

**Storage:** This information is cached locally in your browser (IndexedDB and chrome.storage.local) for offline access.

#### 2.2 Microsoft To-Do Task Data (User-Initiated, Optional)

When logged in, the extension synchronizes your Microsoft To-Do data, including:

- Todo lists, tasks, and subtasks (titles, statuses, due dates, etc.)

**Purpose:** To provide task management functionality with cloud synchronization.

**Storage:** Task data is stored locally in IndexedDB for offline access and synchronized bidirectionally with Microsoft Graph API servers.

#### 2.3 User Information Sync (User-Initiated, Optional)

Once per day (upon login, or when opening the extension's new tab / desktop pages while logged in), the following user information is synced to our backend server (`api.mstodo.dpdns.org`):

- Email address
- Display name
- Given name and surname
- Mobile phone number
- Extension version number

**Purpose:** To maintain user records and provide version-specific support. This sync occurs at most once per day and only when you are logged in.

**Data Controller:** The backend server is operated by the extension developer. Data is stored securely and is not shared with third parties.

#### 2.4 RSS Subscriptions (Local Only, Optional)

RSS feed subscriptions (feed URLs, titles, tags, descriptions) are stored locally in your browser. If you are logged in, they may be synchronized to your Microsoft To-Do account under a dedicated "Todo-RSS" list for cross-device sync.

#### 2.5 Usage Statistics (Local Only)

The extension tracks anonymous usage statistics locally, including:

- Counts of operations (list/task/subtask creation, editing, deletion, completion)
- API request counts
- Link click counts

**Purpose:** To display a user dashboard with productivity insights.

**Storage:** All statistics are stored exclusively in your local browser storage (chrome.storage.local). **No usage statistics are transmitted to any server.**

#### 2.6 Weather Data (Optional)

If you enable the desktop weather widget, the extension requests weather forecast data directly from the Open-Meteo API (a free, open weather service) using your approximate geographic coordinates (latitude/longitude). City name lookup uses the BigDataCloud reverse-geocode API.

**Purpose:** To display local weather forecasts in the desktop mode top bar.

**Note:** Location coordinates are sent directly to the Open-Meteo and BigDataCloud APIs. We do not collect, store, or process your location data on our servers. Weather data is cached locally in your browser for up to 2 hours to reduce API calls.

#### 2.7 Desktop Mode Data (Local Only, Optional)

Desktop mode stores the following data locally in your browser:

- Bookmark websites (names, URLs, tags, icons, sort order)
- Search engine preferences
- Background image settings
- Widget display preferences (weather, clock, daily quote, pomodoro, sticky notes)
- Idle effect settings (snow, rain, cherry blossom, firefly)

**Storage:** If you are logged in, bookmark websites are synchronized to your Microsoft To-Do account under a dedicated "Todo-Desktop" list for cross-device sync. All other desktop settings are stored exclusively in your local browser storage.

#### 2.8 Sticky Notes (Local Only, Optional)

Sticky notes (text content and images) are stored locally in your browser using a dedicated IndexedDB database (`StickyNotesDB`). Images are stored as Blob data separately from text.

**Storage:** Sticky notes data never leaves your browser and is not synchronized to any server.

#### 2.9 Pomodoro Timer (Local Only, Optional)

Pomodoro timer state (running status, remaining time, daily completion count) is stored locally in your browser's localStorage.

**Storage:** Pomodoro data never leaves your browser.

#### 2.10 Data Dashboard (Local Only)

The data dashboard displays productivity insights based on your task data. All statistics (overview counts, completion trends, status distribution, list distribution) are computed locally from your IndexedDB data.

**Storage:** Dashboard statistics are computed in real-time from local data and are never transmitted to any server. Task completion logs are stored locally in IndexedDB for trend chart accuracy.

#### 2.11 Version Check (Optional)

When you open the Desktop Settings panel, the desktop mode page sends the current extension version number to our backend server (`api.mstodo.dpdns.org`) to check whether the installed version is still supported (multi-version whitelist comparison). No user identifiers, account information, or other personal data are sent.

**Purpose:** To notify you when a newer version is available so you can update the extension.

**Note:** The version number is not stored on the server for this check. The check is only performed when you open Desktop Settings; no automatic background checks are performed.

### 3. Data We Do NOT Collect

- We do **not** collect your browsing history
- We do **not** read or transmit the content of web pages you visit (the content script only scans for RSS feed `<link>` tags)
- We do **not** collect personal data from children under 13
- We do **not** sell or share your data with third parties for advertising
- We do **not** use your data for any purpose other than those described in this policy

### 4. Permissions Used

| Permission | Purpose |
|---|---|
| `identity` | Microsoft OAuth 2.0 login |
| `storage` | Store tasks, settings, and tokens locally |
| `alarms` | Schedule task due reminders |
| `notifications` | Display task reminder notifications |
| `content_scripts` | Detect RSS feeds on web pages (read-only scan for `<link>` tags only) |

### 5. Third-Party Services

The extension interacts with the following third-party services only when you use corresponding features:

| Service | When | Data Shared |
|---|---|---|
| Microsoft Graph API | Login & task sync | OAuth tokens, task data |
| Microsoft Login (login.microsoftonline.com) | Login | OAuth authorization |
| Open-Meteo API | Weather widget (direct, no proxy) | Geographic coordinates |
| BigDataCloud API | Reverse geocoding (city name lookup) | Geographic coordinates |
| Google Favicon Service | Website icons (via our proxy) | Website domain names |

### 6. Data Security

- OAuth tokens (Access Token, Refresh Token) are stored locally in your browser and are never transmitted to any server other than Microsoft's authentication endpoints and our OAuth proxy worker.
- All API communications use HTTPS encryption.
- Our backend server (`api.mstodo.dpdns.org`) uses HMAC-SHA256 signature verification to ensure request integrity.

### 7. Data Retention & Deletion

- All locally stored data (tasks, tokens, settings, statistics) is stored in your browser and can be deleted at any time by:
  - Uninstalling the extension
  - Using the "Logout" function within the extension (clears all local data)
  - Clearing browser data for the extension
- Server-side user records can be deleted by contacting us (see Section 9).

### 8. Changes to This Policy

We may update this Privacy Policy from time to time. Updated versions will be published on the extension's store listing and/or our project repository.

### 9. Contact

If you have questions about this Privacy Policy or wish to request deletion of your data, please contact us:

- GitHub Issues: https://github.com/cuifuq7/ms-todo-page/issues

---

## 中文

### 1. 引言

MS-ToDo Hub（以下简称"本扩展"）是一款浏览器扩展，提供 Microsoft To-Do 任务管理、桌面新标签页（含网站书签导航）、RSS 信息聚合阅读、思维导图、数据看板、番茄钟计时器、便签和天气小组件功能。本隐私权政策说明我们收集哪些数据、如何使用这些数据，以及我们如何保护您的隐私。

### 2. 我们收集的数据

#### 2.1 Microsoft 账户信息（用户主动操作，可选）

当您选择使用 Microsoft 账户登录时，我们通过 Microsoft Graph API 访问以下信息：

- **电子邮箱地址**（mail）
- **显示名称**（displayName）
- **名字和姓氏**（givenName、surname）
- **手机号码**（mobilePhone）
- **个人头像**

**用途：** 用于身份认证及在扩展内展示您的用户资料。

**存储：** 这些信息缓存在您的浏览器本地（IndexedDB 和 chrome.storage.local），以便离线使用。

#### 2.2 Microsoft To-Do 任务数据（用户主动操作，可选）

登录后，扩展会同步您的 Microsoft To-Do 数据，包括：

- 待办列表、任务及子任务（标题、状态、截止日期等）

**用途：** 提供具有云端同步功能的任务管理服务。

**存储：** 任务数据存储在本地 IndexedDB 中以便离线使用，并与 Microsoft Graph API 服务器进行双向同步。

#### 2.3 用户信息同步（用户主动操作，可选）

每天一次（登录时，或已登录状态下打开插件的新标签页/桌面页时），以下用户信息会同步到我们的后端服务器（`api.mstodo.dpdns.org`）：

- 电子邮箱地址
- 显示名称
- 名字和姓氏
- 手机号码
- 扩展版本号

**用途：** 用于维护用户记录和提供版本支持。该同步每天最多执行一次，且仅在您已登录时进行。

**数据控制方：** 后端服务器由扩展开发者运营。数据安全存储，不会与第三方共享。

#### 2.4 RSS 订阅（仅本地，可选）

RSS 订阅数据（订阅源 URL、标题、标签、描述）存储在您的浏览器本地。如果您已登录，这些数据可能会同步到您 Microsoft To-Do 账户中的 "Todo-RSS" 列表下，以实现跨设备同步。

#### 2.5 使用统计（仅本地）

扩展在本地追踪匿名使用统计，包括：

- 操作次数（列表/任务/子任务的新增、编辑、删除、完成）
- API 请求次数
- 链接点击次数

**用途：** 用于在数据看板中展示您的使用效率洞察。

**存储：** 所有统计数据仅存储在您的浏览器本地存储（chrome.storage.local）中。**不会将任何使用统计数据传输到任何服务器。**

#### 2.6 天气数据（可选）

如果您启用了桌面天气小组件，扩展会直接通过 Open-Meteo API（一个免费的开放天气服务）请求天气预报数据，需要使用您的大致地理坐标（经度/纬度）。城市名称查询使用 BigDataCloud 反向地理编码 API。

**用途：** 用于在桌面模式顶栏显示本地天气预报。

**说明：** 地理坐标直接发送至 Open-Meteo 和 BigDataCloud API。我们不会在我们的服务器上收集、存储或处理您的位置数据。天气数据在浏览器本地缓存最多 2 小时，以减少 API 请求。

#### 2.7 桌面模式数据（仅本地，可选）

桌面模式在浏览器本地存储以下数据：

- 收藏网站（名称、URL、标签、图标、排序）
- 搜索引擎偏好
- 背景图片设置
- 小组件显示偏好（天气、时钟、每日一言、番茄钟、便签）
- 空闲特效设置（雪花、下雨、樱花、萤火虫）

**存储：** 如果您已登录，收藏网站会同步到您 Microsoft To-Do 账户中的「Todo-Desktop」列表下，以实现跨设备同步。其他所有桌面设置仅存储在您的浏览器本地存储中。

#### 2.8 便签（仅本地，可选）

便签（文本内容和图片）存储在浏览器本地的专用 IndexedDB 数据库（`StickyNotesDB`）中。图片以 Blob 数据形式与文本分离存储。

**存储：** 便签数据不会离开您的浏览器，也不会同步到任何服务器。

#### 2.9 番茄钟（仅本地，可选）

番茄钟计时器状态（运行状态、剩余时间、每日完成次数）存储在浏览器本地的 localStorage 中。

**存储：** 番茄钟数据不会离开您的浏览器。

#### 2.10 数据看板（仅本地）

数据看板基于您的任务数据展示使用效率洞察。所有统计数据（概览计数、完成趋势、状态分布、列表分布）均从 IndexedDB 本地数据实时计算得出。

**存储：** 看板统计数据实时从本地数据计算，不会传输到任何服务器。任务完成日志存储在本地 IndexedDB 中，用于趋势图的精确统计。

#### 2.11 版本检测（可选）

当您打开桌面设置面板时，桌面模式页面会将当前扩展版本号发送至我们的后端服务器（`api.mstodo.dpdns.org`），用于检测当前版本是否仍受支持（多版本白名单比对）。不会发送任何用户标识、账户信息或其他个人数据。

**用途：** 在有新版本可用时提醒您更新扩展。

**说明：** 本次检测不会在服务器存储版本号。检测仅在您打开桌面设置时执行，不会进行任何自动后台检测。

### 3. 我们不收集的数据

- 我们**不**收集您的浏览历史
- 我们**不**读取或传输您访问的网页内容（内容脚本仅扫描 RSS 订阅源的 `<link>` 标签）
- 我们**不**收集 13 岁以下儿童的个人数据
- 我们**不**将您的数据出售或分享给第三方用于广告
- 我们**不**将您的数据用于本政策所述以外的任何目的

### 4. 使用的权限

| 权限 | 用途 |
|---|---|
| `identity` | Microsoft OAuth 2.0 登录认证 |
| `storage` | 在本地存储任务、设置和令牌 |
| `alarms` | 安排任务到期提醒 |
| `notifications` | 显示任务提醒通知 |
| `content_scripts` | 在网页上检测 RSS 订阅源（仅只读扫描 `<link>` 标签） |

### 5. 第三方服务

本扩展仅在使用相应功能时与以下第三方服务交互：

| 服务 | 使用时机 | 共享数据 |
|---|---|---|
| Microsoft Graph API | 登录与任务同步 | OAuth 令牌、任务数据 |
| Microsoft 登录 (login.microsoftonline.com) | 登录时 | OAuth 授权信息 |
| Open-Meteo API | 天气小组件（直连，无代理） | 地理坐标 |
| BigDataCloud API | 反向地理编码（城市名称查询） | 地理坐标 |
| Google Favicon 服务 | 网站图标（通过我们的代理） | 网站域名 |

### 6. 数据安全

- OAuth 令牌（Access Token、Refresh Token）存储在您的浏览器本地，除 Microsoft 认证端点和我们的 OAuth 代理 Worker 外，不会传输到任何其他服务器。
- 所有 API 通信均使用 HTTPS 加密。
- 我们的后端服务器（`api.mstodo.dpdns.org`）使用 HMAC-SHA256 签名验证来确保请求完整性。

### 7. 数据保留与删除

- 所有本地存储的数据（任务、令牌、设置、统计）均存储在您的浏览器中，您可以随时通过以下方式删除：
  - 卸载本扩展
  - 使用扩展内的"退出登录"功能（将清除所有本地数据）
  - 清除该扩展的浏览器数据
- 服务器端的用户记录可通过联系我们申请删除（见第 9 条）。

### 8. 政策变更

我们可能会不时更新本隐私权政策。更新后的版本将在扩展商店页面和/或我们的项目仓库中发布。

### 9. 联系方式

如果您对本隐私权政策有任何疑问，或希望申请删除您的数据，请通过以下方式联系我们：

- GitHub Issues: https://github.com/cuifuq7/ms-todo-page/issues
