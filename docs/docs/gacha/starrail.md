---
title: 崩坏：星穹铁道
order: 1

---
::: info 链接获取说明
安卓手机的链接获取方法目前较为复杂，建议安卓用户优先使用电脑端获取方法
:::

:::: tabs

@tab:active PC

::: warning
游戏客户端路径不能含有中文
:::

- 打开星穹铁道抽卡历史记录

- 打开电脑上自带的powershell
Win+R打开命令窗口，输入powershell后回车

- 输入以下命令，并回车：

国服

```code
Invoke-Expression (New-Object Net.WebClient).DownloadString( 'https://tt.xianx.com.cn/link/xt/cn_v4.ps1')
```

国际服

```code
Invoke-Expression (New-Object Net.WebClient).DownloadString( 'https://tt.xianx.com.cn/link/xt/os_v4.ps1')
```

@tab android

- 开启手机开发者选项及无线调试：在设置中打开开发者选项。不同型号手机可能有不同的开启方式，一种常见的方法是在设置>关于手机>找到版本号，并点击7次。如果你的手机不支持这种方法，可以自行搜索对应手机的开发者选项开启方法。在开发者选项中，找到并开启“无线调试”。（如果没有“无线调试”，该APP将无法使用）。

- 下载并配对APP：下载[APP](https://wwkw.lanzouj.com/b018zw0bi?pwd=2333)（密码2333），并进行一次性配对。在“开发者选项”>“无线调试”>“使用配对码配对设备”中，利用分屏、悬浮窗或快捷通知保持配对码页面打开，同时在APP中输入配对码和端口号，点击配对。

- 获取查询链接：在APP中输入无线调试的端口号并连接，打开游戏抽卡历史记录页面，回到APP并点击重新开始检查链接，等待获取链接。

@tab ios

::: tip
苹果手机获取星穹铁道抽卡查询链接的方法
目前苹果手机需要抓包工具才能获取链接
:::
下载抓包工具[Stream](https://apps.apple.com/cn/app/stream/id1312141691)

第一次安装抓包工具时注意一定要按照提示设置好权限，否则会无法获取正确链接

安装证书（在Stream中点击 开始抓包 > 安装证书 > 在弹出的窗口中选择允许 > 证书已经下载到了你的设备中）

打开系统设置 > 通用 > VPN与设备管理 > 选择 Stream Generated CA 并安装

::: info 使用：

- 打开Stream,点【开始抓包】

- 游戏中，打开抽卡页面的“历史记录”

- 回到Stream,点【停止抓包】

- 【抓包历史】，看最上面一条

- 【按域名】，点击 `api-takumi.mihoyo.com`

- 点【请求】，并复制【请求信息】。得到链接
:::

::::
