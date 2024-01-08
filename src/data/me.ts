import FaviconYouDaoYunTranslateImage from "@/assets/favicon/favicon_youdao.png";
import FaviconDouYinImage from "@/assets/favicon/favicon_douyin.png";
import FaviconBilibiliImage from "@/assets/favicon/favicon_bilibili.png";
import FaviconChatgptImage from "@/assets/favicon/favicon_chatgpt.png";
import FaviconClaudeImage from "@/assets/favicon/favicon_claude.png";
import FaviconMidjourneyImage from "@/assets/favicon/favicon_midjourney.png";
import FaviconSavefromImage from "@/assets/favicon/favicon_savefrom.png";
import FaviconIiilabImage from "@/assets/favicon/favicon_iiilab.png";
import FaviconGoogleTranslateImage from "@/assets/favicon/favicon_google_translate.png";
import FaviconTinyPngImage from "@/assets/favicon/favicon_tinypng.png";
import FaviconPdfToolsImage from "@/assets/favicon/favicon_pdf_tools.png";
import FaviconDeeplImage from "@/assets/favicon/favicon_deepl.png";
import FaviconTermiusImage from "@/assets/favicon/favicon_termius.png";
import FaviconWildcardImage from "@/assets/favicon/favicon_wildcard.png";
import FaviconSrtkuImage from "@/assets/favicon/favicon_srtku.png";
import FaviconSimilarSitesImage from "@/assets/favicon/favicon_similar.png";

export default [
    {
        title: "常用工具",
        list: [
            {
                title: "Deepl翻译",
                desc: "深度学习翻译",
                icon: FaviconDeeplImage,
                link: "https://www.deepl.com/translator",
            },
            {
                title: "Google翻译",
                desc: "全世界最大，最专业的翻译工具",
                icon: FaviconGoogleTranslateImage,
                link: "https://translate.google.com/",
                vpn: true
            },
            {
                title: "有道翻译",
                desc: "最专业的翻译工具",
                icon: FaviconYouDaoYunTranslateImage,
                link: "https://fanyi.youdao.com/",
            },
            {
                title: "视频下载",
                desc: "哔哩哔哩视频下载",
                icon: FaviconIiilabImage,
                link: "https://bilibili.iiilab.com/",
            },
            {
                title: "savefrom",
                desc: "Youtube视频高清下载",
                icon: FaviconSavefromImage,
                link: "https://zh.savefrom.net/226/",
            },
            {
                title: "TinyPng",
                desc: "图片压缩",
                icon: FaviconTinyPngImage,
                link: "https://tinypng.com/",
                vpn: true
            },
            {
                title: "PdfTools",
                desc: "PDF工具集",
                icon: FaviconPdfToolsImage,
                link: "https://tools.pdf24.org/zh/",
                vpn: true
            },
            {
                title: "Termius",
                desc: "UI比较好看的终端",
                icon: FaviconTermiusImage,
                link: "https://termius.com/",
                vpn: true
            },
            {
                title: "IdeaCode",
                desc: "Idea激活码",
                icon: "",
                link: "http://idea.955code.com/",
            },
            {
                title: "Wildcard",
                desc: "海外信用卡",
                icon: FaviconWildcardImage,
                link: "https://bewildcard.com/",
            },
            {
                title: "SimilarSites",
                desc: "相关网站推荐",
                icon: FaviconSimilarSitesImage,
                link: "https://www.similarsites.com/",
                vpn: true
            },
        ],
    },
    {
        title: "电影电视",
        list: [
            {
                title: "抖音",
                desc: "记录美好生活",
                icon: FaviconDouYinImage,
                link: "https://www.douyin.com/",
            },
            {
                title: "哔哩哔哩",
                desc: "国内知名的视频弹幕网站",
                icon: FaviconBilibiliImage,
                link: "https://www.bilibili.com/",
            },
            {
                title: "弹幕库",
                desc: "找弹幕",
                icon: FaviconSrtkuImage,
                link: "https://zimuku.org",
            },
        ],
    },
    {
        title: "人工智能",
        list: [
            {
                title: "ChatGPT",
                desc: "自然语言处理最强大的模型",
                icon: FaviconChatgptImage,
                link: "https://chat.openai.com/chat",
                vpn: true,
            },
            {
                title: "Claude",
                desc: "自然语言处理第二大的模型",
                icon: FaviconClaudeImage,
                link: "https://claude.ai/",
                vpn: true,
            },
            {
                title: "Midjourney",
                desc: "AIGC图片领域最强大的模型",
                icon: FaviconMidjourneyImage,
                link: "https://www.midjourney.com/",
                vpn: true,
            },
        ],
    },
];
