---
name: Translation issue
about: 报告四语言内容不同步、术语不一致或本地化问题
title: "[Translation] "
labels: translation
assignees: ""
---

## 问题类型

- [ ] 四语言内容不等价
- [ ] 术语与 `i18n/glossary.md` 不一致
- [ ] 简体中文表达问题
- [ ] 日文表达问题
- [ ] 繁体中文台湾用语问题
- [ ] 其他：

## 涉及位置

- 页面或文件：
- 语言版本：en / zh / ja / zh-TW
- 相关段落或标题：

## 当前文本

请贴出当前有问题的文本。不要包含个人隐私或密钥。

## 建议文本

请提供建议修改。如果是术语问题，请说明是否需要更新 `i18n/glossary.md`。

## 术语表检查

- [ ] 我已检查 `i18n/glossary.md`
- [ ] 需要新增或更新 glossary 条目
- [ ] 不确定，需要维护者判断

## 验证方式

翻译修复后应至少运行：

```bash
scripts/verify.sh
```
