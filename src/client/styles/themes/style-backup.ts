import { createStyles } from 'antd-style';

export default createStyles(() => ({
    '.ant-carousel .slick-slider,html': {
        WebkitTapHighlightColor: 'transparent'
    },
    '.ant-alert,body': {
        margin: '0',
        fontVariant: 'tabular-nums',
        fontSize: '16px'
    },
    'dl,h1,h2,h3,h4,h5,h6,ol,p,pre,ul': { marginTop: '0' },
    'address,dl,ol,p,pre,ul': { marginBottom: '1em' },
    '.ant-avatar,img': { verticalAlign: 'middle' },
    '.ant-btn,[role=button],a,area,button,input:not([type=range]),label,select,summary,textarea': {
        touchAction: 'manipulation'
    },
    'pre,textarea': { overflow: 'auto' },
    'dd,h1,h2,h3,h4,h5,h6,legend': { marginBottom: '.5em' },
    '.ant-badge-status,progress,sub,sup': { verticalAlign: 'baseline' },
    '[ant-click-animating-without-extra-node=true],[ant-click-animating=true],sub,sup': {
        position: 'relative'
    },
    html: {
        '--ant-primary-color': '#1890ff',
        '--ant-primary-color-hover': '#40a9ff',
        '--ant-primary-color-active': '#096dd9',
        '--ant-primary-color-outline': 'rgba(24, 144, 255, 0.2)',
        '--ant-primary-1': '#e6f7ff',
        '--ant-primary-2': '#bae7ff',
        '--ant-primary-3': '#91d5ff',
        '--ant-primary-4': '#69c0ff',
        '--ant-primary-5': '#40a9ff',
        '--ant-primary-6': '#1890ff',
        '--ant-primary-7': '#096dd9',
        '--ant-primary-color-deprecated-l-35': '#cbe6ff',
        '--ant-primary-color-deprecated-l-20': '#7ec1ff',
        '--ant-primary-color-deprecated-t-20': '#46a6ff',
        '--ant-primary-color-deprecated-t-50': '#8cc8ff',
        '--ant-primary-color-deprecated-f-12': 'rgba(24, 144, 255, 0.12)',
        '--ant-primary-color-active-deprecated-f-30': 'rgba(230, 247, 255, 0.3)',
        '--ant-primary-color-active-deprecated-d-02': '#dcf4ff',
        '--ant-success-color': '#52c41a',
        '--ant-success-color-hover': '#73d13d',
        '--ant-success-color-active': '#389e0d',
        '--ant-success-color-outline': 'rgba(82, 196, 26, 0.2)',
        '--ant-success-color-deprecated-bg': '#f6ffed',
        '--ant-success-color-deprecated-border': '#b7eb8f',
        '--ant-error-color': '#ff4d4f',
        '--ant-error-color-hover': '#ff7875',
        '--ant-error-color-active': '#d9363e',
        '--ant-error-color-outline': 'rgba(255, 77, 79, 0.2)',
        '--ant-error-color-deprecated-bg': '#fff2f0',
        '--ant-error-color-deprecated-border': '#ffccc7',
        '--ant-warning-color': '#faad14',
        '--ant-warning-color-hover': '#ffc53d',
        '--ant-warning-color-active': '#d48806',
        '--ant-warning-color-outline': 'rgba(250, 173, 20, 0.2)',
        '--ant-warning-color-deprecated-bg': '#fffbe6',
        '--ant-warning-color-deprecated-border': '#ffe58f',
        '--ant-info-color': '#1890ff',
        '--ant-info-color-deprecated-bg': '#e6f7ff',
        '--ant-info-color-deprecated-border': '#91d5ff',
        fontFamily: 'sans-serif',
        lineHeight: 1.15,
        WebkitTextSizeAdjust: '100%',
        msTextSizeAdjust: '100%',
        msOverflowStyle: 'scrollbar',
        '--antd-wave-shadow-color': 'var(--ant-primary-color)',
        '--scroll-bar': '0'
    },
    '.ant-pagination-item,body': { fontFamily: 'Montserrat,sans-serif' },
    '[class*=ant-] input::-ms-clear,[class*=ant-] input::-ms-reveal,[class*=ant-]::-ms-clear,[class^=ant-] input::-ms-clear,[class^=ant-] input::-ms-reveal,[class^=ant-]::-ms-clear': {
        display: 'none'
    },
    'body,html': { width: '100%', height: '100%' },
    'input::-ms-clear,input::-ms-reveal': { display: 'none' },
    '*,::after,::before': { boxSizing: 'border-box' },
    '@-ms-viewport': { width: 'device-width' },
    body: {
        color: 'var(--text-main-color)',
        lineHeight: 1.5715,
        backgroundColor: '#fff',
        fontFeatureSettings: '"tnum"'
    },
    '[tabindex="-1"]:focus': { outline: '0 !important' as any },
    hr: { boxSizing: 'content-box', height: '0', overflow: 'visible' },
    'h1,h2,h3,h4,h5,h6': { color: 'var(--heading-color)', fontWeight: 500 },
    'abbr[data-original-title],abbr[title]': {
        textDecoration: ['underline', 'underline dotted'],
        borderBottom: '0',
        cursor: 'help'
    },
    address: { fontStyle: 'normal', lineHeight: 'inherit' },
    'input[type=text],input[type=password],input[type=number],textarea': {
        WebkitAppearance: 'none'
    },
    'ol ol,ol ul,ul ol,ul ul': { marginBottom: '0' },
    dt: { fontWeight: 500 },
    dd: { marginLeft: '0' },
    'blockquote,figure': { margin: '0 0 1em' },
    dfn: { fontStyle: 'italic' },
    'b,strong': { fontWeight: 'bolder' },
    small: { fontSize: '80%' },
    'sub,sup': { fontSize: '75%', lineHeight: 0 },
    sub: { bottom: '-.25em' },
    sup: { top: '-.5em' },
    a: {
        color: 'var(--ant-primary-color)',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        outline: '0',
        cursor: 'pointer',
        transition: 'color .3s',
        WebkitTextDecorationSkip: 'objects'
    },
    'a:hover': { color: 'var(--ant-primary-color-hover)' },
    'a:active': { color: 'var(--ant-primary-color-active)' },
    'a:active,a:focus,a:hover': { textDecoration: 'none', outline: '0' },
    'a[disabled]': { color: 'rgba(0,0,0,.25)', cursor: 'not-allowed' },
    'code,kbd,pre,samp': {
        fontSize: '1em',
        fontFamily:'SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace'
    },
    img: { borderStyle: 'none' },
    table: { borderCollapse: 'collapse' },
    caption: {
        paddingTop: '.75em',
        paddingBottom: '.3em',
        color: 'rgba(0,0,0,.45)',
        textAlign: 'left',
        captionSide: 'bottom'
    },
    '.ant-avatar,.ant-back-top-content,.ant-badge-count,.ant-btn,.ant-btn-circle,.anticon': {
        textAlign: 'center'
    },
    'button,input,optgroup,select,textarea': {
        margin: '0',
        color: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        lineHeight: 'inherit'
    },
    'button,input': { overflow: 'visible' },
    'button,select': { textTransform: 'none' },
    '[type=reset],[type=submit],button,html [type=button]': {
        WebkitAppearance: 'button'
    },
    '[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,[type=button]::-moz-focus-inner,button::-moz-focus-inner': {
        padding: '0',
        borderStyle: 'none'
    },
    'input[type=radio],input[type=checkbox]': {
        boxSizing: 'border-box',
        padding: '0'
    },
    'input[type=date],input[type=time],input[type=datetime-local],input[type=month]': {
        WebkitAppearance: 'listbox'
    },
    textarea: { resize: 'vertical' },
    fieldset: { minWidth: '0', margin: '0', padding: '0', border: '0' },
    legend: {
        display: 'block',
        width: '100%',
        maxWidth: '100%',
        padding: '0',
        color: 'inherit',
        fontSize: '1.5em',
        lineHeight: 'inherit',
        whiteSpace: 'normal'
    },
    '[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button': {
        height: 'auto'
    },
    '[type=search]': { outlineOffset: '-2px', WebkitAppearance: 'none' },
    '[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration': {
        WebkitAppearance: 'none'
    },
    '::-webkit-file-upload-button': {
        font: 'inherit',
        WebkitAppearance: 'button'
    },
    '.ant-input-number-handler-down-inner,.ant-input-number-handler-up-inner,.ant-select-arrow,.ant-select-multiple .ant-select-selection-item-remove,.anticon': {
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
    },
    output: { display: 'inline-block' },
    summary: { display: 'list-item' },
    template: { display: 'none' },
    '[hidden]': { display: 'none !important' as any },
    '.clearfix::after,.clearfix::before': { display: 'table', content: '""' },
    mark: { padding: '.2em', backgroundColor: '#feffe6' },
    '::selection': { color: '#fff', background: 'var(--ant-primary-color)' },
    '.clearfix::after': { clear: 'both' },
    '.anticon,.anticon svg': { display: 'inline-block' },
    '.anticon': {
        color: 'inherit',
        fontStyle: 'normal',
        lineHeight: 0,
        textTransform: 'none',
        verticalAlign: '-.125em'
    },
    '.anticon>*': { lineHeight: 1 },
    '.anticon::before': { display: 'none' },
    '.anticon .anticon-icon': { display: 'block' },
    '.anticon>.anticon': { lineHeight: 0, verticalAlign: '0' },
    '.anticon[tabindex]': { cursor: 'pointer' },
    '.anticon-spin,.anticon-spin::before': {
        display: 'inline-block',
        animation: 'loadingCircle 1s infinite linear'
    },
    '.ant-fade-appear,.ant-fade-enter,.ant-fade-leave': {
        animationTimingFunction: 'linear',
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-fade-appear.ant-fade-appear-active,.ant-fade-enter.ant-fade-enter-active': {
        animationName: 'antFadeIn',
        animationPlayState: 'running'
    },
    '.ant-fade-leave.ant-fade-leave-active': {
        animationName: 'antFadeOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-fade-appear,.ant-fade-enter': { opacity: 0 },
    '@keyframes antFadeIn': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
    '@keyframes antFadeOut': { '0%': { opacity: 1 }, '100%': { opacity: 0 } },
    '.ant-move-up-appear,.ant-move-up-enter,.ant-move-up-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-move-up-appear.ant-move-up-appear-active,.ant-move-up-enter.ant-move-up-enter-active': {
        animationName: 'antMoveUpIn',
        animationPlayState: 'running'
    },
    '.ant-move-up-leave.ant-move-up-leave-active': {
        animationName: 'antMoveUpOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-move-up-appear,.ant-move-up-enter': {
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-move-up-leave': {
        animationTimingFunction: 'cubic-bezier(.6,.04,.98,.34)'
    },
    '.ant-move-down-appear,.ant-move-down-enter,.ant-move-down-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-move-down-appear.ant-move-down-appear-active,.ant-move-down-enter.ant-move-down-enter-active': {
        animationName: 'antMoveDownIn',
        animationPlayState: 'running'
    },
    '.ant-move-down-leave.ant-move-down-leave-active': {
        animationName: 'antMoveDownOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-move-down-appear,.ant-move-down-enter': {
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-move-down-leave': {
        animationTimingFunction: 'cubic-bezier(.6,.04,.98,.34)'
    },
    '.ant-move-left-appear,.ant-move-left-enter,.ant-move-left-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-move-left-appear.ant-move-left-appear-active,.ant-move-left-enter.ant-move-left-enter-active': {
        animationName: 'antMoveLeftIn',
        animationPlayState: 'running'
    },
    '.ant-move-left-leave.ant-move-left-leave-active': {
        animationName: 'antMoveLeftOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-move-left-appear,.ant-move-left-enter': {
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-move-left-leave': {
        animationTimingFunction: 'cubic-bezier(.6,.04,.98,.34)'
    },
    '.ant-move-right-appear,.ant-move-right-enter,.ant-move-right-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-move-right-appear.ant-move-right-appear-active,.ant-move-right-enter.ant-move-right-enter-active': {
        animationName: 'antMoveRightIn',
        animationPlayState: 'running'
    },
    '.ant-move-right-leave.ant-move-right-leave-active': {
        animationName: 'antMoveRightOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-move-right-appear,.ant-move-right-enter': {
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-move-right-leave': {
        animationTimingFunction: 'cubic-bezier(.6,.04,.98,.34)'
    },
    '@keyframes antMoveDownIn': {
        '0%': { transform: 'translateY(100%)', transformOrigin: '0 0', opacity: 0 },
        '100%': { transform: 'translateY(0)', transformOrigin: '0 0', opacity: 1 }
    },
    '@keyframes antMoveDownOut': {
        '0%': { transform: 'translateY(0)', transformOrigin: '0 0', opacity: 1 },
        '100%': {
        transform: 'translateY(100%)',
        transformOrigin: '0 0',
        opacity: 0
        }
    },
    '@keyframes antMoveLeftIn': {
        '0%': {
        transform: 'translateX(-100%)',
        transformOrigin: '0 0',
        opacity: 0
        },
        '100%': { transform: 'translateX(0)', transformOrigin: '0 0', opacity: 1 }
    },
    '@keyframes antMoveLeftOut': {
        '0%': { transform: 'translateX(0)', transformOrigin: '0 0', opacity: 1 },
        '100%': {
        transform: 'translateX(-100%)',
        transformOrigin: '0 0',
        opacity: 0
        }
    },
    '@keyframes antMoveRightIn': {
        '0%': { transform: 'translateX(100%)', transformOrigin: '0 0', opacity: 0 },
        '100%': { transform: 'translateX(0)', transformOrigin: '0 0', opacity: 1 }
    },
    '@keyframes antMoveRightOut': {
        '0%': { transform: 'translateX(0)', transformOrigin: '0 0', opacity: 1 },
        '100%': {
        transform: 'translateX(100%)',
        transformOrigin: '0 0',
        opacity: 0
        }
    },
    '@keyframes antMoveUpIn': {
        '0%': {
        transform: 'translateY(-100%)',
        transformOrigin: '0 0',
        opacity: 0
        },
        '100%': { transform: 'translateY(0)', transformOrigin: '0 0', opacity: 1 }
    },
    '@keyframes antMoveUpOut': {
        '0%': { transform: 'translateY(0)', transformOrigin: '0 0', opacity: 1 },
        '100%': {
        transform: 'translateY(-100%)',
        transformOrigin: '0 0',
        opacity: 0
        }
    },
    '@keyframes loadingCircle': { '100%': { transform: 'rotate(360deg)' } },
    '.ant-click-animating-node,[ant-click-animating-without-extra-node=true]::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        display: 'block',
        borderRadius: 'inherit',
        boxShadow: [
        '0 0 0 0 var(--ant-primary-color)',
        '0 0 0 0 var(--antd-wave-shadow-color)'
        ],
        opacity: 0.2,
        animation:
        'fadeEffect 2s cubic-bezier(.08,.82,.17,1),waveEffect .4s cubic-bezier(.08,.82,.17,1)',
        animationFillMode: 'forwards',
        content: '""',
        pointerEvents: 'none'
    },
    '@keyframes waveEffect': {
        '100%': {
        boxShadow: [
            '0 0 0 var(--ant-primary-color)',
            '0 0 0 6px var(--antd-wave-shadow-color)'
        ]
        }
    },
    '@keyframes fadeEffect': { '100%': { opacity: 0 } },
    '.ant-slide-up-appear,.ant-slide-up-enter,.ant-slide-up-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-slide-up-appear.ant-slide-up-appear-active,.ant-slide-up-enter.ant-slide-up-enter-active': {
        animationName: 'antSlideUpIn',
        animationPlayState: 'running'
    },
    '.ant-slide-up-leave.ant-slide-up-leave-active': {
        animationName: 'antSlideUpOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-slide-up-appear,.ant-slide-up-enter': {
        transform: 'scale(0)',
        transformOrigin: '0 0',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.23,1,.32,1)'
    },
    '.ant-slide-up-leave': {
        animationTimingFunction: 'cubic-bezier(.755,.05,.855,.06)'
    },
    '.ant-slide-down-appear,.ant-slide-down-enter,.ant-slide-down-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-slide-down-appear.ant-slide-down-appear-active,.ant-slide-down-enter.ant-slide-down-enter-active': {
        animationName: 'antSlideDownIn',
        animationPlayState: 'running'
    },
    '.ant-slide-down-leave.ant-slide-down-leave-active': {
        animationName: 'antSlideDownOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-slide-down-appear,.ant-slide-down-enter': {
        transform: 'scale(0)',
        transformOrigin: '0 0',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.23,1,.32,1)'
    },
    '.ant-slide-down-leave': {
        animationTimingFunction: 'cubic-bezier(.755,.05,.855,.06)'
    },
    '.ant-slide-left-appear,.ant-slide-left-enter,.ant-slide-left-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-slide-left-appear.ant-slide-left-appear-active,.ant-slide-left-enter.ant-slide-left-enter-active': {
        animationName: 'antSlideLeftIn',
        animationPlayState: 'running'
    },
    '.ant-slide-left-leave.ant-slide-left-leave-active': {
        animationName: 'antSlideLeftOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-slide-left-appear,.ant-slide-left-enter': {
        transform: 'scale(0)',
        transformOrigin: '0 0',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.23,1,.32,1)'
    },
    '.ant-slide-left-leave': {
        animationTimingFunction: 'cubic-bezier(.755,.05,.855,.06)'
    },
    '.ant-slide-right-appear,.ant-slide-right-enter,.ant-slide-right-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-slide-right-appear.ant-slide-right-appear-active,.ant-slide-right-enter.ant-slide-right-enter-active': {
        animationName: 'antSlideRightIn',
        animationPlayState: 'running'
    },
    '.ant-slide-right-leave.ant-slide-right-leave-active': {
        animationName: 'antSlideRightOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-slide-right-appear,.ant-slide-right-enter': {
        transform: 'scale(0)',
        transformOrigin: '0 0',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.23,1,.32,1)'
    },
    '.ant-slide-right-leave': {
        animationTimingFunction: 'cubic-bezier(.755,.05,.855,.06)'
    },
    '@keyframes antSlideUpIn': {
        '0%': { transform: 'scaleY(.8)', transformOrigin: '0 0', opacity: 0 },
        '100%': { transform: 'scaleY(1)', transformOrigin: '0 0', opacity: 1 }
    },
    '@keyframes antSlideUpOut': {
        '0%': { transform: 'scaleY(1)', transformOrigin: '0 0', opacity: 1 },
        '100%': { transform: 'scaleY(.8)', transformOrigin: '0 0', opacity: 0 }
    },
    '@keyframes antSlideDownIn': {
        '0%': { transform: 'scaleY(.8)', transformOrigin: '100% 100%', opacity: 0 },
        '100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 }
    },
    '@keyframes antSlideDownOut': {
        '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
        '100%': {
        transform: 'scaleY(.8)',
        transformOrigin: '100% 100%',
        opacity: 0
        }
    },
    '@keyframes antSlideLeftIn': {
        '0%': { transform: 'scaleX(.8)', transformOrigin: '0 0', opacity: 0 },
        '100%': { transform: 'scaleX(1)', transformOrigin: '0 0', opacity: 1 }
    },
    '@keyframes antSlideLeftOut': {
        '0%': { transform: 'scaleX(1)', transformOrigin: '0 0', opacity: 1 },
        '100%': { transform: 'scaleX(.8)', transformOrigin: '0 0', opacity: 0 }
    },
    '@keyframes antSlideRightIn': {
        '0%': { transform: 'scaleX(.8)', transformOrigin: '100% 0', opacity: 0 },
        '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0', opacity: 1 }
    },
    '@keyframes antSlideRightOut': {
        '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0', opacity: 1 },
        '100%': { transform: 'scaleX(.8)', transformOrigin: '100% 0', opacity: 0 }
    },
    '.ant-zoom-appear,.ant-zoom-enter,.ant-zoom-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-zoom-appear.ant-zoom-appear-active,.ant-zoom-enter.ant-zoom-enter-active': {
        animationName: 'antZoomIn',
        animationPlayState: 'running'
    },
    '.ant-zoom-leave.ant-zoom-leave-active': {
        animationName: 'antZoomOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-zoom-appear,.ant-zoom-enter': {
        transform: 'scale(0)',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-zoom-appear-prepare,.ant-zoom-enter-prepare': { transform: 'none' },
    '.ant-zoom-leave': {
        animationTimingFunction: 'cubic-bezier(.78,.14,.15,.86)'
    },
    '.ant-zoom-big-appear,.ant-zoom-big-enter,.ant-zoom-big-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-zoom-big-appear.ant-zoom-big-appear-active,.ant-zoom-big-enter.ant-zoom-big-enter-active': {
        animationName: 'antZoomBigIn',
        animationPlayState: 'running'
    },
    '.ant-zoom-big-leave.ant-zoom-big-leave-active': {
        animationName: 'antZoomBigOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-zoom-big-appear,.ant-zoom-big-enter': {
        transform: 'scale(0)',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-zoom-big-appear-prepare,.ant-zoom-big-enter-prepare': {
        transform: 'none'
    },
    '.ant-zoom-big-leave': {
        animationTimingFunction: 'cubic-bezier(.78,.14,.15,.86)'
    },
    '.ant-zoom-big-fast-appear,.ant-zoom-big-fast-enter,.ant-zoom-big-fast-leave': {
        animationDuration: '.1s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-zoom-big-fast-appear.ant-zoom-big-fast-appear-active,.ant-zoom-big-fast-enter.ant-zoom-big-fast-enter-active': {
        animationName: 'antZoomBigIn',
        animationPlayState: 'running'
    },
    '.ant-zoom-big-fast-leave.ant-zoom-big-fast-leave-active': {
        animationName: 'antZoomBigOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-zoom-big-fast-appear,.ant-zoom-big-fast-enter': {
        transform: 'scale(0)',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-zoom-big-fast-appear-prepare,.ant-zoom-big-fast-enter-prepare': {
        transform: 'none'
    },
    '.ant-zoom-big-fast-leave': {
        animationTimingFunction: 'cubic-bezier(.78,.14,.15,.86)'
    },
    '.ant-zoom-up-appear,.ant-zoom-up-enter,.ant-zoom-up-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-zoom-up-appear.ant-zoom-up-appear-active,.ant-zoom-up-enter.ant-zoom-up-enter-active': {
        animationName: 'antZoomUpIn',
        animationPlayState: 'running'
    },
    '.ant-zoom-up-leave.ant-zoom-up-leave-active': {
        animationName: 'antZoomUpOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-zoom-up-appear,.ant-zoom-up-enter': {
        transform: 'scale(0)',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-zoom-up-appear-prepare,.ant-zoom-up-enter-prepare': {
        transform: 'none'
    },
    '.ant-zoom-up-leave': {
        animationTimingFunction: 'cubic-bezier(.78,.14,.15,.86)'
    },
    '.ant-zoom-down-appear,.ant-zoom-down-enter,.ant-zoom-down-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-zoom-down-appear.ant-zoom-down-appear-active,.ant-zoom-down-enter.ant-zoom-down-enter-active': {
        animationName: 'antZoomDownIn',
        animationPlayState: 'running'
    },
    '.ant-zoom-down-leave.ant-zoom-down-leave-active': {
        animationName: 'antZoomDownOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-zoom-down-appear,.ant-zoom-down-enter': {
        transform: 'scale(0)',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-zoom-down-appear-prepare,.ant-zoom-down-enter-prepare': {
        transform: 'none'
    },
    '.ant-zoom-down-leave': {
        animationTimingFunction: 'cubic-bezier(.78,.14,.15,.86)'
    },
    '.ant-zoom-left-appear,.ant-zoom-left-enter,.ant-zoom-left-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-zoom-left-appear.ant-zoom-left-appear-active,.ant-zoom-left-enter.ant-zoom-left-enter-active': {
        animationName: 'antZoomLeftIn',
        animationPlayState: 'running'
    },
    '.ant-zoom-left-leave.ant-zoom-left-leave-active': {
        animationName: 'antZoomLeftOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-zoom-left-appear,.ant-zoom-left-enter': {
        transform: 'scale(0)',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-zoom-left-appear-prepare,.ant-zoom-left-enter-prepare': {
        transform: 'none'
    },
    '.ant-zoom-left-leave': {
        animationTimingFunction: 'cubic-bezier(.78,.14,.15,.86)'
    },
    '.ant-zoom-right-appear,.ant-zoom-right-enter,.ant-zoom-right-leave': {
        animationDuration: '.2s',
        animationFillMode: 'both',
        animationPlayState: 'paused'
    },
    '.ant-zoom-right-appear.ant-zoom-right-appear-active,.ant-zoom-right-enter.ant-zoom-right-enter-active': {
        animationName: 'antZoomRightIn',
        animationPlayState: 'running'
    },
    '.ant-zoom-right-leave.ant-zoom-right-leave-active': {
        animationName: 'antZoomRightOut',
        animationPlayState: 'running',
        pointerEvents: 'none'
    },
    '.ant-zoom-right-appear,.ant-zoom-right-enter': {
        transform: 'scale(0)',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(.08,.82,.17,1)'
    },
    '.ant-zoom-right-appear-prepare,.ant-zoom-right-enter-prepare': {
        transform: 'none'
    },
    '.ant-zoom-right-leave': {
        animationTimingFunction: 'cubic-bezier(.78,.14,.15,.86)'
    },
    '@keyframes antZoomIn': {
        '0%': { transform: 'scale(.2)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 }
    },
    '@keyframes antZoomOut': {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(.2)', opacity: 0 }
    },
    '@keyframes antZoomBigIn': {
        '0%': { transform: 'scale(.8)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 }
    },
    '@keyframes antZoomBigOut': {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(.8)', opacity: 0 }
    },
    '@keyframes antZoomUpIn': {
        '0%': { transform: 'scale(.8)', transformOrigin: '50% 0', opacity: 0 },
        '100%': { transform: 'scale(1)', transformOrigin: '50% 0' }
    },
    '@keyframes antZoomUpOut': {
        '0%': { transform: 'scale(1)', transformOrigin: '50% 0' },
        '100%': { transform: 'scale(.8)', transformOrigin: '50% 0', opacity: 0 }
    },
    '@keyframes antZoomLeftIn': {
        '0%': { transform: 'scale(.8)', transformOrigin: '0 50%', opacity: 0 },
        '100%': { transform: 'scale(1)', transformOrigin: '0 50%' }
    },
    '@keyframes antZoomLeftOut': {
        '0%': { transform: 'scale(1)', transformOrigin: '0 50%' },
        '100%': { transform: 'scale(.8)', transformOrigin: '0 50%', opacity: 0 }
    },
    '@keyframes antZoomRightIn': {
        '0%': { transform: 'scale(.8)', transformOrigin: '100% 50%', opacity: 0 },
        '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' }
    },
    '@keyframes antZoomRightOut': {
        '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
        '100%': { transform: 'scale(.8)', transformOrigin: '100% 50%', opacity: 0 }
    },
    '@keyframes antZoomDownIn': {
        '0%': { transform: 'scale(.8)', transformOrigin: '50% 100%', opacity: 0 },
        '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' }
    },
    '@keyframes antZoomDownOut': {
        '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
        '100%': { transform: 'scale(.8)', transformOrigin: '50% 100%', opacity: 0 }
    },
    '.ant-motion-collapse-legacy': { overflow: 'hidden' },
    '.ant-motion-collapse-legacy-active': {
        transition:
        'height .2s cubic-bezier(.645,.045,.355,1),opacity .2s cubic-bezier(.645,.045,.355,1) !important' as any
    },
    '.ant-motion-collapse': {
        overflow: 'hidden',
        transition:
        'height .2s cubic-bezier(.645,.045,.355,1),opacity .2s cubic-bezier(.645,.045,.355,1) !important' as any
    },
    '.ant-affix': { position: 'fixed', zIndex: 10 },
    '.ant-alert,.ant-anchor': {
        position: 'relative',
        color: 'var(--text-main-color)'
    },
    '.ant-alert': {
        boxSizing: 'border-box',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 15px',
        wordWrap: 'break-word',
        borderRadius: '7px'
    },
    '.ant-alert-content': { flex: 1, minWidth: '0' },
    '.ant-alert-icon': { marginRight: '8px' },
    '.ant-alert-description': {
        display: 'none',
        fontSize: '16px',
        lineHeight: '24px'
    },
    '.ant-alert-success': {
        backgroundColor: 'var(--ant-success-color-deprecated-bg)',
        border: '1px solid var(--ant-success-color-deprecated-border)'
    },
    '.ant-alert-success .ant-alert-icon': { color: 'var(--ant-success-color)' },
    '.ant-alert-info': {
        backgroundColor: '#dfefff',
        border: '1px solid var(--ant-info-color-deprecated-border)'
    },
    '.ant-alert-info .ant-alert-icon': { color: 'var(--ant-info-color)' },
    '.ant-alert-warning': {
        backgroundColor: 'var(--ant-warning-color-deprecated-bg)',
        border: '1px solid var(--ant-warning-color-deprecated-border)'
    },
    '.ant-alert-warning .ant-alert-icon': { color: 'var(--ant-warning-color)' },
    '.ant-alert-error': {
        backgroundColor: 'var(--ant-error-color-deprecated-bg)',
        border: '1px solid var(--ant-error-color-deprecated-border)'
    },
    '.ant-alert-error .ant-alert-icon': { color: 'var(--ant-error-color)' },
    '.ant-alert-error .ant-alert-description>pre': { margin: '0', padding: '0' },
    '.ant-alert-action': { marginLeft: '8px' },
    '.ant-alert-close-icon': {
        marginLeft: '8px',
        padding: '0',
        overflow: 'hidden',
        fontSize: '14px',
        lineHeight: '14px',
        backgroundColor: 'transparent',
        border: 'none',
        outline: '0',
        cursor: 'pointer'
    },
    '.ant-anchor,.ant-select-auto-complete': {
        lineHeight: 1.5715,
        listStyle: 'none',
        fontVariant: 'tabular-nums',
        fontFeatureSettings: '"tnum"',
        boxSizing: 'border-box'
    },
    '.ant-alert-close-icon .anticon-close': {
        color: 'rgba(0,0,0,.45)',
        transition: 'color .3s'
    },
    '.ant-alert-close-icon .anticon-close:hover': {
        color: 'var(--icon-hover-color)'
    },
    '.ant-alert-close-text': {
        color: 'rgba(0,0,0,.45)',
        transition: 'color .3s'
    },
    '.ant-alert-close-text:hover': { color: 'var(--icon-hover-color)' },
    '.ant-alert-with-description': {
        alignItems: 'flex-start',
        padding: '15px 15px 15px 24px'
    },
    '.ant-alert-with-description.ant-alert-no-icon': { padding: '15px' },
    '.ant-alert-with-description .ant-alert-icon': {
        marginRight: '15px',
        fontSize: '24px'
    },
    '.ant-alert-with-description .ant-alert-message': {
        display: 'block',
        marginBottom: '4px',
        color: 'var(--heading-color)',
        fontSize: '18px'
    },
    '.ant-alert-message': { color: 'var(--heading-color)' },
    '.ant-alert-with-description .ant-alert-description': { display: 'block' },
    '.ant-alert.ant-alert-motion-leave': {
        overflow: 'hidden',
        opacity: 1,
        transition:
        'max-height .3s cubic-bezier(.78,.14,.15,.86),opacity .3s cubic-bezier(.78,.14,.15,.86),padding-top .3s cubic-bezier(.78,.14,.15,.86),padding-bottom .3s cubic-bezier(.78,.14,.15,.86),margin-bottom .3s cubic-bezier(.78,.14,.15,.86)'
    },
    '.ant-alert.ant-alert-motion-leave-active': {
        maxHeight: '0',
        marginBottom: '0 !important' as any,
        paddingTop: '0',
        paddingBottom: '0',
        opacity: 0
    },
    '.ant-alert-banner': { marginBottom: '0', border: '0', borderRadius: '0' },
    '.ant-alert.ant-alert-rtl': { direction: 'rtl' },
    '.ant-alert-rtl .ant-alert-icon': { marginRight: 'auto', marginLeft: '8px' },
    '.ant-alert-rtl .ant-alert-action,.ant-alert-rtl .ant-alert-close-icon': {
        marginRight: '8px',
        marginLeft: 'auto'
    },
    '.ant-alert-rtl.ant-alert-with-description': {
        paddingRight: '24px',
        paddingLeft: '15px'
    },
    '.ant-alert-rtl.ant-alert-with-description .ant-alert-icon': {
        marginRight: 'auto',
        marginLeft: '15px'
    },
    '.ant-anchor': { margin: '0', padding: '0 0 0 2px', fontSize: '16px' },
    '.ant-anchor-wrapper': {
        marginLeft: '-4px',
        paddingLeft: '4px',
        overflow: 'auto',
        backgroundColor: 'transparent'
    },
    '.ant-anchor-ink': {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%'
    },
    '.ant-anchor-ink::before': {
        position: 'relative',
        display: 'block',
        width: '2px',
        height: '100%',
        margin: '0 auto',
        backgroundColor: '#f0f0f0',
        content: '" "'
    },
    '.ant-anchor-ink-ball': {
        position: 'absolute',
        left: '50%',
        display: 'none',
        width: '8px',
        height: '8px',
        backgroundColor: 'var(--background-color)',
        border: '2px solid var(--ant-primary-color)',
        borderRadius: '8px',
        transform: 'translateX(-50%)',
        transition: 'top .3s ease-in-out'
    },
    '.ant-anchor-link-title,.ant-avatar': {
        position: 'relative',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },
    '.ant-anchor-ink-ball.ant-anchor-ink-ball-visible': {
        display: 'inline-block'
    },
    '.ant-anchor-fixed .ant-anchor-ink .ant-anchor-ink-ball': { display: 'none' },
    '.ant-anchor-link': { padding: '4px 0 4px 16px' },
    '.ant-anchor-link-title': {
        display: 'block',
        marginBottom: '3px',
        color: 'var(--text-main-color)',
        textOverflow: 'ellipsis',
        transition: 'all .3s'
    },
    '.ant-anchor-link-title:only-child': { marginBottom: '0' },
    '.ant-anchor-link-active>.ant-anchor-link-title': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-anchor-link .ant-anchor-link': {
        paddingTop: '2px',
        paddingBottom: '2px'
    },
    '.ant-anchor-rtl': { direction: 'rtl' },
    '.ant-anchor-rtl.ant-anchor-wrapper': {
        marginRight: '-4px',
        marginLeft: '0',
        paddingRight: '4px',
        paddingLeft: '0'
    },
    '.ant-anchor-rtl .ant-anchor-ink': { right: '0', left: 'auto' },
    '.ant-anchor-rtl .ant-anchor-ink-ball': {
        right: '50%',
        left: '0',
        transform: 'translateX(50%)'
    },
    '.ant-anchor-rtl .ant-anchor-link': { padding: '4px 16px 4px 0' },
    '.ant-select-auto-complete': {
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px'
    },
    '.ant-select-auto-complete .ant-select-clear': { right: '13px' },
    '.ant-avatar': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        display: 'inline-block',
        color: '#fff',
        background: 'var(--avatar-bg)',
        width: '32px',
        height: '32px',
        lineHeight: '32px',
        borderRadius: '50%'
    },
    '.ant-avatar-lg-string,.ant-avatar-sm-string,.ant-avatar-string': {
        position: 'absolute',
        transformOrigin: '0 center',
        left: '50%'
    },
    '.ant-avatar-image': { background: '0 0' },
    '.ant-avatar .ant-image-img': { display: 'block' },
    '.ant-avatar.ant-avatar-icon': { fontSize: '18px' },
    '.ant-avatar.ant-avatar-icon>.anticon': { margin: '0' },
    '.ant-avatar-lg': {
        width: '40px',
        height: '40px',
        lineHeight: '40px',
        borderRadius: '50%'
    },
    '.ant-avatar-lg.ant-avatar-icon': { fontSize: '24px' },
    '.ant-avatar-lg.ant-avatar-icon>.anticon': { margin: '0' },
    '.ant-avatar-sm': {
        width: '24px',
        height: '24px',
        lineHeight: '24px',
        borderRadius: '50%'
    },
    '.ant-avatar-sm.ant-avatar-icon': { fontSize: '14px' },
    '.ant-avatar-sm.ant-avatar-icon>.anticon': { margin: '0' },
    '.ant-avatar-square': { borderRadius: '7px' },
    '.ant-avatar>img': {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    '.ant-avatar-group': { display: 'inline-flex' },
    '.ant-avatar-group .ant-avatar': { border: '1px solid #fff' },
    '.ant-avatar-group .ant-avatar:not(:first-child)': { marginLeft: '-8px' },
    '.ant-avatar-group-popover .ant-avatar+.ant-avatar': { marginLeft: '3px' },
    '.ant-avatar-group-rtl .ant-avatar:not(:first-child)': {
        marginRight: '-8px',
        marginLeft: '0'
    },
    '.ant-avatar-group-popover.ant-popover-rtl .ant-avatar+.ant-avatar': {
        marginRight: '3px',
        marginLeft: '0'
    },
    '.ant-back-top': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'fixed',
        right: '100px',
        bottom: '50px',
        zIndex: 10,
        width: '40px',
        height: '40px',
        cursor: 'pointer'
    },
    '.ant-back-top:empty': { display: 'none' },
    '.ant-badge,.ant-badge-status-dot': {
        display: 'inline-block',
        position: 'relative'
    },
    '.ant-back-top-rtl': { right: 'auto', left: '100px', direction: 'rtl' },
    '.ant-back-top-content': {
        width: '40px',
        height: '40px',
        overflow: 'hidden',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,.45)',
        borderRadius: '20px',
        transition: 'all .3s'
    },
    '.ant-back-top-content:hover': {
        backgroundColor: 'var(--text-main-color)',
        transition: 'all .3s'
    },
    '.ant-back-top-icon': { fontSize: '24px', lineHeight: '40px' },
    '@media screen and (max-width:768px)': [
        {
        '.ant-back-top': { right: '60px' },
        '.ant-back-top-rtl': { right: 'auto', left: '60px' }
        },
        {
        '.ant-list-item-action,.ant-list-vertical .ant-list-item-extra': {
            marginLeft: '24px'
        }
        },
        {
        '.ant-list-rtl .ant-list-item-action,.ant-list-rtl .ant-list-vertical .ant-list-item-extra': {
            marginRight: '24px',
            marginLeft: '0'
        }
        }
    ],
    '@media screen and (max-width:360px)': {
        '.ant-back-top': { right: '20px' },
        '.ant-back-top-rtl': { right: 'auto', left: '20px' }
    },
    '.ant-badge': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        lineHeight: 1
    },
    '.ant-badge-count,.ant-badge-count a,.ant-badge-count a:hover': {
        color: 'var(--background-color)'
    },
    '.ant-badge-count': {
        zIndex: 'auto',
        minWidth: '20px',
        height: '20px',
        padding: '0 6px',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        whiteSpace: 'nowrap',
        background: '#ff4d4f',
        borderRadius: '10px',
        boxShadow: '0 0 0 1px var(--background-color)'
    },
    '.ant-badge-count-sm': {
        minWidth: '14px',
        height: '14px',
        padding: '0',
        fontSize: '14px',
        lineHeight: '14px',
        borderRadius: '7px'
    },
    '.ant-badge-multiple-words': { padding: '0 8px' },
    '.ant-badge-dot': {
        zIndex: 'auto',
        width: '6px',
        minWidth: '6px',
        height: '6px',
        background: '#ff4d4f',
        borderRadius: '100%',
        boxShadow: '0 0 0 1px var(--background-color)'
    },
    '.ant-badge-dot.ant-scroll-number': { transition: 'background 1.5s' },
    '.ant-badge .ant-scroll-number-custom-component,.ant-badge-count,.ant-badge-dot': {
        position: 'absolute',
        top: '0',
        right: '0',
        transform: 'translate(50%,-50%)',
        transformOrigin: '100% 0'
    },
    '.ant-badge .ant-scroll-number-custom-component.anticon-spin,.ant-badge-count.anticon-spin,.ant-badge-dot.anticon-spin': {
        animation: 'antBadgeLoadingCircle 1s infinite linear'
    },
    '.ant-badge-status': { lineHeight: 'inherit' },
    '.ant-badge-not-a-wrapper:not(.ant-badge-status),.ant-badge-status-dot,.ant-divider-vertical': {
        verticalAlign: 'middle'
    },
    '.ant-badge-status-dot': {
        top: '-1px',
        width: '6px',
        height: '6px',
        borderRadius: '50%'
    },
    '.ant-badge-status-success': { backgroundColor: 'var(--ant-success-color)' },
    '.ant-badge-status-processing': {
        position: 'relative',
        backgroundColor: 'var(--ant-primary-color)'
    },
    '.ant-badge-status-processing::after': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '1px solid var(--ant-primary-color)',
        borderRadius: '50%',
        animation: 'antStatusProcessing 1.2s infinite ease-in-out',
        content: '""'
    },
    '.ant-badge-status-default': { backgroundColor: '#d9d9d9' },
    '.ant-badge-status-error': { backgroundColor: 'var(--ant-error-color)' },
    '.ant-badge-status-warning': { backgroundColor: 'var(--ant-warning-color)' },
    '.ant-badge-status-magenta,.ant-badge-status-pink': { background: '#eb2f96' },
    '.ant-badge-status-red': { background: '#f5222d' },
    '.ant-badge-status-volcano': { background: '#fa541c' },
    '.ant-badge-status-orange': { background: '#fa8c16' },
    '.ant-badge-status-yellow': { background: '#fadb14' },
    '.ant-badge-status-gold': { background: '#faad14' },
    '.ant-badge-status-cyan': { background: '#13c2c2' },
    '.ant-badge-status-lime': { background: '#a0d911' },
    '.ant-badge-status-green': { background: '#52c41a' },
    '.ant-badge-status-blue': { background: '#1890ff' },
    '.ant-badge-status-geekblue': { background: '#2f54eb' },
    '.ant-badge-status-purple': { background: '#722ed1' },
    '.ant-badge-status-text': {
        marginLeft: '8px',
        color: 'var(--text-main-color)',
        fontSize: '16px'
    },
    '.ant-badge-zoom-appear,.ant-badge-zoom-enter': {
        animation: 'antZoomBadgeIn .3s cubic-bezier(.12,.4,.29,1.46)',
        animationFillMode: 'both'
    },
    '.ant-badge-zoom-leave': {
        animation: 'antZoomBadgeOut .3s cubic-bezier(.71,-.46,.88,.6)',
        animationFillMode: 'both'
    },
    '.ant-badge-not-a-wrapper .ant-badge-zoom-appear,.ant-badge-not-a-wrapper .ant-badge-zoom-enter': {
        animation: 'antNoWrapperZoomBadgeIn .3s cubic-bezier(.12,.4,.29,1.46)'
    },
    '.ant-badge-not-a-wrapper .ant-badge-zoom-leave': {
        animation: 'antNoWrapperZoomBadgeOut .3s cubic-bezier(.71,-.46,.88,.6)'
    },
    '.ant-badge-not-a-wrapper .ant-badge-count,.ant-badge-not-a-wrapper .ant-scroll-number-custom-component': {
        transform: 'none'
    },
    '.ant-badge-not-a-wrapper .ant-scroll-number,.ant-badge-not-a-wrapper .ant-scroll-number-custom-component': {
        position: 'relative',
        top: 'auto',
        display: 'block',
        transformOrigin: '50% 50%'
    },
    '@keyframes antStatusProcessing': {
        '0%': { transform: 'scale(.8)', opacity: 0.5 },
        '100%': { transform: 'scale(2.4)', opacity: 0 }
    },
    '.ant-scroll-number-only,.ant-scroll-number-only>p.ant-scroll-number-only-unit': {
        height: '20px',
        WebkitTransformStyle: 'preserve-3d',
        WebkitBackfaceVisibility: 'hidden'
    },
    '.ant-scroll-number': { overflow: 'hidden', direction: 'ltr' },
    '.ant-scroll-number-only': {
        position: 'relative',
        display: 'inline-block',
        transition: 'all .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-scroll-number-only>p.ant-scroll-number-only-unit': { margin: '0' },
    '.ant-scroll-number-symbol': { verticalAlign: 'top' },
    '@keyframes antZoomBadgeIn': {
        '0%': { transform: 'scale(0) translate(50%,-50%)', opacity: 0 },
        '100%': { transform: 'scale(1) translate(50%,-50%)' }
    },
    '@keyframes antZoomBadgeOut': {
        '0%': { transform: 'scale(1) translate(50%,-50%)' },
        '100%': { transform: 'scale(0) translate(50%,-50%)', opacity: 0 }
    },
    '@keyframes antNoWrapperZoomBadgeIn': {
        '0%': { transform: 'scale(0)', opacity: 0 },
        '100%': { transform: 'scale(1)' }
    },
    '@keyframes antNoWrapperZoomBadgeOut': {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(0)', opacity: 0 }
    },
    '@keyframes antBadgeLoadingCircle': {
        '0%': { transformOrigin: '50%' },
        '100%': {
        transform: 'translate(50%,-50%) rotate(360deg)',
        transformOrigin: '50%'
        }
    },
    '.ant-ribbon-wrapper': { position: 'relative' },
    '.ant-ribbon': {
        boxSizing: 'border-box',
        margin: '0',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'absolute',
        top: '8px',
        height: '22px',
        padding: '0 8px',
        color: 'var(--background-color)',
        lineHeight: '22px',
        whiteSpace: 'nowrap',
        backgroundColor: 'var(--ant-primary-color)',
        borderRadius: '2px'
    },
    '.ant-breadcrumb,.ant-btn': { lineHeight: 1.5715, fontSize: '16px' },
    '.ant-ribbon-text': { color: '#fff' },
    '.ant-ribbon-corner': {
        position: 'absolute',
        top: '100%',
        width: '8px',
        height: '8px',
        color: 'currentcolor',
        border: '4px solid',
        transform: 'scaleY(.75)',
        transformOrigin: 'top'
    },
    '.ant-ribbon-corner::after': {
        position: 'absolute',
        top: '-4px',
        left: '-4px',
        width: 'inherit',
        height: 'inherit',
        color: 'rgba(0,0,0,.25)',
        border: 'inherit',
        content: '""'
    },
    '.ant-ribbon-color-magenta,.ant-ribbon-color-pink': {
        color: '#eb2f96',
        background: '#eb2f96'
    },
    '.ant-ribbon-color-red': { color: '#f5222d', background: '#f5222d' },
    '.ant-ribbon-color-volcano': { color: '#fa541c', background: '#fa541c' },
    '.ant-ribbon-color-orange': { color: '#fa8c16', background: '#fa8c16' },
    '.ant-ribbon-color-yellow': { color: '#fadb14', background: '#fadb14' },
    '.ant-ribbon-color-gold': { color: '#faad14', background: '#faad14' },
    '.ant-ribbon-color-cyan': { color: '#13c2c2', background: '#13c2c2' },
    '.ant-ribbon-color-lime': { color: '#a0d911', background: '#a0d911' },
    '.ant-ribbon-color-green': { color: '#52c41a', background: '#52c41a' },
    '.ant-ribbon-color-blue': { color: '#1890ff', background: '#1890ff' },
    '.ant-ribbon-color-geekblue': { color: '#2f54eb', background: '#2f54eb' },
    '.ant-ribbon-color-purple': { color: '#722ed1', background: '#722ed1' },
    '.ant-ribbon.ant-ribbon-placement-end': {
        right: '-8px',
        borderBottomRightRadius: '0'
    },
    '.ant-ribbon.ant-ribbon-placement-end .ant-ribbon-corner': {
        right: '0',
        borderColor: 'currentcolor transparent transparent currentcolor'
    },
    '.ant-ribbon-rtl.ant-ribbon-placement-end .ant-ribbon-corner,.ant-ribbon-rtl.ant-ribbon-placement-end .ant-ribbon-corner::after,.ant-ribbon.ant-ribbon-placement-start .ant-ribbon-corner': {
        borderColor: 'currentcolor currentcolor transparent transparent'
    },
    '.ant-ribbon.ant-ribbon-placement-start': {
        left: '-8px',
        borderBottomLeftRadius: '0'
    },
    '.ant-ribbon.ant-ribbon-placement-start .ant-ribbon-corner': { left: '0' },
    '.ant-badge-rtl': { direction: 'rtl' },
    '.ant-badge-rtl.ant-badge:not(.ant-badge-not-a-wrapper) .ant-badge-count,.ant-badge-rtl.ant-badge:not(.ant-badge-not-a-wrapper) .ant-badge-dot,.ant-badge-rtl.ant-badge:not(.ant-badge-not-a-wrapper) .ant-scroll-number-custom-component': {
        right: 'auto',
        left: '0',
        direction: 'ltr',
        transform: 'translate(-50%,-50%)',
        transformOrigin: '0 0'
    },
    '.ant-breadcrumb-rtl,.ant-btn-group.ant-btn-group-rtl,.ant-btn-rtl,.ant-card-rtl,.ant-carousel-rtl,.ant-cascader-checkbox-rtl,.ant-checkbox-rtl,.ant-collapse-rtl,.ant-comment-rtl,.ant-picker-calendar-rtl,.ant-picker-input>input-rtl,.ant-ribbon-rtl': {
        direction: 'rtl'
    },
    '.ant-badge-rtl.ant-badge:not(.ant-badge-not-a-wrapper) .ant-scroll-number-custom-component': {
        right: 'auto',
        left: '0',
        transform: 'translate(-50%,-50%)',
        transformOrigin: '0 0'
    },
    '.ant-badge-rtl .ant-badge-status-text': {
        marginRight: '8px',
        marginLeft: '0'
    },
    '.ant-breadcrumb,.ant-breadcrumb ol': {
        margin: '0',
        padding: '0',
        listStyle: 'none'
    },
    '.ant-badge:not(.ant-badge-not-a-wrapper).ant-badge-rtl .ant-badge-zoom-appear,.ant-badge:not(.ant-badge-not-a-wrapper).ant-badge-rtl .ant-badge-zoom-enter': {
        animationName: 'antZoomBadgeInRtl'
    },
    '.ant-badge:not(.ant-badge-not-a-wrapper).ant-badge-rtl .ant-badge-zoom-leave': {
        animationName: 'antZoomBadgeOutRtl'
    },
    '.ant-ribbon-rtl.ant-ribbon-placement-end': {
        right: 'unset',
        left: '-8px',
        borderBottomRightRadius: '2px',
        borderBottomLeftRadius: '0'
    },
    '.ant-ribbon-rtl.ant-ribbon-placement-end .ant-ribbon-corner': {
        right: 'unset',
        left: '0'
    },
    '.ant-ribbon-rtl.ant-ribbon-placement-start .ant-ribbon-corner,.ant-ribbon-rtl.ant-ribbon-placement-start .ant-ribbon-corner::after': {
        borderColor: 'currentcolor transparent transparent currentcolor'
    },
    '.ant-ribbon-rtl.ant-ribbon-placement-start': {
        right: '-8px',
        left: 'unset',
        borderBottomRightRadius: '0',
        borderBottomLeftRadius: '2px'
    },
    '.ant-ribbon-rtl.ant-ribbon-placement-start .ant-ribbon-corner': {
        right: '0',
        left: 'unset'
    },
    '@keyframes antZoomBadgeInRtl': {
        '0%': { transform: 'scale(0) translate(-50%,-50%)', opacity: 0 },
        '100%': { transform: 'scale(1) translate(-50%,-50%)' }
    },
    '@keyframes antZoomBadgeOutRtl': {
        '0%': { transform: 'scale(1) translate(-50%,-50%)' },
        '100%': { transform: 'scale(0) translate(-50%,-50%)', opacity: 0 }
    },
    '.ant-breadcrumb': {
        boxSizing: 'border-box',
        fontVariant: 'tabular-nums',
        fontFeatureSettings: '"tnum"',
        color: 'var(--breadcrumb-color)'
    },
    '.ant-breadcrumb .anticon': { fontSize: '16px' },
    '.ant-breadcrumb ol': { display: 'flex', flexWrap: 'wrap' },
    '.ant-breadcrumb a': {
        color: 'var(--breadcrumb-color)',
        transition: 'color .3s'
    },
    '.ant-breadcrumb a:hover,.ant-breadcrumb li:last-child,.ant-breadcrumb li:last-child a': {
        color: 'var(--text-main-color)'
    },
    'li:last-child>.ant-breadcrumb-separator': { display: 'none' },
    '.ant-breadcrumb-rtl::after,.ant-breadcrumb-rtl::before': {
        display: 'table',
        content: '""'
    },
    '.ant-breadcrumb-separator': {
        margin: '0 8px',
        color: 'var(--breadcrumb-color)'
    },
    '.ant-breadcrumb-link>.anticon+a,.ant-breadcrumb-link>.anticon+span,.ant-breadcrumb-overlay-link>.anticon': {
        marginLeft: '4px'
    },
    '.ant-breadcrumb-rtl::after': { clear: 'both' },
    '.ant-breadcrumb-rtl>span': { cssFloat: 'right' },
    '.ant-breadcrumb-rtl .ant-breadcrumb-link>.anticon+a,.ant-breadcrumb-rtl .ant-breadcrumb-link>.anticon+span,.ant-breadcrumb-rtl .ant-breadcrumb-overlay-link>.anticon': {
        marginRight: '4px',
        marginLeft: '0'
    },
    '.ant-btn': {
        position: 'relative',
        display: 'inline-block',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        backgroundImage: 'none',
        border: '1px solid transparent',
        boxShadow: '0 2px 0 rgba(0,0,0,.015)',
        cursor: 'pointer',
        transition: 'all .3s cubic-bezier(.645,.045,.355,1)',
        userSelect: 'none',
        height: '50px',
        padding: '11.4px 15px',
        borderRadius: '7px',
        color: 'var(--text-main-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--background-color)'
    },
    '.ant-btn:active>a:only-child::after,.ant-btn:focus>a:only-child::after,.ant-btn:hover>a:only-child::after,.ant-btn>a:only-child::after': {
        background: '0 0',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        position: 'absolute',
        content: '""'
    },
    '.ant-btn>.anticon': { lineHeight: 1 },
    '.ant-btn,.ant-btn:active,.ant-btn:focus': { outline: '0' },
    '.ant-btn:not([disabled]):hover': { textDecoration: 'none' },
    '.ant-btn:not([disabled]):active': { outline: '0', boxShadow: 'none' },
    '.ant-btn[disabled]': { cursor: 'not-allowed' },
    '.ant-btn[disabled]>*': { pointerEvents: 'none' },
    '.ant-btn-lg': {
        height: '64px',
        padding: '16.9px 15px',
        fontSize: '18px',
        borderRadius: '7px'
    },
    '.ant-btn-sm': {
        height: '32px',
        padding: '2.4px 7px',
        fontSize: '16px',
        borderRadius: '7px'
    },
    '.ant-btn>a:only-child': { color: 'currentcolor' },
    '.ant-btn:focus,.ant-btn:hover': {
        color: 'var(--ant-primary-color-hover)',
        borderColor: 'var(--ant-primary-color-hover)'
    },
    '.ant-btn:focus>a:only-child,.ant-btn:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn:active': {
        color: 'var(--ant-primary-color-active)',
        borderColor: 'var(--ant-primary-color-active)'
    },
    '.ant-btn:active>a:only-child': { color: 'currentcolor' },
    '.ant-btn[disabled],.ant-btn[disabled]:active,.ant-btn[disabled]:focus,.ant-btn[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn[disabled]:active>a:only-child,.ant-btn[disabled]:focus>a:only-child,.ant-btn[disabled]:hover>a:only-child,.ant-btn[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn[disabled]:active>a:only-child::after,.ant-btn[disabled]:focus>a:only-child::after,.ant-btn[disabled]:hover>a:only-child::after,.ant-btn[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn:active,.ant-btn:focus,.ant-btn:hover': {
        textDecoration: 'none',
        background: 'var(--background-color)'
    },
    '.ant-btn>span': { display: 'inline-block' },
    '.ant-btn-primary': {
        color: '#fff',
        borderColor: 'var(--ant-primary-color)',
        background: 'var(--ant-primary-color)',
        textShadow: '0 -1px 0 rgba(0,0,0,.12)',
        boxShadow: '0 2px 0 rgba(0,0,0,.045)'
    },
    '.ant-btn-primary>a:only-child': { color: 'currentcolor' },
    '.ant-btn-primary>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-primary:focus,.ant-btn-primary:hover': {
        color: '#fff',
        borderColor: 'var(--ant-primary-color-hover)',
        background: 'var(--ant-primary-color-hover)'
    },
    '.ant-btn-primary:focus>a:only-child,.ant-btn-primary:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-primary:focus>a:only-child::after,.ant-btn-primary:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-primary:active': {
        color: '#fff',
        borderColor: 'var(--ant-primary-color-active)',
        background: 'var(--ant-primary-color-active)'
    },
    '.ant-btn-primary:active>a:only-child': { color: 'currentcolor' },
    '.ant-btn-primary:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-primary[disabled],.ant-btn-primary[disabled]:active,.ant-btn-primary[disabled]:focus,.ant-btn-primary[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-primary[disabled]:active>a:only-child,.ant-btn-primary[disabled]:focus>a:only-child,.ant-btn-primary[disabled]:hover>a:only-child,.ant-btn-primary[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-primary[disabled]:active>a:only-child::after,.ant-btn-primary[disabled]:focus>a:only-child::after,.ant-btn-primary[disabled]:hover>a:only-child::after,.ant-btn-primary[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child)': {
        borderRightColor: 'var(--ant-primary-5)',
        borderLeftColor: 'var(--ant-primary-5)'
    },
    '.ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child):disabled': {
        borderColor: 'var(--border-base-color)'
    },
    '.ant-btn-group .ant-btn-primary:first-child:not(:last-child)': {
        borderRightColor: 'var(--ant-primary-5)'
    },
    '.ant-btn-group .ant-btn-primary:first-child:not(:last-child)[disabled]': {
        borderRightColor: 'var(--border-base-color)'
    },
    '.ant-btn-group .ant-btn-primary+.ant-btn-primary,.ant-btn-group .ant-btn-primary:last-child:not(:first-child)': {
        borderLeftColor: 'var(--ant-primary-5)'
    },
    '.ant-btn-group .ant-btn-primary+.ant-btn-primary[disabled],.ant-btn-group .ant-btn-primary:last-child:not(:first-child)[disabled]': {
        borderLeftColor: 'var(--border-base-color)'
    },
    '.ant-btn-ghost': {
        color: 'var(--ant-primary-color)',
        borderColor: 'var(--ant-primary-color)',
        background: '0 0'
    },
    '.ant-btn-ghost>a:only-child': { color: 'currentcolor' },
    '.ant-btn-ghost>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-ghost:focus,.ant-btn-ghost:hover': {
        color: 'var(--ant-primary-color-hover)',
        borderColor: 'var(--ant-primary-color-hover)',
        background: '0 0'
    },
    '.ant-btn-ghost:focus>a:only-child,.ant-btn-ghost:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-ghost:focus>a:only-child::after,.ant-btn-ghost:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-ghost:active': {
        color: 'var(--ant-primary-color-active)',
        borderColor: 'var(--ant-primary-color-active)',
        background: '0 0'
    },
    '.ant-btn-ghost:active>a:only-child': { color: 'currentcolor' },
    '.ant-btn-ghost:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-ghost[disabled],.ant-btn-ghost[disabled]:active,.ant-btn-ghost[disabled]:focus,.ant-btn-ghost[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-ghost[disabled]:active>a:only-child,.ant-btn-ghost[disabled]:focus>a:only-child,.ant-btn-ghost[disabled]:hover>a:only-child,.ant-btn-ghost[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-ghost[disabled]:active>a:only-child::after,.ant-btn-ghost[disabled]:focus>a:only-child::after,.ant-btn-ghost[disabled]:hover>a:only-child::after,.ant-btn-ghost[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dashed': {
        color: 'var(--text-main-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--background-color)',
        borderStyle: 'dashed'
    },
    '.ant-btn-dashed>a:only-child': { color: 'currentcolor' },
    '.ant-btn-dashed>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dashed:focus,.ant-btn-dashed:hover': {
        color: 'var(--ant-primary-color-hover)',
        borderColor: 'var(--ant-primary-color-hover)',
        background: 'var(--background-color)'
    },
    '.ant-btn-dashed:focus>a:only-child,.ant-btn-dashed:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dashed:focus>a:only-child::after,.ant-btn-dashed:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dashed:active': {
        color: 'var(--ant-primary-color-active)',
        borderColor: 'var(--ant-primary-color-active)',
        background: 'var(--background-color)'
    },
    '.ant-btn-dashed:active>a:only-child': { color: 'currentcolor' },
    '.ant-btn-dashed:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dashed[disabled],.ant-btn-dashed[disabled]:active,.ant-btn-dashed[disabled]:focus,.ant-btn-dashed[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-dashed[disabled]:active>a:only-child,.ant-btn-dashed[disabled]:focus>a:only-child,.ant-btn-dashed[disabled]:hover>a:only-child,.ant-btn-dashed[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dashed[disabled]:active>a:only-child::after,.ant-btn-dashed[disabled]:focus>a:only-child::after,.ant-btn-dashed[disabled]:hover>a:only-child::after,.ant-btn-dashed[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-danger': {
        color: '#fff',
        borderColor: 'var(--ant-error-color)',
        background: 'var(--ant-error-color)',
        textShadow: '0 -1px 0 rgba(0,0,0,.12)',
        boxShadow: '0 2px 0 rgba(0,0,0,.045)'
    },
    '.ant-btn-danger>a:only-child': { color: 'currentcolor' },
    '.ant-btn-danger>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-danger:focus,.ant-btn-danger:hover': {
        color: '#fff',
        borderColor: 'var(--ant-error-color-hover)',
        background: 'var(--ant-error-color-hover)'
    },
    '.ant-btn-danger:focus>a:only-child,.ant-btn-danger:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-danger:focus>a:only-child::after,.ant-btn-danger:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-danger:active': {
        color: '#fff',
        borderColor: 'var(--ant-error-color-active)',
        background: 'var(--ant-error-color-active)'
    },
    '.ant-btn-danger:active>a:only-child': { color: 'currentcolor' },
    '.ant-btn-danger:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-danger[disabled],.ant-btn-danger[disabled]:active,.ant-btn-danger[disabled]:focus,.ant-btn-danger[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-danger[disabled]:active>a:only-child,.ant-btn-danger[disabled]:focus>a:only-child,.ant-btn-danger[disabled]:hover>a:only-child,.ant-btn-danger[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-danger[disabled]:active>a:only-child::after,.ant-btn-danger[disabled]:focus>a:only-child::after,.ant-btn-danger[disabled]:hover>a:only-child::after,.ant-btn-danger[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-link': {
        color: 'var(--ant-primary-color)',
        borderColor: 'transparent',
        background: '0 0',
        boxShadow: 'none'
    },
    '.ant-btn-link>a:only-child': { color: 'currentcolor' },
    '.ant-btn-link>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-link:focus,.ant-btn-link:hover': {
        color: 'var(--ant-primary-color-hover)',
        background: '0 0'
    },
    '.ant-btn-link:focus>a:only-child,.ant-btn-link:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-link:focus>a:only-child::after,.ant-btn-link:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-link:active': {
        color: 'var(--ant-primary-color-active)',
        background: '0 0'
    },
    '.ant-btn-link:active>a:only-child': { color: 'currentcolor' },
    '.ant-btn-link:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-link:hover': { background: '0 0' },
    '.ant-btn-link:active,.ant-btn-link:focus,.ant-btn-link:hover': {
        borderColor: 'transparent'
    },
    '.ant-btn-link[disabled],.ant-btn-link[disabled]:active,.ant-btn-link[disabled]:focus,.ant-btn-link[disabled]:hover': {
        color: 'rgba(0,0,0,.25)',
        borderColor: 'transparent',
        background: '0 0',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-link[disabled]:active>a:only-child,.ant-btn-link[disabled]:focus>a:only-child,.ant-btn-link[disabled]:hover>a:only-child,.ant-btn-link[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-link[disabled]:active>a:only-child::after,.ant-btn-link[disabled]:focus>a:only-child::after,.ant-btn-link[disabled]:hover>a:only-child::after,.ant-btn-link[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-text': {
        color: 'var(--text-main-color)',
        borderColor: 'transparent',
        background: '0 0',
        boxShadow: 'none'
    },
    '.ant-btn-text:active>a:only-child,.ant-btn-text:focus>a:only-child,.ant-btn-text:hover>a:only-child,.ant-btn-text>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-text>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-text:focus>a:only-child::after,.ant-btn-text:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-text:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-text:focus,.ant-btn-text:hover': {
        color: 'var(--text-main-color)',
        background: 'rgba(0,0,0,.018)',
        borderColor: 'transparent'
    },
    '.ant-btn-text:active': {
        color: 'var(--text-main-color)',
        background: 'rgba(0,0,0,.028)',
        borderColor: 'transparent'
    },
    '.ant-btn-text[disabled],.ant-btn-text[disabled]:active,.ant-btn-text[disabled]:focus,.ant-btn-text[disabled]:hover': {
        color: 'rgba(0,0,0,.25)',
        borderColor: 'transparent',
        background: '0 0',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-text[disabled]:active>a:only-child,.ant-btn-text[disabled]:focus>a:only-child,.ant-btn-text[disabled]:hover>a:only-child,.ant-btn-text[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-text[disabled]:active>a:only-child::after,.ant-btn-text[disabled]:focus>a:only-child::after,.ant-btn-text[disabled]:hover>a:only-child::after,.ant-btn-text[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous': {
        color: 'var(--ant-error-color)',
        borderColor: 'var(--ant-error-color)',
        background: 'var(--background-color)'
    },
    '.ant-btn-dangerous>a:only-child': { color: 'currentcolor' },
    '.ant-btn-dangerous>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous:focus,.ant-btn-dangerous:hover': {
        color: 'var(--ant-error-color-hover)',
        borderColor: 'var(--ant-error-color-hover)',
        background: 'var(--background-color)'
    },
    '.ant-btn-dangerous:focus>a:only-child,.ant-btn-dangerous:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous:focus>a:only-child::after,.ant-btn-dangerous:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous:active': {
        color: 'var(--ant-error-color-active)',
        borderColor: 'var(--ant-error-color-active)',
        background: 'var(--background-color)'
    },
    '.ant-btn-dangerous:active>a:only-child': { color: 'currentcolor' },
    '.ant-btn-dangerous:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous[disabled],.ant-btn-dangerous[disabled]:active,.ant-btn-dangerous[disabled]:focus,.ant-btn-dangerous[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-dangerous[disabled]:active>a:only-child,.ant-btn-dangerous[disabled]:focus>a:only-child,.ant-btn-dangerous[disabled]:hover>a:only-child,.ant-btn-dangerous[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous[disabled]:active>a:only-child::after,.ant-btn-dangerous[disabled]:focus>a:only-child::after,.ant-btn-dangerous[disabled]:hover>a:only-child::after,.ant-btn-dangerous[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-primary': {
        color: '#fff',
        borderColor: 'var(--ant-error-color)',
        background: 'var(--ant-error-color)',
        textShadow: '0 -1px 0 rgba(0,0,0,.12)',
        boxShadow: '0 2px 0 rgba(0,0,0,.045)'
    },
    '.ant-btn-dangerous.ant-btn-primary>a:only-child': { color: 'currentcolor' },
    '.ant-btn-dangerous.ant-btn-primary>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-primary:focus,.ant-btn-dangerous.ant-btn-primary:hover': {
        color: '#fff',
        borderColor: 'var(--ant-error-color-hover)',
        background: 'var(--ant-error-color-hover)'
    },
    '.ant-btn-dangerous.ant-btn-primary:focus>a:only-child,.ant-btn-dangerous.ant-btn-primary:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous.ant-btn-primary:focus>a:only-child::after,.ant-btn-dangerous.ant-btn-primary:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-primary:active': {
        color: '#fff',
        borderColor: 'var(--ant-error-color-active)',
        background: 'var(--ant-error-color-active)'
    },
    '.ant-btn-dangerous.ant-btn-primary:active>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous.ant-btn-primary:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-primary[disabled],.ant-btn-dangerous.ant-btn-primary[disabled]:active,.ant-btn-dangerous.ant-btn-primary[disabled]:focus,.ant-btn-dangerous.ant-btn-primary[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-dangerous.ant-btn-primary[disabled]:active>a:only-child,.ant-btn-dangerous.ant-btn-primary[disabled]:focus>a:only-child,.ant-btn-dangerous.ant-btn-primary[disabled]:hover>a:only-child,.ant-btn-dangerous.ant-btn-primary[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous.ant-btn-primary[disabled]:active>a:only-child::after,.ant-btn-dangerous.ant-btn-primary[disabled]:focus>a:only-child::after,.ant-btn-dangerous.ant-btn-primary[disabled]:hover>a:only-child::after,.ant-btn-dangerous.ant-btn-primary[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-link': {
        color: 'var(--ant-error-color)',
        borderColor: 'transparent',
        background: '0 0',
        boxShadow: 'none'
    },
    '.ant-btn-dangerous.ant-btn-link>a:only-child': { color: 'currentcolor' },
    '.ant-btn-dangerous.ant-btn-link>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-link:focus,.ant-btn-dangerous.ant-btn-link:hover': {
        color: 'var(--ant-error-color-hover)',
        borderColor: 'transparent',
        background: '0 0'
    },
    '.ant-btn-dangerous.ant-btn-link:focus>a:only-child,.ant-btn-dangerous.ant-btn-link:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous.ant-btn-link:focus>a:only-child::after,.ant-btn-dangerous.ant-btn-link:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-link:active': {
        color: 'var(--ant-error-color-active)',
        borderColor: 'transparent',
        background: '0 0'
    },
    '.ant-btn-dangerous.ant-btn-link:active>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous.ant-btn-link:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-link[disabled],.ant-btn-dangerous.ant-btn-link[disabled]:active,.ant-btn-dangerous.ant-btn-link[disabled]:focus,.ant-btn-dangerous.ant-btn-link[disabled]:hover': {
        color: 'rgba(0,0,0,.25)',
        borderColor: 'transparent',
        background: '0 0',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-dangerous.ant-btn-link[disabled]:active>a:only-child,.ant-btn-dangerous.ant-btn-link[disabled]:focus>a:only-child,.ant-btn-dangerous.ant-btn-link[disabled]:hover>a:only-child,.ant-btn-dangerous.ant-btn-link[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous.ant-btn-link[disabled]:active>a:only-child::after,.ant-btn-dangerous.ant-btn-link[disabled]:focus>a:only-child::after,.ant-btn-dangerous.ant-btn-link[disabled]:hover>a:only-child::after,.ant-btn-dangerous.ant-btn-link[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-text': {
        color: 'var(--ant-error-color)',
        borderColor: 'transparent',
        background: '0 0',
        boxShadow: 'none'
    },
    '.ant-btn-dangerous.ant-btn-text>a:only-child': { color: 'currentcolor' },
    '.ant-btn-dangerous.ant-btn-text>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-text:focus,.ant-btn-dangerous.ant-btn-text:hover': {
        color: 'var(--ant-error-color-hover)',
        borderColor: 'transparent',
        background: 'rgba(0,0,0,.018)'
    },
    '.ant-btn-dangerous.ant-btn-text:focus>a:only-child,.ant-btn-dangerous.ant-btn-text:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous.ant-btn-text:focus>a:only-child::after,.ant-btn-dangerous.ant-btn-text:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-text:active': {
        color: 'var(--ant-error-color-active)',
        borderColor: 'transparent',
        background: 'rgba(0,0,0,.028)'
    },
    '.ant-btn-dangerous.ant-btn-text:active>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous.ant-btn-text:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-dangerous.ant-btn-text[disabled],.ant-btn-dangerous.ant-btn-text[disabled]:active,.ant-btn-dangerous.ant-btn-text[disabled]:focus,.ant-btn-dangerous.ant-btn-text[disabled]:hover': {
        color: 'rgba(0,0,0,.25)',
        borderColor: 'transparent',
        background: '0 0',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-dangerous.ant-btn-text[disabled]:active>a:only-child,.ant-btn-dangerous.ant-btn-text[disabled]:focus>a:only-child,.ant-btn-dangerous.ant-btn-text[disabled]:hover>a:only-child,.ant-btn-dangerous.ant-btn-text[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-dangerous.ant-btn-text[disabled]:active>a:only-child::after,.ant-btn-dangerous.ant-btn-text[disabled]:focus>a:only-child::after,.ant-btn-dangerous.ant-btn-text[disabled]:hover>a:only-child::after,.ant-btn-dangerous.ant-btn-text[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-icon-only': {
        width: '50px',
        height: '50px',
        padding: '9.9px 0',
        fontSize: '18px',
        borderRadius: '7px',
        verticalAlign: '-3px'
    },
    '.ant-btn-icon-only>*': { fontSize: '18px' },
    '.ant-btn-icon-only.ant-btn-lg': {
        width: '64px',
        height: '64px',
        padding: '15.3px 0',
        fontSize: '20px',
        borderRadius: '7px'
    },
    '.ant-btn-icon-only.ant-btn-lg>*': { fontSize: '20px' },
    '.ant-btn-icon-only.ant-btn-sm': {
        width: '32px',
        height: '32px',
        padding: '2.4px 0',
        fontSize: '16px',
        borderRadius: '7px'
    },
    '.ant-btn-icon-only.ant-btn-sm>*': { fontSize: '16px' },
    '.ant-btn-icon-only>.anticon': { display: 'flex', justifyContent: 'center' },
    '.ant-btn-icon-only .anticon-loading': { padding: '0 !important' as any },
    'a.ant-btn-icon-only': { verticalAlign: '-1px' },
    'a.ant-btn-icon-only>.anticon': { display: 'inline' },
    '.ant-btn-round': {
        height: '50px',
        padding: '11.4px 25px',
        fontSize: '16px',
        borderRadius: '50px'
    },
    '.ant-btn-round.ant-btn-lg': {
        height: '64px',
        padding: '16.9px 32px',
        fontSize: '18px',
        borderRadius: '64px'
    },
    '.ant-btn-round.ant-btn-sm': {
        height: '32px',
        padding: '2.4px 16px',
        fontSize: '16px',
        borderRadius: '32px'
    },
    '.ant-btn-round.ant-btn-icon-only': { width: 'auto' },
    '.ant-btn-circle': {
        minWidth: '50px',
        paddingRight: '0',
        paddingLeft: '0',
        borderRadius: '50%'
    },
    '.ant-btn-circle.ant-btn-lg': { minWidth: '64px', borderRadius: '50%' },
    '.ant-btn-circle.ant-btn-sm': { minWidth: '32px', borderRadius: '50%' },
    '.ant-btn::before': {
        position: 'absolute',
        top: '-1px',
        right: '-1px',
        bottom: '-1px',
        left: '-1px',
        zIndex: 1,
        display: 'none',
        background: 'var(--background-color)',
        borderRadius: 'inherit',
        opacity: 0.35,
        transition: 'opacity .2s',
        content: '""',
        pointerEvents: 'none'
    },
    '.ant-btn-group,.ant-btn-group>.ant-btn,.ant-btn-group>span>.ant-btn,.ant-btn.ant-btn-loading,.ant-btn:active>span,.ant-btn:focus>span': {
        position: 'relative'
    },
    '.ant-btn .anticon': {
        transition: 'margin-left .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-btn .anticon.anticon-minus>svg,.ant-btn .anticon.anticon-plus>svg': {
        shapeRendering: 'optimizeSpeed'
    },
    '.ant-btn.ant-btn-loading': { cursor: 'default' },
    '.ant-btn.ant-btn-loading::before': { display: 'block' },
    '.ant-btn>.ant-btn-loading-icon': {
        transition:
        'width .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-btn>.ant-btn-loading-icon .anticon': {
        paddingRight: '8px',
        animation: 'none'
    },
    '.ant-btn>.ant-btn-loading-icon .anticon svg': {
        animation: 'loadingCircle 1s infinite linear'
    },
    '.ant-btn-group': { display: 'inline-flex' },
    '.ant-btn-group>.ant-btn:active,.ant-btn-group>.ant-btn:focus,.ant-btn-group>.ant-btn:hover,.ant-btn-group>span>.ant-btn:active,.ant-btn-group>span>.ant-btn:focus,.ant-btn-group>span>.ant-btn:hover': {
        zIndex: 2
    },
    '.ant-btn-group>.ant-btn[disabled],.ant-btn-group>span>.ant-btn[disabled]': {
        zIndex: 0
    },
    '.ant-btn-group .ant-btn-icon-only': { fontSize: '16px' },
    '.ant-btn+.ant-btn-group,.ant-btn-group .ant-btn+.ant-btn,.ant-btn-group .ant-btn+span,.ant-btn-group span+.ant-btn,.ant-btn-group+.ant-btn,.ant-btn-group+.ant-btn-group,.ant-btn-group>span+span': {
        marginLeft: '-1px'
    },
    '.ant-btn-group .ant-btn-primary+.ant-btn:not(.ant-btn-primary):not([disabled])': {
        borderLeftColor: 'transparent'
    },
    '.ant-btn-group .ant-btn': { borderRadius: '0' },
    '.ant-btn-group-sm>.ant-btn:only-child,.ant-btn-group-sm>span:only-child>.ant-btn,.ant-btn-group>.ant-btn:only-child,.ant-btn-group>span:only-child>.ant-btn': {
        borderRadius: '7px'
    },
    '.ant-btn-group-sm>.ant-btn:first-child:not(:last-child),.ant-btn-group-sm>span:first-child:not(:last-child)>.ant-btn,.ant-btn-group>.ant-btn:first-child:not(:last-child),.ant-btn-group>span:first-child:not(:last-child)>.ant-btn': {
        borderTopLeftRadius: '7px',
        borderBottomLeftRadius: '7px'
    },
    '.ant-btn-group-sm>.ant-btn:last-child:not(:first-child),.ant-btn-group-sm>span:last-child:not(:first-child)>.ant-btn,.ant-btn-group>.ant-btn:last-child:not(:first-child),.ant-btn-group>span:last-child:not(:first-child)>.ant-btn': {
        borderTopRightRadius: '7px',
        borderBottomRightRadius: '7px'
    },
    '.ant-btn-group>.ant-btn:first-child,.ant-btn-group>span:first-child>.ant-btn': {
        marginLeft: '0'
    },
    '.ant-btn-group>.ant-btn-group': { cssFloat: 'left' },
    '.ant-btn-group>.ant-btn-group:not(:first-child):not(:last-child)>.ant-btn': {
        borderRadius: '0'
    },
    '.ant-btn-group>.ant-btn-group:first-child:not(:last-child)>.ant-btn:last-child': {
        paddingRight: '8px',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
    },
    '.ant-btn-group>.ant-btn-group:last-child:not(:first-child)>.ant-btn:first-child': {
        paddingLeft: '8px',
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-btn-group-rtl.ant-btn+.ant-btn-group,.ant-btn-group-rtl.ant-btn-group .ant-btn+.ant-btn,.ant-btn-group-rtl.ant-btn-group .ant-btn+span,.ant-btn-group-rtl.ant-btn-group span+.ant-btn,.ant-btn-group-rtl.ant-btn-group+.ant-btn,.ant-btn-group-rtl.ant-btn-group+.ant-btn-group,.ant-btn-group-rtl.ant-btn-group>span+span,.ant-btn-rtl.ant-btn+.ant-btn-group,.ant-btn-rtl.ant-btn-group .ant-btn+.ant-btn,.ant-btn-rtl.ant-btn-group .ant-btn+span,.ant-btn-rtl.ant-btn-group span+.ant-btn,.ant-btn-rtl.ant-btn-group+.ant-btn,.ant-btn-rtl.ant-btn-group+.ant-btn-group,.ant-btn-rtl.ant-btn-group>span+span': {
        marginRight: '-1px',
        marginLeft: 'auto'
    },
    '.ant-btn-group-rtl.ant-btn-group>.ant-btn:first-child:not(:last-child),.ant-btn-group-rtl.ant-btn-group>span:first-child:not(:last-child)>.ant-btn': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-btn-group-rtl.ant-btn-group>.ant-btn:last-child:not(:first-child),.ant-btn-group-rtl.ant-btn-group>span:last-child:not(:first-child)>.ant-btn': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-btn-group-rtl.ant-btn-group-sm>.ant-btn:first-child:not(:last-child),.ant-btn-group-rtl.ant-btn-group-sm>span:first-child:not(:last-child)>.ant-btn': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-btn-group-rtl.ant-btn-group-sm>.ant-btn:last-child:not(:first-child),.ant-btn-group-rtl.ant-btn-group-sm>span:last-child:not(:first-child)>.ant-btn': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-btn-compact-item:not(.ant-btn-compact-first-item):not(.ant-btn-compact-last-item).ant-btn,.ant-btn-compact-vertical-item:not(.ant-btn-compact-vertical-first-item):not(.ant-btn-compact-vertical-last-item),.ant-cascader-compact-item:not(.ant-cascader-compact-first-item):not(.ant-cascader-compact-last-item).ant-cascader': {
        borderRadius: '0'
    },
    '.ant-btn-compact-item-rtl.ant-btn-compact-last-item.ant-btn-compact-item-rtl:not(.ant-btn-compact-first-item),.ant-btn-compact-item-rtl.ant-btn-sm.ant-btn-compact-last-item.ant-btn-compact-item-rtl.ant-btn-sm:not(.ant-btn-compact-first-item),.ant-btn-compact-item.ant-btn.ant-btn-compact-first-item:not(.ant-btn-compact-last-item):not(.ant-btn-compact-item-rtl),.ant-btn-compact-item.ant-btn.ant-btn-compact-item-rtl.ant-btn-compact-last-item:not(.ant-btn-compact-first-item)': {
        borderBottomRightRadius: '0',
        borderTopRightRadius: '0'
    },
    '.ant-btn>.anticon+span,.ant-btn>span+.anticon': { marginLeft: '8px' },
    '.ant-btn.ant-btn-background-ghost': {
        color: 'var(--background-color)',
        borderColor: 'var(--background-color)'
    },
    '.ant-btn.ant-btn-background-ghost,.ant-btn.ant-btn-background-ghost:active,.ant-btn.ant-btn-background-ghost:focus,.ant-btn.ant-btn-background-ghost:hover': {
        background: '0 0'
    },
    '.ant-btn.ant-btn-background-ghost:focus,.ant-btn.ant-btn-background-ghost:hover': {
        color: 'var(--ant-primary-color-hover)',
        borderColor: 'var(--ant-primary-color-hover)'
    },
    '.ant-btn.ant-btn-background-ghost:active': {
        color: 'var(--ant-primary-color-active)',
        borderColor: 'var(--ant-primary-color-active)'
    },
    '.ant-btn.ant-btn-background-ghost[disabled]': {
        color: 'rgba(0,0,0,.25)',
        background: '0 0',
        borderColor: 'var(--border-base-color)'
    },
    '.ant-btn-background-ghost.ant-btn-primary': {
        color: 'var(--ant-primary-color)',
        borderColor: 'var(--ant-primary-color)',
        textShadow: 'none'
    },
    '.ant-btn-background-ghost.ant-btn-primary>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-primary>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-primary:focus,.ant-btn-background-ghost.ant-btn-primary:hover': {
        color: 'var(--ant-primary-color-hover)',
        borderColor: 'var(--ant-primary-color-hover)',
        background: '0 0'
    },
    '.ant-btn-background-ghost.ant-btn-primary:focus>a:only-child,.ant-btn-background-ghost.ant-btn-primary:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-primary:focus>a:only-child::after,.ant-btn-background-ghost.ant-btn-primary:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-primary:active': {
        color: 'var(--ant-primary-color-active)',
        borderColor: 'var(--ant-primary-color-active)',
        background: '0 0'
    },
    '.ant-btn-background-ghost.ant-btn-primary:active>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-primary:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-primary[disabled],.ant-btn-background-ghost.ant-btn-primary[disabled]:active,.ant-btn-background-ghost.ant-btn-primary[disabled]:focus,.ant-btn-background-ghost.ant-btn-primary[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-background-ghost.ant-btn-primary[disabled]:active>a:only-child,.ant-btn-background-ghost.ant-btn-primary[disabled]:focus>a:only-child,.ant-btn-background-ghost.ant-btn-primary[disabled]:hover>a:only-child,.ant-btn-background-ghost.ant-btn-primary[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-primary[disabled]:active>a:only-child::after,.ant-btn-background-ghost.ant-btn-primary[disabled]:focus>a:only-child::after,.ant-btn-background-ghost.ant-btn-primary[disabled]:hover>a:only-child::after,.ant-btn-background-ghost.ant-btn-primary[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-danger': {
        color: 'var(--ant-error-color)',
        borderColor: 'var(--ant-error-color)',
        textShadow: 'none'
    },
    '.ant-btn-background-ghost.ant-btn-danger>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-danger>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-danger:focus,.ant-btn-background-ghost.ant-btn-danger:hover': {
        color: 'var(--ant-error-color-hover)',
        borderColor: 'var(--ant-error-color-hover)',
        background: '0 0'
    },
    '.ant-btn-background-ghost.ant-btn-danger:focus>a:only-child,.ant-btn-background-ghost.ant-btn-danger:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-danger:focus>a:only-child::after,.ant-btn-background-ghost.ant-btn-danger:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-danger:active': {
        color: 'var(--ant-error-color-active)',
        borderColor: 'var(--ant-error-color-active)',
        background: '0 0'
    },
    '.ant-btn-background-ghost.ant-btn-danger:active>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-danger:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-danger[disabled],.ant-btn-background-ghost.ant-btn-danger[disabled]:active,.ant-btn-background-ghost.ant-btn-danger[disabled]:focus,.ant-btn-background-ghost.ant-btn-danger[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-background-ghost.ant-btn-danger[disabled]:active>a:only-child,.ant-btn-background-ghost.ant-btn-danger[disabled]:focus>a:only-child,.ant-btn-background-ghost.ant-btn-danger[disabled]:hover>a:only-child,.ant-btn-background-ghost.ant-btn-danger[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-danger[disabled]:active>a:only-child::after,.ant-btn-background-ghost.ant-btn-danger[disabled]:focus>a:only-child::after,.ant-btn-background-ghost.ant-btn-danger[disabled]:hover>a:only-child::after,.ant-btn-background-ghost.ant-btn-danger[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous': {
        color: 'var(--ant-error-color)',
        borderColor: 'var(--ant-error-color)',
        textShadow: 'none'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous:focus,.ant-btn-background-ghost.ant-btn-dangerous:hover': {
        color: 'var(--ant-error-color-hover)',
        borderColor: 'var(--ant-error-color-hover)',
        background: '0 0'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous:focus>a:only-child::after,.ant-btn-background-ghost.ant-btn-dangerous:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous:active': {
        color: 'var(--ant-error-color-active)',
        borderColor: 'var(--ant-error-color-active)',
        background: '0 0'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous:active>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous[disabled],.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous[disabled]:active>a:only-child::after,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:focus>a:only-child::after,.ant-btn-background-ghost.ant-btn-dangerous[disabled]:hover>a:only-child::after,.ant-btn-background-ghost.ant-btn-dangerous[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link': {
        color: 'var(--ant-error-color)',
        borderColor: 'transparent',
        textShadow: 'none'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover': {
        color: 'var(--ant-error-color-active)',
        borderColor: 'transparent',
        background: '0 0'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus>a:only-child::after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active': {
        color: 'var(--ant-error-color-active)',
        borderColor: 'transparent',
        background: '0 0'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled],.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'var(--border-base-color)',
        background: 'var(--disabled-bg-color)',
        textShadow: 'none',
        boxShadow: 'none'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover>a:only-child,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]>a:only-child': {
        color: 'currentcolor'
    },
    '.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:active>a:only-child::after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:focus>a:only-child::after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]:hover>a:only-child::after,.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link[disabled]>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    '.ant-btn-two-chinese-chars::first-letter': { letterSpacing: '.34em' },
    '.ant-btn-two-chinese-chars>:not(.anticon)': {
        marginRight: '-.34em',
        letterSpacing: '.34em'
    },
    '.ant-btn.ant-btn-block': { width: '100%' },
    '.ant-btn:empty': {
        display: 'inline-block',
        width: '0',
        visibility: 'hidden',
        content: '"\\a0"'
    },
    'a.ant-btn': { paddingTop: '.01px !important' as any, lineHeight: '48px' },
    'a.ant-btn-disabled': { cursor: 'not-allowed' },
    'a.ant-btn-disabled>*': { pointerEvents: 'none' },
    'a.ant-btn-disabled,a.ant-btn-disabled:active,a.ant-btn-disabled:focus,a.ant-btn-disabled:hover': {
        color: 'var(--disabled-color)',
        borderColor: 'transparent',
        background: '0 0',
        textShadow: 'none',
        boxShadow: 'none'
    },
    'a.ant-btn-disabled:active>a:only-child,a.ant-btn-disabled:focus>a:only-child,a.ant-btn-disabled:hover>a:only-child,a.ant-btn-disabled>a:only-child': {
        color: 'currentcolor'
    },
    'a.ant-btn-disabled:active>a:only-child::after,a.ant-btn-disabled:focus>a:only-child::after,a.ant-btn-disabled:hover>a:only-child::after,a.ant-btn-disabled>a:only-child::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        content: '""'
    },
    'a.ant-btn-lg': { lineHeight: '62px' },
    'a.ant-btn-sm': { lineHeight: '30px' },
    '.ant-btn-compact-item:not(.ant-btn-compact-last-item):not(.ant-btn-compact-item-rtl)': {
        marginRight: '-1px'
    },
    '.ant-btn-compact-item:not(.ant-btn-compact-last-item).ant-btn-compact-item-rtl': {
        marginLeft: '-1px'
    },
    '.ant-btn-compact-item:active,.ant-btn-compact-item:focus,.ant-btn-compact-item:hover': {
        zIndex: 2
    },
    '.ant-btn-compact-item[disabled]': { zIndex: 0 },
    '.ant-btn-compact-vertical-item:active,.ant-btn-compact-vertical-item:focus,.ant-btn-compact-vertical-item:hover,.ant-cascader-compact-item:active,.ant-cascader-compact-item:focus,.ant-cascader-compact-item:hover': {
        zIndex: 2
    },
    '.ant-btn-compact-item.ant-btn.ant-btn-compact-item-rtl.ant-btn-compact-first-item:not(.ant-btn-compact-last-item),.ant-btn-compact-item.ant-btn.ant-btn-compact-last-item:not(.ant-btn-compact-first-item):not(.ant-btn-compact-item-rtl)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-btn-icon-only.ant-btn-compact-item': { flex: 'none' },
    '.ant-btn-compact-item.ant-btn-primary:not([disabled])+.ant-btn-compact-item.ant-btn-primary:not([disabled])': {
        position: 'relative'
    },
    '.ant-btn-compact-item.ant-btn-primary:not([disabled])+.ant-btn-compact-item.ant-btn-primary:not([disabled])::after': {
        position: 'absolute',
        top: '-1px',
        left: '-1px',
        display: 'inline-block',
        width: '1px',
        height: 'calc(100% + 1px * 2)',
        backgroundColor: 'var(--ant-primary-5)',
        content: '" "'
    },
    '.ant-btn-compact-item-rtl.ant-btn-compact-first-item.ant-btn-compact-item-rtl:not(.ant-btn-compact-last-item)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-btn-compact-item-rtl.ant-btn-sm.ant-btn-compact-first-item.ant-btn-compact-item-rtl.ant-btn-sm:not(.ant-btn-compact-last-item)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-btn-compact-item-rtl.ant-btn-primary:not([disabled])+.ant-btn-compact-item-rtl.ant-btn-primary:not([disabled])::after': {
        right: '-1px'
    },
    '.ant-btn-compact-vertical-item:not(.ant-btn-compact-vertical-last-item)': {
        marginBottom: '-1px'
    },
    '.ant-btn-compact-vertical-item[disabled]': { zIndex: 0 },
    '.ant-btn-compact-vertical-item.ant-btn-compact-vertical-first-item:not(.ant-btn-compact-vertical-last-item)': {
        borderBottomRightRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-btn-compact-vertical-item.ant-btn-compact-vertical-last-item:not(.ant-btn-compact-vertical-first-item)': {
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0'
    },
    '.ant-btn-compact-vertical-item.ant-btn-primary:not([disabled])+.ant-btn-compact-vertical-item.ant-btn-primary:not([disabled])': {
        position: 'relative'
    },
    '.ant-btn-compact-vertical-item.ant-btn-primary:not([disabled])+.ant-btn-compact-vertical-item.ant-btn-primary:not([disabled])::after': {
        position: 'absolute',
        top: '-1px',
        left: '-1px',
        display: 'inline-block',
        width: 'calc(100% + 1px * 2)',
        height: '1px',
        backgroundColor: 'var(--ant-primary-5)',
        content: '" "'
    },
    '.ant-btn-group-rtl.ant-btn-group .ant-btn-primary+.ant-btn-primary,.ant-btn-group-rtl.ant-btn-group .ant-btn-primary:last-child:not(:first-child)': {
        borderRightColor: 'var(--ant-primary-5)',
        borderLeftColor: 'var(--border-base-color)'
    },
    '.ant-btn-group-rtl.ant-btn-group .ant-btn-primary+.ant-btn-primary[disabled],.ant-btn-group-rtl.ant-btn-group .ant-btn-primary:last-child:not(:first-child)[disabled]': {
        borderRightColor: 'var(--border-base-color)',
        borderLeftColor: 'var(--ant-primary-5)'
    },
    '.ant-btn-rtl.ant-btn>.ant-btn-loading-icon .anticon': {
        paddingRight: '0',
        paddingLeft: '8px'
    },
    '.ant-btn-rtl.ant-btn>.anticon+span,.ant-btn-rtl.ant-btn>span+.anticon': {
        marginRight: '8px',
        marginLeft: '0'
    },
    '.ant-picker-calendar': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        background: 'var(--background-color)'
    },
    '.ant-picker-calendar-header': {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '12px 0'
    },
    '.ant-picker-calendar-header .ant-picker-calendar-year-select': {
        minWidth: '80px'
    },
    '.ant-picker-calendar-header .ant-picker-calendar-month-select': {
        minWidth: '70px',
        marginLeft: '8px'
    },
    '.ant-picker-calendar-header .ant-picker-calendar-mode-switch': {
        marginLeft: '8px'
    },
    '.ant-picker-calendar .ant-picker-panel': {
        background: 'var(--background-color)',
        border: '0',
        borderTop: '1px solid #f0f0f0',
        borderRadius: '0'
    },
    '.ant-picker-calendar .ant-picker-panel .ant-picker-date-panel,.ant-picker-calendar .ant-picker-panel .ant-picker-month-panel': {
        width: 'auto'
    },
    '.ant-picker-calendar .ant-picker-panel .ant-picker-body': {
        padding: '8px 0'
    },
    '.ant-picker-calendar .ant-picker-panel .ant-picker-content': {
        width: '100%'
    },
    '.ant-picker-calendar-mini': { borderRadius: '7px' },
    '.ant-picker-calendar-mini .ant-picker-calendar-header': {
        paddingRight: '8px',
        paddingLeft: '8px'
    },
    '.ant-picker-calendar-mini .ant-picker-panel': {
        borderRadius: '0 0 7px 7px'
    },
    '.ant-picker-calendar-mini .ant-picker-content': { height: '256px' },
    '.ant-picker-calendar-mini .ant-picker-content th': {
        height: 'auto',
        padding: '0',
        lineHeight: '18px'
    },
    '.ant-picker-calendar-mini .ant-picker-cell::before': {
        pointerEvents: 'none'
    },
    '.ant-picker-calendar-full .ant-picker-panel': {
        display: 'block',
        width: '100%',
        textAlign: 'right',
        background: 'var(--background-color)',
        border: '0'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell .ant-picker-calendar-date-today::before,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell::before': {
        display: 'none'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-body td,.ant-picker-calendar-full .ant-picker-panel .ant-picker-body th': {
        padding: '0'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-body th': {
        height: 'auto',
        padding: '0 12px 5px 0',
        lineHeight: '18px'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell:hover .ant-picker-calendar-date': {
        background: 'var(--item-hover-bg)'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected .ant-picker-calendar-date,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected .ant-picker-calendar-date-today,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected:hover .ant-picker-calendar-date,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected:hover .ant-picker-calendar-date-today': {
        background: 'var(--ant-primary-1)'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected .ant-picker-calendar-date .ant-picker-calendar-date-value,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected .ant-picker-calendar-date-today .ant-picker-calendar-date-value,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected:hover .ant-picker-calendar-date .ant-picker-calendar-date-value,.ant-picker-calendar-full .ant-picker-panel .ant-picker-cell-selected:hover .ant-picker-calendar-date-today .ant-picker-calendar-date-value': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date': {
        display: 'block',
        width: 'auto',
        height: 'auto',
        margin: '0 4px',
        padding: '4px 8px 0',
        border: '0',
        borderTop: '2px solid #f0f0f0',
        borderRadius: '0',
        transition: 'background .3s'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-value': {
        lineHeight: '24px',
        transition: 'color .3s'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content': {
        position: 'static',
        width: 'auto',
        height: '86px',
        overflowY: 'auto',
        color: 'var(--text-main-color)',
        lineHeight: 1.5715,
        textAlign: 'left'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-today': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-today .ant-picker-calendar-date-value': {
        color: 'var(--text-main-color)'
    },
    '@media only screen and (max-width:360px)': {
        '.ant-picker-calendar-header': { display: 'block' },
        '.ant-picker-calendar-header .ant-picker-calendar-year-select': {
        width: '50%'
        },
        '.ant-picker-calendar-header .ant-picker-calendar-month-select': {
        width: 'calc(50% - 8px)'
        },
        '.ant-picker-calendar-header .ant-picker-calendar-mode-switch': {
        width: '100%',
        marginTop: '8px',
        marginLeft: '0'
        },
        '.ant-picker-calendar-header .ant-picker-calendar-mode-switch>label': {
        width: '50%',
        textAlign: 'center'
        }
    },
    '.ant-card-head::after,.ant-card-head::before': {
        display: 'table',
        content: '""'
    },
    '.ant-picker-calendar-rtl .ant-picker-calendar-header .ant-picker-calendar-mode-switch,.ant-picker-calendar-rtl .ant-picker-calendar-header .ant-picker-calendar-month-select': {
        marginRight: '8px',
        marginLeft: '0'
    },
    '.ant-picker-calendar-rtl.ant-picker-calendar-full .ant-picker-panel': {
        textAlign: 'left'
    },
    '.ant-dropdown-menu-submenu-rtl .ant-dropdown-menu-item-group-title,.ant-dropdown-menu.ant-dropdown-menu-rtl,.ant-dropdown-rtl .ant-dropdown-menu-item,.ant-dropdown-rtl .ant-dropdown-menu-item-group-title,.ant-dropdown-rtl .ant-dropdown-menu-submenu-popup li,.ant-dropdown-rtl .ant-dropdown-menu-submenu-popup ul,.ant-dropdown-rtl .ant-dropdown-menu-submenu-title,.ant-picker-calendar-rtl.ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content,.ant-picker-dropdown-rtl .ant-picker-footer-extra,.ant-picker-dropdown-rtl .ant-picker-ranges': {
        textAlign: 'right'
    },
    '.ant-picker-calendar-rtl.ant-picker-calendar-full .ant-picker-panel .ant-picker-body th': {
        padding: '0 0 5px 12px'
    },
    '.ant-card': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'relative',
        background: 'var(--background-color)',
        borderRadius: '7px'
    },
    '.ant-card-extra,.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-extra': {
        marginLeft: 'auto'
    },
    '.ant-card-hoverable': {
        cursor: 'pointer',
        transition: 'box-shadow .3s,border-color .3s'
    },
    '.ant-card-hoverable:hover': {
        borderColor: 'transparent',
        boxShadow:
        '0 1px 2px -2px rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.12),0 5px 12px 4px rgba(0,0,0,.09)'
    },
    '.ant-card-head,.ant-card-head .ant-tabs-top-bar': {
        borderBottom: '1px solid #f0f0f0'
    },
    '.ant-card-bordered': { border: '1px solid #f0f0f0' },
    '.ant-card-head': {
        minHeight: '48px',
        marginBottom: '-1px',
        padding: '0 20px',
        color: 'var(--text-main-color)',
        fontWeight: 500,
        fontSize: '18px',
        background: '0 0',
        borderRadius: '7px 7px 0 0'
    },
    '.ant-card-extra,.ant-card-head .ant-tabs-top': {
        color: 'var(--text-main-color)',
        fontWeight: 400
    },
    '.ant-card-head::after': { clear: 'both' },
    '.ant-card-head-wrapper': { display: 'flex', alignItems: 'center' },
    '.ant-card-head-title,.ant-card-meta-detail': { flex: 1, overflow: 'hidden' },
    '.ant-card-head-title': {
        display: 'inline-block',
        padding: '20px 0',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-card-body::after,.ant-card-body::before': {
        display: 'table',
        content: '""'
    },
    '.ant-card-head-title>.ant-typography,.ant-card-head-title>.ant-typography-edit-content': {
        left: '0',
        marginTop: '0',
        marginBottom: '0'
    },
    '.ant-card-head .ant-tabs-top': {
        clear: 'both',
        marginBottom: '-17px',
        fontSize: '16px'
    },
    '.ant-card-extra': { padding: '20px 0', fontSize: '16px' },
    '.ant-card-rtl .ant-card-extra': { marginRight: 'auto', marginLeft: '0' },
    '.ant-card-body': { padding: '20px' },
    '.ant-card-body::after': { clear: 'both' },
    '.ant-card-contain-grid .ant-card-body': {
        display: 'flex',
        flexWrap: 'wrap'
    },
    '.ant-card-contain-grid:not(.ant-card-loading) .ant-card-body': {
        margin: '-1px 0 0 -1px',
        padding: '0'
    },
    '.ant-card-grid': {
        width: '33.33%',
        padding: '20px',
        border: '0',
        borderRadius: '0',
        boxShadow:
        '1px 0 0 0 #f0f0f0,0 1px 0 0 #f0f0f0,1px 1px 0 0 #f0f0f0,1px 0 0 0 #f0f0f0 inset,0 1px 0 0 #f0f0f0 inset',
        transition: 'all .3s'
    },
    '.ant-card-grid-hoverable:hover': {
        position: 'relative',
        zIndex: 1,
        boxShadow:
        '0 1px 2px -2px rgba(0,0,0,.16),0 3px 6px 0 rgba(0,0,0,.12),0 5px 12px 4px rgba(0,0,0,.09)'
    },
    '.ant-card-contain-tabs>.ant-card-head .ant-card-head-title': {
        minHeight: '28px',
        paddingBottom: '0'
    },
    '.ant-card-contain-tabs>.ant-card-head .ant-card-extra': {
        paddingBottom: '0'
    },
    '.ant-card-bordered .ant-card-cover': {
        marginTop: '-1px',
        marginRight: '-1px',
        marginLeft: '-1px'
    },
    '.ant-card-cover>*': { display: 'block', width: '100%' },
    '.ant-card-cover img': { borderRadius: '7px 7px 0 0' },
    '.ant-card-actions': {
        display: 'flex',
        margin: '0',
        padding: '0',
        listStyle: 'none',
        background: 'var(--background-color)',
        borderTop: '1px solid #f0f0f0'
    },
    '.ant-card-actions::after,.ant-card-actions::before': {
        display: 'table',
        content: '""'
    },
    '.ant-card-actions::after': { clear: 'both' },
    '.ant-card-actions>li': {
        margin: '12px 0',
        color: 'rgba(0,0,0,.45)',
        textAlign: 'center'
    },
    '.ant-card-actions>li>span': {
        position: 'relative',
        display: 'block',
        minWidth: '32px',
        fontSize: '16px',
        lineHeight: 1.5715,
        cursor: 'pointer'
    },
    '.ant-card-actions>li>span:hover': {
        color: 'var(--ant-primary-color)',
        transition: 'color .3s'
    },
    '.ant-card-actions>li>span a:not(.ant-btn),.ant-card-actions>li>span>.anticon': {
        display: 'inline-block',
        width: '100%',
        color: 'rgba(0,0,0,.45)',
        lineHeight: '22px',
        transition: 'color .3s'
    },
    '.ant-card-actions>li>span a:not(.ant-btn):hover,.ant-card-actions>li>span>.anticon:hover': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-card-actions>li>span>.anticon': {
        fontSize: '16px',
        lineHeight: '22px'
    },
    '.ant-card-actions>li:not(:last-child)': { borderRight: '1px solid #f0f0f0' },
    '.ant-card-rtl .ant-card-actions>li:not(:last-child)': {
        borderRight: 'none',
        borderLeft: '1px solid #f0f0f0'
    },
    '.ant-card-type-inner .ant-card-head': {
        padding: '0 20px',
        background: 'rgba(1,80,154,.05)'
    },
    '.ant-card-type-inner .ant-card-head-title': {
        padding: '12px 0',
        fontSize: '16px'
    },
    '.ant-card-type-inner .ant-card-body': { padding: '16px 20px' },
    '.ant-card-type-inner .ant-card-extra': { padding: '13.5px 0' },
    '.ant-card-meta': { display: 'flex', margin: '-4px 0' },
    '.ant-card-meta::after,.ant-card-meta::before': {
        display: 'table',
        content: '""'
    },
    '.ant-card-meta::after': { clear: 'both' },
    '.ant-card-meta-avatar': { paddingRight: '16px' },
    '.ant-card-rtl .ant-card-meta-avatar': {
        paddingRight: '0',
        paddingLeft: '16px'
    },
    '.ant-card-meta-detail>div:not(:last-child)': { marginBottom: '8px' },
    '.ant-card-meta-title': {
        overflow: 'hidden',
        color: 'var(--text-main-color)',
        fontWeight: 500,
        fontSize: '18px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-card-meta-description': { color: 'rgba(0,0,0,.45)' },
    '.ant-card-loading': { overflow: 'hidden' },
    '.ant-card-loading .ant-card-body': { userSelect: 'none' },
    '.ant-card-small>.ant-card-head': {
        minHeight: '36px',
        padding: '0 15px',
        fontSize: '16px'
    },
    '.ant-card-small>.ant-card-head>.ant-card-head-wrapper>.ant-card-head-title': {
        padding: '15px 0'
    },
    '.ant-card-small>.ant-card-head>.ant-card-head-wrapper>.ant-card-extra': {
        padding: '15px 0',
        fontSize: '16px'
    },
    '.ant-card-small>.ant-card-body': { padding: '15px' },
    '.ant-carousel': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"'
    },
    '.ant-carousel .slick-slider': {
        position: 'relative',
        display: 'block',
        boxSizing: 'border-box',
        touchAction: 'pan-y',
        WebkitTouchCallout: 'none'
    },
    '.ant-carousel .slick-list': {
        position: 'relative',
        display: 'block',
        margin: '0',
        padding: '0',
        overflow: 'hidden'
    },
    '.ant-carousel .slick-list:focus': { outline: '0' },
    '.ant-carousel .slick-list.dragging': { cursor: 'pointer' },
    '.ant-carousel .slick-list .slick-slide': { pointerEvents: 'none' },
    '.ant-carousel .slick-list .slick-slide input.ant-checkbox-input,.ant-carousel .slick-list .slick-slide input.ant-radio-input': {
        visibility: 'hidden'
    },
    '.ant-carousel .slick-list .slick-slide.slick-active': {
        pointerEvents: 'auto'
    },
    '.ant-carousel .slick-list .slick-slide.slick-active input.ant-checkbox-input,.ant-carousel .slick-list .slick-slide.slick-active input.ant-radio-input': {
        visibility: 'visible'
    },
    '.ant-carousel .slick-list .slick-slide>div>div': { verticalAlign: 'bottom' },
    '.ant-carousel .slick-slider .slick-list,.ant-carousel .slick-slider .slick-track': {
        transform: 'translate3d(0,0,0)',
        touchAction: 'pan-y'
    },
    '.ant-carousel .slick-track': {
        position: 'relative',
        top: '0',
        left: '0',
        display: 'block'
    },
    '.ant-carousel .slick-track::after,.ant-carousel .slick-track::before': {
        display: 'table',
        content: '""'
    },
    '.ant-carousel .slick-track::after': { clear: 'both' },
    '.slick-loading .ant-carousel .slick-track': { visibility: 'hidden' },
    '.ant-carousel .slick-slide': {
        display: 'none',
        cssFloat: 'left',
        height: '100%',
        minHeight: '1px'
    },
    '.ant-carousel .slick-slide img': { display: 'block' },
    '.ant-carousel .slick-slide.slick-loading img': { display: 'none' },
    '.ant-carousel .slick-slide.dragging img': { pointerEvents: 'none' },
    '.ant-carousel .slick-initialized .slick-slide': { display: 'block' },
    '.ant-carousel .slick-loading .slick-slide': { visibility: 'hidden' },
    '.ant-carousel .slick-vertical .slick-slide': {
        display: 'block',
        height: 'auto'
    },
    '.ant-carousel .slick-arrow.slick-hidden': { display: 'none' },
    '.ant-carousel .slick-next,.ant-carousel .slick-prev': {
        position: 'absolute',
        top: '50%',
        display: 'block',
        width: '20px',
        height: '20px',
        marginTop: '-10px',
        padding: '0',
        color: 'transparent',
        fontSize: '0',
        lineHeight: 0,
        background: '0 0',
        border: '0',
        outline: '0',
        cursor: 'pointer'
    },
    '.ant-carousel .slick-next:focus,.ant-carousel .slick-next:hover,.ant-carousel .slick-prev:focus,.ant-carousel .slick-prev:hover': {
        color: 'transparent',
        background: '0 0',
        outline: '0'
    },
    '.ant-carousel .slick-next:focus::before,.ant-carousel .slick-next:hover::before,.ant-carousel .slick-prev:focus::before,.ant-carousel .slick-prev:hover::before': {
        opacity: 1
    },
    '.ant-carousel .slick-next.slick-disabled::before,.ant-carousel .slick-prev.slick-disabled::before': {
        opacity: 0.25
    },
    '.ant-carousel .slick-prev': { left: '-25px' },
    '.ant-carousel .slick-prev::before': { content: '"←"' },
    '.ant-carousel .slick-next': { right: '-25px' },
    '.ant-carousel .slick-next::before': { content: '"→"' },
    '.ant-carousel .slick-dots': {
        position: 'absolute',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 15,
        display: 'flex !important' as any,
        justifyContent: 'center',
        marginRight: '15%',
        marginBottom: '0',
        marginLeft: '15%',
        paddingLeft: '0',
        listStyle: 'none'
    },
    '.ant-carousel .slick-dots-bottom': { bottom: '12px' },
    '.ant-carousel .slick-dots-top': { top: '12px', bottom: 'auto' },
    '.ant-carousel .slick-dots li': {
        position: 'relative',
        display: 'inline-block',
        flex: '0 1 auto',
        boxSizing: 'content-box',
        width: '16px',
        height: '3px',
        margin: '0 4px',
        padding: '0',
        textAlign: 'center',
        textIndent: '-999px',
        verticalAlign: 'top',
        transition: 'all .5s'
    },
    '.ant-carousel .slick-dots li button': {
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '3px',
        padding: '0',
        color: 'transparent',
        fontSize: '0',
        background: 'var(--background-color)',
        border: '0',
        borderRadius: '1px',
        outline: '0',
        cursor: 'pointer',
        opacity: 0.3,
        transition: 'all .5s'
    },
    '.ant-carousel .slick-dots li button:focus,.ant-carousel .slick-dots li button:hover': {
        opacity: 0.75
    },
    '.ant-carousel .slick-dots li button::after': {
        position: 'absolute',
        top: '-4px',
        right: '-4px',
        bottom: '-4px',
        left: '-4px',
        content: '""'
    },
    '.ant-carousel .slick-dots li.slick-active': { width: '24px' },
    '.ant-carousel .slick-dots li.slick-active button': {
        background: 'var(--background-color)',
        opacity: 1
    },
    '.ant-carousel .slick-dots li.slick-active:focus,.ant-carousel .slick-dots li.slick-active:hover': {
        opacity: 1
    },
    '.ant-carousel-vertical .slick-dots': {
        top: '50%',
        bottom: 'auto',
        flexDirection: 'column',
        width: '3px',
        height: 'auto',
        margin: '0',
        transform: 'translateY(-50%)'
    },
    '.ant-carousel-vertical .slick-dots-left': { right: 'auto', left: '12px' },
    '.ant-carousel-vertical .slick-dots-right': { right: '12px', left: 'auto' },
    '.ant-carousel-vertical .slick-dots li': {
        width: '3px',
        height: '16px',
        margin: '4px 0',
        verticalAlign: 'baseline'
    },
    '.ant-carousel-vertical .slick-dots li button': {
        width: '3px',
        height: '16px'
    },
    '.ant-carousel-vertical .slick-dots li.slick-active,.ant-carousel-vertical .slick-dots li.slick-active button': {
        width: '3px',
        height: '24px'
    },
    '.ant-carousel-rtl .ant-carousel .slick-track': { right: '0', left: 'auto' },
    '.ant-carousel-rtl .ant-carousel .slick-prev': {
        right: '-25px',
        left: 'auto'
    },
    '.ant-carousel-rtl .ant-carousel .slick-prev::before': { content: '"→"' },
    '.ant-carousel-rtl .ant-carousel .slick-next': {
        right: 'auto',
        left: '-25px'
    },
    '.ant-carousel-rtl .ant-carousel .slick-next::before': { content: '"←"' },
    '.ant-carousel-rtl.ant-carousel .slick-dots': {
        flexDirection: 'row-reverse'
    },
    '.ant-carousel-rtl.ant-carousel-vertical .slick-dots': {
        flexDirection: 'column'
    },
    '@keyframes antCheckboxEffect': {
        '0%': { transform: 'scale(1)', opacity: 0.5 },
        '100%': { transform: 'scale(1.6)', opacity: 0 }
    },
    '.ant-cascader-checkbox': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'relative',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        outline: '0',
        cursor: 'pointer',
        top: '0',
        marginRight: '8px'
    },
    '.ant-cascader-checkbox-input:focus+.ant-cascader-checkbox-inner,.ant-cascader-checkbox-wrapper:hover .ant-cascader-checkbox-inner,.ant-cascader-checkbox:hover .ant-cascader-checkbox-inner': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-cascader-checkbox-checked::after': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '1px solid var(--ant-primary-color)',
        borderRadius: '7px',
        visibility: 'hidden',
        animation: 'antCheckboxEffect .36s ease-in-out',
        animationFillMode: 'backwards',
        content: '""'
    },
    '.ant-cascader-checkbox-wrapper:hover .ant-cascader-checkbox::after,.ant-cascader-checkbox:hover::after': {
        visibility: 'visible'
    },
    '.ant-cascader-checkbox-inner': {
        position: 'relative',
        top: '0',
        left: '0',
        display: 'block',
        width: '16px',
        height: '16px',
        direction: 'ltr',
        backgroundColor: 'transparent',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        borderCollapse: 'separate',
        transition: 'all .3s'
    },
    '.ant-cascader-checkbox-inner::after': {
        position: 'absolute',
        top: '50%',
        left: '21.5%',
        display: 'table',
        width: '5.71px',
        height: '9.14px',
        border: '2px solid #fff',
        borderTop: '0',
        borderLeft: '0',
        transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
        opacity: 0,
        transition: 'all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s',
        content: '" "'
    },
    '.ant-cascader-checkbox-input': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 1,
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        opacity: 0
    },
    '.ant-cascader-checkbox-checked .ant-cascader-checkbox-inner::after': {
        position: 'absolute',
        display: 'table',
        border: '2px solid #fff',
        borderTop: '0',
        borderLeft: '0',
        transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
        opacity: 1,
        transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
        content: '" "'
    },
    '.ant-cascader-checkbox-checked .ant-cascader-checkbox-inner': {
        backgroundColor: 'var(--ant-primary-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-cascader-checkbox-disabled': { cursor: 'not-allowed' },
    '.ant-cascader-checkbox-disabled.ant-cascader-checkbox-checked .ant-cascader-checkbox-inner::after': {
        borderColor: 'rgba(0,0,0,.25)',
        animationName: 'none'
    },
    '.ant-cascader-checkbox-disabled .ant-cascader-checkbox-input': {
        cursor: 'not-allowed',
        pointerEvents: 'none'
    },
    '.ant-cascader-checkbox-disabled .ant-cascader-checkbox-inner': {
        backgroundColor: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color) !important' as any
    },
    '.ant-cascader-checkbox-disabled .ant-cascader-checkbox-inner::after': {
        borderColor: 'var(--disabled-bg-color)',
        borderCollapse: 'separate',
        animationName: 'none'
    },
    '.ant-cascader-checkbox-disabled+span': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-cascader-checkbox-group,.ant-cascader-checkbox-wrapper': {
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        listStyle: 'none'
    },
    '.ant-cascader-checkbox-disabled:hover::after,.ant-cascader-checkbox-wrapper:hover .ant-cascader-checkbox-disabled::after': {
        visibility: 'hidden'
    },
    '.ant-cascader-checkbox-wrapper': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        fontFeatureSettings: '"tnum"',
        display: 'inline-flex',
        alignItems: 'baseline',
        lineHeight: 'unset',
        cursor: 'pointer'
    },
    '.ant-cascader-checkbox-wrapper::after': {
        display: 'inline-block',
        width: '0',
        overflow: 'hidden',
        content: '"\\a0"'
    },
    '.ant-cascader-checkbox-wrapper.ant-cascader-checkbox-wrapper-disabled': {
        cursor: 'not-allowed'
    },
    '.ant-cascader-checkbox-wrapper+.ant-cascader-checkbox-wrapper': {
        marginLeft: '8px'
    },
    '.ant-cascader-checkbox-wrapper.ant-cascader-checkbox-wrapper-in-form-item input[type=checkbox]': {
        width: '14px',
        height: '14px'
    },
    '.ant-cascader-checkbox+span': { paddingRight: '8px', paddingLeft: '8px' },
    '.ant-cascader-checkbox-group': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        lineHeight: 1.5715,
        fontFeatureSettings: '"tnum"',
        display: 'inline-block'
    },
    '.ant-cascader-checkbox-group-item': { marginRight: '8px' },
    '.ant-cascader-checkbox-group-item:last-child': { marginRight: '0' },
    '.ant-cascader-checkbox-group-item+.ant-cascader-checkbox-group-item': {
        marginLeft: '0'
    },
    '.ant-cascader-checkbox-indeterminate .ant-cascader-checkbox-inner': {
        backgroundColor: 'transparent',
        borderColor: 'var(--border-base-color)'
    },
    '.ant-cascader-checkbox-indeterminate .ant-cascader-checkbox-inner::after': {
        top: '50%',
        left: '50%',
        width: '8px',
        height: '8px',
        backgroundColor: 'var(--ant-primary-color)',
        border: '0',
        transform: 'translate(-50%,-50%) scale(1)',
        opacity: 1,
        content: '" "'
    },
    '.ant-cascader-compact-item.ant-cascader.ant-cascader-compact-first-item:not(.ant-cascader-compact-last-item):not(.ant-cascader-compact-item-rtl),.ant-cascader-compact-item.ant-cascader.ant-cascader-compact-item-rtl.ant-cascader-compact-last-item:not(.ant-cascader-compact-first-item)': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
    },
    '.ant-cascader-checkbox-indeterminate.ant-cascader-checkbox-disabled .ant-cascader-checkbox-inner::after': {
        backgroundColor: 'rgba(0,0,0,.25)',
        borderColor: 'rgba(0,0,0,.25)'
    },
    '.ant-cascader-checkbox-group-rtl .ant-cascader-checkbox-group-item': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-cascader-checkbox-group-rtl .ant-cascader-checkbox-group-item:last-child': {
        marginLeft: '0 !important' as any
    },
    '.ant-cascader-checkbox-group-rtl .ant-cascader-checkbox-group-item+.ant-cascader-checkbox-group-item': {
        marginLeft: '8px'
    },
    '.ant-cascader': { width: '184px' },
    '.ant-cascader-menus': {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'flex-start'
    },
    '.ant-cascader-menus.ant-cascader-menu-empty .ant-cascader-menu': {
        width: '100%',
        height: 'auto'
    },
    '.ant-cascader-menu': {
        flexGrow: 1,
        minWidth: '111px',
        height: '180px',
        margin: '-4px 0',
        padding: '4px 0',
        overflow: 'auto',
        verticalAlign: 'top',
        listStyle: 'none',
        borderRight: '1px solid #f0f0f0',
        msOverflowStyle: '-ms-autohiding-scrollbar'
    },
    '.ant-cascader-menu-item': {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        padding: '5px 12px',
        overflow: 'hidden',
        lineHeight: '22px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-cascader-menu-item:hover': { background: 'var(--item-hover-bg)' },
    '.ant-cascader-menu-item-disabled': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-cascader-menu-item-disabled:hover': { background: '0 0' },
    '.ant-cascader-menu-empty .ant-cascader-menu-item': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'default',
        pointerEvents: 'none'
    },
    '.ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled),.ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled):hover': {
        fontWeight: 500,
        backgroundColor: 'var(--ant-primary-1)'
    },
    '.ant-cascader-menu-item-content': { flex: 'auto' },
    '.ant-cascader-menu-item-expand .ant-cascader-menu-item-expand-icon,.ant-cascader-menu-item-loading-icon': {
        marginLeft: '4px',
        color: 'rgba(0,0,0,.45)',
        fontSize: '10px'
    },
    '.ant-checkbox,.ant-checkbox-wrapper': {
        padding: '0',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"'
    },
    '.ant-cascader-menu-item-disabled.ant-cascader-menu-item-expand .ant-cascader-menu-item-expand-icon,.ant-cascader-menu-item-disabled.ant-cascader-menu-item-loading-icon': {
        color: 'rgba(0,0,0,.25)'
    },
    '.ant-cascader-menu-item-keyword': { color: '#ff4d4f' },
    '.ant-cascader-compact-item:not(.ant-cascader-compact-last-item):not(.ant-cascader-compact-item-rtl)': {
        marginRight: '-1px'
    },
    '.ant-cascader-compact-item:not(.ant-cascader-compact-last-item).ant-cascader-compact-item-rtl': {
        marginLeft: '-1px'
    },
    '.ant-cascader-compact-item[disabled]': { zIndex: 0 },
    '.ant-cascader-compact-item.ant-cascader.ant-cascader-compact-item-rtl.ant-cascader-compact-first-item:not(.ant-cascader-compact-last-item),.ant-cascader-compact-item.ant-cascader.ant-cascader-compact-last-item:not(.ant-cascader-compact-first-item):not(.ant-cascader-compact-item-rtl)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-cascader-rtl .ant-cascader-menu-item-expand-icon,.ant-cascader-rtl .ant-cascader-menu-item-loading-icon': {
        marginRight: '4px',
        marginLeft: '0'
    },
    '.ant-cascader-rtl .ant-cascader-checkbox': {
        top: '0',
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-checkbox': {
        boxSizing: 'border-box',
        margin: '0',
        color: 'var(--text-main-color)',
        position: 'relative',
        top: '.2em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        outline: '0',
        cursor: 'pointer'
    },
    '.ant-checkbox-input:focus+.ant-checkbox-inner,.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-checkbox-checked::after': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '1px solid var(--ant-primary-color)',
        borderRadius: '7px',
        visibility: 'hidden',
        animation: 'antCheckboxEffect .36s ease-in-out',
        animationFillMode: 'backwards',
        content: '""'
    },
    '.ant-checkbox-wrapper:hover .ant-checkbox::after,.ant-checkbox:hover::after': {
        visibility: 'visible'
    },
    '.ant-checkbox-inner': {
        position: 'relative',
        top: '0',
        left: '0',
        display: 'block',
        width: '16px',
        height: '16px',
        direction: 'ltr',
        backgroundColor: 'transparent',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        borderCollapse: 'separate',
        transition: 'all .3s'
    },
    '.ant-checkbox-inner::after,.ant-tree-checkbox-inner::after': {
        width: '5.71px',
        transform: 'rotate(45deg) scale(0) translate(-50%,-50%)'
    },
    '.ant-checkbox-inner::after': {
        position: 'absolute',
        top: '50%',
        left: '21.5%',
        display: 'table',
        height: '9.14px',
        border: '2px solid #fff',
        borderTop: '0',
        borderLeft: '0',
        opacity: 0,
        transition: 'all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s',
        content: '" "'
    },
    '.ant-checkbox-input': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 1,
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        opacity: 0
    },
    '.ant-checkbox-checked .ant-checkbox-inner::after': {
        position: 'absolute',
        display: 'table',
        border: '2px solid #fff',
        borderTop: '0',
        borderLeft: '0',
        transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
        opacity: 1,
        transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
        content: '" "'
    },
    '.ant-checkbox-checked .ant-checkbox-inner': {
        backgroundColor: 'var(--ant-primary-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-checkbox-disabled': { cursor: 'not-allowed' },
    '.ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after': {
        borderColor: 'rgba(0,0,0,.25)',
        animationName: 'none'
    },
    '.ant-checkbox-disabled .ant-checkbox-input': {
        cursor: 'not-allowed',
        pointerEvents: 'none'
    },
    '.ant-checkbox-disabled .ant-checkbox-inner': {
        backgroundColor: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color) !important' as any
    },
    '.ant-checkbox-disabled .ant-checkbox-inner::after': {
        borderColor: 'var(--disabled-bg-color)',
        borderCollapse: 'separate',
        animationName: 'none'
    },
    '.ant-checkbox-disabled+span': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-checkbox-disabled:hover::after,.ant-checkbox-wrapper:hover .ant-checkbox-disabled::after': {
        visibility: 'hidden'
    },
    '.ant-checkbox-wrapper': {
        boxSizing: 'border-box',
        margin: '0',
        color: 'var(--text-main-color)',
        display: 'inline-flex',
        alignItems: 'baseline',
        lineHeight: 'unset',
        cursor: 'pointer'
    },
    '.ant-checkbox-wrapper::after': {
        display: 'inline-block',
        width: '0',
        overflow: 'hidden',
        content: '"\\a0"'
    },
    '.ant-checkbox-wrapper.ant-checkbox-wrapper-in-form-item input[type=checkbox],.ant-radio-wrapper.ant-radio-wrapper-in-form-item input[type=radio]': {
        width: '14px',
        height: '14px'
    },
    '.ant-checkbox-wrapper.ant-checkbox-wrapper-disabled': {
        cursor: 'not-allowed'
    },
    '.ant-checkbox-wrapper+.ant-checkbox-wrapper': { marginLeft: '8px' },
    '.ant-checkbox+span': { paddingRight: '8px', paddingLeft: '8px' },
    '.ant-checkbox-group,.ant-collapse': {
        padding: '0',
        color: 'var(--text-main-color)',
        lineHeight: 1.5715,
        fontSize: '16px',
        boxSizing: 'border-box',
        fontVariant: 'tabular-nums',
        fontFeatureSettings: '"tnum"',
        listStyle: 'none'
    },
    '.ant-checkbox-group': { margin: '0', display: 'inline-block' },
    '.ant-checkbox-group-item': { marginRight: '8px' },
    '.ant-checkbox-group-item:last-child': { marginRight: '0' },
    '.ant-checkbox-group-item+.ant-checkbox-group-item': { marginLeft: '0' },
    '.ant-checkbox-indeterminate .ant-checkbox-inner': {
        backgroundColor: 'transparent',
        borderColor: 'var(--border-base-color)'
    },
    '.ant-checkbox-indeterminate .ant-checkbox-inner::after': {
        top: '50%',
        left: '50%',
        width: '8px',
        height: '8px',
        backgroundColor: 'var(--ant-primary-color)',
        border: '0',
        transform: 'translate(-50%,-50%) scale(1)',
        opacity: 1,
        content: '" "'
    },
    '.ant-checkbox-indeterminate.ant-checkbox-disabled .ant-checkbox-inner::after': {
        backgroundColor: 'rgba(0,0,0,.25)',
        borderColor: 'rgba(0,0,0,.25)'
    },
    '.ant-checkbox-group-rtl .ant-checkbox-group-item': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-checkbox-group-rtl .ant-checkbox-group-item:last-child': {
        marginLeft: '0 !important' as any
    },
    '.ant-checkbox-group-rtl .ant-checkbox-group-item+.ant-checkbox-group-item': {
        marginLeft: '8px'
    },
    '.ant-collapse': {
        margin: '0',
        backgroundColor: 'rgba(1,80,154,.05)',
        border: '1px solid var(--border-base-color)',
        borderBottom: '0',
        borderRadius: '7px'
    },
    '.ant-collapse-item:last-child>.ant-collapse-content,.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header': {
        borderRadius: '0 0 7px 7px'
    },
    '.ant-collapse>.ant-collapse-item': {
        borderBottom: '1px solid var(--border-base-color)'
    },
    '.ant-collapse>.ant-collapse-item>.ant-collapse-header': {
        position: 'relative',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: '12px 16px',
        color: 'var(--heading-color)',
        lineHeight: 1.5715,
        cursor: 'pointer',
        transition: 'all .3s,visibility 0s'
    },
    '.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow': {
        display: 'inline-block',
        marginRight: '12px',
        fontSize: '14px',
        verticalAlign: '-1px'
    },
    '.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow svg': {
        transition: 'transform .24s'
    },
    '.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-header-text': {
        flex: 'auto'
    },
    '.ant-collapse>.ant-collapse-item>.ant-collapse-header:focus': {
        outline: '0'
    },
    '.ant-collapse>.ant-collapse-item .ant-collapse-header-collapsible-only': {
        cursor: 'default'
    },
    '.ant-collapse>.ant-collapse-item .ant-collapse-header-collapsible-only .ant-collapse-header-text': {
        flex: 'none',
        cursor: 'pointer'
    },
    '.ant-collapse>.ant-collapse-item .ant-collapse-icon-collapsible-only': {
        cursor: 'default'
    },
    '.ant-collapse>.ant-collapse-item .ant-collapse-icon-collapsible-only .ant-collapse-expand-icon': {
        cursor: 'pointer'
    },
    '.ant-collapse>.ant-collapse-item.ant-collapse-no-arrow>.ant-collapse-header': {
        paddingLeft: '12px'
    },
    '.ant-collapse-icon-position-end>.ant-collapse-item>.ant-collapse-header': {
        position: 'relative',
        padding: '12px 40px 12px 16px'
    },
    '.ant-collapse-icon-position-end>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow': {
        position: 'absolute',
        top: '50%',
        right: '16px',
        left: 'auto',
        margin: '0',
        transform: 'translateY(-50%)'
    },
    '.ant-collapse-content': {
        color: 'var(--text-main-color)',
        backgroundColor: 'var(--background-color)',
        borderTop: '1px solid var(--border-base-color)'
    },
    '.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-content,.ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content': {
        borderTop: '0',
        backgroundColor: 'transparent'
    },
    '.ant-collapse-content>.ant-collapse-content-box': { padding: '16px' },
    '.ant-collapse-content-hidden': { display: 'none' },
    '.ant-collapse-borderless': {
        backgroundColor: 'rgba(1,80,154,.05)',
        border: '0'
    },
    '.ant-collapse-borderless>.ant-collapse-item': {
        borderBottom: '1px solid var(--border-base-color)'
    },
    '.ant-collapse-borderless>.ant-collapse-item:last-child,.ant-collapse-ghost>.ant-collapse-item': {
        borderBottom: '0'
    },
    '.ant-collapse-borderless>.ant-collapse-item:last-child,.ant-collapse-borderless>.ant-collapse-item:last-child .ant-collapse-header': {
        borderRadius: '0'
    },
    '.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box': {
        paddingTop: '4px'
    },
    '.ant-collapse-ghost': { backgroundColor: 'transparent', border: '0' },
    '.ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box': {
        paddingTop: '12px',
        paddingBottom: '12px'
    },
    '.ant-collapse .ant-collapse-item-disabled>.ant-collapse-header,.ant-collapse .ant-collapse-item-disabled>.ant-collapse-header>.arrow': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-collapse-rtl.ant-collapse.ant-collapse-icon-position-end>.ant-collapse-item>.ant-collapse-header': {
        position: 'relative',
        padding: '12px 16px 12px 40px'
    },
    '.ant-collapse-rtl.ant-collapse.ant-collapse-icon-position-end>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow': {
        position: 'absolute',
        top: '50%',
        right: 'auto',
        left: '16px',
        margin: '0',
        transform: 'translateY(-50%)'
    },
    '.ant-collapse-rtl.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow svg,.ant-picker-rtl .ant-picker-separator': {
        transform: 'rotate(180deg)'
    },
    '.ant-collapse-rtl .ant-collapse>.ant-collapse-item>.ant-collapse-header': {
        padding: '12px 40px 12px 16px'
    },
    '.ant-collapse-rtl.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow': {
        marginRight: '0',
        marginLeft: '12px'
    },
    '.ant-collapse-rtl.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-extra': {
        marginRight: 'auto',
        marginLeft: '0'
    },
    '.ant-collapse-rtl.ant-collapse>.ant-collapse-item.ant-collapse-no-arrow>.ant-collapse-header': {
        paddingRight: '12px',
        paddingLeft: '0'
    },
    '.ant-comment': { position: 'relative', backgroundColor: 'inherit' },
    '.ant-comment-inner': { display: 'flex', padding: '16px 0' },
    '.ant-comment-avatar': {
        position: 'relative',
        flexShrink: 0,
        marginRight: '12px',
        cursor: 'pointer'
    },
    '.ant-comment-avatar img': {
        width: '32px',
        height: '32px',
        borderRadius: '50%'
    },
    '.ant-comment-content': {
        position: 'relative',
        flex: '1 1 auto',
        minWidth: '1px',
        fontSize: '16px',
        wordWrap: 'break-word'
    },
    '.ant-comment-content-author': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginBottom: '4px',
        fontSize: '16px'
    },
    '.ant-comment-content-author>a,.ant-comment-content-author>span': {
        paddingRight: '8px',
        fontSize: '14px',
        lineHeight: '18px'
    },
    '.ant-comment-content-author-name': {
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px',
        transition: 'color .3s'
    },
    '.ant-comment-content-author-name>*,.ant-comment-content-author-name>:hover': {
        color: 'rgba(0,0,0,.45)'
    },
    '.ant-comment-content-author-time': {
        color: '#ccc',
        whiteSpace: 'nowrap',
        cursor: 'auto'
    },
    '.ant-comment-content-detail p': {
        marginBottom: 'inherit',
        whiteSpace: 'pre-wrap'
    },
    '.ant-comment-actions': {
        marginTop: '12px',
        marginBottom: 'inherit',
        paddingLeft: '0'
    },
    '.ant-comment-actions>li': {
        display: 'inline-block',
        color: 'rgba(0,0,0,.45)'
    },
    '.ant-comment-actions>li>span': {
        marginRight: '10px',
        color: 'rgba(0,0,0,.45)',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'color .3s',
        userSelect: 'none'
    },
    '.ant-comment-actions>li>span:hover': { color: '#595959' },
    '.ant-comment-nested': { marginLeft: '44px' },
    '.ant-comment-rtl .ant-comment-avatar': {
        marginRight: '0',
        marginLeft: '12px'
    },
    '.ant-comment-rtl .ant-comment-content-author>a,.ant-comment-rtl .ant-comment-content-author>span': {
        paddingRight: '0',
        paddingLeft: '8px'
    },
    '.ant-comment-rtl .ant-comment-actions': { paddingRight: '0' },
    '.ant-comment-rtl .ant-comment-actions>li>span': {
        marginRight: '0',
        marginLeft: '10px'
    },
    '.ant-comment-rtl .ant-comment-nested': {
        marginRight: '44px',
        marginLeft: '0'
    },
    '.ant-picker-status-error.ant-picker,.ant-picker-status-error.ant-picker:not([disabled]):hover': {
        backgroundColor: 'var(--background-color)',
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-picker-status-error.ant-picker-focused,.ant-picker-status-error.ant-picker:focus': {
        borderColor: 'var(--ant-error-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-error-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-picker-status-error.ant-picker .ant-picker-active-bar': {
        background: 'var(--ant-error-color-hover)'
    },
    '.ant-picker-status-warning.ant-picker,.ant-picker-status-warning.ant-picker:not([disabled]):hover': {
        backgroundColor: 'var(--background-color)',
        borderColor: 'var(--ant-warning-color)'
    },
    '.ant-picker-status-warning.ant-picker-focused,.ant-picker-status-warning.ant-picker:focus': {
        borderColor: 'var(--ant-warning-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-warning-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-affix-wrapper,.ant-picker': {
        border: '1px solid var(--border-base-color)'
    },
    '.ant-picker-status-warning.ant-picker .ant-picker-active-bar': {
        background: 'var(--ant-warning-color-hover)'
    },
    '.ant-picker': {
        boxSizing: 'border-box',
        margin: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        padding: '11.5px 11px',
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--background-color)',
        borderRadius: '7px',
        transition: 'border .3s,box-shadow .3s'
    },
    '.ant-picker-focused,.ant-picker:hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-rtl .ant-picker-focused,.ant-input-rtl .ant-picker:hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-picker-focused': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-rtl .ant-picker-focused': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-picker.ant-picker-disabled': {
        background: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color)',
        cursor: 'not-allowed'
    },
    '.ant-picker.ant-picker-disabled .ant-picker-suffix': {
        color: 'rgba(0,0,0,.25)'
    },
    '.ant-picker.ant-picker-borderless': {
        backgroundColor: 'transparent !important' as any,
        borderColor: 'transparent !important' as any,
        boxShadow: 'none !important' as any
    },
    '.ant-picker-input': {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: '100%'
    },
    '.ant-picker-input>input': {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        lineHeight: 1.5715,
        borderRadius: '7px',
        transition: 'all .3s',
        flex: 'auto',
        minWidth: '1px',
        height: 'auto',
        padding: '0',
        background: '0 0',
        border: '0'
    },
    '.ant-picker-input>input::placeholder': {
        color: 'var(--input-placeholder-color)',
        userSelect: 'none'
    },
    '.ant-picker-input>input-disabled,.ant-picker-input>input[disabled]': {
        color: 'var(--disabled-color)',
        backgroundColor: 'var(--disabled-bg-color)',
        cursor: 'not-allowed'
    },
    '.ant-picker-input>input:placeholder-shown': { textOverflow: 'ellipsis' },
    '.ant-picker-input>input:hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-rtl .ant-picker-input>input:hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-picker-input>input-focused,.ant-picker-input>input:focus': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-rtl .ant-picker-input>input-focused,.ant-input-rtl .ant-picker-input>input:focus': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-picker-input>input-disabled:hover,.ant-picker-input>input[disabled]:hover': {
        borderColor: 'var(--border-base-color)',
        borderRightWidth: '1px'
    },
    '.ant-picker-input>input-disabled': {
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none',
        opacity: 1
    },
    '.ant-picker-input>input[disabled]': {
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none',
        opacity: 1,
        background: '0 0'
    },
    '.ant-picker-input>input-borderless,.ant-picker-input>input-borderless-disabled,.ant-picker-input>input-borderless-focused,.ant-picker-input>input-borderless:focus,.ant-picker-input>input-borderless:hover,.ant-picker-input>input-borderless[disabled]': {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none'
    },
    'textarea.ant-picker-input>input': {
        maxWidth: '100%',
        height: 'auto',
        minHeight: '50px',
        lineHeight: 1.5715,
        verticalAlign: 'bottom',
        transition: 'all .3s,height 0s'
    },
    '.ant-picker-input>input-lg': { padding: '16.9px 11px', fontSize: '18px' },
    '.ant-picker-input>input-sm': { padding: '2.4px 7px' },
    '.ant-picker-input>input:focus': { boxShadow: 'none' },
    '.ant-picker-input:hover .ant-picker-clear': { opacity: 1 },
    '.ant-picker-input-placeholder>input': {
        color: 'var(--input-placeholder-color)'
    },
    '.ant-picker-large': { padding: '17px 11px' },
    '.ant-picker-large .ant-picker-input>input': { fontSize: '18px' },
    '.ant-picker-small': { padding: '2.5px 7px' },
    '.ant-picker-suffix': {
        display: 'flex',
        flex: 'none',
        alignSelf: 'center',
        marginLeft: '4px',
        color: 'rgba(0,0,0,.25)',
        lineHeight: 1,
        pointerEvents: 'none'
    },
    '.ant-picker-suffix>*': { verticalAlign: 'top' },
    '.ant-picker-suffix>:not(:last-child)': { marginRight: '8px' },
    '.ant-picker-clear': {
        position: 'absolute',
        top: '50%',
        right: '0',
        color: 'rgba(0,0,0,.25)',
        lineHeight: 1,
        background: 'var(--background-color)',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        opacity: 0,
        transition: 'opacity .3s,color .3s'
    },
    '.ant-picker-clear>*': { verticalAlign: 'top' },
    '.ant-picker-clear:hover': { color: 'rgba(0,0,0,.45)' },
    '.ant-picker-separator': {
        position: 'relative',
        display: 'inline-block',
        width: '1em',
        height: '18px',
        color: 'rgba(0,0,0,.25)',
        fontSize: '18px',
        verticalAlign: 'top',
        cursor: 'default'
    },
    '.ant-picker-focused .ant-picker-separator': { color: 'rgba(0,0,0,.45)' },
    '.ant-picker-disabled .ant-picker-range-separator .ant-picker-separator': {
        cursor: 'not-allowed'
    },
    '.ant-picker-range': { position: 'relative', display: 'inline-flex' },
    '.ant-picker-range .ant-picker-clear': { right: '11px' },
    '.ant-picker-range:hover .ant-picker-clear': { opacity: 1 },
    '.ant-picker-range .ant-picker-active-bar': {
        bottom: '-1px',
        height: '2px',
        marginLeft: '11px',
        background: 'var(--ant-primary-color)',
        opacity: 0,
        transition: 'all .3s ease-out',
        pointerEvents: 'none'
    },
    '.ant-picker-range.ant-picker-small .ant-picker-active-bar,.ant-tag>.anticon+span,.ant-tag>span+.anticon': {
        marginLeft: '7px'
    },
    '.ant-picker-range.ant-picker-focused .ant-picker-active-bar': { opacity: 1 },
    '.ant-picker-range-separator': {
        alignItems: 'center',
        padding: '0 8px',
        lineHeight: 1
    },
    '.ant-picker-range.ant-picker-small .ant-picker-clear': { right: '7px' },
    '.ant-picker-dropdown': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        zIndex: 1050
    },
    '.ant-picker-dropdown-hidden': { display: 'none' },
    '.ant-picker-dropdown-placement-bottomLeft .ant-picker-range-arrow': {
        top: '2.59px',
        display: 'block',
        transform: 'rotate(-135deg) translateY(1px)'
    },
    '.ant-picker-dropdown-placement-topLeft .ant-picker-range-arrow': {
        bottom: '2.59px',
        display: 'block',
        transform: 'rotate(45deg)'
    },
    '.ant-picker-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-picker-dropdown-placement-topLeft,.ant-picker-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-picker-dropdown-placement-topRight,.ant-picker-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-picker-dropdown-placement-topLeft,.ant-picker-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-picker-dropdown-placement-topRight': {
        animationName: 'antSlideDownIn'
    },
    '.ant-dropdown.ant-slide-down-appear.ant-slide-down-appear-active.ant-dropdown-placement-bottom,.ant-dropdown.ant-slide-down-appear.ant-slide-down-appear-active.ant-dropdown-placement-bottomLeft,.ant-dropdown.ant-slide-down-appear.ant-slide-down-appear-active.ant-dropdown-placement-bottomRight,.ant-dropdown.ant-slide-down-enter.ant-slide-down-enter-active.ant-dropdown-placement-bottom,.ant-dropdown.ant-slide-down-enter.ant-slide-down-enter-active.ant-dropdown-placement-bottomLeft,.ant-dropdown.ant-slide-down-enter.ant-slide-down-enter-active.ant-dropdown-placement-bottomRight,.ant-picker-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-picker-dropdown-placement-bottomLeft,.ant-picker-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-picker-dropdown-placement-bottomRight,.ant-picker-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-picker-dropdown-placement-bottomLeft,.ant-picker-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-picker-dropdown-placement-bottomRight,.ant-select-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-select-dropdown-placement-bottomLeft,.ant-select-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-select-dropdown-placement-bottomLeft': {
        animationName: 'antSlideUpIn'
    },
    '.ant-picker-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-picker-dropdown-placement-topLeft,.ant-picker-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-picker-dropdown-placement-topRight': {
        animationName: 'antSlideDownOut'
    },
    '.ant-picker-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-picker-dropdown-placement-bottomLeft,.ant-picker-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-picker-dropdown-placement-bottomRight': {
        animationName: 'antSlideUpOut'
    },
    '.ant-picker-dropdown-range': { padding: '7.54px 0' },
    '.ant-picker-dropdown-range-hidden': { display: 'none' },
    '.ant-picker-dropdown .ant-picker-panel>.ant-picker-time-panel': {
        paddingTop: '4px'
    },
    '.ant-picker-ranges': {
        marginBottom: '0',
        padding: '4px 12px',
        overflow: 'hidden',
        lineHeight: '34px',
        textAlign: 'left',
        listStyle: 'none'
    },
    '.ant-picker-ranges>li': { display: 'inline-block' },
    '.ant-picker-ranges .ant-picker-preset>.ant-tag-blue': {
        color: 'var(--ant-primary-color)',
        background: 'var(--ant-primary-1)',
        borderColor: 'var(--ant-primary-3)',
        cursor: 'pointer'
    },
    '.ant-picker-ranges .ant-picker-ok': { cssFloat: 'right', marginLeft: '8px' },
    '.ant-picker-range-wrapper': { display: 'flex' },
    '.ant-picker-range-arrow': {
        position: 'absolute',
        zIndex: 1,
        display: 'none',
        width: '11.31px',
        height: '11.31px',
        marginLeft: '16.5px',
        boxShadow: '2px 2px 6px -2px rgba(0,0,0,.1)',
        transition: 'left .3s ease-out',
        borderRadius: '0 0 2px',
        pointerEvents: 'none'
    },
    '.ant-picker-range-arrow::before': {
        position: 'absolute',
        top: '-11.31px',
        left: '-11.31px',
        width: '33.94px',
        height: '33.94px',
        background: 'var(--background-color)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-10px -10px',
        content: '""',
        clipPath: [
        'inset(33% 33%)',
        'path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")'
        ]
    },
    '.ant-picker-panel-container': {
        overflow: 'hidden',
        verticalAlign: 'top',
        background: 'var(--background-color)',
        borderRadius: '7px',
        boxShadow:
        '0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)',
        transition: 'margin .3s'
    },
    '.ant-picker-compact-item.ant-picker.ant-picker-compact-first-item:not(.ant-picker-compact-last-item):not(.ant-picker-compact-item-rtl),.ant-picker-compact-item.ant-picker.ant-picker-compact-item-rtl.ant-picker-compact-last-item:not(.ant-picker-compact-first-item)': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
    },
    '.ant-picker-panel-container .ant-picker-panels': {
        display: 'inline-flex',
        flexWrap: 'nowrap',
        direction: 'ltr'
    },
    '.ant-picker-panel-container .ant-picker-panel': {
        verticalAlign: 'top',
        background: '0 0',
        borderWidth: '0 0 1px',
        borderRadius: '0'
    },
    '.ant-picker-panel-container .ant-picker-panel .ant-picker-content,.ant-picker-panel-container .ant-picker-panel table': {
        textAlign: 'center'
    },
    '.ant-picker-panel-container .ant-picker-panel-focused': {
        borderColor: '#f0f0f0'
    },
    '.ant-picker-compact-item:not(.ant-picker-compact-last-item):not(.ant-picker-compact-item-rtl)': {
        marginRight: '-1px'
    },
    '.ant-picker-compact-item:not(.ant-picker-compact-last-item).ant-picker-compact-item-rtl': {
        marginLeft: '-1px'
    },
    '.ant-picker-compact-item.ant-picker-focused,.ant-picker-compact-item:active,.ant-picker-compact-item:focus,.ant-picker-compact-item:hover': {
        zIndex: 2
    },
    '.ant-picker-compact-item[disabled]': { zIndex: 0 },
    '.ant-picker-compact-item:not(.ant-picker-compact-first-item):not(.ant-picker-compact-last-item).ant-picker': {
        borderRadius: '0'
    },
    '.ant-picker-compact-item.ant-picker.ant-picker-compact-item-rtl.ant-picker-compact-first-item:not(.ant-picker-compact-last-item),.ant-picker-compact-item.ant-picker.ant-picker-compact-last-item:not(.ant-picker-compact-first-item):not(.ant-picker-compact-item-rtl)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-picker-panel': {
        display: 'inline-flex',
        flexDirection: 'column',
        textAlign: 'center',
        background: 'var(--background-color)',
        border: '1px solid #f0f0f0',
        borderRadius: '7px',
        outline: '0'
    },
    '.ant-picker-panel-focused': { borderColor: 'var(--ant-primary-color)' },
    '.ant-picker-date-panel,.ant-picker-decade-panel,.ant-picker-month-panel,.ant-picker-quarter-panel,.ant-picker-time-panel,.ant-picker-week-panel,.ant-picker-year-panel': {
        display: 'flex',
        flexDirection: 'column',
        width: '280px'
    },
    '.ant-picker-header': {
        display: 'flex',
        padding: '0 8px',
        color: 'var(--heading-color)',
        borderBottom: '1px solid #f0f0f0'
    },
    '.ant-picker-header>*': { flex: 'none' },
    '.ant-picker-header button': {
        padding: '0',
        color: 'rgba(0,0,0,.25)',
        lineHeight: '40px',
        background: '0 0',
        border: '0',
        cursor: 'pointer',
        transition: 'color .3s'
    },
    '.ant-picker-header>button': { minWidth: '1.6em', fontSize: '16px' },
    '.ant-picker-header>button:hover': { color: 'var(--text-main-color)' },
    '.ant-picker-header-view': {
        flex: 'auto',
        fontWeight: 500,
        lineHeight: '40px'
    },
    '.ant-picker-header-view button': { color: 'inherit', fontWeight: 'inherit' },
    '.ant-picker-header-view button:not(:first-child)': { marginLeft: '8px' },
    '.ant-picker-header-view button:hover': { color: 'var(--ant-primary-color)' },
    '.ant-picker-next-icon,.ant-picker-prev-icon,.ant-picker-super-next-icon,.ant-picker-super-prev-icon': {
        position: 'relative',
        display: 'inline-block',
        width: '7px',
        height: '7px'
    },
    '.ant-picker-next-icon::before,.ant-picker-prev-icon::before,.ant-picker-super-next-icon::before,.ant-picker-super-prev-icon::before': {
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'inline-block',
        width: '7px',
        height: '7px',
        border: '0 solid currentcolor',
        borderWidth: '1.5px 0 0 1.5px',
        content: '""'
    },
    '.ant-picker-super-next-icon::after,.ant-picker-super-prev-icon::after': {
        position: 'absolute',
        top: '4px',
        left: '4px',
        display: 'inline-block',
        width: '7px',
        height: '7px',
        border: '0 solid currentcolor',
        borderWidth: '1.5px 0 0 1.5px',
        content: '""'
    },
    '.ant-picker-prev-icon,.ant-picker-super-prev-icon': {
        transform: 'rotate(-45deg)'
    },
    '.ant-picker-next-icon,.ant-picker-super-next-icon': {
        transform: 'rotate(135deg)'
    },
    '.ant-picker-content': {
        width: '100%',
        tableLayout: 'fixed',
        borderCollapse: 'collapse'
    },
    '.ant-picker-content td,.ant-picker-content th': {
        position: 'relative',
        minWidth: '24px',
        fontWeight: 400
    },
    '.ant-picker-content th': {
        height: '30px',
        color: 'var(--text-main-color)',
        lineHeight: '30px'
    },
    '.ant-picker-cell': {
        padding: '3px 0',
        color: 'rgba(0,0,0,.25)',
        cursor: 'pointer'
    },
    '.ant-picker-cell-in-view': { color: 'var(--text-main-color)' },
    '.ant-picker-cell::before': {
        position: 'absolute',
        top: '50%',
        right: '0',
        left: '0',
        zIndex: 1,
        height: '24px',
        transform: 'translateY(-50%)',
        transition: 'all .3s',
        content: '""'
    },
    '.ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner,.ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end) .ant-picker-cell-inner': {
        background: 'var(--item-hover-bg)'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 1,
        border: '1px solid var(--ant-primary-color)',
        borderRadius: '7px',
        content: '""'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-in-range': { position: 'relative' },
    '.ant-picker-cell-in-view.ant-picker-cell-in-range::before': {
        background: 'var(--ant-primary-1)'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,.ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner': {
        color: '#fff',
        background: 'var(--ant-primary-color)'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before': {
        background: 'var(--ant-primary-1)'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-range-start::before': {
        left: '50%'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-range-end::before': {
        right: '50%'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-end-single::after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-start-near-hover::after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end)::after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start-single::after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-end-near-hover::after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end)::after,.ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-in-range)::after': {
        position: 'absolute',
        top: '50%',
        zIndex: 0,
        height: '24px',
        borderTop: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        borderBottom: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        transform: 'translateY(-50%)',
        transition: 'all .3s',
        content: '""'
    },
    '.ant-picker-cell-range-hover-end::after,.ant-picker-cell-range-hover-start::after,.ant-picker-cell-range-hover::after': {
        right: '0',
        left: '2px'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover::before,.ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover::before,.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single).ant-picker-cell-range-hover-end::before,.ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover::before,.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start::before,.ant-picker-panel>:not(.ant-picker-date-panel) .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end::before,.ant-picker-panel>:not(.ant-picker-date-panel) .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start::before': {
        background: 'var(--ant-primary-color-deprecated-l-35)'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):not(.ant-picker-cell-range-end) .ant-picker-cell-inner': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):not(.ant-picker-cell-range-start) .ant-picker-cell-inner': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner::after,.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner::after': {
        position: 'absolute',
        top: '0',
        bottom: '0',
        zIndex: -1,
        background: 'var(--ant-primary-color-deprecated-l-35)',
        transition: 'all .3s',
        content: '""'
    },
    '.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner::after': {
        right: '-6px',
        left: '0'
    },
    '.ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner::after': {
        right: '0',
        left: '-6px'
    },
    '.ant-picker-cell-range-hover.ant-picker-cell-range-start::after': {
        right: '50%'
    },
    '.ant-picker-cell-range-hover.ant-picker-cell-range-end::after': {
        left: '50%'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover-edge-start-near-range)::after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-start::after,.ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-edge-start.ant-picker-cell-range-hover-edge-start-near-range::after,tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:first-child::after,tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover:first-child::after': {
        left: '6px',
        borderLeft: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        borderTopLeftRadius: '7px',
        borderBottomLeftRadius: '7px'
    },
    '.ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover-edge-end.ant-picker-cell-range-hover-edge-end-near-range::after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover-edge-end-near-range)::after,.ant-picker-cell-in-view.ant-picker-cell-range-hover-end::after,tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:last-child::after,tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover:last-child::after': {
        right: '6px',
        borderRight: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        borderTopRightRadius: '7px',
        borderBottomRightRadius: '7px'
    },
    '.ant-picker-cell-disabled': {
        color: 'rgba(0,0,0,.25)',
        pointerEvents: 'none'
    },
    '.ant-picker-cell-disabled .ant-picker-cell-inner': { background: '0 0' },
    '.ant-picker-cell-disabled::before': { background: 'rgba(0,0,0,.04)' },
    '.ant-picker-cell-disabled.ant-picker-cell-today .ant-picker-cell-inner::before': {
        borderColor: 'rgba(0,0,0,.25)'
    },
    '.ant-picker-decade-panel .ant-picker-content,.ant-picker-month-panel .ant-picker-content,.ant-picker-quarter-panel .ant-picker-content,.ant-picker-year-panel .ant-picker-content': {
        height: '264px'
    },
    '.ant-picker-decade-panel .ant-picker-cell-inner,.ant-picker-month-panel .ant-picker-cell-inner,.ant-picker-quarter-panel .ant-picker-cell-inner,.ant-picker-year-panel .ant-picker-cell-inner': {
        padding: '0 8px'
    },
    '.ant-picker-quarter-panel .ant-picker-content': { height: '56px' },
    '.ant-picker-footer': {
        width: 'min-content',
        minWidth: '100%',
        lineHeight: '38px',
        textAlign: 'center',
        borderBottom: '1px solid transparent'
    },
    '.ant-picker-panel .ant-picker-footer': { borderTop: '1px solid #f0f0f0' },
    '.ant-picker-footer-extra': {
        padding: '0 12px',
        lineHeight: '38px',
        textAlign: 'left'
    },
    '.ant-picker-footer-extra:not(:last-child)': {
        borderBottom: '1px solid #f0f0f0'
    },
    '.ant-picker-now': { textAlign: 'left' },
    '.ant-picker-today-btn': { color: 'var(--ant-primary-color)' },
    '.ant-picker-today-btn:hover': { color: 'var(--ant-primary-color-hover)' },
    '.ant-picker-today-btn:active': { color: 'var(--ant-primary-color-active)' },
    '.ant-picker-today-btn.ant-picker-today-btn-disabled': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-picker-decade-panel .ant-picker-cell-inner': { padding: '0 4px' },
    '.ant-picker-decade-panel .ant-picker-cell::before': { display: 'none' },
    '.ant-picker-month-panel .ant-picker-body,.ant-picker-quarter-panel .ant-picker-body,.ant-picker-year-panel .ant-picker-body': {
        padding: '0 8px'
    },
    '.ant-picker-date-panel .ant-picker-body,.ant-picker-week-panel .ant-picker-body': {
        padding: '8px 12px'
    },
    '.ant-picker-month-panel .ant-picker-cell-inner,.ant-picker-quarter-panel .ant-picker-cell-inner,.ant-picker-year-panel .ant-picker-cell-inner': {
        width: '60px'
    },
    '.ant-picker-month-panel .ant-picker-cell-range-hover-start::after,.ant-picker-quarter-panel .ant-picker-cell-range-hover-start::after,.ant-picker-year-panel .ant-picker-cell-range-hover-start::after': {
        left: '14px',
        borderLeft: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        borderRadius: '7px 0 0 7px'
    },
    '.ant-picker-month-panel .ant-picker-cell-range-hover-end::after,.ant-picker-panel-rtl .ant-picker-month-panel .ant-picker-cell-range-hover-start::after,.ant-picker-panel-rtl .ant-picker-quarter-panel .ant-picker-cell-range-hover-start::after,.ant-picker-panel-rtl .ant-picker-year-panel .ant-picker-cell-range-hover-start::after,.ant-picker-quarter-panel .ant-picker-cell-range-hover-end::after,.ant-picker-year-panel .ant-picker-cell-range-hover-end::after': {
        right: '14px',
        borderRight: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        borderRadius: '0 7px 7px 0'
    },
    '.ant-picker-panel-rtl .ant-picker-month-panel .ant-picker-cell-range-hover-end::after,.ant-picker-panel-rtl .ant-picker-quarter-panel .ant-picker-cell-range-hover-end::after,.ant-picker-panel-rtl .ant-picker-year-panel .ant-picker-cell-range-hover-end::after': {
        left: '14px',
        borderLeft: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        borderRadius: '7px 0 0 7px'
    },
    '.ant-picker-week-panel .ant-picker-cell .ant-picker-cell-inner,.ant-picker-week-panel .ant-picker-cell-selected .ant-picker-cell-inner,.ant-picker-week-panel .ant-picker-cell:hover .ant-picker-cell-inner': {
        background: '0 0 !important' as any
    },
    '.ant-picker-week-panel-row td': { transition: 'background .3s' },
    '.ant-picker-week-panel-row:hover td': { background: 'var(--item-hover-bg)' },
    '.ant-picker-week-panel-row-selected td,.ant-picker-week-panel-row-selected:hover td': {
        background: 'var(--ant-primary-color)'
    },
    '.ant-picker-week-panel-row-selected td.ant-picker-cell-week,.ant-picker-week-panel-row-selected:hover td.ant-picker-cell-week': {
        color: 'rgba(255,255,255,.5)'
    },
    '.ant-picker-week-panel-row-selected td.ant-picker-cell-today .ant-picker-cell-inner::before,.ant-picker-week-panel-row-selected:hover td.ant-picker-cell-today .ant-picker-cell-inner::before': {
        borderColor: '#fff'
    },
    '.ant-picker-datetime-panel .ant-picker-time-panel,.ant-picker-time-panel-column:not(:first-child)': {
        borderLeft: '1px solid #f0f0f0'
    },
    '.ant-picker-week-panel-row-selected td .ant-picker-cell-inner,.ant-picker-week-panel-row-selected:hover td .ant-picker-cell-inner': {
        color: '#fff'
    },
    '.ant-picker-date-panel .ant-picker-content': { width: '252px' },
    '.ant-picker-date-panel .ant-picker-content th': { width: '36px' },
    '.ant-picker-datetime-panel': { display: 'flex' },
    '.ant-picker-datetime-panel .ant-picker-date-panel,.ant-picker-datetime-panel .ant-picker-time-panel': {
        transition: 'opacity .3s'
    },
    '.ant-picker-datetime-panel-active .ant-picker-date-panel,.ant-picker-datetime-panel-active .ant-picker-time-panel': {
        opacity: 0.3
    },
    '.ant-picker-datetime-panel-active .ant-picker-date-panel-active,.ant-picker-datetime-panel-active .ant-picker-time-panel-active': {
        opacity: 1
    },
    '.ant-picker-time-panel': { width: 'auto', minWidth: 'auto' },
    '.ant-picker-time-panel .ant-picker-content': {
        display: 'flex',
        flex: 'auto',
        height: '224px'
    },
    '.ant-picker-time-panel-column': {
        flex: '1 0 auto',
        width: '56px',
        margin: '0',
        padding: '0',
        overflowY: 'hidden',
        textAlign: 'left',
        listStyle: 'none',
        transition: 'background .3s'
    },
    '.ant-picker-time-panel-column::after': {
        display: 'block',
        height: '196px',
        content: '""'
    },
    '.ant-picker-datetime-panel .ant-picker-time-panel-column::after': {
        height: '198px'
    },
    '.ant-picker-time-panel-column-active': {
        background: 'var(--ant-primary-color-active-deprecated-f-30)'
    },
    '.ant-picker-time-panel-column:hover': { overflowY: 'auto' },
    '.ant-picker-time-panel-column>li': { margin: '0', padding: '0' },
    '.ant-picker-time-panel-column>li.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner': {
        display: 'block',
        width: '100%',
        height: '28px',
        margin: '0',
        padding: '0 0 0 14px',
        color: 'var(--text-main-color)',
        lineHeight: '28px',
        borderRadius: '0',
        cursor: 'pointer',
        transition: 'background .3s'
    },
    '.ant-picker-time-panel-column>li.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner:hover': {
        background: 'var(--item-hover-bg)'
    },
    '.ant-menu-item:active,.ant-menu-submenu-title:active,.ant-picker-time-panel-column>li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner': {
        background: 'var(--ant-primary-1)'
    },
    '.ant-picker-time-panel-column>li.ant-picker-time-panel-cell-disabled .ant-picker-time-panel-cell-inner': {
        color: 'rgba(0,0,0,.25)',
        background: '0 0',
        cursor: 'not-allowed'
    },
    ':root .ant-picker-range-wrapper .ant-picker-month-panel .ant-picker-cell,:root .ant-picker-range-wrapper .ant-picker-year-panel .ant-picker-cell,_:-ms-fullscreen .ant-picker-range-wrapper .ant-picker-month-panel .ant-picker-cell,_:-ms-fullscreen .ant-picker-range-wrapper .ant-picker-year-panel .ant-picker-cell': {
        padding: '21px 0'
    },
    '.ant-picker-rtl': { direction: 'rtl' },
    '.ant-picker-rtl .ant-picker-suffix': { marginRight: '4px', marginLeft: '0' },
    '.ant-picker-rtl .ant-picker-clear': { right: 'auto', left: '0' },
    '.ant-picker-panel-rtl .ant-picker-header-view button:not(:first-child)': {
        marginRight: '8px',
        marginLeft: '0'
    },
    '.ant-picker-rtl.ant-picker-range .ant-picker-clear': {
        right: 'auto',
        left: '11px'
    },
    '.ant-picker-rtl.ant-picker-range .ant-picker-active-bar': {
        marginRight: '11px',
        marginLeft: '0'
    },
    '.ant-picker-rtl.ant-picker-range.ant-picker-small .ant-picker-active-bar': {
        marginRight: '7px'
    },
    '.ant-picker-dropdown-rtl .ant-picker-ranges .ant-picker-ok': {
        cssFloat: 'left',
        marginRight: '8px',
        marginLeft: '0'
    },
    '.ant-picker-panel-rtl': { direction: 'rtl' },
    '.ant-picker-panel-rtl .ant-picker-prev-icon,.ant-picker-panel-rtl .ant-picker-super-prev-icon': {
        transform: 'rotate(135deg)'
    },
    '.ant-picker-panel-rtl .ant-picker-next-icon,.ant-picker-panel-rtl .ant-picker-super-next-icon': {
        transform: 'rotate(-45deg)'
    },
    '.ant-picker-cell .ant-picker-cell-inner': {
        position: 'relative',
        zIndex: 2,
        display: 'inline-block',
        minWidth: '24px',
        height: '24px',
        lineHeight: '24px',
        borderRadius: '7px',
        transition: 'background .3s,border .3s'
    },
    '.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-start::before': {
        right: '50%',
        left: '0'
    },
    '.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-end::before': {
        right: '0',
        left: '50%'
    },
    '.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-end::before': {
        right: '50%',
        left: '50%'
    },
    '.ant-picker-panel-rtl .ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start .ant-picker-cell-inner::after': {
        right: '0',
        left: '-6px'
    },
    '.ant-picker-panel-rtl .ant-picker-date-panel .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end .ant-picker-cell-inner::after': {
        right: '-6px',
        left: '0'
    },
    '.ant-picker-panel-rtl .ant-picker-cell-range-hover.ant-picker-cell-range-start::after': {
        right: '0',
        left: '50%'
    },
    '.ant-picker-panel-rtl .ant-picker-cell-range-hover.ant-picker-cell-range-end::after': {
        right: '50%',
        left: '0'
    },
    '.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):not(.ant-picker-cell-range-end) .ant-picker-cell-inner': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):not(.ant-picker-cell-range-start) .ant-picker-cell-inner': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover-edge-start-near-range)::after,.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-start::after,.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-edge-start.ant-picker-cell-range-hover-edge-start-near-range::after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-selected):first-child::after': {
        right: '6px',
        left: '0',
        borderRight: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        borderLeft: 'none',
        borderRadius: '0 7px 7px 0'
    },
    '.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover-edge-end.ant-picker-cell-range-hover-edge-end-near-range::after,.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover-edge-end-near-range)::after,.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-range-hover-end::after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-selected):last-child::after': {
        right: '0',
        left: '6px',
        borderRight: 'none',
        borderLeft: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        borderRadius: '7px 0 0 7px'
    },
    '.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover-start.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover)::after,.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover)::after,.ant-picker-panel-rtl .ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-end.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover)::after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover.ant-picker-cell-range-hover-edge-end:first-child::after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover-end:first-child::after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:last-child::after,.ant-picker-panel-rtl tr>.ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover.ant-picker-cell-range-hover-edge-start:last-child::after': {
        right: '6px',
        left: '6px',
        borderRight: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        borderLeft: '1px dashed var(--ant-primary-color-deprecated-l-20)',
        borderRadius: '7px'
    },
    '.ant-picker-dropdown-rtl .ant-picker-footer-extra': { direction: 'rtl' },
    '.ant-picker-panel-rtl .ant-picker-time-panel': { direction: 'ltr' },
    '.ant-descriptions-rtl,.ant-divider-rtl,.ant-drawer-rtl,.ant-dropdown-menu-submenu-rtl .ant-dropdown-menu-item-group-title,.ant-dropdown-menu.ant-dropdown-menu-rtl,.ant-dropdown-rtl,.ant-dropdown-rtl .ant-dropdown-menu-item-group-title,.ant-empty-rtl,.ant-form-rtl,.ant-input-affix-wrapper-rtl,.ant-input-group-rtl,.ant-input-group-wrapper-rtl,.ant-input-number-affix-wrapper-rtl,.ant-input-number-rtl,.ant-input-rtl,.ant-input-search-rtl,.ant-input-textarea-rtl,.ant-row-rtl': {
        direction: 'rtl'
    },
    '.ant-descriptions-header': {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    '.ant-descriptions-title': {
        flex: 'auto',
        overflow: 'hidden',
        color: 'var(--heading-color)',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: 1.5715,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-descriptions-extra': {
        marginLeft: 'auto',
        color: 'var(--text-main-color)',
        fontSize: '16px'
    },
    '.ant-descriptions-view': { width: '100%', borderRadius: '7px' },
    '.ant-descriptions-view table': { width: '100%', tableLayout: 'fixed' },
    '.ant-descriptions-row>td,.ant-descriptions-row>th': {
        paddingBottom: '16px'
    },
    '.ant-descriptions-row:last-child': { borderBottom: 'none' },
    '.ant-descriptions-item-label': {
        color: 'var(--heading-color)',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: 1.5715,
        textAlign: 'start'
    },
    '.ant-descriptions-item-content,.ant-divider': {
        color: 'var(--text-main-color)',
        fontSize: '16px',
        lineHeight: 1.5715
    },
    '.ant-descriptions-item-label::after': {
        content: '":"',
        position: 'relative',
        top: '-.5px',
        margin: '0 8px 0 2px'
    },
    '.ant-descriptions-item-label.ant-descriptions-item-no-colon::after,.ant-dropdown::before': {
        content: '" "'
    },
    '.ant-descriptions-item-no-label::after': { margin: '0', content: '""' },
    '.ant-descriptions-item-content': {
        display: 'table-cell',
        flex: 1,
        wordBreak: 'break-word',
        overflowWrap: 'break-word'
    },
    '.ant-descriptions-item': { paddingBottom: '0', verticalAlign: 'top' },
    '.ant-descriptions-item-container': { display: 'flex' },
    '.ant-descriptions-item-container .ant-descriptions-item-content,.ant-descriptions-item-container .ant-descriptions-item-label': {
        display: 'inline-flex',
        alignItems: 'baseline'
    },
    '.ant-descriptions-middle .ant-descriptions-row>td,.ant-descriptions-middle .ant-descriptions-row>th': {
        paddingBottom: '12px'
    },
    '.ant-descriptions-small .ant-descriptions-row>td,.ant-descriptions-small .ant-descriptions-row>th': {
        paddingBottom: '8px'
    },
    '.ant-descriptions-bordered .ant-descriptions-view': {
        border: '1px solid #f0f0f0'
    },
    '.ant-descriptions-bordered .ant-descriptions-view>table': {
        tableLayout: 'auto',
        borderCollapse: 'collapse'
    },
    '.ant-descriptions-bordered .ant-descriptions-item-content,.ant-descriptions-bordered .ant-descriptions-item-label': {
        padding: '16px 24px',
        borderRight: '1px solid #f0f0f0'
    },
    '.ant-descriptions-bordered .ant-descriptions-item-content:last-child,.ant-descriptions-bordered .ant-descriptions-item-label:last-child': {
        borderRight: 'none'
    },
    '.ant-descriptions-bordered .ant-descriptions-item-label': {
        backgroundColor: '#fafafa'
    },
    '.ant-descriptions-bordered .ant-descriptions-item-label::after': {
        display: 'none'
    },
    '.ant-descriptions-bordered .ant-descriptions-row': {
        borderBottom: '1px solid #f0f0f0'
    },
    '.ant-descriptions-bordered .ant-descriptions-row:last-child': {
        borderBottom: 'none'
    },
    '.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-content,.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-label': {
        padding: '12px 24px'
    },
    '.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-content,.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-label': {
        padding: '8px 16px'
    },
    '.ant-descriptions-rtl .ant-descriptions-item-label::after': {
        margin: '0 2px 0 8px'
    },
    '.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content,.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label': {
        borderRight: 'none',
        borderLeft: '1px solid #f0f0f0'
    },
    '.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content:last-child,.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label:last-child': {
        borderLeft: 'none'
    },
    '.ant-divider': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        borderTop: '1px solid rgba(0,0,0,.06)'
    },
    '.ant-divider-vertical': {
        position: 'relative',
        top: '-.06em',
        display: 'inline-block',
        height: '.9em',
        margin: '0 8px',
        borderTop: '0',
        borderLeft: '1px solid rgba(0,0,0,.06)'
    },
    '.ant-divider-horizontal': {
        display: 'flex',
        clear: 'both',
        width: '100%',
        minWidth: '100%',
        margin: '24px 0'
    },
    '.ant-divider-horizontal.ant-divider-with-text': {
        display: 'flex',
        alignItems: 'center',
        margin: '16px 0',
        color: 'var(--heading-color)',
        fontWeight: 500,
        fontSize: '18px',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        borderTop: '0',
        borderTopColor: 'rgba(0,0,0,.06)'
    },
    '.ant-divider-horizontal.ant-divider-with-text::after,.ant-divider-horizontal.ant-divider-with-text::before': {
        position: 'relative',
        width: '50%',
        borderTop: '1px solid transparent',
        borderTopColor: 'inherit',
        borderBottom: '0',
        transform: 'translateY(50%)',
        content: '""'
    },
    '.ant-divider-horizontal.ant-divider-with-text-left::before': { width: '5%' },
    '.ant-divider-horizontal.ant-divider-with-text-left::after,.ant-divider-horizontal.ant-divider-with-text-right::before': {
        width: '95%'
    },
    '.ant-divider-horizontal.ant-divider-with-text-right::after': { width: '5%' },
    '.ant-divider-inner-text': { display: 'inline-block', padding: '0 1em' },
    '.ant-divider-dashed': {
        background: '0 0',
        borderColor: 'rgba(0,0,0,.06)',
        borderStyle: 'dashed',
        borderWidth: '1px 0 0'
    },
    '.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed::after,.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed::before': {
        borderStyle: 'dashed none none'
    },
    '.ant-divider-vertical.ant-divider-dashed': { borderWidth: '0 0 0 1px' },
    '.ant-drawer-header,.ant-list-split .ant-list-item': {
        borderBottom: '1px solid #f0f0f0'
    },
    '.ant-divider-plain.ant-divider-with-text': {
        color: 'var(--text-main-color)',
        fontWeight: 400,
        fontSize: '16px'
    },
    '.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-no-default-orientation-margin-left::before': {
        width: '0'
    },
    '.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-no-default-orientation-margin-left::after,.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-no-default-orientation-margin-right::before': {
        width: '100%'
    },
    '.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-no-default-orientation-margin-left .ant-divider-inner-text': {
        paddingLeft: '0'
    },
    '.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-no-default-orientation-margin-right::after': {
        width: '0'
    },
    '.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-no-default-orientation-margin-right .ant-divider-inner-text': {
        paddingRight: '0'
    },
    '.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-left::before': {
        width: '95%'
    },
    '.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-left::after,.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-right::before': {
        width: '5%'
    },
    '.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-right::after': {
        width: '95%'
    },
    '.ant-drawer': {
        position: 'fixed',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 1000,
        pointerEvents: 'none'
    },
    '.ant-drawer-inline': { position: 'absolute' },
    '.ant-drawer-mask': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 1000,
        background: 'rgba(0,0,0,.45)',
        pointerEvents: 'auto'
    },
    '.ant-drawer-content-wrapper': {
        position: 'absolute',
        zIndex: 1000,
        transition: 'all .3s'
    },
    '.ant-drawer-content-wrapper-hidden': { display: 'none' },
    '.ant-drawer-left>.ant-drawer-content-wrapper': {
        top: '0',
        bottom: '0',
        left: '0',
        boxShadow:
        '6px 0 16px -8px rgba(0,0,0,.08),9px 0 28px 0 rgba(0,0,0,.05),12px 0 48px 16px rgba(0,0,0,.03)'
    },
    '.ant-drawer-right>.ant-drawer-content-wrapper': {
        top: '0',
        right: '0',
        bottom: '0',
        boxShadow:
        '-6px 0 16px -8px rgba(0,0,0,.08),-9px 0 28px 0 rgba(0,0,0,.05),-12px 0 48px 16px rgba(0,0,0,.03)'
    },
    '.ant-drawer-top>.ant-drawer-content-wrapper': {
        top: '0',
        right: '0',
        left: '0',
        boxShadow:
        '0 6px 16px -8px rgba(0,0,0,.08),0 9px 28px 0 rgba(0,0,0,.05),0 12px 48px 16px rgba(0,0,0,.03)'
    },
    '.ant-drawer-bottom>.ant-drawer-content-wrapper': {
        right: '0',
        bottom: '0',
        left: '0',
        boxShadow:
        '0 -6px 16px -8px rgba(0,0,0,.08),0 -9px 28px 0 rgba(0,0,0,.05),0 -12px 48px 16px rgba(0,0,0,.03)'
    },
    '.ant-drawer-content': {
        width: '100%',
        height: '100%',
        overflow: 'auto',
        background: 'var(--background-color)',
        pointerEvents: 'auto'
    },
    '.ant-drawer-wrapper-body': {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    '.ant-drawer-header': {
        display: 'flex',
        flex: 0,
        alignItems: 'center',
        padding: '16px 24px',
        fontSize: '18px',
        lineHeight: '22px'
    },
    '.ant-drawer-header-title': {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        minWidth: '0',
        minHeight: '0'
    },
    '.ant-drawer-extra': { flex: 'none' },
    '.ant-drawer-close': {
        display: 'inline-block',
        marginRight: '12px',
        color: 'var(--icon-color)',
        fontWeight: 700,
        fontSize: '18px',
        fontStyle: 'normal',
        lineHeight: 1,
        textAlign: 'center',
        textTransform: 'none',
        textDecoration: 'none',
        background: '0 0',
        border: '0',
        outline: '0',
        cursor: 'pointer',
        transition: 'color .3s',
        textRendering: 'auto'
    },
    '.ant-drawer-footer,.ant-list-split.ant-list-empty .ant-list-footer': {
        borderTop: '1px solid #f0f0f0'
    },
    '.ant-drawer-close:focus,.ant-drawer-close:hover': {
        color: 'var(--icon-hover-color)',
        textDecoration: 'none'
    },
    '.ant-drawer-title': {
        flex: 1,
        margin: '0',
        color: 'var(--heading-color)',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '22px'
    },
    '.ant-drawer-body': {
        flex: 1,
        minWidth: '0',
        minHeight: '0',
        padding: '24px',
        overflow: 'auto'
    },
    '.ant-drawer-footer': { flexShrink: 0, padding: '10px 16px' },
    '.panel-motion-appear-start,.panel-motion-enter-start,.panel-motion-leave-start': {
        transition: 'none'
    },
    '.ant-drawer-mask-motion-appear-active,.ant-drawer-mask-motion-enter-active,.ant-drawer-mask-motion-leave-active,.panel-motion-appear-active,.panel-motion-enter-active,.panel-motion-leave-active': {
        transition: 'all .3s'
    },
    '.ant-drawer-mask-motion-appear,.ant-drawer-mask-motion-enter': {
        opacity: 0
    },
    '.ant-drawer-mask-motion-appear-active,.ant-drawer-mask-motion-enter-active,.ant-drawer-mask-motion-leave': {
        opacity: 1
    },
    '.ant-drawer-mask-motion-leave-active': { opacity: 0 },
    '.ant-drawer-panel-motion-left-appear-start,.ant-drawer-panel-motion-left-enter-start,.ant-drawer-panel-motion-left-leave-start': {
        transition: 'none'
    },
    '.ant-drawer-panel-motion-left-appear-active,.ant-drawer-panel-motion-left-enter-active,.ant-drawer-panel-motion-left-leave-active': {
        transition: 'all .3s'
    },
    '.ant-drawer-panel-motion-left-appear-start,.ant-drawer-panel-motion-left-enter-start': {
        transform: 'translateX(-100%) !important' as any
    },
    '.ant-drawer-panel-motion-left-appear-active,.ant-drawer-panel-motion-left-enter-active,.ant-drawer-panel-motion-left-leave': {
        transform: 'translateX(0)'
    },
    '.ant-drawer-panel-motion-left-leave-active': {
        transform: 'translateX(-100%)'
    },
    '.ant-drawer-panel-motion-right-appear-start,.ant-drawer-panel-motion-right-enter-start,.ant-drawer-panel-motion-right-leave-start': {
        transition: 'none'
    },
    '.ant-drawer-panel-motion-right-appear-active,.ant-drawer-panel-motion-right-enter-active,.ant-drawer-panel-motion-right-leave-active': {
        transition: 'all .3s'
    },
    '.ant-drawer-panel-motion-right-appear-start,.ant-drawer-panel-motion-right-enter-start': {
        transform: 'translateX(100%) !important' as any
    },
    '.ant-drawer-panel-motion-right-appear-active,.ant-drawer-panel-motion-right-enter-active,.ant-drawer-panel-motion-right-leave': {
        transform: 'translateX(0)'
    },
    '.ant-drawer-panel-motion-right-leave-active': {
        transform: 'translateX(100%)'
    },
    '.ant-drawer-panel-motion-top-appear-start,.ant-drawer-panel-motion-top-enter-start,.ant-drawer-panel-motion-top-leave-start': {
        transition: 'none'
    },
    '.ant-drawer-panel-motion-top-appear-active,.ant-drawer-panel-motion-top-enter-active,.ant-drawer-panel-motion-top-leave-active': {
        transition: 'all .3s'
    },
    '.ant-drawer-panel-motion-bottom-appear-start,.ant-drawer-panel-motion-bottom-enter-start,.ant-drawer-panel-motion-bottom-leave-start,.ant-form-item-with-help,.ant-pagination-item a': {
        transition: 'none'
    },
    '.ant-drawer-panel-motion-top-appear-start,.ant-drawer-panel-motion-top-enter-start': {
        transform: 'translateY(-100%) !important' as any
    },
    '.ant-drawer-panel-motion-top-appear-active,.ant-drawer-panel-motion-top-enter-active,.ant-drawer-panel-motion-top-leave': {
        transform: 'translateY(0)'
    },
    '.ant-drawer-panel-motion-top-leave-active': {
        transform: 'translateY(-100%)'
    },
    '.ant-drawer-panel-motion-bottom-appear-active,.ant-drawer-panel-motion-bottom-enter-active,.ant-drawer-panel-motion-bottom-leave-active': {
        transition: 'all .3s'
    },
    '.ant-drawer-panel-motion-bottom-appear-start,.ant-drawer-panel-motion-bottom-enter-start': {
        transform: 'translateY(100%) !important' as any
    },
    '.ant-drawer-panel-motion-bottom-appear-active,.ant-drawer-panel-motion-bottom-enter-active,.ant-drawer-panel-motion-bottom-leave': {
        transform: 'translateY(0)'
    },
    '.ant-drawer-panel-motion-bottom-leave-active': {
        transform: 'translateY(100%)'
    },
    '.ant-drawer-rtl .ant-drawer-close': { marginRight: '0', marginLeft: '12px' },
    '.ant-dropdown-menu-item.ant-dropdown-menu-item-danger': {
        color: 'var(--ant-error-color)'
    },
    '.ant-dropdown-menu-item.ant-dropdown-menu-item-danger:hover': {
        color: '#fff',
        backgroundColor: 'var(--ant-error-color)'
    },
    '.ant-dropdown': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        zIndex: 1050,
        display: 'block'
    },
    '.ant-dropdown::before': {
        position: 'absolute',
        top: '-4px',
        right: '0',
        bottom: '-4px',
        left: '-7px',
        zIndex: -9999,
        opacity: 0.0001
    },
    '.ant-dropdown-wrap': { position: 'relative' },
    '.ant-dropdown-wrap .ant-btn>.anticon-down': { fontSize: '10px' },
    '.ant-dropdown-wrap .anticon-down::before': { transition: 'transform .2s' },
    '.ant-dropdown-wrap-open .anticon-down::before': {
        transform: 'rotate(180deg)'
    },
    '.ant-dropdown-hidden,.ant-dropdown-menu-hidden,.ant-dropdown-menu-submenu-hidden': {
        display: 'none'
    },
    '.ant-dropdown-show-arrow.ant-dropdown-placement-top,.ant-dropdown-show-arrow.ant-dropdown-placement-topLeft,.ant-dropdown-show-arrow.ant-dropdown-placement-topRight': {
        paddingBottom: '15.31px'
    },
    '.ant-dropdown-show-arrow.ant-dropdown-placement-bottom,.ant-dropdown-show-arrow.ant-dropdown-placement-bottomLeft,.ant-dropdown-show-arrow.ant-dropdown-placement-bottomRight': {
        paddingTop: '15.31px'
    },
    '.ant-dropdown-arrow': {
        position: 'absolute',
        zIndex: 1,
        display: 'block',
        width: '11.31px',
        height: '11.31px',
        borderRadius: '0 0 2px',
        pointerEvents: 'none'
    },
    '.ant-dropdown-arrow::before': {
        position: 'absolute',
        top: '-11.31px',
        left: '-11.31px',
        width: '33.94px',
        height: '33.94px',
        background: 'var(--background-color)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-10px -10px',
        content: '""',
        clipPath: [
        'inset(33% 33%)',
        'path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")'
        ]
    },
    '.ant-dropdown-placement-top>.ant-dropdown-arrow,.ant-dropdown-placement-topLeft>.ant-dropdown-arrow,.ant-dropdown-placement-topRight>.ant-dropdown-arrow': {
        bottom: '10px',
        boxShadow: '3px 3px 7px -3px rgba(0,0,0,.1)',
        transform: 'rotate(45deg)'
    },
    '.ant-dropdown-placement-top>.ant-dropdown-arrow': {
        left: '50%',
        transform: 'translateX(-50%) rotate(45deg)'
    },
    '.ant-dropdown-placement-topLeft>.ant-dropdown-arrow': { left: '16px' },
    '.ant-dropdown-placement-topRight>.ant-dropdown-arrow': { right: '16px' },
    '.ant-dropdown-placement-bottom>.ant-dropdown-arrow,.ant-dropdown-placement-bottomLeft>.ant-dropdown-arrow,.ant-dropdown-placement-bottomRight>.ant-dropdown-arrow': {
        top: '9.41px',
        boxShadow: '2px 2px 5px -2px rgba(0,0,0,.1)',
        transform: 'rotate(-135deg) translateY(-.5px)'
    },
    '.ant-dropdown-placement-bottom>.ant-dropdown-arrow': {
        left: '50%',
        transform: 'translateX(-50%) rotate(-135deg) translateY(-.5px)'
    },
    '.ant-dropdown-placement-bottomLeft>.ant-dropdown-arrow': { left: '16px' },
    '.ant-dropdown-placement-bottomRight>.ant-dropdown-arrow': { right: '16px' },
    '.ant-dropdown-menu': {
        position: 'relative',
        margin: '0',
        padding: '4px 0',
        textAlign: 'left',
        listStyleType: 'none',
        backgroundColor: 'var(--background-color)',
        backgroundClip: 'padding-box',
        borderRadius: '7px',
        outline: '0',
        boxShadow:
        '0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)'
    },
    '.ant-dropdown-menu-item-group-title': {
        padding: '5px 12px',
        color: 'rgba(0,0,0,.45)',
        transition: 'all .3s'
    },
    '.ant-dropdown-menu-submenu-popup': {
        position: 'absolute',
        zIndex: 1050,
        background: '0 0',
        boxShadow: 'none',
        transformOrigin: '0 0'
    },
    '.ant-dropdown-menu-submenu-popup li,.ant-dropdown-menu-submenu-popup ul': {
        listStyle: 'none'
    },
    '.ant-dropdown-menu-submenu-popup ul': {
        marginRight: '.3em',
        marginLeft: '.3em'
    },
    '.ant-dropdown-menu-item': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    '.ant-dropdown-menu-item-icon': {
        minWidth: '12px',
        marginRight: '8px',
        fontSize: '14px'
    },
    '.ant-dropdown-menu-title-content': { flex: 'auto' },
    '.ant-dropdown-menu-title-content>a': {
        color: 'inherit',
        transition: 'all .3s'
    },
    '.ant-dropdown-menu-title-content>a:hover': { color: 'inherit' },
    '.ant-dropdown-menu-title-content>a::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        content: '""'
    },
    '.ant-dropdown-menu-item,.ant-dropdown-menu-submenu-title': {
        clear: 'both',
        margin: '0',
        padding: '5px 12px',
        color: 'var(--text-main-color)',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-dropdown-menu-item-selected,.ant-dropdown-menu-submenu-title-selected': {
        color: 'var(--ant-primary-color)',
        backgroundColor: 'var(--ant-primary-1)'
    },
    '.ant-dropdown-menu-item.ant-dropdown-menu-item-active,.ant-dropdown-menu-item.ant-dropdown-menu-submenu-title-active,.ant-dropdown-menu-item:hover,.ant-dropdown-menu-submenu-title.ant-dropdown-menu-item-active,.ant-dropdown-menu-submenu-title.ant-dropdown-menu-submenu-title-active,.ant-dropdown-menu-submenu-title:hover': {
        backgroundColor: 'var(--item-hover-bg)'
    },
    '.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled,.ant-dropdown-menu-item.ant-dropdown-menu-submenu-title-disabled,.ant-dropdown-menu-submenu-title.ant-dropdown-menu-item-disabled,.ant-dropdown-menu-submenu-title.ant-dropdown-menu-submenu-title-disabled': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled:hover,.ant-dropdown-menu-item.ant-dropdown-menu-submenu-title-disabled:hover,.ant-dropdown-menu-submenu-title.ant-dropdown-menu-item-disabled:hover,.ant-dropdown-menu-submenu-title.ant-dropdown-menu-submenu-title-disabled:hover': {
        color: 'rgba(0,0,0,.25)',
        backgroundColor: 'var(--background-color)',
        cursor: 'not-allowed'
    },
    '.ant-dropdown-menu-item.ant-dropdown-menu-item-disabled a,.ant-dropdown-menu-item.ant-dropdown-menu-submenu-title-disabled a,.ant-dropdown-menu-submenu-title.ant-dropdown-menu-item-disabled a,.ant-dropdown-menu-submenu-title.ant-dropdown-menu-submenu-title-disabled a': {
        pointerEvents: 'none'
    },
    '.ant-dropdown-menu-item-divider,.ant-dropdown-menu-submenu-title-divider': {
        height: '1px',
        margin: '4px 0',
        overflow: 'hidden',
        lineHeight: 0,
        backgroundColor: '#f0f0f0'
    },
    '.ant-dropdown-menu-item .ant-dropdown-menu-submenu-expand-icon,.ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-expand-icon': {
        position: 'absolute',
        right: '8px'
    },
    '.ant-dropdown-menu-item .ant-dropdown-menu-submenu-expand-icon .ant-dropdown-menu-submenu-arrow-icon,.ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-expand-icon .ant-dropdown-menu-submenu-arrow-icon': {
        marginRight: '0 !important' as any,
        color: 'rgba(0,0,0,.45)',
        fontSize: '10px',
        fontStyle: 'normal'
    },
    '.ant-dropdown-menu-item-group-list': {
        margin: '0 8px',
        padding: '0',
        listStyle: 'none'
    },
    '.ant-dropdown-menu-submenu-title': { paddingRight: '26px' },
    '.ant-dropdown-menu-submenu-vertical': { position: 'relative' },
    '.ant-dropdown-menu-submenu-vertical>.ant-dropdown-menu': {
        position: 'absolute',
        top: '0',
        left: '100%',
        minWidth: '100%',
        marginLeft: '4px',
        transformOrigin: '0 0'
    },
    '.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title,.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow-icon': {
        color: 'rgba(0,0,0,.25)',
        backgroundColor: 'var(--background-color)',
        cursor: 'not-allowed'
    },
    '.ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-dropdown-placement-top,.ant-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-dropdown-placement-topLeft,.ant-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-dropdown-placement-topRight,.ant-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-dropdown-placement-top,.ant-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-dropdown-placement-topLeft,.ant-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-dropdown-placement-topRight': {
        animationName: 'antSlideDownIn'
    },
    '.ant-dropdown.ant-slide-down-leave.ant-slide-down-leave-active.ant-dropdown-placement-bottom,.ant-dropdown.ant-slide-down-leave.ant-slide-down-leave-active.ant-dropdown-placement-bottomLeft,.ant-dropdown.ant-slide-down-leave.ant-slide-down-leave-active.ant-dropdown-placement-bottomRight': {
        animationName: 'antSlideUpOut'
    },
    '.ant-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-dropdown-placement-top,.ant-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-dropdown-placement-topLeft,.ant-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-dropdown-placement-topRight': {
        animationName: 'antSlideDownOut'
    },
    '.ant-dropdown-button>.anticon.anticon-down,.ant-dropdown-link>.anticon.anticon-down,.ant-dropdown-trigger>.anticon.anticon-down': {
        fontSize: '10px',
        verticalAlign: 'baseline'
    },
    '.ant-empty,.ant-form': { fontSize: '16px', lineHeight: 1.5715 },
    '.ant-dropdown-button': { whiteSpace: 'nowrap' },
    '.ant-dropdown-button.ant-btn-group>.ant-btn-loading,.ant-dropdown-button.ant-btn-group>.ant-btn-loading+.ant-btn': {
        cursor: 'default',
        pointerEvents: 'none'
    },
    '.ant-dropdown-button.ant-btn-group>.ant-btn-loading+.ant-btn::before': {
        display: 'block'
    },
    '.ant-dropdown-button.ant-btn-group>.ant-btn:last-child:not(:first-child):not(.ant-btn-icon-only)': {
        paddingRight: '8px',
        paddingLeft: '8px'
    },
    '.ant-dropdown-menu-dark,.ant-dropdown-menu-dark .ant-dropdown-menu': {
        background: 'var(--layout-header-bg-color)'
    },
    '.ant-dropdown-menu-dark .ant-dropdown-menu-item,.ant-dropdown-menu-dark .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow::after,.ant-dropdown-menu-dark .ant-dropdown-menu-item>.anticon+span>a,.ant-dropdown-menu-dark .ant-dropdown-menu-item>.anticon+span>a .ant-dropdown-menu-submenu-arrow::after,.ant-dropdown-menu-dark .ant-dropdown-menu-item>a,.ant-dropdown-menu-dark .ant-dropdown-menu-item>a .ant-dropdown-menu-submenu-arrow::after,.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title,.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow::after': {
        color: 'rgba(255,255,255,.65)'
    },
    '.ant-dropdown-menu-dark .ant-dropdown-menu-item:hover,.ant-dropdown-menu-dark .ant-dropdown-menu-item>.anticon+span>a:hover,.ant-dropdown-menu-dark .ant-dropdown-menu-item>a:hover,.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title:hover': {
        color: '#fff',
        background: '0 0'
    },
    '.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected,.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected:hover,.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected>a': {
        color: '#fff',
        background: 'var(--ant-primary-color)'
    },
    '.ant-dropdown-rtl.ant-dropdown::before': { right: '-7px', left: '0' },
    '.ant-dropdown-menu-submenu-popup.ant-dropdown-menu-submenu-rtl': {
        transformOrigin: '100% 0'
    },
    '.ant-dropdown-rtl .ant-dropdown-menu-item>.anticon:first-child,.ant-dropdown-rtl .ant-dropdown-menu-item>span>.anticon:first-child,.ant-dropdown-rtl .ant-dropdown-menu-submenu-title>.anticon:first-child,.ant-dropdown-rtl .ant-dropdown-menu-submenu-title>span>.anticon:first-child': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-dropdown-rtl .ant-dropdown-menu-item .ant-dropdown-menu-submenu-expand-icon,.ant-dropdown-rtl .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-expand-icon': {
        right: 'auto',
        left: '8px'
    },
    '.ant-dropdown-rtl .ant-dropdown-menu-item .ant-dropdown-menu-submenu-expand-icon .ant-dropdown-menu-submenu-arrow-icon,.ant-dropdown-rtl .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-expand-icon .ant-dropdown-menu-submenu-arrow-icon': {
        marginLeft: '0 !important' as any,
        transform: 'scaleX(-1)'
    },
    '.ant-dropdown-rtl .ant-dropdown-menu-submenu-title': {
        paddingRight: '12px',
        paddingLeft: '26px'
    },
    '.ant-dropdown-rtl .ant-dropdown-menu-submenu-vertical>.ant-dropdown-menu': {
        right: '100%',
        left: '0',
        marginRight: '4px',
        marginLeft: '0'
    },
    '.ant-empty': { margin: '0 8px', textAlign: 'center' },
    '.ant-empty-image': { height: '100px', marginBottom: '8px' },
    '.ant-empty-image img': { height: '100%' },
    '.ant-empty-image svg': { height: '100%', margin: 'auto' },
    '.ant-empty-footer': { marginTop: '16px' },
    '.ant-empty-normal': { margin: '32px 0', color: 'rgba(0,0,0,.25)' },
    '.ant-empty-normal .ant-empty-image': { height: '40px' },
    '.ant-empty-small': { margin: '8px 0', color: 'rgba(0,0,0,.25)' },
    '.ant-empty-small .ant-empty-image': { height: '35px' },
    '.ant-form select[multiple],.ant-form select[size],.ant-form-vertical .ant-form-item-label>label': {
        height: 'auto'
    },
    '.ant-empty-img-default-ellipse': { fill: '#f5f5f5', fillOpacity: 0.8 },
    '.ant-empty-img-default-path-1': { fill: '#aeb8c2' },
    '.ant-empty-img-default-path-2': { fill: 'url(#linearGradient-1)' },
    '.ant-empty-img-default-path-3': { fill: '#f5f5f7' },
    '.ant-empty-img-default-path-4,.ant-empty-img-default-path-5': {
        fill: '#dce0e6'
    },
    '.ant-empty-img-default-g': { fill: '#fff' },
    '.ant-empty-img-simple-ellipse': { fill: '#f5f5f5' },
    '.ant-empty-img-simple-g': { stroke: '#d9d9d9' },
    '.ant-empty-img-simple-path': { fill: '#fafafa' },
    '.ant-form-item .ant-input-number+.ant-form-text': { marginLeft: '8px' },
    '.ant-form-inline': { display: 'flex', flexWrap: 'wrap' },
    '.ant-form-inline .ant-form-item': {
        flex: 'none',
        flexWrap: 'nowrap',
        marginRight: '16px',
        marginBottom: '0'
    },
    '.ant-form-inline .ant-form-item-with-help,.ant-list-vertical .ant-list-item-meta': {
        marginBottom: '16px'
    },
    '.ant-form-inline .ant-form-item>.ant-form-item-control,.ant-form-inline .ant-form-item>.ant-form-item-label': {
        display: 'inline-block',
        verticalAlign: 'top'
    },
    '.ant-form-inline .ant-form-item>.ant-form-item-label': { flex: 'none' },
    '.ant-form-inline .ant-form-item .ant-form-item-has-feedback,.ant-form-inline .ant-form-item .ant-form-text': {
        display: 'inline-block'
    },
    '.ant-form-horizontal .ant-form-item-label': { flexGrow: 0 },
    '.ant-form-horizontal .ant-form-item-control': {
        flex: '1 1 0',
        minWidth: '0'
    },
    '.ant-form-horizontal .ant-form-item-label[class$="-24"]+.ant-form-item-control,.ant-form-horizontal .ant-form-item-label[class*="-24 "]+.ant-form-item-control,.ant-slider-tooltip .ant-tooltip-inner': {
        minWidth: 'unset'
    },
    '.ant-form-vertical .ant-form-item-row': { flexDirection: 'column' },
    '.ant-form-vertical .ant-form-item .ant-form-item-control': { width: '100%' },
    '.ant-col-24.ant-form-item-label,.ant-col-xl-24.ant-form-item-label,.ant-form-vertical .ant-form-item-label': {
        padding: '0 0 8px',
        lineHeight: 1.5715,
        whiteSpace: 'initial',
        textAlign: 'left'
    },
    '.ant-col-24.ant-form-item-label>label,.ant-col-xl-24.ant-form-item-label>label,.ant-form-vertical .ant-form-item-label>label': {
        margin: '0'
    },
    '.ant-col-24.ant-form-item-label>label::after,.ant-col-xl-24.ant-form-item-label>label::after,.ant-form-vertical .ant-form-item-label>label::after': {
        display: 'none'
    },
    '.ant-form-rtl.ant-col-24.ant-form-item-label,.ant-form-rtl.ant-col-xl-24.ant-form-item-label,.ant-form-rtl.ant-form-vertical .ant-form-item-label': {
        textAlign: 'right'
    },
    '@media (max-width:567px)': {
        '.ant-col-xs-24.ant-form-item-label>label,.ant-form-item .ant-form-item-label>label': {
        margin: '0'
        },
        '.ant-col-xs-24.ant-form-item-label>label::after,.ant-form-item .ant-form-item-label>label::after': {
        display: 'none'
        },
        '.ant-form-item .ant-form-item-label': {
        padding: '0 0 8px',
        lineHeight: 1.5715,
        whiteSpace: 'initial',
        textAlign: 'left'
        },
        '.ant-form-rtl.ant-form-item .ant-form-item-label': { textAlign: 'right' },
        '.ant-form .ant-form-item': { flexWrap: 'wrap' },
        '.ant-form .ant-form-item .ant-form-item-control,.ant-form .ant-form-item .ant-form-item-label': {
        flex: '0 0 100%',
        maxWidth: '100%'
        },
        '.ant-col-xs-24.ant-form-item-label': {
        padding: '0 0 8px',
        lineHeight: 1.5715,
        whiteSpace: 'initial',
        textAlign: 'left'
        },
        '.ant-form-rtl.ant-col-xs-24.ant-form-item-label': { textAlign: 'right' }
    },
    '@media (max-width:767px)': [
        {
        '.ant-col-sm-24.ant-form-item-label': {
            padding: '0 0 8px',
            lineHeight: 1.5715,
            whiteSpace: 'initial',
            textAlign: 'left'
        },
        '.ant-col-sm-24.ant-form-item-label>label': { margin: '0' },
        '.ant-col-sm-24.ant-form-item-label>label::after': { display: 'none' },
        '.ant-form-rtl.ant-col-sm-24.ant-form-item-label': { textAlign: 'right' }
        },
        {
        '.ant-modal': { maxWidth: 'calc(100vw - 16px)', margin: '8px auto' },
        '.ant-modal-centered .ant-modal': { flex: 1 }
        }
    ],
    '@media (max-width:991px)': {
        '.ant-col-md-24.ant-form-item-label': {
        padding: '0 0 8px',
        lineHeight: 1.5715,
        whiteSpace: 'initial',
        textAlign: 'left'
        },
        '.ant-col-md-24.ant-form-item-label>label': { margin: '0' },
        '.ant-col-md-24.ant-form-item-label>label::after': { display: 'none' },
        '.ant-form-rtl.ant-col-md-24.ant-form-item-label': { textAlign: 'right' }
    },
    '@media (max-width:1279px)': {
        '.ant-col-lg-24.ant-form-item-label': {
        padding: '0 0 8px',
        lineHeight: 1.5715,
        whiteSpace: 'initial',
        textAlign: 'left'
        },
        '.ant-col-lg-24.ant-form-item-label>label': { margin: '0' },
        '.ant-col-lg-24.ant-form-item-label>label::after': { display: 'none' },
        '.ant-form-rtl.ant-col-lg-24.ant-form-item-label': { textAlign: 'right' }
    },
    '@media (max-width:1919px)': {
        '.ant-col-xl-24.ant-form-item-label': {
        padding: '0 0 8px',
        lineHeight: 1.5715,
        whiteSpace: 'initial',
        textAlign: 'left'
        },
        '.ant-col-xl-24.ant-form-item-label>label': { margin: '0' },
        '.ant-col-xl-24.ant-form-item-label>label::after': { display: 'none' },
        '.ant-form-rtl.ant-col-xl-24.ant-form-item-label': { textAlign: 'right' }
    },
    '.ant-form-item-explain-error': { color: 'var(--ant-error-color)' },
    '.ant-form-item-explain-warning,.ant-form-item-has-warning .ant-form-item-split': {
        color: 'var(--ant-warning-color)'
    },
    '.ant-form-item-has-feedback .ant-switch': { margin: '2px 0 4px' },
    '.ant-form-item-has-error .ant-form-item-split': {
        color: 'var(--ant-error-color)'
    },
    '.ant-form': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"'
    },
    '.ant-form legend': {
        display: 'block',
        width: '100%',
        marginBottom: '20px',
        padding: '0',
        color: 'rgba(0,0,0,.45)',
        fontSize: '18px',
        lineHeight: 'inherit',
        border: '0',
        borderBottom: '1px solid var(--border-base-color)'
    },
    '.ant-form label': { fontSize: '16px' },
    '.ant-form input[type=search]': { boxSizing: 'border-box' },
    '.ant-form input[type=radio],.ant-form input[type=checkbox]': {
        lineHeight: 'normal'
    },
    '.ant-form output,.ant-form-item': {
        color: 'var(--text-main-color)',
        fontSize: '16px',
        lineHeight: 1.5715
    },
    '.ant-form input[type=file]': { display: 'block' },
    '.ant-form input[type=range]': { display: 'block', width: '100%' },
    '.ant-form input[type=radio]:focus,.ant-form input[type=checkbox]:focus,.ant-form input[type=file]:focus': {
        outline: ['dotted thin', '-webkit-focus-ring-color auto 5px'],
        outlineOffset: '-2px'
    },
    '.ant-form output': { display: 'block', paddingTop: '15px' },
    '.ant-form .ant-form-text': { display: 'inline-block', paddingRight: '8px' },
    '.ant-form-small .ant-form-item-label>label': { height: '32px' },
    '.ant-form-large .ant-form-item-label>label,.ant-input-group-lg .ant-select-single .ant-select-selector': {
        height: '64px'
    },
    '.ant-form-small .ant-form-item-control-input': { minHeight: '32px' },
    '.ant-form-large .ant-form-item-control-input': { minHeight: '64px' },
    '.ant-form-item': {
        boxSizing: 'border-box',
        margin: '0 0 16px',
        padding: '0',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        verticalAlign: 'top'
    },
    '.ant-form-item-hidden,.ant-form-item-hidden.ant-row': { display: 'none' },
    '.ant-form-item-label': {
        display: 'inline-block',
        flexGrow: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'right',
        verticalAlign: 'middle'
    },
    '.ant-form-item-label-left': { textAlign: 'left' },
    '.ant-form-item-label-wrap': {
        overflow: 'unset',
        lineHeight: '1.3215em',
        whiteSpace: 'unset'
    },
    '.ant-form-item-label>label': {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: '100%',
        height: '50px',
        color: 'var(--heading-color)',
        fontSize: '14px'
    },
    '.ant-form-item-label>label>.anticon': {
        fontSize: '14px',
        verticalAlign: 'top'
    },
    '.ant-form-item-label>label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before': {
        display: 'inline-block',
        marginRight: '4px',
        color: '#ff4d4f',
        fontSize: '14px',
        fontFamily: 'SimSun,sans-serif',
        lineHeight: 1,
        content: '"*"'
    },
    '.ant-form-hide-required-mark .ant-form-item-label>label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before': {
        display: 'none'
    },
    '.ant-form-item-label>label .ant-form-item-optional': {
        display: 'inline-block',
        marginLeft: '4px',
        color: 'rgba(0,0,0,.45)'
    },
    '.ant-form-hide-required-mark .ant-form-item-label>label .ant-form-item-optional': {
        display: 'none'
    },
    '.ant-form-item-label>label .ant-form-item-tooltip': {
        color: 'rgba(0,0,0,.45)',
        cursor: 'help',
        writingMode: 'horizontal-tb',
        marginInlineStart: '4px'
    },
    '.ant-form-item-label>label::after': {
        content: '":"',
        position: 'relative',
        top: '-.5px',
        margin: '0 8px 0 2px'
    },
    '.ant-form-item-label>label.ant-form-item-no-colon::after': {
        content: '" "'
    },
    '.ant-form-item-control': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    },
    '.ant-form-item-control:first-child:not([class^=ant-col-]):not([class*=" ant-col-"])': {
        width: '100%'
    },
    '.ant-form-item-control-input': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        minHeight: '50px'
    },
    '.ant-form-item-control-input-content': { flex: 'auto', maxWidth: '100%' },
    '.ant-form-item-explain,.ant-form-item-extra': {
        clear: 'both',
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px',
        lineHeight: 1.5715,
        transition: 'color .3s cubic-bezier(.215,.61,.355,1)'
    },
    '.ant-form-item-explain-connected': { width: '100%' },
    '.ant-form-item-extra': { minHeight: '16px' },
    '.ant-form-item-with-help .ant-form-item-explain': {
        height: 'auto',
        opacity: 1
    },
    '.ant-form-item-feedback-icon': {
        fontSize: '16px',
        textAlign: 'center',
        visibility: 'visible',
        animation: 'zoomIn .3s cubic-bezier(.12,.4,.29,1.46)',
        pointerEvents: 'none'
    },
    '.ant-form-item-feedback-icon-success': { color: 'var(--ant-success-color)' },
    '.ant-form-item-feedback-icon-error': { color: 'var(--ant-error-color)' },
    '.ant-form-item-feedback-icon-warning': { color: 'var(--ant-warning-color)' },
    '.ant-form-item-feedback-icon-validating': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-show-help': {
        transition: 'opacity .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-show-help-appear,.ant-show-help-enter': { opacity: 0 },
    '.ant-show-help-appear-active,.ant-show-help-enter-active,.ant-show-help-leave': {
        opacity: 1
    },
    '.ant-show-help-leave-active': { opacity: 0 },
    '.ant-show-help-item': {
        overflow: 'hidden',
        transition:
        'height .3s cubic-bezier(.645,.045,.355,1),opacity .3s cubic-bezier(.645,.045,.355,1),transform .3s cubic-bezier(.645,.045,.355,1) !important' as any
    },
    '.ant-show-help-item-appear,.ant-show-help-item-enter': {
        transform: 'translateY(-5px)',
        opacity: 0
    },
    '.ant-show-help-item-appear-active,.ant-show-help-item-enter-active': {
        transform: 'translateY(0)',
        opacity: 1
    },
    '.ant-show-help-item-leave': {
        transition:
        'height .2s cubic-bezier(.645,.045,.355,1),opacity .2s cubic-bezier(.645,.045,.355,1),transform .2s cubic-bezier(.645,.045,.355,1) !important' as any
    },
    '.ant-show-help-item-leave-active': { transform: 'translateY(-5px)' },
    '@keyframes diffZoomIn1': {
        '0%': { transform: 'scale(0)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 }
    },
    '@keyframes diffZoomIn2': {
        '0%': { transform: 'scale(0)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 }
    },
    '@keyframes diffZoomIn3': {
        '0%': { transform: 'scale(0)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 }
    },
    '.ant-form-rtl .ant-form-item-label': { textAlign: 'left' },
    '.ant-form-rtl .ant-form-item-label>label.ant-form-item-required::before': {
        marginRight: '0',
        marginLeft: '4px'
    },
    '.ant-form-rtl .ant-form-item-label>label::after': { margin: '0 2px 0 8px' },
    '.ant-image-mask-info .anticon,.ant-input-number-prefix': {
        marginInlineEnd: '4px'
    },
    '.ant-form-rtl .ant-form-item-label>label .ant-form-item-optional': {
        marginRight: '4px',
        marginLeft: '0'
    },
    '.ant-col-rtl .ant-form-item-control:first-child': { width: '100%' },
    '.ant-form-rtl .ant-form-item-has-feedback .ant-input': {
        paddingRight: '11px',
        paddingLeft: '24px'
    },
    '.ant-form-rtl .ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix': {
        paddingRight: '11px',
        paddingLeft: '18px'
    },
    '.ant-form-rtl .ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input,.ant-form-rtl .ant-form-item-has-feedback .ant-input-number-affix-wrapper .ant-input-number': {
        padding: '0'
    },
    '.ant-form-rtl .ant-form-item-has-feedback .ant-input-search:not(.ant-input-search-enter-button) .ant-input-suffix': {
        right: 'auto',
        left: '28px'
    },
    '.ant-form-rtl .ant-form-item-has-feedback .ant-cascader-picker-clear,.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-group-addon)>.ant-select .ant-select-arrow,.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-group-addon)>.ant-select .ant-select-clear,.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-number-group-addon)>.ant-select .ant-select-arrow,.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-number-group-addon)>.ant-select .ant-select-clear,.ant-form-rtl .ant-form-item-has-feedback>.ant-select .ant-select-arrow,.ant-form-rtl .ant-form-item-has-feedback>.ant-select .ant-select-clear': {
        left: '32px',
        right: 'auto'
    },
    '.ant-form-rtl .ant-form-item-has-feedback .ant-input-number': {
        paddingLeft: '18px'
    },
    '.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-group-addon)>.ant-select .ant-select-selection-selected-value,.ant-form-rtl .ant-form-item-has-feedback :not(.ant-input-number-group-addon)>.ant-select .ant-select-selection-selected-value,.ant-form-rtl .ant-form-item-has-feedback>.ant-select .ant-select-selection-selected-value': {
        paddingRight: '0',
        paddingLeft: '42px'
    },
    '.ant-form-rtl .ant-form-item-has-feedback .ant-cascader-picker-arrow': {
        marginRight: '0',
        marginLeft: '19px'
    },
    '.ant-form-rtl .ant-form-item-has-feedback .ant-picker,.ant-form-rtl .ant-form-item-has-feedback .ant-picker-large': {
        paddingRight: '11px',
        paddingLeft: '31.8px'
    },
    '.ant-form-rtl .ant-form-item-has-feedback .ant-picker-small': {
        paddingRight: '7px',
        paddingLeft: '27.8px'
    },
    '.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-has-error .ant-form-item-children-icon,.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-has-success .ant-form-item-children-icon,.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-has-warning .ant-form-item-children-icon,.ant-form-rtl .ant-form-item-has-feedback.ant-form-item-is-validating .ant-form-item-children-icon': {
        right: 'auto',
        left: '0'
    },
    '.ant-form-rtl.ant-form-inline .ant-form-item': {
        marginRight: '0',
        marginLeft: '16px'
    },
    '.ant-row': { display: 'flex', flexFlow: 'row wrap', minWidth: '0' },
    '.ant-row::after,.ant-row::before': { display: 'flex' },
    '.ant-col-1,.ant-col-10,.ant-col-11,.ant-col-12,.ant-col-13,.ant-col-14,.ant-col-15,.ant-col-16,.ant-col-17,.ant-col-18,.ant-col-19,.ant-col-2,.ant-col-20,.ant-col-21,.ant-col-22,.ant-col-23,.ant-col-24,.ant-col-3,.ant-col-4,.ant-col-5,.ant-col-6,.ant-col-7,.ant-col-8,.ant-col-9': {
        display: 'block'
    },
    '.ant-row-no-wrap': { flexWrap: 'nowrap' },
    '.ant-row-start': { justifyContent: 'flex-start' },
    '.ant-row-center': { justifyContent: 'center' },
    '.ant-row-end': { justifyContent: 'flex-end' },
    '.ant-page-header-heading,.ant-row-space-between': {
        justifyContent: 'space-between'
    },
    '.ant-row-space-around': { justifyContent: 'space-around' },
    '.ant-row-space-evenly': { justifyContent: 'space-evenly' },
    '.ant-row-top': { alignItems: 'flex-start' },
    '.ant-row-middle': { alignItems: 'center' },
    '.ant-row-bottom': { alignItems: 'flex-end' },
    '.ant-col': { position: 'relative', maxWidth: '100%', minHeight: '1px' },
    '.ant-col-24': { flex: '0 0 100%', maxWidth: '100%' },
    '.ant-col-push-24': { left: '100%' },
    '.ant-col-pull-24': { right: '100%' },
    '.ant-col-offset-24': { marginLeft: '100%' },
    '.ant-col-order-24': { order: 24 },
    '.ant-col-23': { flex: '0 0 95.83333333%', maxWidth: '95.83333333%' },
    '.ant-col-push-23': { left: '95.83333333%' },
    '.ant-col-pull-23': { right: '95.83333333%' },
    '.ant-col-offset-23': { marginLeft: '95.83333333%' },
    '.ant-col-order-23': { order: 23 },
    '.ant-col-22': { flex: '0 0 91.66666667%', maxWidth: '91.66666667%' },
    '.ant-col-push-22': { left: '91.66666667%' },
    '.ant-col-pull-22': { right: '91.66666667%' },
    '.ant-col-offset-22': { marginLeft: '91.66666667%' },
    '.ant-col-order-22': { order: 22 },
    '.ant-col-21': { flex: '0 0 87.5%', maxWidth: '87.5%' },
    '.ant-col-push-21': { left: '87.5%' },
    '.ant-col-pull-21': { right: '87.5%' },
    '.ant-col-offset-21': { marginLeft: '87.5%' },
    '.ant-col-order-21': { order: 21 },
    '.ant-col-20': { flex: '0 0 83.33333333%', maxWidth: '83.33333333%' },
    '.ant-col-push-20': { left: '83.33333333%' },
    '.ant-col-pull-20': { right: '83.33333333%' },
    '.ant-col-offset-20': { marginLeft: '83.33333333%' },
    '.ant-col-order-20': { order: 20 },
    '.ant-col-19': { flex: '0 0 79.16666667%', maxWidth: '79.16666667%' },
    '.ant-col-push-19': { left: '79.16666667%' },
    '.ant-col-pull-19': { right: '79.16666667%' },
    '.ant-col-offset-19': { marginLeft: '79.16666667%' },
    '.ant-col-order-19': { order: 19 },
    '.ant-col-18': { flex: '0 0 75%', maxWidth: '75%' },
    '.ant-col-push-18': { left: '75%' },
    '.ant-col-pull-18': { right: '75%' },
    '.ant-col-offset-18': { marginLeft: '75%' },
    '.ant-col-order-18': { order: 18 },
    '.ant-col-17': { flex: '0 0 70.83333333%', maxWidth: '70.83333333%' },
    '.ant-col-push-17': { left: '70.83333333%' },
    '.ant-col-pull-17': { right: '70.83333333%' },
    '.ant-col-offset-17': { marginLeft: '70.83333333%' },
    '.ant-col-order-17': { order: 17 },
    '.ant-col-16': { flex: '0 0 66.66666667%', maxWidth: '66.66666667%' },
    '.ant-col-push-16': { left: '66.66666667%' },
    '.ant-col-pull-16': { right: '66.66666667%' },
    '.ant-col-offset-16': { marginLeft: '66.66666667%' },
    '.ant-col-order-16': { order: 16 },
    '.ant-col-15': { flex: '0 0 62.5%', maxWidth: '62.5%' },
    '.ant-col-push-15': { left: '62.5%' },
    '.ant-col-pull-15': { right: '62.5%' },
    '.ant-col-offset-15': { marginLeft: '62.5%' },
    '.ant-col-order-15': { order: 15 },
    '.ant-col-14': { flex: '0 0 58.33333333%', maxWidth: '58.33333333%' },
    '.ant-col-push-14': { left: '58.33333333%' },
    '.ant-col-pull-14': { right: '58.33333333%' },
    '.ant-col-offset-14': { marginLeft: '58.33333333%' },
    '.ant-col-order-14': { order: 14 },
    '.ant-col-13': { flex: '0 0 54.16666667%', maxWidth: '54.16666667%' },
    '.ant-col-push-13': { left: '54.16666667%' },
    '.ant-col-pull-13': { right: '54.16666667%' },
    '.ant-col-offset-13': { marginLeft: '54.16666667%' },
    '.ant-col-order-13': { order: 13 },
    '.ant-col-12': { flex: '0 0 50%', maxWidth: '50%' },
    '.ant-col-push-12': { left: '50%' },
    '.ant-col-pull-12': { right: '50%' },
    '.ant-col-offset-12': { marginLeft: '50%' },
    '.ant-col-order-12': { order: 12 },
    '.ant-col-11': { flex: '0 0 45.83333333%', maxWidth: '45.83333333%' },
    '.ant-col-push-11': { left: '45.83333333%' },
    '.ant-col-pull-11': { right: '45.83333333%' },
    '.ant-col-offset-11': { marginLeft: '45.83333333%' },
    '.ant-col-order-11': { order: 11 },
    '.ant-col-10': { flex: '0 0 41.66666667%', maxWidth: '41.66666667%' },
    '.ant-col-push-10': { left: '41.66666667%' },
    '.ant-col-pull-10': { right: '41.66666667%' },
    '.ant-col-offset-10': { marginLeft: '41.66666667%' },
    '.ant-col-order-10': { order: 10 },
    '.ant-col-9': { flex: '0 0 37.5%', maxWidth: '37.5%' },
    '.ant-col-push-9': { left: '37.5%' },
    '.ant-col-pull-9': { right: '37.5%' },
    '.ant-col-offset-9': { marginLeft: '37.5%' },
    '.ant-col-order-9': { order: 9 },
    '.ant-col-8': { flex: '0 0 33.33333333%', maxWidth: '33.33333333%' },
    '.ant-col-push-8': { left: '33.33333333%' },
    '.ant-col-pull-8': { right: '33.33333333%' },
    '.ant-col-offset-8': { marginLeft: '33.33333333%' },
    '.ant-col-order-8': { order: 8 },
    '.ant-col-7': { flex: '0 0 29.16666667%', maxWidth: '29.16666667%' },
    '.ant-col-push-7': { left: '29.16666667%' },
    '.ant-col-pull-7': { right: '29.16666667%' },
    '.ant-col-offset-7': { marginLeft: '29.16666667%' },
    '.ant-col-order-7': { order: 7 },
    '.ant-col-6': { flex: '0 0 25%', maxWidth: '25%' },
    '.ant-col-push-6': { left: '25%' },
    '.ant-col-pull-6': { right: '25%' },
    '.ant-col-offset-6': { marginLeft: '25%' },
    '.ant-col-order-6': { order: 6 },
    '.ant-col-5': { flex: '0 0 20.83333333%', maxWidth: '20.83333333%' },
    '.ant-col-push-5': { left: '20.83333333%' },
    '.ant-col-pull-5': { right: '20.83333333%' },
    '.ant-col-offset-5': { marginLeft: '20.83333333%' },
    '.ant-col-order-5': { order: 5 },
    '.ant-col-4': { flex: '0 0 16.66666667%', maxWidth: '16.66666667%' },
    '.ant-col-push-4': { left: '16.66666667%' },
    '.ant-col-pull-4': { right: '16.66666667%' },
    '.ant-col-offset-4': { marginLeft: '16.66666667%' },
    '.ant-col-order-4': { order: 4 },
    '.ant-col-3': { flex: '0 0 12.5%', maxWidth: '12.5%' },
    '.ant-col-push-3': { left: '12.5%' },
    '.ant-col-pull-3': { right: '12.5%' },
    '.ant-col-offset-3': { marginLeft: '12.5%' },
    '.ant-col-order-3': { order: 3 },
    '.ant-col-2': { flex: '0 0 8.33333333%', maxWidth: '8.33333333%' },
    '.ant-col-push-2': { left: '8.33333333%' },
    '.ant-col-pull-2': { right: '8.33333333%' },
    '.ant-col-offset-2': { marginLeft: '8.33333333%' },
    '.ant-col-order-2': { order: 2 },
    '.ant-col-1': { flex: '0 0 4.16666667%', maxWidth: '4.16666667%' },
    '.ant-col-push-1': { left: '4.16666667%' },
    '.ant-col-pull-1': { right: '4.16666667%' },
    '.ant-col-offset-1': { marginLeft: '4.16666667%' },
    '.ant-col-order-1': { order: 1 },
    '.ant-col-0': { display: 'none' },
    '.ant-col-offset-0': { marginLeft: '0' },
    '.ant-col-order-0': { order: 0 },
    '.ant-col-offset-0.ant-col-rtl': { marginRight: '0' },
    '.ant-col-push-1.ant-col-rtl': { right: '4.16666667%', left: 'auto' },
    '.ant-col-pull-1.ant-col-rtl': { right: 'auto', left: '4.16666667%' },
    '.ant-col-offset-1.ant-col-rtl': {
        marginRight: '4.16666667%',
        marginLeft: '0'
    },
    '.ant-col-push-2.ant-col-rtl': { right: '8.33333333%', left: 'auto' },
    '.ant-col-pull-2.ant-col-rtl': { right: 'auto', left: '8.33333333%' },
    '.ant-col-offset-2.ant-col-rtl': {
        marginRight: '8.33333333%',
        marginLeft: '0'
    },
    '.ant-col-push-3.ant-col-rtl': { right: '12.5%', left: 'auto' },
    '.ant-col-pull-3.ant-col-rtl': { right: 'auto', left: '12.5%' },
    '.ant-col-offset-3.ant-col-rtl': { marginRight: '12.5%', marginLeft: '0' },
    '.ant-col-push-4.ant-col-rtl': { right: '16.66666667%', left: 'auto' },
    '.ant-col-pull-4.ant-col-rtl': { right: 'auto', left: '16.66666667%' },
    '.ant-col-offset-4.ant-col-rtl': {
        marginRight: '16.66666667%',
        marginLeft: '0'
    },
    '.ant-col-push-5.ant-col-rtl': { right: '20.83333333%', left: 'auto' },
    '.ant-col-pull-5.ant-col-rtl': { right: 'auto', left: '20.83333333%' },
    '.ant-col-offset-5.ant-col-rtl': {
        marginRight: '20.83333333%',
        marginLeft: '0'
    },
    '.ant-col-push-6.ant-col-rtl': { right: '25%', left: 'auto' },
    '.ant-col-pull-6.ant-col-rtl': { right: 'auto', left: '25%' },
    '.ant-col-offset-6.ant-col-rtl': { marginRight: '25%', marginLeft: '0' },
    '.ant-col-push-7.ant-col-rtl': { right: '29.16666667%', left: 'auto' },
    '.ant-col-pull-7.ant-col-rtl': { right: 'auto', left: '29.16666667%' },
    '.ant-col-offset-7.ant-col-rtl': {
        marginRight: '29.16666667%',
        marginLeft: '0'
    },
    '.ant-col-push-8.ant-col-rtl': { right: '33.33333333%', left: 'auto' },
    '.ant-col-pull-8.ant-col-rtl': { right: 'auto', left: '33.33333333%' },
    '.ant-col-offset-8.ant-col-rtl': {
        marginRight: '33.33333333%',
        marginLeft: '0'
    },
    '.ant-col-push-9.ant-col-rtl': { right: '37.5%', left: 'auto' },
    '.ant-col-pull-9.ant-col-rtl': { right: 'auto', left: '37.5%' },
    '.ant-col-offset-9.ant-col-rtl': { marginRight: '37.5%', marginLeft: '0' },
    '.ant-col-push-10.ant-col-rtl': { right: '41.66666667%', left: 'auto' },
    '.ant-col-pull-10.ant-col-rtl': { right: 'auto', left: '41.66666667%' },
    '.ant-col-offset-10.ant-col-rtl': {
        marginRight: '41.66666667%',
        marginLeft: '0'
    },
    '.ant-col-push-11.ant-col-rtl': { right: '45.83333333%', left: 'auto' },
    '.ant-col-pull-11.ant-col-rtl': { right: 'auto', left: '45.83333333%' },
    '.ant-col-offset-11.ant-col-rtl': {
        marginRight: '45.83333333%',
        marginLeft: '0'
    },
    '.ant-col-push-12.ant-col-rtl': { right: '50%', left: 'auto' },
    '.ant-col-pull-12.ant-col-rtl': { right: 'auto', left: '50%' },
    '.ant-col-offset-12.ant-col-rtl': { marginRight: '50%', marginLeft: '0' },
    '.ant-col-push-13.ant-col-rtl': { right: '54.16666667%', left: 'auto' },
    '.ant-col-pull-13.ant-col-rtl': { right: 'auto', left: '54.16666667%' },
    '.ant-col-offset-13.ant-col-rtl': {
        marginRight: '54.16666667%',
        marginLeft: '0'
    },
    '.ant-col-push-14.ant-col-rtl': { right: '58.33333333%', left: 'auto' },
    '.ant-col-pull-14.ant-col-rtl': { right: 'auto', left: '58.33333333%' },
    '.ant-col-offset-14.ant-col-rtl': {
        marginRight: '58.33333333%',
        marginLeft: '0'
    },
    '.ant-col-push-15.ant-col-rtl': { right: '62.5%', left: 'auto' },
    '.ant-col-pull-15.ant-col-rtl': { right: 'auto', left: '62.5%' },
    '.ant-col-offset-15.ant-col-rtl': { marginRight: '62.5%', marginLeft: '0' },
    '.ant-col-push-16.ant-col-rtl': { right: '66.66666667%', left: 'auto' },
    '.ant-col-pull-16.ant-col-rtl': { right: 'auto', left: '66.66666667%' },
    '.ant-col-offset-16.ant-col-rtl': {
        marginRight: '66.66666667%',
        marginLeft: '0'
    },
    '.ant-col-push-17.ant-col-rtl': { right: '70.83333333%', left: 'auto' },
    '.ant-col-pull-17.ant-col-rtl': { right: 'auto', left: '70.83333333%' },
    '.ant-col-offset-17.ant-col-rtl': {
        marginRight: '70.83333333%',
        marginLeft: '0'
    },
    '.ant-col-push-18.ant-col-rtl': { right: '75%', left: 'auto' },
    '.ant-col-pull-18.ant-col-rtl': { right: 'auto', left: '75%' },
    '.ant-col-offset-18.ant-col-rtl': { marginRight: '75%', marginLeft: '0' },
    '.ant-col-push-19.ant-col-rtl': { right: '79.16666667%', left: 'auto' },
    '.ant-col-pull-19.ant-col-rtl': { right: 'auto', left: '79.16666667%' },
    '.ant-col-offset-19.ant-col-rtl': {
        marginRight: '79.16666667%',
        marginLeft: '0'
    },
    '.ant-col-push-20.ant-col-rtl': { right: '83.33333333%', left: 'auto' },
    '.ant-col-pull-20.ant-col-rtl': { right: 'auto', left: '83.33333333%' },
    '.ant-col-offset-20.ant-col-rtl': {
        marginRight: '83.33333333%',
        marginLeft: '0'
    },
    '.ant-col-push-21.ant-col-rtl': { right: '87.5%', left: 'auto' },
    '.ant-col-pull-21.ant-col-rtl': { right: 'auto', left: '87.5%' },
    '.ant-col-offset-21.ant-col-rtl': { marginRight: '87.5%', marginLeft: '0' },
    '.ant-col-push-22.ant-col-rtl': { right: '91.66666667%', left: 'auto' },
    '.ant-col-pull-22.ant-col-rtl': { right: 'auto', left: '91.66666667%' },
    '.ant-col-offset-22.ant-col-rtl': {
        marginRight: '91.66666667%',
        marginLeft: '0'
    },
    '.ant-col-push-23.ant-col-rtl': { right: '95.83333333%', left: 'auto' },
    '.ant-col-pull-23.ant-col-rtl': { right: 'auto', left: '95.83333333%' },
    '.ant-col-offset-23.ant-col-rtl': {
        marginRight: '95.83333333%',
        marginLeft: '0'
    },
    '.ant-col-push-24.ant-col-rtl': { right: '100%', left: 'auto' },
    '.ant-col-pull-24.ant-col-rtl': { right: 'auto', left: '100%' },
    '.ant-col-offset-24.ant-col-rtl': { marginRight: '100%', marginLeft: '0' },
    '.ant-col-xs-24': { display: 'block', flex: '0 0 100%', maxWidth: '100%' },
    '.ant-col-xs-push-24': { left: '100%' },
    '.ant-col-xs-pull-24': { right: '100%' },
    '.ant-col-xs-offset-24': { marginLeft: '100%' },
    '.ant-col-xs-order-24': { order: 24 },
    '.ant-col-xs-23': {
        display: 'block',
        flex: '0 0 95.83333333%',
        maxWidth: '95.83333333%'
    },
    '.ant-col-xs-push-23': { left: '95.83333333%' },
    '.ant-col-xs-pull-23': { right: '95.83333333%' },
    '.ant-col-xs-offset-23': { marginLeft: '95.83333333%' },
    '.ant-col-xs-order-23': { order: 23 },
    '.ant-col-xs-22': {
        display: 'block',
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%'
    },
    '.ant-col-xs-push-22': { left: '91.66666667%' },
    '.ant-col-xs-pull-22': { right: '91.66666667%' },
    '.ant-col-xs-offset-22': { marginLeft: '91.66666667%' },
    '.ant-col-xs-order-22': { order: 22 },
    '.ant-col-xs-21': { display: 'block', flex: '0 0 87.5%', maxWidth: '87.5%' },
    '.ant-col-xs-push-21': { left: '87.5%' },
    '.ant-col-xs-pull-21': { right: '87.5%' },
    '.ant-col-xs-offset-21': { marginLeft: '87.5%' },
    '.ant-col-xs-order-21': { order: 21 },
    '.ant-col-xs-20': {
        display: 'block',
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%'
    },
    '.ant-col-xs-push-20': { left: '83.33333333%' },
    '.ant-col-xs-pull-20': { right: '83.33333333%' },
    '.ant-col-xs-offset-20': { marginLeft: '83.33333333%' },
    '.ant-col-xs-order-20': { order: 20 },
    '.ant-col-xs-19': {
        display: 'block',
        flex: '0 0 79.16666667%',
        maxWidth: '79.16666667%'
    },
    '.ant-col-xs-push-19': { left: '79.16666667%' },
    '.ant-col-xs-pull-19': { right: '79.16666667%' },
    '.ant-col-xs-offset-19': { marginLeft: '79.16666667%' },
    '.ant-col-xs-order-19': { order: 19 },
    '.ant-col-xs-18': { display: 'block', flex: '0 0 75%', maxWidth: '75%' },
    '.ant-col-xs-push-18': { left: '75%' },
    '.ant-col-xs-pull-18': { right: '75%' },
    '.ant-col-xs-offset-18': { marginLeft: '75%' },
    '.ant-col-xs-order-18': { order: 18 },
    '.ant-col-xs-17': {
        display: 'block',
        flex: '0 0 70.83333333%',
        maxWidth: '70.83333333%'
    },
    '.ant-col-xs-push-17': { left: '70.83333333%' },
    '.ant-col-xs-pull-17': { right: '70.83333333%' },
    '.ant-col-xs-offset-17': { marginLeft: '70.83333333%' },
    '.ant-col-xs-order-17': { order: 17 },
    '.ant-col-xs-16': {
        display: 'block',
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%'
    },
    '.ant-col-xs-push-16': { left: '66.66666667%' },
    '.ant-col-xs-pull-16': { right: '66.66666667%' },
    '.ant-col-xs-offset-16': { marginLeft: '66.66666667%' },
    '.ant-col-xs-order-16': { order: 16 },
    '.ant-col-xs-15': { display: 'block', flex: '0 0 62.5%', maxWidth: '62.5%' },
    '.ant-col-xs-push-15': { left: '62.5%' },
    '.ant-col-xs-pull-15': { right: '62.5%' },
    '.ant-col-xs-offset-15': { marginLeft: '62.5%' },
    '.ant-col-xs-order-15': { order: 15 },
    '.ant-col-xs-14': {
        display: 'block',
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%'
    },
    '.ant-col-xs-push-14': { left: '58.33333333%' },
    '.ant-col-xs-pull-14': { right: '58.33333333%' },
    '.ant-col-xs-offset-14': { marginLeft: '58.33333333%' },
    '.ant-col-xs-order-14': { order: 14 },
    '.ant-col-xs-13': {
        display: 'block',
        flex: '0 0 54.16666667%',
        maxWidth: '54.16666667%'
    },
    '.ant-col-xs-push-13': { left: '54.16666667%' },
    '.ant-col-xs-pull-13': { right: '54.16666667%' },
    '.ant-col-xs-offset-13': { marginLeft: '54.16666667%' },
    '.ant-col-xs-order-13': { order: 13 },
    '.ant-col-xs-12': { display: 'block', flex: '0 0 50%', maxWidth: '50%' },
    '.ant-col-xs-push-12': { left: '50%' },
    '.ant-col-xs-pull-12': { right: '50%' },
    '.ant-col-xs-offset-12': { marginLeft: '50%' },
    '.ant-col-xs-order-12': { order: 12 },
    '.ant-col-xs-11': {
        display: 'block',
        flex: '0 0 45.83333333%',
        maxWidth: '45.83333333%'
    },
    '.ant-col-xs-push-11': { left: '45.83333333%' },
    '.ant-col-xs-pull-11': { right: '45.83333333%' },
    '.ant-col-xs-offset-11': { marginLeft: '45.83333333%' },
    '.ant-col-xs-order-11': { order: 11 },
    '.ant-col-xs-10': {
        display: 'block',
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%'
    },
    '.ant-col-xs-push-10': { left: '41.66666667%' },
    '.ant-col-xs-pull-10': { right: '41.66666667%' },
    '.ant-col-xs-offset-10': { marginLeft: '41.66666667%' },
    '.ant-col-xs-order-10': { order: 10 },
    '.ant-col-xs-9': { display: 'block', flex: '0 0 37.5%', maxWidth: '37.5%' },
    '.ant-col-xs-push-9': { left: '37.5%' },
    '.ant-col-xs-pull-9': { right: '37.5%' },
    '.ant-col-xs-offset-9': { marginLeft: '37.5%' },
    '.ant-col-xs-order-9': { order: 9 },
    '.ant-col-xs-8': {
        display: 'block',
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%'
    },
    '.ant-col-xs-push-8': { left: '33.33333333%' },
    '.ant-col-xs-pull-8': { right: '33.33333333%' },
    '.ant-col-xs-offset-8': { marginLeft: '33.33333333%' },
    '.ant-col-xs-order-8': { order: 8 },
    '.ant-col-xs-7': {
        display: 'block',
        flex: '0 0 29.16666667%',
        maxWidth: '29.16666667%'
    },
    '.ant-col-xs-push-7': { left: '29.16666667%' },
    '.ant-col-xs-pull-7': { right: '29.16666667%' },
    '.ant-col-xs-offset-7': { marginLeft: '29.16666667%' },
    '.ant-col-xs-order-7': { order: 7 },
    '.ant-col-xs-6': { display: 'block', flex: '0 0 25%', maxWidth: '25%' },
    '.ant-col-xs-push-6': { left: '25%' },
    '.ant-col-xs-pull-6': { right: '25%' },
    '.ant-col-xs-offset-6': { marginLeft: '25%' },
    '.ant-col-xs-order-6': { order: 6 },
    '.ant-col-xs-5': {
        display: 'block',
        flex: '0 0 20.83333333%',
        maxWidth: '20.83333333%'
    },
    '.ant-col-xs-push-5': { left: '20.83333333%' },
    '.ant-col-xs-pull-5': { right: '20.83333333%' },
    '.ant-col-xs-offset-5': { marginLeft: '20.83333333%' },
    '.ant-col-xs-order-5': { order: 5 },
    '.ant-col-xs-4': {
        display: 'block',
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%'
    },
    '.ant-col-xs-push-4': { left: '16.66666667%' },
    '.ant-col-xs-pull-4': { right: '16.66666667%' },
    '.ant-col-xs-offset-4': { marginLeft: '16.66666667%' },
    '.ant-col-xs-order-4': { order: 4 },
    '.ant-col-xs-3': { display: 'block', flex: '0 0 12.5%', maxWidth: '12.5%' },
    '.ant-col-xs-push-3': { left: '12.5%' },
    '.ant-col-xs-pull-3': { right: '12.5%' },
    '.ant-col-xs-offset-3': { marginLeft: '12.5%' },
    '.ant-col-xs-order-3': { order: 3 },
    '.ant-col-xs-2': {
        display: 'block',
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%'
    },
    '.ant-col-xs-push-2': { left: '8.33333333%' },
    '.ant-col-xs-pull-2': { right: '8.33333333%' },
    '.ant-col-xs-offset-2': { marginLeft: '8.33333333%' },
    '.ant-col-xs-order-2': { order: 2 },
    '.ant-col-xs-order-1,.ant-layout-sider-right,.ant-tabs-rtl.ant-tabs-left>.ant-tabs-nav': {
        order: 1
    },
    '.ant-col-xs-1': {
        display: 'block',
        flex: '0 0 4.16666667%',
        maxWidth: '4.16666667%'
    },
    '.ant-col-xs-push-1': { left: '4.16666667%' },
    '.ant-col-pull-0.ant-col-rtl,.ant-col-push-0,.ant-col-xs-pull-0.ant-col-rtl,.ant-col-xs-push-0,.ant-col-xs-push-1.ant-col-rtl': {
        left: 'auto'
    },
    '.ant-col-xs-pull-1': { right: '4.16666667%' },
    '.ant-col-pull-0,.ant-col-push-0.ant-col-rtl,.ant-col-xs-pull-0,.ant-col-xs-push-0.ant-col-rtl': {
        right: 'auto'
    },
    '.ant-col-xs-offset-1': { marginLeft: '4.16666667%' },
    '.ant-col-xs-0': { display: 'none' },
    '.ant-col-xs-offset-0': { marginLeft: '0' },
    '.ant-col-xs-order-0': { order: 0 },
    '.ant-col-xs-offset-0.ant-col-rtl': { marginRight: '0' },
    '.ant-col-xs-push-1.ant-col-rtl': { right: '4.16666667%' },
    '.ant-col-xs-pull-1.ant-col-rtl': { right: 'auto', left: '4.16666667%' },
    '.ant-col-xs-offset-1.ant-col-rtl': {
        marginRight: '4.16666667%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-2.ant-col-rtl': { right: '8.33333333%', left: 'auto' },
    '.ant-col-xs-pull-2.ant-col-rtl': { right: 'auto', left: '8.33333333%' },
    '.ant-col-xs-offset-2.ant-col-rtl': {
        marginRight: '8.33333333%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-3.ant-col-rtl': { right: '12.5%', left: 'auto' },
    '.ant-col-xs-pull-3.ant-col-rtl': { right: 'auto', left: '12.5%' },
    '.ant-col-xs-offset-3.ant-col-rtl': { marginRight: '12.5%', marginLeft: '0' },
    '.ant-col-xs-push-4.ant-col-rtl': { right: '16.66666667%', left: 'auto' },
    '.ant-col-xs-pull-4.ant-col-rtl': { right: 'auto', left: '16.66666667%' },
    '.ant-col-xs-offset-4.ant-col-rtl': {
        marginRight: '16.66666667%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-5.ant-col-rtl': { right: '20.83333333%', left: 'auto' },
    '.ant-col-xs-pull-5.ant-col-rtl': { right: 'auto', left: '20.83333333%' },
    '.ant-col-xs-offset-5.ant-col-rtl': {
        marginRight: '20.83333333%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-6.ant-col-rtl': { right: '25%', left: 'auto' },
    '.ant-col-xs-pull-6.ant-col-rtl': { right: 'auto', left: '25%' },
    '.ant-col-xs-offset-6.ant-col-rtl': { marginRight: '25%', marginLeft: '0' },
    '.ant-col-xs-push-7.ant-col-rtl': { right: '29.16666667%', left: 'auto' },
    '.ant-col-xs-pull-7.ant-col-rtl': { right: 'auto', left: '29.16666667%' },
    '.ant-col-xs-offset-7.ant-col-rtl': {
        marginRight: '29.16666667%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-8.ant-col-rtl': { right: '33.33333333%', left: 'auto' },
    '.ant-col-xs-pull-8.ant-col-rtl': { right: 'auto', left: '33.33333333%' },
    '.ant-col-xs-offset-8.ant-col-rtl': {
        marginRight: '33.33333333%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-9.ant-col-rtl': { right: '37.5%', left: 'auto' },
    '.ant-col-xs-pull-9.ant-col-rtl': { right: 'auto', left: '37.5%' },
    '.ant-col-xs-offset-9.ant-col-rtl': { marginRight: '37.5%', marginLeft: '0' },
    '.ant-col-xs-push-10.ant-col-rtl': { right: '41.66666667%', left: 'auto' },
    '.ant-col-xs-pull-10.ant-col-rtl': { right: 'auto', left: '41.66666667%' },
    '.ant-col-xs-offset-10.ant-col-rtl': {
        marginRight: '41.66666667%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-11.ant-col-rtl': { right: '45.83333333%', left: 'auto' },
    '.ant-col-xs-pull-11.ant-col-rtl': { right: 'auto', left: '45.83333333%' },
    '.ant-col-xs-offset-11.ant-col-rtl': {
        marginRight: '45.83333333%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-12.ant-col-rtl': { right: '50%', left: 'auto' },
    '.ant-col-xs-pull-12.ant-col-rtl': { right: 'auto', left: '50%' },
    '.ant-col-xs-offset-12.ant-col-rtl': { marginRight: '50%', marginLeft: '0' },
    '.ant-col-xs-push-13.ant-col-rtl': { right: '54.16666667%', left: 'auto' },
    '.ant-col-xs-pull-13.ant-col-rtl': { right: 'auto', left: '54.16666667%' },
    '.ant-col-xs-offset-13.ant-col-rtl': {
        marginRight: '54.16666667%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-14.ant-col-rtl': { right: '58.33333333%', left: 'auto' },
    '.ant-col-xs-pull-14.ant-col-rtl': { right: 'auto', left: '58.33333333%' },
    '.ant-col-xs-offset-14.ant-col-rtl': {
        marginRight: '58.33333333%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-15.ant-col-rtl': { right: '62.5%', left: 'auto' },
    '.ant-col-xs-pull-15.ant-col-rtl': { right: 'auto', left: '62.5%' },
    '.ant-col-xs-offset-15.ant-col-rtl': {
        marginRight: '62.5%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-16.ant-col-rtl': { right: '66.66666667%', left: 'auto' },
    '.ant-col-xs-pull-16.ant-col-rtl': { right: 'auto', left: '66.66666667%' },
    '.ant-col-xs-offset-16.ant-col-rtl': {
        marginRight: '66.66666667%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-17.ant-col-rtl': { right: '70.83333333%', left: 'auto' },
    '.ant-col-xs-pull-17.ant-col-rtl': { right: 'auto', left: '70.83333333%' },
    '.ant-col-xs-offset-17.ant-col-rtl': {
        marginRight: '70.83333333%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-18.ant-col-rtl': { right: '75%', left: 'auto' },
    '.ant-col-xs-pull-18.ant-col-rtl': { right: 'auto', left: '75%' },
    '.ant-col-xs-offset-18.ant-col-rtl': { marginRight: '75%', marginLeft: '0' },
    '.ant-col-xs-push-19.ant-col-rtl': { right: '79.16666667%', left: 'auto' },
    '.ant-col-xs-pull-19.ant-col-rtl': { right: 'auto', left: '79.16666667%' },
    '.ant-col-xs-offset-19.ant-col-rtl': {
        marginRight: '79.16666667%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-20.ant-col-rtl': { right: '83.33333333%', left: 'auto' },
    '.ant-col-xs-pull-20.ant-col-rtl': { right: 'auto', left: '83.33333333%' },
    '.ant-col-xs-offset-20.ant-col-rtl': {
        marginRight: '83.33333333%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-21.ant-col-rtl': { right: '87.5%', left: 'auto' },
    '.ant-col-xs-pull-21.ant-col-rtl': { right: 'auto', left: '87.5%' },
    '.ant-col-xs-offset-21.ant-col-rtl': {
        marginRight: '87.5%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-22.ant-col-rtl': { right: '91.66666667%', left: 'auto' },
    '.ant-col-xs-pull-22.ant-col-rtl': { right: 'auto', left: '91.66666667%' },
    '.ant-col-xs-offset-22.ant-col-rtl': {
        marginRight: '91.66666667%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-23.ant-col-rtl': { right: '95.83333333%', left: 'auto' },
    '.ant-col-xs-pull-23.ant-col-rtl': { right: 'auto', left: '95.83333333%' },
    '.ant-col-xs-offset-23.ant-col-rtl': {
        marginRight: '95.83333333%',
        marginLeft: '0'
    },
    '.ant-col-xs-push-24.ant-col-rtl': { right: '100%', left: 'auto' },
    '.ant-col-xs-pull-24.ant-col-rtl': { right: 'auto', left: '100%' },
    '.ant-col-xs-offset-24.ant-col-rtl': { marginRight: '100%', marginLeft: '0' },
    '@media (min-width:568px)': {
        '.ant-col-sm-24': { display: 'block', flex: '0 0 100%', maxWidth: '100%' },
        '.ant-col-sm-push-24': { left: '100%' },
        '.ant-col-sm-pull-24': { right: '100%' },
        '.ant-col-sm-offset-24': { marginLeft: '100%' },
        '.ant-col-sm-order-24': { order: 24 },
        '.ant-col-sm-23': {
        display: 'block',
        flex: '0 0 95.83333333%',
        maxWidth: '95.83333333%'
        },
        '.ant-col-sm-push-23': { left: '95.83333333%' },
        '.ant-col-sm-pull-23': { right: '95.83333333%' },
        '.ant-col-sm-offset-23': { marginLeft: '95.83333333%' },
        '.ant-col-sm-order-23': { order: 23 },
        '.ant-col-sm-22': {
        display: 'block',
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%'
        },
        '.ant-col-sm-push-22': { left: '91.66666667%' },
        '.ant-col-sm-pull-22': { right: '91.66666667%' },
        '.ant-col-sm-offset-22': { marginLeft: '91.66666667%' },
        '.ant-col-sm-order-22': { order: 22 },
        '.ant-col-sm-21': {
        display: 'block',
        flex: '0 0 87.5%',
        maxWidth: '87.5%'
        },
        '.ant-col-sm-push-21': { left: '87.5%' },
        '.ant-col-sm-pull-21': { right: '87.5%' },
        '.ant-col-sm-offset-21': { marginLeft: '87.5%' },
        '.ant-col-sm-order-21': { order: 21 },
        '.ant-col-sm-20': {
        display: 'block',
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%'
        },
        '.ant-col-sm-push-20': { left: '83.33333333%' },
        '.ant-col-sm-pull-20': { right: '83.33333333%' },
        '.ant-col-sm-offset-20': { marginLeft: '83.33333333%' },
        '.ant-col-sm-order-20': { order: 20 },
        '.ant-col-sm-19': {
        display: 'block',
        flex: '0 0 79.16666667%',
        maxWidth: '79.16666667%'
        },
        '.ant-col-sm-push-19': { left: '79.16666667%' },
        '.ant-col-sm-pull-19': { right: '79.16666667%' },
        '.ant-col-sm-offset-19': { marginLeft: '79.16666667%' },
        '.ant-col-sm-order-19': { order: 19 },
        '.ant-col-sm-18': { display: 'block', flex: '0 0 75%', maxWidth: '75%' },
        '.ant-col-sm-push-18': { left: '75%' },
        '.ant-col-sm-pull-18': { right: '75%' },
        '.ant-col-sm-offset-18': { marginLeft: '75%' },
        '.ant-col-sm-order-18': { order: 18 },
        '.ant-col-sm-17': {
        display: 'block',
        flex: '0 0 70.83333333%',
        maxWidth: '70.83333333%'
        },
        '.ant-col-sm-push-17': { left: '70.83333333%' },
        '.ant-col-sm-pull-17': { right: '70.83333333%' },
        '.ant-col-sm-offset-17': { marginLeft: '70.83333333%' },
        '.ant-col-sm-order-17': { order: 17 },
        '.ant-col-sm-16': {
        display: 'block',
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%'
        },
        '.ant-col-sm-push-16': { left: '66.66666667%' },
        '.ant-col-sm-pull-16': { right: '66.66666667%' },
        '.ant-col-sm-offset-16': { marginLeft: '66.66666667%' },
        '.ant-col-sm-order-16': { order: 16 },
        '.ant-col-sm-15': {
        display: 'block',
        flex: '0 0 62.5%',
        maxWidth: '62.5%'
        },
        '.ant-col-sm-push-15': { left: '62.5%' },
        '.ant-col-sm-pull-15': { right: '62.5%' },
        '.ant-col-sm-offset-15': { marginLeft: '62.5%' },
        '.ant-col-sm-order-15': { order: 15 },
        '.ant-col-sm-14': {
        display: 'block',
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%'
        },
        '.ant-col-sm-push-14': { left: '58.33333333%' },
        '.ant-col-sm-pull-14': { right: '58.33333333%' },
        '.ant-col-sm-offset-14': { marginLeft: '58.33333333%' },
        '.ant-col-sm-order-14': { order: 14 },
        '.ant-col-sm-13': {
        display: 'block',
        flex: '0 0 54.16666667%',
        maxWidth: '54.16666667%'
        },
        '.ant-col-sm-push-13': { left: '54.16666667%' },
        '.ant-col-sm-pull-13': { right: '54.16666667%' },
        '.ant-col-sm-offset-13': { marginLeft: '54.16666667%' },
        '.ant-col-sm-order-13': { order: 13 },
        '.ant-col-sm-12': { display: 'block', flex: '0 0 50%', maxWidth: '50%' },
        '.ant-col-sm-push-12': { left: '50%' },
        '.ant-col-sm-pull-12': { right: '50%' },
        '.ant-col-sm-offset-12': { marginLeft: '50%' },
        '.ant-col-sm-order-12': { order: 12 },
        '.ant-col-sm-11': {
        display: 'block',
        flex: '0 0 45.83333333%',
        maxWidth: '45.83333333%'
        },
        '.ant-col-sm-push-11': { left: '45.83333333%' },
        '.ant-col-sm-pull-11': { right: '45.83333333%' },
        '.ant-col-sm-offset-11': { marginLeft: '45.83333333%' },
        '.ant-col-sm-order-11': { order: 11 },
        '.ant-col-sm-10': {
        display: 'block',
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%'
        },
        '.ant-col-sm-push-10': { left: '41.66666667%' },
        '.ant-col-sm-pull-10': { right: '41.66666667%' },
        '.ant-col-sm-offset-10': { marginLeft: '41.66666667%' },
        '.ant-col-sm-order-10': { order: 10 },
        '.ant-col-sm-9': { display: 'block', flex: '0 0 37.5%', maxWidth: '37.5%' },
        '.ant-col-sm-push-9': { left: '37.5%' },
        '.ant-col-sm-pull-9': { right: '37.5%' },
        '.ant-col-sm-offset-9': { marginLeft: '37.5%' },
        '.ant-col-sm-order-9': { order: 9 },
        '.ant-col-sm-8': {
        display: 'block',
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%'
        },
        '.ant-col-sm-push-8': { left: '33.33333333%' },
        '.ant-col-sm-pull-8': { right: '33.33333333%' },
        '.ant-col-sm-offset-8': { marginLeft: '33.33333333%' },
        '.ant-col-sm-order-8': { order: 8 },
        '.ant-col-sm-7': {
        display: 'block',
        flex: '0 0 29.16666667%',
        maxWidth: '29.16666667%'
        },
        '.ant-col-sm-push-7': { left: '29.16666667%' },
        '.ant-col-sm-pull-7': { right: '29.16666667%' },
        '.ant-col-sm-offset-7': { marginLeft: '29.16666667%' },
        '.ant-col-sm-order-7': { order: 7 },
        '.ant-col-sm-6': { display: 'block', flex: '0 0 25%', maxWidth: '25%' },
        '.ant-col-sm-push-6': { left: '25%' },
        '.ant-col-sm-pull-6': { right: '25%' },
        '.ant-col-sm-offset-6': { marginLeft: '25%' },
        '.ant-col-sm-order-6': { order: 6 },
        '.ant-col-sm-5': {
        display: 'block',
        flex: '0 0 20.83333333%',
        maxWidth: '20.83333333%'
        },
        '.ant-col-sm-push-5': { left: '20.83333333%' },
        '.ant-col-sm-pull-5': { right: '20.83333333%' },
        '.ant-col-sm-offset-5': { marginLeft: '20.83333333%' },
        '.ant-col-sm-order-5': { order: 5 },
        '.ant-col-sm-4': {
        display: 'block',
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%'
        },
        '.ant-col-sm-push-4': { left: '16.66666667%' },
        '.ant-col-sm-pull-4': { right: '16.66666667%' },
        '.ant-col-sm-offset-4': { marginLeft: '16.66666667%' },
        '.ant-col-sm-order-4': { order: 4 },
        '.ant-col-sm-3': { display: 'block', flex: '0 0 12.5%', maxWidth: '12.5%' },
        '.ant-col-sm-push-3': { left: '12.5%' },
        '.ant-col-sm-pull-3': { right: '12.5%' },
        '.ant-col-sm-offset-3': { marginLeft: '12.5%' },
        '.ant-col-sm-order-3': { order: 3 },
        '.ant-col-sm-2': {
        display: 'block',
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%'
        },
        '.ant-col-sm-push-2': { left: '8.33333333%' },
        '.ant-col-sm-pull-2': { right: '8.33333333%' },
        '.ant-col-sm-offset-2': { marginLeft: '8.33333333%' },
        '.ant-col-sm-order-2': { order: 2 },
        '.ant-col-sm-1': {
        display: 'block',
        flex: '0 0 4.16666667%',
        maxWidth: '4.16666667%'
        },
        '.ant-col-sm-push-1': { left: '4.16666667%' },
        '.ant-col-pull-0.ant-col-rtl,.ant-col-push-0,.ant-col-sm-pull-0.ant-col-rtl,.ant-col-sm-push-0,.ant-col-sm-push-1.ant-col-rtl': {
        left: 'auto'
        },
        '.ant-col-sm-pull-1': { right: '4.16666667%' },
        '.ant-col-pull-0,.ant-col-push-0.ant-col-rtl,.ant-col-sm-pull-0,.ant-col-sm-push-0.ant-col-rtl': {
        right: 'auto'
        },
        '.ant-col-sm-offset-1': { marginLeft: '4.16666667%' },
        '.ant-col-sm-order-1': { order: 1 },
        '.ant-col-sm-0': { display: 'none' },
        '.ant-col-sm-offset-0': { marginLeft: '0' },
        '.ant-col-sm-order-0': { order: 0 },
        '.ant-col-sm-offset-0.ant-col-rtl': { marginRight: '0' },
        '.ant-col-sm-push-1.ant-col-rtl': { right: '4.16666667%' },
        '.ant-col-sm-pull-1.ant-col-rtl': { right: 'auto', left: '4.16666667%' },
        '.ant-col-sm-offset-1.ant-col-rtl': {
        marginRight: '4.16666667%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-2.ant-col-rtl': { right: '8.33333333%', left: 'auto' },
        '.ant-col-sm-pull-2.ant-col-rtl': { right: 'auto', left: '8.33333333%' },
        '.ant-col-sm-offset-2.ant-col-rtl': {
        marginRight: '8.33333333%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-3.ant-col-rtl': { right: '12.5%', left: 'auto' },
        '.ant-col-sm-pull-3.ant-col-rtl': { right: 'auto', left: '12.5%' },
        '.ant-col-sm-offset-3.ant-col-rtl': {
        marginRight: '12.5%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-4.ant-col-rtl': { right: '16.66666667%', left: 'auto' },
        '.ant-col-sm-pull-4.ant-col-rtl': { right: 'auto', left: '16.66666667%' },
        '.ant-col-sm-offset-4.ant-col-rtl': {
        marginRight: '16.66666667%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-5.ant-col-rtl': { right: '20.83333333%', left: 'auto' },
        '.ant-col-sm-pull-5.ant-col-rtl': { right: 'auto', left: '20.83333333%' },
        '.ant-col-sm-offset-5.ant-col-rtl': {
        marginRight: '20.83333333%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-6.ant-col-rtl': { right: '25%', left: 'auto' },
        '.ant-col-sm-pull-6.ant-col-rtl': { right: 'auto', left: '25%' },
        '.ant-col-sm-offset-6.ant-col-rtl': { marginRight: '25%', marginLeft: '0' },
        '.ant-col-sm-push-7.ant-col-rtl': { right: '29.16666667%', left: 'auto' },
        '.ant-col-sm-pull-7.ant-col-rtl': { right: 'auto', left: '29.16666667%' },
        '.ant-col-sm-offset-7.ant-col-rtl': {
        marginRight: '29.16666667%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-8.ant-col-rtl': { right: '33.33333333%', left: 'auto' },
        '.ant-col-sm-pull-8.ant-col-rtl': { right: 'auto', left: '33.33333333%' },
        '.ant-col-sm-offset-8.ant-col-rtl': {
        marginRight: '33.33333333%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-9.ant-col-rtl': { right: '37.5%', left: 'auto' },
        '.ant-col-sm-pull-9.ant-col-rtl': { right: 'auto', left: '37.5%' },
        '.ant-col-sm-offset-9.ant-col-rtl': {
        marginRight: '37.5%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-10.ant-col-rtl': { right: '41.66666667%', left: 'auto' },
        '.ant-col-sm-pull-10.ant-col-rtl': { right: 'auto', left: '41.66666667%' },
        '.ant-col-sm-offset-10.ant-col-rtl': {
        marginRight: '41.66666667%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-11.ant-col-rtl': { right: '45.83333333%', left: 'auto' },
        '.ant-col-sm-pull-11.ant-col-rtl': { right: 'auto', left: '45.83333333%' },
        '.ant-col-sm-offset-11.ant-col-rtl': {
        marginRight: '45.83333333%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-12.ant-col-rtl': { right: '50%', left: 'auto' },
        '.ant-col-sm-pull-12.ant-col-rtl': { right: 'auto', left: '50%' },
        '.ant-col-sm-offset-12.ant-col-rtl': {
        marginRight: '50%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-13.ant-col-rtl': { right: '54.16666667%', left: 'auto' },
        '.ant-col-sm-pull-13.ant-col-rtl': { right: 'auto', left: '54.16666667%' },
        '.ant-col-sm-offset-13.ant-col-rtl': {
        marginRight: '54.16666667%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-14.ant-col-rtl': { right: '58.33333333%', left: 'auto' },
        '.ant-col-sm-pull-14.ant-col-rtl': { right: 'auto', left: '58.33333333%' },
        '.ant-col-sm-offset-14.ant-col-rtl': {
        marginRight: '58.33333333%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-15.ant-col-rtl': { right: '62.5%', left: 'auto' },
        '.ant-col-sm-pull-15.ant-col-rtl': { right: 'auto', left: '62.5%' },
        '.ant-col-sm-offset-15.ant-col-rtl': {
        marginRight: '62.5%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-16.ant-col-rtl': { right: '66.66666667%', left: 'auto' },
        '.ant-col-sm-pull-16.ant-col-rtl': { right: 'auto', left: '66.66666667%' },
        '.ant-col-sm-offset-16.ant-col-rtl': {
        marginRight: '66.66666667%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-17.ant-col-rtl': { right: '70.83333333%', left: 'auto' },
        '.ant-col-sm-pull-17.ant-col-rtl': { right: 'auto', left: '70.83333333%' },
        '.ant-col-sm-offset-17.ant-col-rtl': {
        marginRight: '70.83333333%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-18.ant-col-rtl': { right: '75%', left: 'auto' },
        '.ant-col-sm-pull-18.ant-col-rtl': { right: 'auto', left: '75%' },
        '.ant-col-sm-offset-18.ant-col-rtl': {
        marginRight: '75%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-19.ant-col-rtl': { right: '79.16666667%', left: 'auto' },
        '.ant-col-sm-pull-19.ant-col-rtl': { right: 'auto', left: '79.16666667%' },
        '.ant-col-sm-offset-19.ant-col-rtl': {
        marginRight: '79.16666667%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-20.ant-col-rtl': { right: '83.33333333%', left: 'auto' },
        '.ant-col-sm-pull-20.ant-col-rtl': { right: 'auto', left: '83.33333333%' },
        '.ant-col-sm-offset-20.ant-col-rtl': {
        marginRight: '83.33333333%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-21.ant-col-rtl': { right: '87.5%', left: 'auto' },
        '.ant-col-sm-pull-21.ant-col-rtl': { right: 'auto', left: '87.5%' },
        '.ant-col-sm-offset-21.ant-col-rtl': {
        marginRight: '87.5%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-22.ant-col-rtl': { right: '91.66666667%', left: 'auto' },
        '.ant-col-sm-pull-22.ant-col-rtl': { right: 'auto', left: '91.66666667%' },
        '.ant-col-sm-offset-22.ant-col-rtl': {
        marginRight: '91.66666667%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-23.ant-col-rtl': { right: '95.83333333%', left: 'auto' },
        '.ant-col-sm-pull-23.ant-col-rtl': { right: 'auto', left: '95.83333333%' },
        '.ant-col-sm-offset-23.ant-col-rtl': {
        marginRight: '95.83333333%',
        marginLeft: '0'
        },
        '.ant-col-sm-push-24.ant-col-rtl': { right: '100%', left: 'auto' },
        '.ant-col-sm-pull-24.ant-col-rtl': { right: 'auto', left: '100%' },
        '.ant-col-sm-offset-24.ant-col-rtl': {
        marginRight: '100%',
        marginLeft: '0'
        }
    },
    '@media (min-width:768px)': {
        '.ant-col-md-24': { display: 'block', flex: '0 0 100%', maxWidth: '100%' },
        '.ant-col-md-push-24': { left: '100%' },
        '.ant-col-md-pull-24': { right: '100%' },
        '.ant-col-md-offset-24': { marginLeft: '100%' },
        '.ant-col-md-order-24': { order: 24 },
        '.ant-col-md-23': {
        display: 'block',
        flex: '0 0 95.83333333%',
        maxWidth: '95.83333333%'
        },
        '.ant-col-md-push-23': { left: '95.83333333%' },
        '.ant-col-md-pull-23': { right: '95.83333333%' },
        '.ant-col-md-offset-23': { marginLeft: '95.83333333%' },
        '.ant-col-md-order-23': { order: 23 },
        '.ant-col-md-22': {
        display: 'block',
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%'
        },
        '.ant-col-md-push-22': { left: '91.66666667%' },
        '.ant-col-md-pull-22': { right: '91.66666667%' },
        '.ant-col-md-offset-22': { marginLeft: '91.66666667%' },
        '.ant-col-md-order-22': { order: 22 },
        '.ant-col-md-21': {
        display: 'block',
        flex: '0 0 87.5%',
        maxWidth: '87.5%'
        },
        '.ant-col-md-push-21': { left: '87.5%' },
        '.ant-col-md-pull-21': { right: '87.5%' },
        '.ant-col-md-offset-21': { marginLeft: '87.5%' },
        '.ant-col-md-order-21': { order: 21 },
        '.ant-col-md-20': {
        display: 'block',
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%'
        },
        '.ant-col-md-push-20': { left: '83.33333333%' },
        '.ant-col-md-pull-20': { right: '83.33333333%' },
        '.ant-col-md-offset-20': { marginLeft: '83.33333333%' },
        '.ant-col-md-order-20': { order: 20 },
        '.ant-col-md-19': {
        display: 'block',
        flex: '0 0 79.16666667%',
        maxWidth: '79.16666667%'
        },
        '.ant-col-md-push-19': { left: '79.16666667%' },
        '.ant-col-md-pull-19': { right: '79.16666667%' },
        '.ant-col-md-offset-19': { marginLeft: '79.16666667%' },
        '.ant-col-md-order-19': { order: 19 },
        '.ant-col-md-18': { display: 'block', flex: '0 0 75%', maxWidth: '75%' },
        '.ant-col-md-push-18': { left: '75%' },
        '.ant-col-md-pull-18': { right: '75%' },
        '.ant-col-md-offset-18': { marginLeft: '75%' },
        '.ant-col-md-order-18': { order: 18 },
        '.ant-col-md-17': {
        display: 'block',
        flex: '0 0 70.83333333%',
        maxWidth: '70.83333333%'
        },
        '.ant-col-md-push-17': { left: '70.83333333%' },
        '.ant-col-md-pull-17': { right: '70.83333333%' },
        '.ant-col-md-offset-17': { marginLeft: '70.83333333%' },
        '.ant-col-md-order-17': { order: 17 },
        '.ant-col-md-16': {
        display: 'block',
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%'
        },
        '.ant-col-md-push-16': { left: '66.66666667%' },
        '.ant-col-md-pull-16': { right: '66.66666667%' },
        '.ant-col-md-offset-16': { marginLeft: '66.66666667%' },
        '.ant-col-md-order-16': { order: 16 },
        '.ant-col-md-15': {
        display: 'block',
        flex: '0 0 62.5%',
        maxWidth: '62.5%'
        },
        '.ant-col-md-push-15': { left: '62.5%' },
        '.ant-col-md-pull-15': { right: '62.5%' },
        '.ant-col-md-offset-15': { marginLeft: '62.5%' },
        '.ant-col-md-order-15': { order: 15 },
        '.ant-col-md-14': {
        display: 'block',
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%'
        },
        '.ant-col-md-push-14': { left: '58.33333333%' },
        '.ant-col-md-pull-14': { right: '58.33333333%' },
        '.ant-col-md-offset-14': { marginLeft: '58.33333333%' },
        '.ant-col-md-order-14': { order: 14 },
        '.ant-col-md-13': {
        display: 'block',
        flex: '0 0 54.16666667%',
        maxWidth: '54.16666667%'
        },
        '.ant-col-md-push-13': { left: '54.16666667%' },
        '.ant-col-md-pull-13': { right: '54.16666667%' },
        '.ant-col-md-offset-13': { marginLeft: '54.16666667%' },
        '.ant-col-md-order-13': { order: 13 },
        '.ant-col-md-12': { display: 'block', flex: '0 0 50%', maxWidth: '50%' },
        '.ant-col-md-push-12': { left: '50%' },
        '.ant-col-md-pull-12': { right: '50%' },
        '.ant-col-md-offset-12': { marginLeft: '50%' },
        '.ant-col-md-order-12': { order: 12 },
        '.ant-col-md-11': {
        display: 'block',
        flex: '0 0 45.83333333%',
        maxWidth: '45.83333333%'
        },
        '.ant-col-md-push-11': { left: '45.83333333%' },
        '.ant-col-md-pull-11': { right: '45.83333333%' },
        '.ant-col-md-offset-11': { marginLeft: '45.83333333%' },
        '.ant-col-md-order-11': { order: 11 },
        '.ant-col-md-10': {
        display: 'block',
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%'
        },
        '.ant-col-md-push-10': { left: '41.66666667%' },
        '.ant-col-md-pull-10': { right: '41.66666667%' },
        '.ant-col-md-offset-10': { marginLeft: '41.66666667%' },
        '.ant-col-md-order-10': { order: 10 },
        '.ant-col-md-9': { display: 'block', flex: '0 0 37.5%', maxWidth: '37.5%' },
        '.ant-col-md-push-9': { left: '37.5%' },
        '.ant-col-md-pull-9': { right: '37.5%' },
        '.ant-col-md-offset-9': { marginLeft: '37.5%' },
        '.ant-col-md-order-9': { order: 9 },
        '.ant-col-md-8': {
        display: 'block',
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%'
        },
        '.ant-col-md-push-8': { left: '33.33333333%' },
        '.ant-col-md-pull-8': { right: '33.33333333%' },
        '.ant-col-md-offset-8': { marginLeft: '33.33333333%' },
        '.ant-col-md-order-8': { order: 8 },
        '.ant-col-md-7': {
        display: 'block',
        flex: '0 0 29.16666667%',
        maxWidth: '29.16666667%'
        },
        '.ant-col-md-push-7': { left: '29.16666667%' },
        '.ant-col-md-pull-7': { right: '29.16666667%' },
        '.ant-col-md-offset-7': { marginLeft: '29.16666667%' },
        '.ant-col-md-order-7': { order: 7 },
        '.ant-col-md-6': { display: 'block', flex: '0 0 25%', maxWidth: '25%' },
        '.ant-col-md-push-6': { left: '25%' },
        '.ant-col-md-pull-6': { right: '25%' },
        '.ant-col-md-offset-6': { marginLeft: '25%' },
        '.ant-col-md-order-6': { order: 6 },
        '.ant-col-md-5': {
        display: 'block',
        flex: '0 0 20.83333333%',
        maxWidth: '20.83333333%'
        },
        '.ant-col-md-push-5': { left: '20.83333333%' },
        '.ant-col-md-pull-5': { right: '20.83333333%' },
        '.ant-col-md-offset-5': { marginLeft: '20.83333333%' },
        '.ant-col-md-order-5': { order: 5 },
        '.ant-col-md-4': {
        display: 'block',
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%'
        },
        '.ant-col-md-push-4': { left: '16.66666667%' },
        '.ant-col-md-pull-4': { right: '16.66666667%' },
        '.ant-col-md-offset-4': { marginLeft: '16.66666667%' },
        '.ant-col-md-order-4': { order: 4 },
        '.ant-col-md-3': { display: 'block', flex: '0 0 12.5%', maxWidth: '12.5%' },
        '.ant-col-md-push-3': { left: '12.5%' },
        '.ant-col-md-pull-3': { right: '12.5%' },
        '.ant-col-md-offset-3': { marginLeft: '12.5%' },
        '.ant-col-md-order-3': { order: 3 },
        '.ant-col-md-2': {
        display: 'block',
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%'
        },
        '.ant-col-md-push-2': { left: '8.33333333%' },
        '.ant-col-md-pull-2': { right: '8.33333333%' },
        '.ant-col-md-offset-2': { marginLeft: '8.33333333%' },
        '.ant-col-md-order-2': { order: 2 },
        '.ant-col-md-1': {
        display: 'block',
        flex: '0 0 4.16666667%',
        maxWidth: '4.16666667%'
        },
        '.ant-col-md-push-1': { left: '4.16666667%' },
        '.ant-col-md-pull-0.ant-col-rtl,.ant-col-md-push-0,.ant-col-md-push-1.ant-col-rtl,.ant-col-pull-0.ant-col-rtl,.ant-col-push-0': {
        left: 'auto'
        },
        '.ant-col-md-pull-1': { right: '4.16666667%' },
        '.ant-col-md-pull-0,.ant-col-md-push-0.ant-col-rtl,.ant-col-pull-0,.ant-col-push-0.ant-col-rtl': {
        right: 'auto'
        },
        '.ant-col-md-offset-1': { marginLeft: '4.16666667%' },
        '.ant-col-md-order-1': { order: 1 },
        '.ant-col-md-0': { display: 'none' },
        '.ant-col-md-offset-0': { marginLeft: '0' },
        '.ant-col-md-order-0': { order: 0 },
        '.ant-col-md-offset-0.ant-col-rtl': { marginRight: '0' },
        '.ant-col-md-push-1.ant-col-rtl': { right: '4.16666667%' },
        '.ant-col-md-pull-1.ant-col-rtl': { right: 'auto', left: '4.16666667%' },
        '.ant-col-md-offset-1.ant-col-rtl': {
        marginRight: '4.16666667%',
        marginLeft: '0'
        },
        '.ant-col-md-push-2.ant-col-rtl': { right: '8.33333333%', left: 'auto' },
        '.ant-col-md-pull-2.ant-col-rtl': { right: 'auto', left: '8.33333333%' },
        '.ant-col-md-offset-2.ant-col-rtl': {
        marginRight: '8.33333333%',
        marginLeft: '0'
        },
        '.ant-col-md-push-3.ant-col-rtl': { right: '12.5%', left: 'auto' },
        '.ant-col-md-pull-3.ant-col-rtl': { right: 'auto', left: '12.5%' },
        '.ant-col-md-offset-3.ant-col-rtl': {
        marginRight: '12.5%',
        marginLeft: '0'
        },
        '.ant-col-md-push-4.ant-col-rtl': { right: '16.66666667%', left: 'auto' },
        '.ant-col-md-pull-4.ant-col-rtl': { right: 'auto', left: '16.66666667%' },
        '.ant-col-md-offset-4.ant-col-rtl': {
        marginRight: '16.66666667%',
        marginLeft: '0'
        },
        '.ant-col-md-push-5.ant-col-rtl': { right: '20.83333333%', left: 'auto' },
        '.ant-col-md-pull-5.ant-col-rtl': { right: 'auto', left: '20.83333333%' },
        '.ant-col-md-offset-5.ant-col-rtl': {
        marginRight: '20.83333333%',
        marginLeft: '0'
        },
        '.ant-col-md-push-6.ant-col-rtl': { right: '25%', left: 'auto' },
        '.ant-col-md-pull-6.ant-col-rtl': { right: 'auto', left: '25%' },
        '.ant-col-md-offset-6.ant-col-rtl': { marginRight: '25%', marginLeft: '0' },
        '.ant-col-md-push-7.ant-col-rtl': { right: '29.16666667%', left: 'auto' },
        '.ant-col-md-pull-7.ant-col-rtl': { right: 'auto', left: '29.16666667%' },
        '.ant-col-md-offset-7.ant-col-rtl': {
        marginRight: '29.16666667%',
        marginLeft: '0'
        },
        '.ant-col-md-push-8.ant-col-rtl': { right: '33.33333333%', left: 'auto' },
        '.ant-col-md-pull-8.ant-col-rtl': { right: 'auto', left: '33.33333333%' },
        '.ant-col-md-offset-8.ant-col-rtl': {
        marginRight: '33.33333333%',
        marginLeft: '0'
        },
        '.ant-col-md-push-9.ant-col-rtl': { right: '37.5%', left: 'auto' },
        '.ant-col-md-pull-9.ant-col-rtl': { right: 'auto', left: '37.5%' },
        '.ant-col-md-offset-9.ant-col-rtl': {
        marginRight: '37.5%',
        marginLeft: '0'
        },
        '.ant-col-md-push-10.ant-col-rtl': { right: '41.66666667%', left: 'auto' },
        '.ant-col-md-pull-10.ant-col-rtl': { right: 'auto', left: '41.66666667%' },
        '.ant-col-md-offset-10.ant-col-rtl': {
        marginRight: '41.66666667%',
        marginLeft: '0'
        },
        '.ant-col-md-push-11.ant-col-rtl': { right: '45.83333333%', left: 'auto' },
        '.ant-col-md-pull-11.ant-col-rtl': { right: 'auto', left: '45.83333333%' },
        '.ant-col-md-offset-11.ant-col-rtl': {
        marginRight: '45.83333333%',
        marginLeft: '0'
        },
        '.ant-col-md-push-12.ant-col-rtl': { right: '50%', left: 'auto' },
        '.ant-col-md-pull-12.ant-col-rtl': { right: 'auto', left: '50%' },
        '.ant-col-md-offset-12.ant-col-rtl': {
        marginRight: '50%',
        marginLeft: '0'
        },
        '.ant-col-md-push-13.ant-col-rtl': { right: '54.16666667%', left: 'auto' },
        '.ant-col-md-pull-13.ant-col-rtl': { right: 'auto', left: '54.16666667%' },
        '.ant-col-md-offset-13.ant-col-rtl': {
        marginRight: '54.16666667%',
        marginLeft: '0'
        },
        '.ant-col-md-push-14.ant-col-rtl': { right: '58.33333333%', left: 'auto' },
        '.ant-col-md-pull-14.ant-col-rtl': { right: 'auto', left: '58.33333333%' },
        '.ant-col-md-offset-14.ant-col-rtl': {
        marginRight: '58.33333333%',
        marginLeft: '0'
        },
        '.ant-col-md-push-15.ant-col-rtl': { right: '62.5%', left: 'auto' },
        '.ant-col-md-pull-15.ant-col-rtl': { right: 'auto', left: '62.5%' },
        '.ant-col-md-offset-15.ant-col-rtl': {
        marginRight: '62.5%',
        marginLeft: '0'
        },
        '.ant-col-md-push-16.ant-col-rtl': { right: '66.66666667%', left: 'auto' },
        '.ant-col-md-pull-16.ant-col-rtl': { right: 'auto', left: '66.66666667%' },
        '.ant-col-md-offset-16.ant-col-rtl': {
        marginRight: '66.66666667%',
        marginLeft: '0'
        },
        '.ant-col-md-push-17.ant-col-rtl': { right: '70.83333333%', left: 'auto' },
        '.ant-col-md-pull-17.ant-col-rtl': { right: 'auto', left: '70.83333333%' },
        '.ant-col-md-offset-17.ant-col-rtl': {
        marginRight: '70.83333333%',
        marginLeft: '0'
        },
        '.ant-col-md-push-18.ant-col-rtl': { right: '75%', left: 'auto' },
        '.ant-col-md-pull-18.ant-col-rtl': { right: 'auto', left: '75%' },
        '.ant-col-md-offset-18.ant-col-rtl': {
        marginRight: '75%',
        marginLeft: '0'
        },
        '.ant-col-md-push-19.ant-col-rtl': { right: '79.16666667%', left: 'auto' },
        '.ant-col-md-pull-19.ant-col-rtl': { right: 'auto', left: '79.16666667%' },
        '.ant-col-md-offset-19.ant-col-rtl': {
        marginRight: '79.16666667%',
        marginLeft: '0'
        },
        '.ant-col-md-push-20.ant-col-rtl': { right: '83.33333333%', left: 'auto' },
        '.ant-col-md-pull-20.ant-col-rtl': { right: 'auto', left: '83.33333333%' },
        '.ant-col-md-offset-20.ant-col-rtl': {
        marginRight: '83.33333333%',
        marginLeft: '0'
        },
        '.ant-col-md-push-21.ant-col-rtl': { right: '87.5%', left: 'auto' },
        '.ant-col-md-pull-21.ant-col-rtl': { right: 'auto', left: '87.5%' },
        '.ant-col-md-offset-21.ant-col-rtl': {
        marginRight: '87.5%',
        marginLeft: '0'
        },
        '.ant-col-md-push-22.ant-col-rtl': { right: '91.66666667%', left: 'auto' },
        '.ant-col-md-pull-22.ant-col-rtl': { right: 'auto', left: '91.66666667%' },
        '.ant-col-md-offset-22.ant-col-rtl': {
        marginRight: '91.66666667%',
        marginLeft: '0'
        },
        '.ant-col-md-push-23.ant-col-rtl': { right: '95.83333333%', left: 'auto' },
        '.ant-col-md-pull-23.ant-col-rtl': { right: 'auto', left: '95.83333333%' },
        '.ant-col-md-offset-23.ant-col-rtl': {
        marginRight: '95.83333333%',
        marginLeft: '0'
        },
        '.ant-col-md-push-24.ant-col-rtl': { right: '100%', left: 'auto' },
        '.ant-col-md-pull-24.ant-col-rtl': { right: 'auto', left: '100%' },
        '.ant-col-md-offset-24.ant-col-rtl': {
        marginRight: '100%',
        marginLeft: '0'
        }
    },
    '@media (min-width:992px)': {
        '.ant-col-lg-24': { display: 'block', flex: '0 0 100%', maxWidth: '100%' },
        '.ant-col-lg-push-24': { left: '100%' },
        '.ant-col-lg-pull-24': { right: '100%' },
        '.ant-col-lg-offset-24': { marginLeft: '100%' },
        '.ant-col-lg-order-24': { order: 24 },
        '.ant-col-lg-23': {
        display: 'block',
        flex: '0 0 95.83333333%',
        maxWidth: '95.83333333%'
        },
        '.ant-col-lg-push-23': { left: '95.83333333%' },
        '.ant-col-lg-pull-23': { right: '95.83333333%' },
        '.ant-col-lg-offset-23': { marginLeft: '95.83333333%' },
        '.ant-col-lg-order-23': { order: 23 },
        '.ant-col-lg-22': {
        display: 'block',
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%'
        },
        '.ant-col-lg-push-22': { left: '91.66666667%' },
        '.ant-col-lg-pull-22': { right: '91.66666667%' },
        '.ant-col-lg-offset-22': { marginLeft: '91.66666667%' },
        '.ant-col-lg-order-22': { order: 22 },
        '.ant-col-lg-21': {
        display: 'block',
        flex: '0 0 87.5%',
        maxWidth: '87.5%'
        },
        '.ant-col-lg-push-21': { left: '87.5%' },
        '.ant-col-lg-pull-21': { right: '87.5%' },
        '.ant-col-lg-offset-21': { marginLeft: '87.5%' },
        '.ant-col-lg-order-21': { order: 21 },
        '.ant-col-lg-20': {
        display: 'block',
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%'
        },
        '.ant-col-lg-push-20': { left: '83.33333333%' },
        '.ant-col-lg-pull-20': { right: '83.33333333%' },
        '.ant-col-lg-offset-20': { marginLeft: '83.33333333%' },
        '.ant-col-lg-order-20': { order: 20 },
        '.ant-col-lg-19': {
        display: 'block',
        flex: '0 0 79.16666667%',
        maxWidth: '79.16666667%'
        },
        '.ant-col-lg-push-19': { left: '79.16666667%' },
        '.ant-col-lg-pull-19': { right: '79.16666667%' },
        '.ant-col-lg-offset-19': { marginLeft: '79.16666667%' },
        '.ant-col-lg-order-19': { order: 19 },
        '.ant-col-lg-18': { display: 'block', flex: '0 0 75%', maxWidth: '75%' },
        '.ant-col-lg-push-18': { left: '75%' },
        '.ant-col-lg-pull-18': { right: '75%' },
        '.ant-col-lg-offset-18': { marginLeft: '75%' },
        '.ant-col-lg-order-18': { order: 18 },
        '.ant-col-lg-17': {
        display: 'block',
        flex: '0 0 70.83333333%',
        maxWidth: '70.83333333%'
        },
        '.ant-col-lg-push-17': { left: '70.83333333%' },
        '.ant-col-lg-pull-17': { right: '70.83333333%' },
        '.ant-col-lg-offset-17': { marginLeft: '70.83333333%' },
        '.ant-col-lg-order-17': { order: 17 },
        '.ant-col-lg-16': {
        display: 'block',
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%'
        },
        '.ant-col-lg-push-16': { left: '66.66666667%' },
        '.ant-col-lg-pull-16': { right: '66.66666667%' },
        '.ant-col-lg-offset-16': { marginLeft: '66.66666667%' },
        '.ant-col-lg-order-16': { order: 16 },
        '.ant-col-lg-15': {
        display: 'block',
        flex: '0 0 62.5%',
        maxWidth: '62.5%'
        },
        '.ant-col-lg-push-15': { left: '62.5%' },
        '.ant-col-lg-pull-15': { right: '62.5%' },
        '.ant-col-lg-offset-15': { marginLeft: '62.5%' },
        '.ant-col-lg-order-15': { order: 15 },
        '.ant-col-lg-14': {
        display: 'block',
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%'
        },
        '.ant-col-lg-push-14': { left: '58.33333333%' },
        '.ant-col-lg-pull-14': { right: '58.33333333%' },
        '.ant-col-lg-offset-14': { marginLeft: '58.33333333%' },
        '.ant-col-lg-order-14': { order: 14 },
        '.ant-col-lg-13': {
        display: 'block',
        flex: '0 0 54.16666667%',
        maxWidth: '54.16666667%'
        },
        '.ant-col-lg-push-13': { left: '54.16666667%' },
        '.ant-col-lg-pull-13': { right: '54.16666667%' },
        '.ant-col-lg-offset-13': { marginLeft: '54.16666667%' },
        '.ant-col-lg-order-13': { order: 13 },
        '.ant-col-lg-12': { display: 'block', flex: '0 0 50%', maxWidth: '50%' },
        '.ant-col-lg-push-12': { left: '50%' },
        '.ant-col-lg-pull-12': { right: '50%' },
        '.ant-col-lg-offset-12': { marginLeft: '50%' },
        '.ant-col-lg-order-12': { order: 12 },
        '.ant-col-lg-11': {
        display: 'block',
        flex: '0 0 45.83333333%',
        maxWidth: '45.83333333%'
        },
        '.ant-col-lg-push-11': { left: '45.83333333%' },
        '.ant-col-lg-pull-11': { right: '45.83333333%' },
        '.ant-col-lg-offset-11': { marginLeft: '45.83333333%' },
        '.ant-col-lg-order-11': { order: 11 },
        '.ant-col-lg-10': {
        display: 'block',
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%'
        },
        '.ant-col-lg-push-10': { left: '41.66666667%' },
        '.ant-col-lg-pull-10': { right: '41.66666667%' },
        '.ant-col-lg-offset-10': { marginLeft: '41.66666667%' },
        '.ant-col-lg-order-10': { order: 10 },
        '.ant-col-lg-9': { display: 'block', flex: '0 0 37.5%', maxWidth: '37.5%' },
        '.ant-col-lg-push-9': { left: '37.5%' },
        '.ant-col-lg-pull-9': { right: '37.5%' },
        '.ant-col-lg-offset-9': { marginLeft: '37.5%' },
        '.ant-col-lg-order-9': { order: 9 },
        '.ant-col-lg-8': {
        display: 'block',
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%'
        },
        '.ant-col-lg-push-8': { left: '33.33333333%' },
        '.ant-col-lg-pull-8': { right: '33.33333333%' },
        '.ant-col-lg-offset-8': { marginLeft: '33.33333333%' },
        '.ant-col-lg-order-8': { order: 8 },
        '.ant-col-lg-7': {
        display: 'block',
        flex: '0 0 29.16666667%',
        maxWidth: '29.16666667%'
        },
        '.ant-col-lg-push-7': { left: '29.16666667%' },
        '.ant-col-lg-pull-7': { right: '29.16666667%' },
        '.ant-col-lg-offset-7': { marginLeft: '29.16666667%' },
        '.ant-col-lg-order-7': { order: 7 },
        '.ant-col-lg-6': { display: 'block', flex: '0 0 25%', maxWidth: '25%' },
        '.ant-col-lg-push-6': { left: '25%' },
        '.ant-col-lg-pull-6': { right: '25%' },
        '.ant-col-lg-offset-6': { marginLeft: '25%' },
        '.ant-col-lg-order-6': { order: 6 },
        '.ant-col-lg-5': {
        display: 'block',
        flex: '0 0 20.83333333%',
        maxWidth: '20.83333333%'
        },
        '.ant-col-lg-push-5': { left: '20.83333333%' },
        '.ant-col-lg-pull-5': { right: '20.83333333%' },
        '.ant-col-lg-offset-5': { marginLeft: '20.83333333%' },
        '.ant-col-lg-order-5': { order: 5 },
        '.ant-col-lg-4': {
        display: 'block',
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%'
        },
        '.ant-col-lg-push-4': { left: '16.66666667%' },
        '.ant-col-lg-pull-4': { right: '16.66666667%' },
        '.ant-col-lg-offset-4': { marginLeft: '16.66666667%' },
        '.ant-col-lg-order-4': { order: 4 },
        '.ant-col-lg-3': { display: 'block', flex: '0 0 12.5%', maxWidth: '12.5%' },
        '.ant-col-lg-push-3': { left: '12.5%' },
        '.ant-col-lg-pull-3': { right: '12.5%' },
        '.ant-col-lg-offset-3': { marginLeft: '12.5%' },
        '.ant-col-lg-order-3': { order: 3 },
        '.ant-col-lg-2': {
        display: 'block',
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%'
        },
        '.ant-col-lg-push-2': { left: '8.33333333%' },
        '.ant-col-lg-pull-2': { right: '8.33333333%' },
        '.ant-col-lg-offset-2': { marginLeft: '8.33333333%' },
        '.ant-col-lg-order-2': { order: 2 },
        '.ant-col-lg-1': {
        display: 'block',
        flex: '0 0 4.16666667%',
        maxWidth: '4.16666667%'
        },
        '.ant-col-lg-push-1': { left: '4.16666667%' },
        '.ant-col-lg-pull-0.ant-col-rtl,.ant-col-lg-push-0,.ant-col-lg-push-1.ant-col-rtl,.ant-col-pull-0.ant-col-rtl,.ant-col-push-0': {
        left: 'auto'
        },
        '.ant-col-lg-pull-1': { right: '4.16666667%' },
        '.ant-col-lg-pull-0,.ant-col-lg-push-0.ant-col-rtl,.ant-col-pull-0,.ant-col-push-0.ant-col-rtl': {
        right: 'auto'
        },
        '.ant-col-lg-offset-1': { marginLeft: '4.16666667%' },
        '.ant-col-lg-order-1': { order: 1 },
        '.ant-col-lg-0': { display: 'none' },
        '.ant-col-lg-offset-0': { marginLeft: '0' },
        '.ant-col-lg-order-0': { order: 0 },
        '.ant-col-lg-offset-0.ant-col-rtl': { marginRight: '0' },
        '.ant-col-lg-push-1.ant-col-rtl': { right: '4.16666667%' },
        '.ant-col-lg-pull-1.ant-col-rtl': { right: 'auto', left: '4.16666667%' },
        '.ant-col-lg-offset-1.ant-col-rtl': {
        marginRight: '4.16666667%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-2.ant-col-rtl': { right: '8.33333333%', left: 'auto' },
        '.ant-col-lg-pull-2.ant-col-rtl': { right: 'auto', left: '8.33333333%' },
        '.ant-col-lg-offset-2.ant-col-rtl': {
        marginRight: '8.33333333%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-3.ant-col-rtl': { right: '12.5%', left: 'auto' },
        '.ant-col-lg-pull-3.ant-col-rtl': { right: 'auto', left: '12.5%' },
        '.ant-col-lg-offset-3.ant-col-rtl': {
        marginRight: '12.5%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-4.ant-col-rtl': { right: '16.66666667%', left: 'auto' },
        '.ant-col-lg-pull-4.ant-col-rtl': { right: 'auto', left: '16.66666667%' },
        '.ant-col-lg-offset-4.ant-col-rtl': {
        marginRight: '16.66666667%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-5.ant-col-rtl': { right: '20.83333333%', left: 'auto' },
        '.ant-col-lg-pull-5.ant-col-rtl': { right: 'auto', left: '20.83333333%' },
        '.ant-col-lg-offset-5.ant-col-rtl': {
        marginRight: '20.83333333%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-6.ant-col-rtl': { right: '25%', left: 'auto' },
        '.ant-col-lg-pull-6.ant-col-rtl': { right: 'auto', left: '25%' },
        '.ant-col-lg-offset-6.ant-col-rtl': { marginRight: '25%', marginLeft: '0' },
        '.ant-col-lg-push-7.ant-col-rtl': { right: '29.16666667%', left: 'auto' },
        '.ant-col-lg-pull-7.ant-col-rtl': { right: 'auto', left: '29.16666667%' },
        '.ant-col-lg-offset-7.ant-col-rtl': {
        marginRight: '29.16666667%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-8.ant-col-rtl': { right: '33.33333333%', left: 'auto' },
        '.ant-col-lg-pull-8.ant-col-rtl': { right: 'auto', left: '33.33333333%' },
        '.ant-col-lg-offset-8.ant-col-rtl': {
        marginRight: '33.33333333%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-9.ant-col-rtl': { right: '37.5%', left: 'auto' },
        '.ant-col-lg-pull-9.ant-col-rtl': { right: 'auto', left: '37.5%' },
        '.ant-col-lg-offset-9.ant-col-rtl': {
        marginRight: '37.5%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-10.ant-col-rtl': { right: '41.66666667%', left: 'auto' },
        '.ant-col-lg-pull-10.ant-col-rtl': { right: 'auto', left: '41.66666667%' },
        '.ant-col-lg-offset-10.ant-col-rtl': {
        marginRight: '41.66666667%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-11.ant-col-rtl': { right: '45.83333333%', left: 'auto' },
        '.ant-col-lg-pull-11.ant-col-rtl': { right: 'auto', left: '45.83333333%' },
        '.ant-col-lg-offset-11.ant-col-rtl': {
        marginRight: '45.83333333%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-12.ant-col-rtl': { right: '50%', left: 'auto' },
        '.ant-col-lg-pull-12.ant-col-rtl': { right: 'auto', left: '50%' },
        '.ant-col-lg-offset-12.ant-col-rtl': {
        marginRight: '50%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-13.ant-col-rtl': { right: '54.16666667%', left: 'auto' },
        '.ant-col-lg-pull-13.ant-col-rtl': { right: 'auto', left: '54.16666667%' },
        '.ant-col-lg-offset-13.ant-col-rtl': {
        marginRight: '54.16666667%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-14.ant-col-rtl': { right: '58.33333333%', left: 'auto' },
        '.ant-col-lg-pull-14.ant-col-rtl': { right: 'auto', left: '58.33333333%' },
        '.ant-col-lg-offset-14.ant-col-rtl': {
        marginRight: '58.33333333%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-15.ant-col-rtl': { right: '62.5%', left: 'auto' },
        '.ant-col-lg-pull-15.ant-col-rtl': { right: 'auto', left: '62.5%' },
        '.ant-col-lg-offset-15.ant-col-rtl': {
        marginRight: '62.5%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-16.ant-col-rtl': { right: '66.66666667%', left: 'auto' },
        '.ant-col-lg-pull-16.ant-col-rtl': { right: 'auto', left: '66.66666667%' },
        '.ant-col-lg-offset-16.ant-col-rtl': {
        marginRight: '66.66666667%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-17.ant-col-rtl': { right: '70.83333333%', left: 'auto' },
        '.ant-col-lg-pull-17.ant-col-rtl': { right: 'auto', left: '70.83333333%' },
        '.ant-col-lg-offset-17.ant-col-rtl': {
        marginRight: '70.83333333%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-18.ant-col-rtl': { right: '75%', left: 'auto' },
        '.ant-col-lg-pull-18.ant-col-rtl': { right: 'auto', left: '75%' },
        '.ant-col-lg-offset-18.ant-col-rtl': {
        marginRight: '75%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-19.ant-col-rtl': { right: '79.16666667%', left: 'auto' },
        '.ant-col-lg-pull-19.ant-col-rtl': { right: 'auto', left: '79.16666667%' },
        '.ant-col-lg-offset-19.ant-col-rtl': {
        marginRight: '79.16666667%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-20.ant-col-rtl': { right: '83.33333333%', left: 'auto' },
        '.ant-col-lg-pull-20.ant-col-rtl': { right: 'auto', left: '83.33333333%' },
        '.ant-col-lg-offset-20.ant-col-rtl': {
        marginRight: '83.33333333%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-21.ant-col-rtl': { right: '87.5%', left: 'auto' },
        '.ant-col-lg-pull-21.ant-col-rtl': { right: 'auto', left: '87.5%' },
        '.ant-col-lg-offset-21.ant-col-rtl': {
        marginRight: '87.5%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-22.ant-col-rtl': { right: '91.66666667%', left: 'auto' },
        '.ant-col-lg-pull-22.ant-col-rtl': { right: 'auto', left: '91.66666667%' },
        '.ant-col-lg-offset-22.ant-col-rtl': {
        marginRight: '91.66666667%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-23.ant-col-rtl': { right: '95.83333333%', left: 'auto' },
        '.ant-col-lg-pull-23.ant-col-rtl': { right: 'auto', left: '95.83333333%' },
        '.ant-col-lg-offset-23.ant-col-rtl': {
        marginRight: '95.83333333%',
        marginLeft: '0'
        },
        '.ant-col-lg-push-24.ant-col-rtl': { right: '100%', left: 'auto' },
        '.ant-col-lg-pull-24.ant-col-rtl': { right: 'auto', left: '100%' },
        '.ant-col-lg-offset-24.ant-col-rtl': {
        marginRight: '100%',
        marginLeft: '0'
        }
    },
    '@media (min-width:1280px)': {
        '.ant-col-xl-24': { display: 'block', flex: '0 0 100%', maxWidth: '100%' },
        '.ant-col-xl-push-24': { left: '100%' },
        '.ant-col-xl-pull-24': { right: '100%' },
        '.ant-col-xl-offset-24': { marginLeft: '100%' },
        '.ant-col-xl-order-24': { order: 24 },
        '.ant-col-xl-23': {
        display: 'block',
        flex: '0 0 95.83333333%',
        maxWidth: '95.83333333%'
        },
        '.ant-col-xl-push-23': { left: '95.83333333%' },
        '.ant-col-xl-pull-23': { right: '95.83333333%' },
        '.ant-col-xl-offset-23': { marginLeft: '95.83333333%' },
        '.ant-col-xl-order-23': { order: 23 },
        '.ant-col-xl-22': {
        display: 'block',
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%'
        },
        '.ant-col-xl-push-22': { left: '91.66666667%' },
        '.ant-col-xl-pull-22': { right: '91.66666667%' },
        '.ant-col-xl-offset-22': { marginLeft: '91.66666667%' },
        '.ant-col-xl-order-22': { order: 22 },
        '.ant-col-xl-21': {
        display: 'block',
        flex: '0 0 87.5%',
        maxWidth: '87.5%'
        },
        '.ant-col-xl-push-21': { left: '87.5%' },
        '.ant-col-xl-pull-21': { right: '87.5%' },
        '.ant-col-xl-offset-21': { marginLeft: '87.5%' },
        '.ant-col-xl-order-21': { order: 21 },
        '.ant-col-xl-20': {
        display: 'block',
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%'
        },
        '.ant-col-xl-push-20': { left: '83.33333333%' },
        '.ant-col-xl-pull-20': { right: '83.33333333%' },
        '.ant-col-xl-offset-20': { marginLeft: '83.33333333%' },
        '.ant-col-xl-order-20': { order: 20 },
        '.ant-col-xl-19': {
        display: 'block',
        flex: '0 0 79.16666667%',
        maxWidth: '79.16666667%'
        },
        '.ant-col-xl-push-19': { left: '79.16666667%' },
        '.ant-col-xl-pull-19': { right: '79.16666667%' },
        '.ant-col-xl-offset-19': { marginLeft: '79.16666667%' },
        '.ant-col-xl-order-19': { order: 19 },
        '.ant-col-xl-18': { display: 'block', flex: '0 0 75%', maxWidth: '75%' },
        '.ant-col-xl-push-18': { left: '75%' },
        '.ant-col-xl-pull-18': { right: '75%' },
        '.ant-col-xl-offset-18': { marginLeft: '75%' },
        '.ant-col-xl-order-18': { order: 18 },
        '.ant-col-xl-17': {
        display: 'block',
        flex: '0 0 70.83333333%',
        maxWidth: '70.83333333%'
        },
        '.ant-col-xl-push-17': { left: '70.83333333%' },
        '.ant-col-xl-pull-17': { right: '70.83333333%' },
        '.ant-col-xl-offset-17': { marginLeft: '70.83333333%' },
        '.ant-col-xl-order-17': { order: 17 },
        '.ant-col-xl-16': {
        display: 'block',
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%'
        },
        '.ant-col-xl-push-16': { left: '66.66666667%' },
        '.ant-col-xl-pull-16': { right: '66.66666667%' },
        '.ant-col-xl-offset-16': { marginLeft: '66.66666667%' },
        '.ant-col-xl-order-16': { order: 16 },
        '.ant-col-xl-15': {
        display: 'block',
        flex: '0 0 62.5%',
        maxWidth: '62.5%'
        },
        '.ant-col-xl-push-15': { left: '62.5%' },
        '.ant-col-xl-pull-15': { right: '62.5%' },
        '.ant-col-xl-offset-15': { marginLeft: '62.5%' },
        '.ant-col-xl-order-15': { order: 15 },
        '.ant-col-xl-14': {
        display: 'block',
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%'
        },
        '.ant-col-xl-push-14': { left: '58.33333333%' },
        '.ant-col-xl-pull-14': { right: '58.33333333%' },
        '.ant-col-xl-offset-14': { marginLeft: '58.33333333%' },
        '.ant-col-xl-order-14': { order: 14 },
        '.ant-col-xl-13': {
        display: 'block',
        flex: '0 0 54.16666667%',
        maxWidth: '54.16666667%'
        },
        '.ant-col-xl-push-13': { left: '54.16666667%' },
        '.ant-col-xl-pull-13': { right: '54.16666667%' },
        '.ant-col-xl-offset-13': { marginLeft: '54.16666667%' },
        '.ant-col-xl-order-13': { order: 13 },
        '.ant-col-xl-12': { display: 'block', flex: '0 0 50%', maxWidth: '50%' },
        '.ant-col-xl-push-12': { left: '50%' },
        '.ant-col-xl-pull-12': { right: '50%' },
        '.ant-col-xl-offset-12': { marginLeft: '50%' },
        '.ant-col-xl-order-12': { order: 12 },
        '.ant-col-xl-11': {
        display: 'block',
        flex: '0 0 45.83333333%',
        maxWidth: '45.83333333%'
        },
        '.ant-col-xl-push-11': { left: '45.83333333%' },
        '.ant-col-xl-pull-11': { right: '45.83333333%' },
        '.ant-col-xl-offset-11': { marginLeft: '45.83333333%' },
        '.ant-col-xl-order-11': { order: 11 },
        '.ant-col-xl-10': {
        display: 'block',
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%'
        },
        '.ant-col-xl-push-10': { left: '41.66666667%' },
        '.ant-col-xl-pull-10': { right: '41.66666667%' },
        '.ant-col-xl-offset-10': { marginLeft: '41.66666667%' },
        '.ant-col-xl-order-10': { order: 10 },
        '.ant-col-xl-9': { display: 'block', flex: '0 0 37.5%', maxWidth: '37.5%' },
        '.ant-col-xl-push-9': { left: '37.5%' },
        '.ant-col-xl-pull-9': { right: '37.5%' },
        '.ant-col-xl-offset-9': { marginLeft: '37.5%' },
        '.ant-col-xl-order-9': { order: 9 },
        '.ant-col-xl-8': {
        display: 'block',
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%'
        },
        '.ant-col-xl-push-8': { left: '33.33333333%' },
        '.ant-col-xl-pull-8': { right: '33.33333333%' },
        '.ant-col-xl-offset-8': { marginLeft: '33.33333333%' },
        '.ant-col-xl-order-8': { order: 8 },
        '.ant-col-xl-7': {
        display: 'block',
        flex: '0 0 29.16666667%',
        maxWidth: '29.16666667%'
        },
        '.ant-col-xl-push-7': { left: '29.16666667%' },
        '.ant-col-xl-pull-7': { right: '29.16666667%' },
        '.ant-col-xl-offset-7': { marginLeft: '29.16666667%' },
        '.ant-col-xl-order-7': { order: 7 },
        '.ant-col-xl-6': { display: 'block', flex: '0 0 25%', maxWidth: '25%' },
        '.ant-col-xl-push-6': { left: '25%' },
        '.ant-col-xl-pull-6': { right: '25%' },
        '.ant-col-xl-offset-6': { marginLeft: '25%' },
        '.ant-col-xl-order-6': { order: 6 },
        '.ant-col-xl-5': {
        display: 'block',
        flex: '0 0 20.83333333%',
        maxWidth: '20.83333333%'
        },
        '.ant-col-xl-push-5': { left: '20.83333333%' },
        '.ant-col-xl-pull-5': { right: '20.83333333%' },
        '.ant-col-xl-offset-5': { marginLeft: '20.83333333%' },
        '.ant-col-xl-order-5': { order: 5 },
        '.ant-col-xl-4': {
        display: 'block',
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%'
        },
        '.ant-col-xl-push-4': { left: '16.66666667%' },
        '.ant-col-xl-pull-4': { right: '16.66666667%' },
        '.ant-col-xl-offset-4': { marginLeft: '16.66666667%' },
        '.ant-col-xl-order-4': { order: 4 },
        '.ant-col-xl-3': { display: 'block', flex: '0 0 12.5%', maxWidth: '12.5%' },
        '.ant-col-xl-push-3': { left: '12.5%' },
        '.ant-col-xl-pull-3': { right: '12.5%' },
        '.ant-col-xl-offset-3': { marginLeft: '12.5%' },
        '.ant-col-xl-order-3': { order: 3 },
        '.ant-col-xl-2': {
        display: 'block',
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%'
        },
        '.ant-col-xl-push-2': { left: '8.33333333%' },
        '.ant-col-xl-pull-2': { right: '8.33333333%' },
        '.ant-col-xl-offset-2': { marginLeft: '8.33333333%' },
        '.ant-col-xl-order-2': { order: 2 },
        '.ant-col-xl-1': {
        display: 'block',
        flex: '0 0 4.16666667%',
        maxWidth: '4.16666667%'
        },
        '.ant-col-xl-push-1': { left: '4.16666667%' },
        '.ant-col-pull-0.ant-col-rtl,.ant-col-push-0,.ant-col-xl-pull-0.ant-col-rtl,.ant-col-xl-push-0,.ant-col-xl-push-1.ant-col-rtl': {
        left: 'auto'
        },
        '.ant-col-xl-pull-1': { right: '4.16666667%' },
        '.ant-col-pull-0,.ant-col-push-0.ant-col-rtl,.ant-col-xl-pull-0,.ant-col-xl-push-0.ant-col-rtl': {
        right: 'auto'
        },
        '.ant-col-xl-offset-1': { marginLeft: '4.16666667%' },
        '.ant-col-xl-order-1': { order: 1 },
        '.ant-col-xl-0': { display: 'none' },
        '.ant-col-xl-offset-0': { marginLeft: '0' },
        '.ant-col-xl-order-0': { order: 0 },
        '.ant-col-xl-offset-0.ant-col-rtl': { marginRight: '0' },
        '.ant-col-xl-push-1.ant-col-rtl': { right: '4.16666667%' },
        '.ant-col-xl-pull-1.ant-col-rtl': { right: 'auto', left: '4.16666667%' },
        '.ant-col-xl-offset-1.ant-col-rtl': {
        marginRight: '4.16666667%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-2.ant-col-rtl': { right: '8.33333333%', left: 'auto' },
        '.ant-col-xl-pull-2.ant-col-rtl': { right: 'auto', left: '8.33333333%' },
        '.ant-col-xl-offset-2.ant-col-rtl': {
        marginRight: '8.33333333%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-3.ant-col-rtl': { right: '12.5%', left: 'auto' },
        '.ant-col-xl-pull-3.ant-col-rtl': { right: 'auto', left: '12.5%' },
        '.ant-col-xl-offset-3.ant-col-rtl': {
        marginRight: '12.5%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-4.ant-col-rtl': { right: '16.66666667%', left: 'auto' },
        '.ant-col-xl-pull-4.ant-col-rtl': { right: 'auto', left: '16.66666667%' },
        '.ant-col-xl-offset-4.ant-col-rtl': {
        marginRight: '16.66666667%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-5.ant-col-rtl': { right: '20.83333333%', left: 'auto' },
        '.ant-col-xl-pull-5.ant-col-rtl': { right: 'auto', left: '20.83333333%' },
        '.ant-col-xl-offset-5.ant-col-rtl': {
        marginRight: '20.83333333%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-6.ant-col-rtl': { right: '25%', left: 'auto' },
        '.ant-col-xl-pull-6.ant-col-rtl': { right: 'auto', left: '25%' },
        '.ant-col-xl-offset-6.ant-col-rtl': { marginRight: '25%', marginLeft: '0' },
        '.ant-col-xl-push-7.ant-col-rtl': { right: '29.16666667%', left: 'auto' },
        '.ant-col-xl-pull-7.ant-col-rtl': { right: 'auto', left: '29.16666667%' },
        '.ant-col-xl-offset-7.ant-col-rtl': {
        marginRight: '29.16666667%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-8.ant-col-rtl': { right: '33.33333333%', left: 'auto' },
        '.ant-col-xl-pull-8.ant-col-rtl': { right: 'auto', left: '33.33333333%' },
        '.ant-col-xl-offset-8.ant-col-rtl': {
        marginRight: '33.33333333%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-9.ant-col-rtl': { right: '37.5%', left: 'auto' },
        '.ant-col-xl-pull-9.ant-col-rtl': { right: 'auto', left: '37.5%' },
        '.ant-col-xl-offset-9.ant-col-rtl': {
        marginRight: '37.5%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-10.ant-col-rtl': { right: '41.66666667%', left: 'auto' },
        '.ant-col-xl-pull-10.ant-col-rtl': { right: 'auto', left: '41.66666667%' },
        '.ant-col-xl-offset-10.ant-col-rtl': {
        marginRight: '41.66666667%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-11.ant-col-rtl': { right: '45.83333333%', left: 'auto' },
        '.ant-col-xl-pull-11.ant-col-rtl': { right: 'auto', left: '45.83333333%' },
        '.ant-col-xl-offset-11.ant-col-rtl': {
        marginRight: '45.83333333%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-12.ant-col-rtl': { right: '50%', left: 'auto' },
        '.ant-col-xl-pull-12.ant-col-rtl': { right: 'auto', left: '50%' },
        '.ant-col-xl-offset-12.ant-col-rtl': {
        marginRight: '50%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-13.ant-col-rtl': { right: '54.16666667%', left: 'auto' },
        '.ant-col-xl-pull-13.ant-col-rtl': { right: 'auto', left: '54.16666667%' },
        '.ant-col-xl-offset-13.ant-col-rtl': {
        marginRight: '54.16666667%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-14.ant-col-rtl': { right: '58.33333333%', left: 'auto' },
        '.ant-col-xl-pull-14.ant-col-rtl': { right: 'auto', left: '58.33333333%' },
        '.ant-col-xl-offset-14.ant-col-rtl': {
        marginRight: '58.33333333%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-15.ant-col-rtl': { right: '62.5%', left: 'auto' },
        '.ant-col-xl-pull-15.ant-col-rtl': { right: 'auto', left: '62.5%' },
        '.ant-col-xl-offset-15.ant-col-rtl': {
        marginRight: '62.5%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-16.ant-col-rtl': { right: '66.66666667%', left: 'auto' },
        '.ant-col-xl-pull-16.ant-col-rtl': { right: 'auto', left: '66.66666667%' },
        '.ant-col-xl-offset-16.ant-col-rtl': {
        marginRight: '66.66666667%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-17.ant-col-rtl': { right: '70.83333333%', left: 'auto' },
        '.ant-col-xl-pull-17.ant-col-rtl': { right: 'auto', left: '70.83333333%' },
        '.ant-col-xl-offset-17.ant-col-rtl': {
        marginRight: '70.83333333%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-18.ant-col-rtl': { right: '75%', left: 'auto' },
        '.ant-col-xl-pull-18.ant-col-rtl': { right: 'auto', left: '75%' },
        '.ant-col-xl-offset-18.ant-col-rtl': {
        marginRight: '75%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-19.ant-col-rtl': { right: '79.16666667%', left: 'auto' },
        '.ant-col-xl-pull-19.ant-col-rtl': { right: 'auto', left: '79.16666667%' },
        '.ant-col-xl-offset-19.ant-col-rtl': {
        marginRight: '79.16666667%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-20.ant-col-rtl': { right: '83.33333333%', left: 'auto' },
        '.ant-col-xl-pull-20.ant-col-rtl': { right: 'auto', left: '83.33333333%' },
        '.ant-col-xl-offset-20.ant-col-rtl': {
        marginRight: '83.33333333%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-21.ant-col-rtl': { right: '87.5%', left: 'auto' },
        '.ant-col-xl-pull-21.ant-col-rtl': { right: 'auto', left: '87.5%' },
        '.ant-col-xl-offset-21.ant-col-rtl': {
        marginRight: '87.5%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-22.ant-col-rtl': { right: '91.66666667%', left: 'auto' },
        '.ant-col-xl-pull-22.ant-col-rtl': { right: 'auto', left: '91.66666667%' },
        '.ant-col-xl-offset-22.ant-col-rtl': {
        marginRight: '91.66666667%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-23.ant-col-rtl': { right: '95.83333333%', left: 'auto' },
        '.ant-col-xl-pull-23.ant-col-rtl': { right: 'auto', left: '95.83333333%' },
        '.ant-col-xl-offset-23.ant-col-rtl': {
        marginRight: '95.83333333%',
        marginLeft: '0'
        },
        '.ant-col-xl-push-24.ant-col-rtl': { right: '100%', left: 'auto' },
        '.ant-col-xl-pull-24.ant-col-rtl': { right: 'auto', left: '100%' },
        '.ant-col-xl-offset-24.ant-col-rtl': {
        marginRight: '100%',
        marginLeft: '0'
        }
    },
    '@media (min-width:1920px)': {
        '.ant-col-xxl-24': { display: 'block', flex: '0 0 100%', maxWidth: '100%' },
        '.ant-col-xxl-push-24': { left: '100%' },
        '.ant-col-xxl-pull-24': { right: '100%' },
        '.ant-col-xxl-offset-24': { marginLeft: '100%' },
        '.ant-col-xxl-order-24': { order: 24 },
        '.ant-col-xxl-23': {
        display: 'block',
        flex: '0 0 95.83333333%',
        maxWidth: '95.83333333%'
        },
        '.ant-col-xxl-push-23': { left: '95.83333333%' },
        '.ant-col-xxl-pull-23': { right: '95.83333333%' },
        '.ant-col-xxl-offset-23': { marginLeft: '95.83333333%' },
        '.ant-col-xxl-order-23': { order: 23 },
        '.ant-col-xxl-22': {
        display: 'block',
        flex: '0 0 91.66666667%',
        maxWidth: '91.66666667%'
        },
        '.ant-col-xxl-push-22': { left: '91.66666667%' },
        '.ant-col-xxl-pull-22': { right: '91.66666667%' },
        '.ant-col-xxl-offset-22': { marginLeft: '91.66666667%' },
        '.ant-col-xxl-order-22': { order: 22 },
        '.ant-col-xxl-21': {
        display: 'block',
        flex: '0 0 87.5%',
        maxWidth: '87.5%'
        },
        '.ant-col-xxl-push-21': { left: '87.5%' },
        '.ant-col-xxl-pull-21': { right: '87.5%' },
        '.ant-col-xxl-offset-21': { marginLeft: '87.5%' },
        '.ant-col-xxl-order-21': { order: 21 },
        '.ant-col-xxl-20': {
        display: 'block',
        flex: '0 0 83.33333333%',
        maxWidth: '83.33333333%'
        },
        '.ant-col-xxl-push-20': { left: '83.33333333%' },
        '.ant-col-xxl-pull-20': { right: '83.33333333%' },
        '.ant-col-xxl-offset-20': { marginLeft: '83.33333333%' },
        '.ant-col-xxl-order-20': { order: 20 },
        '.ant-col-xxl-19': {
        display: 'block',
        flex: '0 0 79.16666667%',
        maxWidth: '79.16666667%'
        },
        '.ant-col-xxl-push-19': { left: '79.16666667%' },
        '.ant-col-xxl-pull-19': { right: '79.16666667%' },
        '.ant-col-xxl-offset-19': { marginLeft: '79.16666667%' },
        '.ant-col-xxl-order-19': { order: 19 },
        '.ant-col-xxl-18': { display: 'block', flex: '0 0 75%', maxWidth: '75%' },
        '.ant-col-xxl-push-18': { left: '75%' },
        '.ant-col-xxl-pull-18': { right: '75%' },
        '.ant-col-xxl-offset-18': { marginLeft: '75%' },
        '.ant-col-xxl-order-18': { order: 18 },
        '.ant-col-xxl-17': {
        display: 'block',
        flex: '0 0 70.83333333%',
        maxWidth: '70.83333333%'
        },
        '.ant-col-xxl-push-17': { left: '70.83333333%' },
        '.ant-col-xxl-pull-17': { right: '70.83333333%' },
        '.ant-col-xxl-offset-17': { marginLeft: '70.83333333%' },
        '.ant-col-xxl-order-17': { order: 17 },
        '.ant-col-xxl-16': {
        display: 'block',
        flex: '0 0 66.66666667%',
        maxWidth: '66.66666667%'
        },
        '.ant-col-xxl-push-16': { left: '66.66666667%' },
        '.ant-col-xxl-pull-16': { right: '66.66666667%' },
        '.ant-col-xxl-offset-16': { marginLeft: '66.66666667%' },
        '.ant-col-xxl-order-16': { order: 16 },
        '.ant-col-xxl-15': {
        display: 'block',
        flex: '0 0 62.5%',
        maxWidth: '62.5%'
        },
        '.ant-col-xxl-push-15': { left: '62.5%' },
        '.ant-col-xxl-pull-15': { right: '62.5%' },
        '.ant-col-xxl-offset-15': { marginLeft: '62.5%' },
        '.ant-col-xxl-order-15': { order: 15 },
        '.ant-col-xxl-14': {
        display: 'block',
        flex: '0 0 58.33333333%',
        maxWidth: '58.33333333%'
        },
        '.ant-col-xxl-push-14': { left: '58.33333333%' },
        '.ant-col-xxl-pull-14': { right: '58.33333333%' },
        '.ant-col-xxl-offset-14': { marginLeft: '58.33333333%' },
        '.ant-col-xxl-order-14': { order: 14 },
        '.ant-col-xxl-13': {
        display: 'block',
        flex: '0 0 54.16666667%',
        maxWidth: '54.16666667%'
        },
        '.ant-col-xxl-push-13': { left: '54.16666667%' },
        '.ant-col-xxl-pull-13': { right: '54.16666667%' },
        '.ant-col-xxl-offset-13': { marginLeft: '54.16666667%' },
        '.ant-col-xxl-order-13': { order: 13 },
        '.ant-col-xxl-12': { display: 'block', flex: '0 0 50%', maxWidth: '50%' },
        '.ant-col-xxl-push-12': { left: '50%' },
        '.ant-col-xxl-pull-12': { right: '50%' },
        '.ant-col-xxl-offset-12': { marginLeft: '50%' },
        '.ant-col-xxl-order-12': { order: 12 },
        '.ant-col-xxl-11': {
        display: 'block',
        flex: '0 0 45.83333333%',
        maxWidth: '45.83333333%'
        },
        '.ant-col-xxl-push-11': { left: '45.83333333%' },
        '.ant-col-xxl-pull-11': { right: '45.83333333%' },
        '.ant-col-xxl-offset-11': { marginLeft: '45.83333333%' },
        '.ant-col-xxl-order-11': { order: 11 },
        '.ant-col-xxl-10': {
        display: 'block',
        flex: '0 0 41.66666667%',
        maxWidth: '41.66666667%'
        },
        '.ant-col-xxl-push-10': { left: '41.66666667%' },
        '.ant-col-xxl-pull-10': { right: '41.66666667%' },
        '.ant-col-xxl-offset-10': { marginLeft: '41.66666667%' },
        '.ant-col-xxl-order-10': { order: 10 },
        '.ant-col-xxl-9': {
        display: 'block',
        flex: '0 0 37.5%',
        maxWidth: '37.5%'
        },
        '.ant-col-xxl-push-9': { left: '37.5%' },
        '.ant-col-xxl-pull-9': { right: '37.5%' },
        '.ant-col-xxl-offset-9': { marginLeft: '37.5%' },
        '.ant-col-xxl-order-9': { order: 9 },
        '.ant-col-xxl-8': {
        display: 'block',
        flex: '0 0 33.33333333%',
        maxWidth: '33.33333333%'
        },
        '.ant-col-xxl-push-8': { left: '33.33333333%' },
        '.ant-col-xxl-pull-8': { right: '33.33333333%' },
        '.ant-col-xxl-offset-8': { marginLeft: '33.33333333%' },
        '.ant-col-xxl-order-8': { order: 8 },
        '.ant-col-xxl-7': {
        display: 'block',
        flex: '0 0 29.16666667%',
        maxWidth: '29.16666667%'
        },
        '.ant-col-xxl-push-7': { left: '29.16666667%' },
        '.ant-col-xxl-pull-7': { right: '29.16666667%' },
        '.ant-col-xxl-offset-7': { marginLeft: '29.16666667%' },
        '.ant-col-xxl-order-7': { order: 7 },
        '.ant-col-xxl-6': { display: 'block', flex: '0 0 25%', maxWidth: '25%' },
        '.ant-col-xxl-push-6': { left: '25%' },
        '.ant-col-xxl-pull-6': { right: '25%' },
        '.ant-col-xxl-offset-6': { marginLeft: '25%' },
        '.ant-col-xxl-order-6': { order: 6 },
        '.ant-col-xxl-5': {
        display: 'block',
        flex: '0 0 20.83333333%',
        maxWidth: '20.83333333%'
        },
        '.ant-col-xxl-push-5': { left: '20.83333333%' },
        '.ant-col-xxl-pull-5': { right: '20.83333333%' },
        '.ant-col-xxl-offset-5': { marginLeft: '20.83333333%' },
        '.ant-col-xxl-order-5': { order: 5 },
        '.ant-col-xxl-4': {
        display: 'block',
        flex: '0 0 16.66666667%',
        maxWidth: '16.66666667%'
        },
        '.ant-col-xxl-push-4': { left: '16.66666667%' },
        '.ant-col-xxl-pull-4': { right: '16.66666667%' },
        '.ant-col-xxl-offset-4': { marginLeft: '16.66666667%' },
        '.ant-col-xxl-order-4': { order: 4 },
        '.ant-col-xxl-3': {
        display: 'block',
        flex: '0 0 12.5%',
        maxWidth: '12.5%'
        },
        '.ant-col-xxl-push-3': { left: '12.5%' },
        '.ant-col-xxl-pull-3': { right: '12.5%' },
        '.ant-col-xxl-offset-3': { marginLeft: '12.5%' },
        '.ant-col-xxl-order-3': { order: 3 },
        '.ant-col-xxl-2': {
        display: 'block',
        flex: '0 0 8.33333333%',
        maxWidth: '8.33333333%'
        },
        '.ant-col-xxl-push-2': { left: '8.33333333%' },
        '.ant-col-xxl-pull-2': { right: '8.33333333%' },
        '.ant-col-xxl-offset-2': { marginLeft: '8.33333333%' },
        '.ant-col-xxl-order-2': { order: 2 },
        '.ant-col-xxl-1': {
        display: 'block',
        flex: '0 0 4.16666667%',
        maxWidth: '4.16666667%'
        },
        '.ant-col-xxl-push-1': { left: '4.16666667%' },
        '.ant-col-pull-0.ant-col-rtl,.ant-col-push-0,.ant-col-xxl-pull-0.ant-col-rtl,.ant-col-xxl-push-0,.ant-col-xxl-push-1.ant-col-rtl': {
        left: 'auto'
        },
        '.ant-col-xxl-pull-1': { right: '4.16666667%' },
        '.ant-col-pull-0,.ant-col-push-0.ant-col-rtl,.ant-col-xxl-pull-0,.ant-col-xxl-push-0.ant-col-rtl': {
        right: 'auto'
        },
        '.ant-col-xxl-offset-1': { marginLeft: '4.16666667%' },
        '.ant-col-xxl-order-1': { order: 1 },
        '.ant-col-xxl-0': { display: 'none' },
        '.ant-col-xxl-offset-0': { marginLeft: '0' },
        '.ant-col-xxl-order-0': { order: 0 },
        '.ant-col-xxl-offset-0.ant-col-rtl': { marginRight: '0' },
        '.ant-col-xxl-push-1.ant-col-rtl': { right: '4.16666667%' },
        '.ant-col-xxl-pull-1.ant-col-rtl': { right: 'auto', left: '4.16666667%' },
        '.ant-col-xxl-offset-1.ant-col-rtl': {
        marginRight: '4.16666667%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-2.ant-col-rtl': { right: '8.33333333%', left: 'auto' },
        '.ant-col-xxl-pull-2.ant-col-rtl': { right: 'auto', left: '8.33333333%' },
        '.ant-col-xxl-offset-2.ant-col-rtl': {
        marginRight: '8.33333333%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-3.ant-col-rtl': { right: '12.5%', left: 'auto' },
        '.ant-col-xxl-pull-3.ant-col-rtl': { right: 'auto', left: '12.5%' },
        '.ant-col-xxl-offset-3.ant-col-rtl': {
        marginRight: '12.5%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-4.ant-col-rtl': { right: '16.66666667%', left: 'auto' },
        '.ant-col-xxl-pull-4.ant-col-rtl': { right: 'auto', left: '16.66666667%' },
        '.ant-col-xxl-offset-4.ant-col-rtl': {
        marginRight: '16.66666667%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-5.ant-col-rtl': { right: '20.83333333%', left: 'auto' },
        '.ant-col-xxl-pull-5.ant-col-rtl': { right: 'auto', left: '20.83333333%' },
        '.ant-col-xxl-offset-5.ant-col-rtl': {
        marginRight: '20.83333333%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-6.ant-col-rtl': { right: '25%', left: 'auto' },
        '.ant-col-xxl-pull-6.ant-col-rtl': { right: 'auto', left: '25%' },
        '.ant-col-xxl-offset-6.ant-col-rtl': {
        marginRight: '25%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-7.ant-col-rtl': { right: '29.16666667%', left: 'auto' },
        '.ant-col-xxl-pull-7.ant-col-rtl': { right: 'auto', left: '29.16666667%' },
        '.ant-col-xxl-offset-7.ant-col-rtl': {
        marginRight: '29.16666667%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-8.ant-col-rtl': { right: '33.33333333%', left: 'auto' },
        '.ant-col-xxl-pull-8.ant-col-rtl': { right: 'auto', left: '33.33333333%' },
        '.ant-col-xxl-offset-8.ant-col-rtl': {
        marginRight: '33.33333333%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-9.ant-col-rtl': { right: '37.5%', left: 'auto' },
        '.ant-col-xxl-pull-9.ant-col-rtl': { right: 'auto', left: '37.5%' },
        '.ant-col-xxl-offset-9.ant-col-rtl': {
        marginRight: '37.5%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-10.ant-col-rtl': { right: '41.66666667%', left: 'auto' },
        '.ant-col-xxl-pull-10.ant-col-rtl': { right: 'auto', left: '41.66666667%' },
        '.ant-col-xxl-offset-10.ant-col-rtl': {
        marginRight: '41.66666667%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-11.ant-col-rtl': { right: '45.83333333%', left: 'auto' },
        '.ant-col-xxl-pull-11.ant-col-rtl': { right: 'auto', left: '45.83333333%' },
        '.ant-col-xxl-offset-11.ant-col-rtl': {
        marginRight: '45.83333333%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-12.ant-col-rtl': { right: '50%', left: 'auto' },
        '.ant-col-xxl-pull-12.ant-col-rtl': { right: 'auto', left: '50%' },
        '.ant-col-xxl-offset-12.ant-col-rtl': {
        marginRight: '50%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-13.ant-col-rtl': { right: '54.16666667%', left: 'auto' },
        '.ant-col-xxl-pull-13.ant-col-rtl': { right: 'auto', left: '54.16666667%' },
        '.ant-col-xxl-offset-13.ant-col-rtl': {
        marginRight: '54.16666667%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-14.ant-col-rtl': { right: '58.33333333%', left: 'auto' },
        '.ant-col-xxl-pull-14.ant-col-rtl': { right: 'auto', left: '58.33333333%' },
        '.ant-col-xxl-offset-14.ant-col-rtl': {
        marginRight: '58.33333333%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-15.ant-col-rtl': { right: '62.5%', left: 'auto' },
        '.ant-col-xxl-pull-15.ant-col-rtl': { right: 'auto', left: '62.5%' },
        '.ant-col-xxl-offset-15.ant-col-rtl': {
        marginRight: '62.5%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-16.ant-col-rtl': { right: '66.66666667%', left: 'auto' },
        '.ant-col-xxl-pull-16.ant-col-rtl': { right: 'auto', left: '66.66666667%' },
        '.ant-col-xxl-offset-16.ant-col-rtl': {
        marginRight: '66.66666667%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-17.ant-col-rtl': { right: '70.83333333%', left: 'auto' },
        '.ant-col-xxl-pull-17.ant-col-rtl': { right: 'auto', left: '70.83333333%' },
        '.ant-col-xxl-offset-17.ant-col-rtl': {
        marginRight: '70.83333333%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-18.ant-col-rtl': { right: '75%', left: 'auto' },
        '.ant-col-xxl-pull-18.ant-col-rtl': { right: 'auto', left: '75%' },
        '.ant-col-xxl-offset-18.ant-col-rtl': {
        marginRight: '75%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-19.ant-col-rtl': { right: '79.16666667%', left: 'auto' },
        '.ant-col-xxl-pull-19.ant-col-rtl': { right: 'auto', left: '79.16666667%' },
        '.ant-col-xxl-offset-19.ant-col-rtl': {
        marginRight: '79.16666667%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-20.ant-col-rtl': { right: '83.33333333%', left: 'auto' },
        '.ant-col-xxl-pull-20.ant-col-rtl': { right: 'auto', left: '83.33333333%' },
        '.ant-col-xxl-offset-20.ant-col-rtl': {
        marginRight: '83.33333333%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-21.ant-col-rtl': { right: '87.5%', left: 'auto' },
        '.ant-col-xxl-pull-21.ant-col-rtl': { right: 'auto', left: '87.5%' },
        '.ant-col-xxl-offset-21.ant-col-rtl': {
        marginRight: '87.5%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-22.ant-col-rtl': { right: '91.66666667%', left: 'auto' },
        '.ant-col-xxl-pull-22.ant-col-rtl': { right: 'auto', left: '91.66666667%' },
        '.ant-col-xxl-offset-22.ant-col-rtl': {
        marginRight: '91.66666667%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-23.ant-col-rtl': { right: '95.83333333%', left: 'auto' },
        '.ant-col-xxl-pull-23.ant-col-rtl': { right: 'auto', left: '95.83333333%' },
        '.ant-col-xxl-offset-23.ant-col-rtl': {
        marginRight: '95.83333333%',
        marginLeft: '0'
        },
        '.ant-col-xxl-push-24.ant-col-rtl': { right: '100%', left: 'auto' },
        '.ant-col-xxl-pull-24.ant-col-rtl': { right: 'auto', left: '100%' },
        '.ant-col-xxl-offset-24.ant-col-rtl': {
        marginRight: '100%',
        marginLeft: '0'
        }
    },
    '.ant-image': { position: 'relative', display: 'inline-block' },
    '.ant-image-mask,.ant-image-placeholder': {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0'
    },
    '.ant-image-img': { width: '100%', height: 'auto', verticalAlign: 'middle' },
    '.ant-image-img-placeholder': {
        backgroundColor: '#f5f5f5',
        backgroundImage:
        'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '30%'
    },
    '.ant-image-mask': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        background: 'rgba(0,0,0,.5)',
        cursor: 'pointer',
        opacity: 0,
        transition: 'opacity .3s'
    },
    '.ant-image-preview-img,.ant-image-preview-img-wrapper': {
        transition: 'transform .3s cubic-bezier(.215,.61,.355,1) 0s'
    },
    '.ant-image-mask-info': {
        padding: '0 4px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-image-mask:hover': { opacity: 1 },
    '.ant-image-preview': {
        pointerEvents: 'none',
        height: '100%',
        textAlign: 'center'
    },
    '.ant-image-preview.ant-zoom-appear,.ant-image-preview.ant-zoom-enter': {
        transform: 'none',
        opacity: 0,
        animationDuration: '.3s',
        userSelect: 'none'
    },
    '.ant-image-preview-mask': {
        position: 'fixed',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 1000,
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.45)'
    },
    '.ant-image-preview-mask-hidden': { display: 'none' },
    '.ant-image-preview-wrap': {
        position: 'fixed',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        overflow: 'auto',
        outline: '0',
        zIndex: 1080
    },
    '.ant-image-preview-body': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        overflow: 'hidden'
    },
    '.ant-image-preview-img': {
        maxWidth: '100%',
        maxHeight: '100%',
        verticalAlign: 'middle',
        transform: 'scale3d(1,1,1)',
        cursor: 'grab',
        userSelect: 'none',
        pointerEvents: 'auto'
    },
    '.ant-image-preview-img-wrapper': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
    },
    '.ant-image-preview-img-wrapper::before': {
        display: 'inline-block',
        width: '1px',
        height: '50%',
        marginRight: '-1px',
        content: '""'
    },
    '.ant-image-preview-moving .ant-image-preview-img': { cursor: 'grabbing' },
    '.ant-image-preview-moving .ant-image-preview-img-wrapper': {
        transitionDuration: '0s'
    },
    '.ant-image-preview-operations-wrapper': {
        position: 'fixed',
        top: '0',
        right: '0',
        zIndex: 1081,
        width: '100%'
    },
    '.ant-image-preview-operations': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        fontFeatureSettings: '"tnum"',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        color: 'rgba(255,255,255,.85)',
        listStyle: 'none',
        background: 'rgba(0,0,0,.1)',
        pointerEvents: 'auto'
    },
    '.ant-image-preview-operations-icon,.ant-image-preview-switch-left>.anticon,.ant-image-preview-switch-right>.anticon': {
        fontSize: '18px'
    },
    '.ant-image-preview-operations-operation': {
        marginLeft: '12px',
        padding: '12px',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-image-preview-operations-operation:hover': {
        background: 'rgba(0,0,0,.2)'
    },
    '.ant-image-preview-operations-operation-disabled': {
        color: 'rgba(255,255,255,.25)',
        pointerEvents: 'none'
    },
    '.ant-image-preview-operations-operation:last-of-type': { marginLeft: '0' },
    '.ant-image-preview-operations-progress': {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
    },
    '.ant-image-preview-switch-left,.ant-image-preview-switch-right': {
        position: 'fixed',
        top: '50%',
        right: '8px',
        zIndex: 1081,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        color: 'rgba(255,255,255,.85)',
        background: 'rgba(0,0,0,.1)',
        borderRadius: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        transition: 'all .3s',
        pointerEvents: 'auto'
    },
    '.ant-image-preview-switch-left:hover,.ant-image-preview-switch-right:hover': {
        background: 'rgba(0,0,0,.2)'
    },
    '.ant-image-preview-switch-left-disabled,.ant-image-preview-switch-left-disabled:hover,.ant-image-preview-switch-right-disabled,.ant-image-preview-switch-right-disabled:hover': {
        color: 'rgba(255,255,255,.25)',
        background: 'rgba(0,0,0,.1)',
        cursor: 'not-allowed'
    },
    '.ant-input,.ant-input-affix-wrapper': {
        position: 'relative',
        backgroundColor: 'var(--background-color)',
        minWidth: '0'
    },
    '.ant-image-preview-switch-left-disabled:hover>.anticon,.ant-image-preview-switch-left-disabled>.anticon,.ant-image-preview-switch-right-disabled:hover>.anticon,.ant-image-preview-switch-right-disabled>.anticon': {
        cursor: 'not-allowed'
    },
    '.ant-image-preview-switch-left': { left: '8px' },
    '.ant-image-preview-switch-right': { right: '8px' },
    '.ant-input-affix-wrapper': {
        width: '100%',
        padding: '11.4px 11px',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        lineHeight: 1.5715,
        backgroundImage: 'none',
        borderRadius: '7px',
        transition: 'all .3s',
        display: 'inline-flex'
    },
    '.ant-input-affix-wrapper::placeholder': {
        color: 'var(--input-placeholder-color)',
        userSelect: 'none'
    },
    '.ant-input-affix-wrapper-disabled,.ant-input-affix-wrapper[disabled]': {
        color: 'var(--disabled-color)',
        backgroundColor: 'var(--disabled-bg-color)',
        opacity: 1,
        cursor: 'not-allowed'
    },
    '.ant-input-affix-wrapper:placeholder-shown': { textOverflow: 'ellipsis' },
    '.ant-input-affix-wrapper:hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-rtl .ant-input-affix-wrapper:hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-affix-wrapper-focused,.ant-input-affix-wrapper:focus': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0',
        zIndex: 1
    },
    '.ant-input-rtl .ant-input-affix-wrapper-focused,.ant-input-rtl .ant-input-affix-wrapper:focus': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-affix-wrapper-disabled:hover,.ant-input-affix-wrapper[disabled]:hover': {
        borderColor: 'var(--border-base-color)',
        borderRightWidth: '1px'
    },
    '.ant-input-affix-wrapper-disabled': {
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none'
    },
    '.ant-input-affix-wrapper[disabled]': {
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none'
    },
    '.ant-input-affix-wrapper-borderless,.ant-input-affix-wrapper-borderless-disabled,.ant-input-affix-wrapper-borderless-focused,.ant-input-affix-wrapper-borderless:focus,.ant-input-affix-wrapper-borderless:hover,.ant-input-affix-wrapper-borderless[disabled]': {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none'
    },
    'textarea.ant-input-affix-wrapper': {
        maxWidth: '100%',
        height: 'auto',
        minHeight: '50px',
        lineHeight: 1.5715,
        verticalAlign: 'bottom',
        transition: 'all .3s,height 0s'
    },
    '.ant-input-affix-wrapper-lg': { padding: '16.9px 11px', fontSize: '18px' },
    '.ant-input-affix-wrapper-sm': { padding: '2.4px 7px' },
    '.ant-input-affix-wrapper.ant-input-affix-wrapper-textarea-with-clear-btn,.ant-input-affix-wrapper>.ant-input:not(textarea)': {
        padding: '0'
    },
    '.ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px',
        zIndex: 1
    },
    '.ant-input-rtl .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-search-with-button .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover': {
        zIndex: 0
    },
    '.ant-input-affix-wrapper-disabled .ant-input[disabled]': {
        background: 'rgba(255,255,255,0)'
    },
    '.ant-input-affix-wrapper>.ant-input': {
        fontSize: 'inherit',
        border: 'none',
        outline: '0'
    },
    '.ant-input-affix-wrapper>.ant-input:focus': { boxShadow: 'none !important' as any },
    '.ant-input-affix-wrapper::before': {
        width: '0',
        visibility: 'hidden',
        content: '"\\a0"'
    },
    '.ant-input-prefix,.ant-input-suffix': {
        display: 'flex',
        flex: 'none',
        alignItems: 'center'
    },
    '.ant-input-prefix>:not(:last-child),.ant-input-suffix>:not(:last-child)': {
        marginRight: '8px'
    },
    '.ant-input-show-count-suffix': { color: 'rgba(0,0,0,.45)' },
    '.ant-input-show-count-has-suffix': { marginRight: '2px' },
    '.ant-input-prefix': { marginRight: '4px' },
    '.ant-input-suffix': { marginLeft: '4px' },
    '.ant-input-clear-icon,.anticon.ant-input-clear-icon': {
        margin: '0',
        color: 'rgba(0,0,0,.25)',
        fontSize: '14px',
        verticalAlign: '-1px',
        cursor: 'pointer',
        transition: 'color .3s'
    },
    '.ant-input-clear-icon:hover,.anticon.ant-input-clear-icon:hover': {
        color: 'rgba(0,0,0,.45)'
    },
    '.ant-input-clear-icon:active,.anticon.ant-input-clear-icon:active': {
        color: 'var(--text-main-color)'
    },
    '.ant-input-clear-icon-hidden,.anticon.ant-input-clear-icon-hidden': {
        visibility: 'hidden'
    },
    '.ant-input-clear-icon-has-suffix,.anticon.ant-input-clear-icon-has-suffix': {
        margin: '0 4px'
    },
    '.ant-input,.ant-input-group': {
        boxSizing: 'border-box',
        margin: '0',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        fontFeatureSettings: '"tnum"',
        width: '100%'
    },
    '.ant-input-affix-wrapper.ant-input-affix-wrapper-textarea-with-clear-btn .ant-input-clear-icon': {
        position: 'absolute',
        top: '8px',
        right: '8px',
        zIndex: 1
    },
    '.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover': {
        background: 'var(--background-color)',
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input-focused,.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus': {
        borderColor: 'var(--ant-error-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-error-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-status-error .ant-input-prefix': {
        color: 'var(--ant-error-color)'
    },
    '.ant-input-status-warning:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,.ant-input-status-warning:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover': {
        background: 'var(--background-color)',
        borderColor: 'var(--ant-warning-color)'
    },
    '.ant-input-status-warning:not(.ant-input-disabled):not(.ant-input-borderless).ant-input-focused,.ant-input-status-warning:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus': {
        borderColor: 'var(--ant-warning-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-warning-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-status-warning .ant-input-prefix': {
        color: 'var(--ant-warning-color)'
    },
    '.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover': {
        background: 'var(--background-color)',
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused,.ant-input-affix-wrapper-status-error:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus': {
        borderColor: 'var(--ant-error-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-error-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-affix-wrapper-status-error .ant-input-prefix': {
        color: 'var(--ant-error-color)'
    },
    '.ant-input-affix-wrapper-status-warning:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,.ant-input-affix-wrapper-status-warning:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover': {
        background: 'var(--background-color)',
        borderColor: 'var(--ant-warning-color)'
    },
    '.ant-input-affix-wrapper-status-warning:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused,.ant-input-affix-wrapper-status-warning:not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus': {
        borderColor: 'var(--ant-warning-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-warning-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-affix-wrapper-status-warning .ant-input-prefix': {
        color: 'var(--ant-warning-color)'
    },
    '.ant-input-textarea-status-error.ant-input-textarea-has-feedback .ant-input,.ant-input-textarea-status-success.ant-input-textarea-has-feedback .ant-input,.ant-input-textarea-status-validating.ant-input-textarea-has-feedback .ant-input,.ant-input-textarea-status-warning.ant-input-textarea-has-feedback .ant-input': {
        paddingRight: '24px'
    },
    '.ant-input-group-wrapper-status-error .ant-input-group-addon': {
        color: 'var(--ant-error-color)',
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-input-group-wrapper-status-warning .ant-input-group-addon': {
        color: 'var(--ant-warning-color)',
        borderColor: 'var(--ant-warning-color)'
    },
    '.ant-input': {
        listStyle: 'none',
        display: 'inline-block',
        padding: '11.4px 11px',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        backgroundImage: 'none',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        transition: 'all .3s'
    },
    '.ant-input::placeholder': {
        color: 'var(--input-placeholder-color)',
        userSelect: 'none'
    },
    '.ant-input-disabled,.ant-input[disabled]': {
        color: 'var(--disabled-color)',
        backgroundColor: 'var(--disabled-bg-color)',
        opacity: 1
    },
    '.ant-input:placeholder-shown': { textOverflow: 'ellipsis' },
    '.ant-input:hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-rtl .ant-input:hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-focused,.ant-input:focus': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-rtl .ant-input-focused,.ant-input-rtl .ant-input:focus': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-disabled:hover,.ant-input[disabled]:hover': {
        borderColor: 'var(--border-base-color)',
        borderRightWidth: '1px'
    },
    '.ant-input-disabled': {
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none',
        cursor: 'not-allowed'
    },
    '.ant-input[disabled]': {
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none',
        cursor: 'not-allowed'
    },
    '.ant-input-group,.ant-input-group-addon': {
        position: 'relative',
        color: 'var(--text-main-color)'
    },
    '.ant-input-borderless,.ant-input-borderless-disabled,.ant-input-borderless-focused,.ant-input-borderless:focus,.ant-input-borderless:hover,.ant-input-borderless[disabled]': {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none'
    },
    'textarea.ant-input': {
        maxWidth: '100%',
        height: 'auto',
        minHeight: '50px',
        lineHeight: 1.5715,
        verticalAlign: 'bottom',
        transition: 'all .3s,height 0s'
    },
    '.ant-input-lg': { padding: '16.9px 11px', fontSize: '18px' },
    '.ant-input-sm': { padding: '2.4px 7px' },
    '.ant-input-group': {
        padding: '0',
        fontSize: '16px',
        listStyle: 'none',
        display: 'table',
        borderCollapse: 'separate',
        borderSpacing: '0'
    },
    '.ant-input-group[class*=col-]': {
        cssFloat: 'none',
        paddingRight: '0',
        paddingLeft: '0'
    },
    '.ant-input-group>[class*=col-]': { paddingRight: '8px' },
    '.ant-input-group>[class*=col-]:last-child': { paddingRight: '0' },
    '.ant-input-group-addon,.ant-input-group-wrap,.ant-input-group>.ant-input': {
        display: 'table-cell'
    },
    '.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child),.ant-input-group>.ant-input:not(:first-child):not(:last-child)': {
        borderRadius: '0'
    },
    '.ant-input-group-addon,.ant-input-group-wrap': {
        width: '1px',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle'
    },
    '.ant-input-group-wrap>*': { display: 'block !important' as any },
    '.ant-input-group.ant-input-group-compact,.ant-input-number-group.ant-input-number-group-compact': {
        display: 'block'
    },
    '.ant-input-group .ant-input': {
        cssFloat: 'left',
        width: '100%',
        marginBottom: '0',
        textAlign: 'inherit'
    },
    '.ant-input-group .ant-input:focus,.ant-input-group .ant-input:hover': {
        zIndex: 1,
        borderRightWidth: '1px'
    },
    '.ant-input-search-with-button .ant-input-group .ant-input:hover': {
        zIndex: 0
    },
    '.ant-input-group-addon': {
        padding: '0 11px',
        fontWeight: 400,
        fontSize: '16px',
        textAlign: 'center',
        backgroundColor: 'rgba(1,80,154,.05)',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        transition: 'all .3s'
    },
    '.ant-input-group-addon .ant-select': { margin: '-12.4px -11px' },
    '.ant-input-group-addon .ant-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector': {
        backgroundColor: 'inherit',
        border: '1px solid transparent',
        boxShadow: 'none'
    },
    '.ant-input-group-addon .ant-select-focused .ant-select-selector,.ant-input-group-addon .ant-select-open .ant-select-selector': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-input-group-addon .ant-cascader-picker': {
        margin: '-9px -12px',
        backgroundColor: 'transparent'
    },
    '.ant-input-group-addon .ant-cascader-picker .ant-cascader-input': {
        textAlign: 'left',
        border: '0',
        boxShadow: 'none'
    },
    '.ant-input-group-addon:last-child,.ant-input-group-addon:last-child .ant-select .ant-select-selector,.ant-input-group>.ant-input-affix-wrapper:not(:first-child) .ant-input,.ant-input-group>.ant-input:last-child,.ant-input-group>.ant-input:last-child .ant-select .ant-select-selector': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-input-group .ant-input-affix-wrapper:not(:last-child),.ant-input-group-addon:first-child,.ant-input-group-addon:first-child .ant-select .ant-select-selector,.ant-input-group>.ant-input-affix-wrapper:not(:last-child) .ant-input,.ant-input-group>.ant-input:first-child,.ant-input-group>.ant-input:first-child .ant-select .ant-select-selector': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
    },
    '.ant-input-group-addon:first-child': { borderRight: '0' },
    '.ant-input-group-addon:last-child': { borderLeft: '0' },
    '.ant-input-group-lg .ant-input,.ant-input-group-lg>.ant-input-group-addon': {
        padding: '16.9px 11px',
        fontSize: '18px'
    },
    '.ant-input-group-sm .ant-input,.ant-input-group-sm>.ant-input-group-addon': {
        padding: '2.4px 7px'
    },
    '.ant-input-group-sm .ant-select-single .ant-select-selector': {
        height: '32px'
    },
    '.ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child)': {
        borderTopLeftRadius: '7px',
        borderBottomLeftRadius: '7px'
    },
    '.ant-input-group .ant-input-affix-wrapper:not(:first-child),.ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:first-child)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-input-group.ant-input-group-compact::after,.ant-input-group.ant-input-group-compact::before': {
        display: 'table',
        content: '""'
    },
    '.ant-input-group.ant-input-group-compact::after': { clear: 'both' },
    '.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child),.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child),.ant-input-group.ant-input-group-compact>.ant-input:not(:first-child):not(:last-child)': {
        borderRightWidth: '1px'
    },
    '.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child):focus,.ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child):hover,.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child):focus,.ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child):hover,.ant-input-group.ant-input-group-compact>.ant-input:not(:first-child):not(:last-child):focus,.ant-input-group.ant-input-group-compact>.ant-input:not(:first-child):not(:last-child):hover': {
        zIndex: 1
    },
    '.ant-input-group.ant-input-group-compact>*': {
        display: 'inline-block',
        cssFloat: 'none',
        verticalAlign: 'top',
        borderRadius: '0'
    },
    '.ant-input-group.ant-input-group-compact>.ant-input-affix-wrapper,.ant-input-group.ant-input-group-compact>.ant-picker-range': {
        display: 'inline-flex'
    },
    '.ant-input-group.ant-input-group-compact>:not(:last-child)': {
        marginRight: '-1px',
        borderRightWidth: '1px'
    },
    '.ant-input-group.ant-input-group-compact .ant-input': { cssFloat: 'none' },
    '.ant-input-group.ant-input-group-compact>.ant-cascader-picker .ant-input,.ant-input-group.ant-input-group-compact>.ant-input-group-wrapper .ant-input,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input,.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-selector': {
        borderRightWidth: '1px',
        borderRadius: '0'
    },
    '.ant-input-group.ant-input-group-compact>.ant-cascader-picker .ant-input:focus,.ant-input-group.ant-input-group-compact>.ant-cascader-picker .ant-input:hover,.ant-input-group.ant-input-group-compact>.ant-input-group-wrapper .ant-input:focus,.ant-input-group.ant-input-group-compact>.ant-input-group-wrapper .ant-input:hover,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input:focus,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input:hover,.ant-input-group.ant-input-group-compact>.ant-select-focused,.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-arrow,.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-selector:focus,.ant-input-group.ant-input-group-compact>.ant-select>.ant-select-selector:hover': {
        zIndex: 1
    },
    '.ant-input-group.ant-input-group-compact>.ant-cascader-picker:first-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-select-auto-complete:first-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-select:first-child>.ant-select-selector,.ant-input-group.ant-input-group-compact>:first-child': {
        borderTopLeftRadius: '7px',
        borderBottomLeftRadius: '7px'
    },
    '.ant-input-group.ant-input-group-compact>.ant-cascader-picker-focused:last-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-cascader-picker:last-child .ant-input,.ant-input-group.ant-input-group-compact>.ant-select:last-child>.ant-select-selector,.ant-input-group.ant-input-group-compact>:last-child': {
        borderRightWidth: '1px',
        borderTopRightRadius: '7px',
        borderBottomRightRadius: '7px'
    },
    '.ant-input-group.ant-input-group-compact>.ant-select-auto-complete .ant-input': {
        verticalAlign: 'top'
    },
    '.ant-input-group.ant-input-group-compact .ant-input-group-wrapper+.ant-input-group-wrapper': {
        marginLeft: '-1px'
    },
    '.ant-input-group.ant-input-group-compact .ant-input-group-wrapper+.ant-input-group-wrapper .ant-input-affix-wrapper,.ant-input-group.ant-input-group-compact .ant-input-group-wrapper:not(:last-child).ant-input-search>.ant-input-group>.ant-input-group-addon>.ant-input-search-button': {
        borderRadius: '0'
    },
    '.ant-input-group.ant-input-group-compact .ant-input-group-wrapper:not(:last-child).ant-input-search>.ant-input-group>.ant-input': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-input-group-rtl .ant-input-group-addon:first-child,.ant-input-group>.ant-input-rtl:first-child': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-input-group-rtl.ant-input-group .ant-input-affix-wrapper:not(:first-child),.ant-input-group-rtl.ant-input-group-addon:last-child,.ant-input-group-rtl.ant-input-group>.ant-input:last-child': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-input-group-rtl.ant-input-group .ant-input-affix-wrapper:not(:last-child),.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-cascader-picker:first-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-select-auto-complete:first-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-select:first-child>.ant-select-selector,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>:first-child': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-input-group-rtl.ant-input-group.ant-input-group-compact>:not(:last-child)': {
        marginRight: '0',
        marginLeft: '-1px',
        borderLeftWidth: '1px'
    },
    '.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-cascader-picker-focused:last-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-cascader-picker:last-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-select-auto-complete:last-child .ant-input,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>.ant-select:last-child>.ant-select-selector,.ant-input-group-rtl.ant-input-group.ant-input-group-compact>:last-child': {
        borderLeftWidth: '1px',
        borderRadius: '7px 0 0 7px'
    },
    '.ant-input-group.ant-input-group-compact .ant-input-group-wrapper-rtl+.ant-input-group-wrapper-rtl': {
        marginRight: '-1px',
        marginLeft: '0'
    },
    '.ant-input-group.ant-input-group-compact .ant-input-group-wrapper-rtl:not(:last-child).ant-input-search>.ant-input-group>.ant-input,.ant-input-group>.ant-input-rtl:first-child': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-input-group>.ant-input-rtl:last-child': { borderRadius: '7px 0 0 7px' },
    '.ant-input-group-rtl .ant-input-group-addon:first-child': {
        borderRight: '1px solid var(--border-base-color)',
        borderLeft: '0',
        borderRadius: '0 7px 7px 0'
    },
    '.ant-input-group-rtl .ant-input-group-addon:last-child': {
        borderRight: '0',
        borderLeft: '1px solid var(--border-base-color)',
        borderRadius: '7px 0 0 7px'
    },
    '.ant-input-compact-item.ant-input.ant-input-compact-first-item:not(.ant-input-compact-last-item):not(.ant-input-compact-item-rtl),.ant-input-compact-item.ant-input.ant-input-compact-item-rtl.ant-input-compact-last-item:not(.ant-input-compact-first-item)': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
    },
    '.ant-input-compact-item:not(.ant-input-compact-first-item):not(.ant-input-compact-last-item).ant-input,.ant-input-search .ant-input-affix-wrapper': {
        borderRadius: '0'
    },
    '.ant-input-group-wrapper': {
        display: 'inline-block',
        width: '100%',
        textAlign: 'start',
        verticalAlign: 'top'
    },
    '.ant-input-password-icon.anticon': {
        color: 'rgba(0,0,0,.45)',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-input-password-icon.anticon:hover': { color: 'rgba(0,0,0,.85)' },
    '.ant-input[type=color]': { height: '50px' },
    '.ant-input[type=color].ant-input-lg': { height: '64px' },
    '.ant-input[type=color].ant-input-sm': {
        height: '32px',
        paddingTop: '3px',
        paddingBottom: '3px'
    },
    '.ant-input-textarea-show-count>.ant-input': { height: '100%' },
    '.ant-input-textarea-show-count::after': {
        cssFloat: 'right',
        color: 'rgba(0,0,0,.45)',
        whiteSpace: 'nowrap',
        content: 'attr(data-count)',
        pointerEvents: 'none'
    },
    '.ant-input-textarea-show-count.ant-input-textarea-in-form-item::after': {
        marginBottom: '-22px'
    },
    '.ant-input-textarea-suffix': {
        position: 'absolute',
        top: '0',
        right: '11px',
        bottom: '0',
        zIndex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        margin: 'auto'
    },
    '.ant-input-compact-item:not(.ant-input-compact-last-item):not(.ant-input-compact-item-rtl)': {
        marginRight: '-1px'
    },
    '.ant-input-compact-item:not(.ant-input-compact-last-item).ant-input-compact-item-rtl': {
        marginLeft: '-1px'
    },
    '.ant-input-compact-item:active,.ant-input-compact-item:focus,.ant-input-compact-item:hover': {
        zIndex: 2
    },
    '.ant-input-compact-item[disabled]': { zIndex: 0 },
    '.ant-input-compact-item.ant-input.ant-input-compact-item-rtl.ant-input-compact-first-item:not(.ant-input-compact-last-item),.ant-input-compact-item.ant-input.ant-input-compact-last-item:not(.ant-input-compact-first-item):not(.ant-input-compact-item-rtl)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-input-search .ant-input:focus,.ant-input-search .ant-input:hover': {
        borderColor: 'var(--ant-primary-5)'
    },
    '.ant-input-search .ant-input:focus+.ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary),.ant-input-search .ant-input:hover+.ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary)': {
        borderLeftColor: 'var(--ant-primary-5)'
    },
    '.ant-input-search .ant-input-lg': { lineHeight: 1.5713 },
    '.ant-input-search>.ant-input-group>.ant-input-group-addon:last-child': {
        left: '-1px',
        padding: '0',
        border: '0'
    },
    '.ant-input-search>.ant-input-group>.ant-input-group-addon:last-child .ant-input-search-button': {
        paddingTop: '0',
        paddingBottom: '0',
        borderRadius: '0 7px 7px 0'
    },
    '.ant-input-search>.ant-input-group>.ant-input-group-addon:last-child .ant-input-search-button:not(.ant-btn-primary)': {
        color: 'rgba(0,0,0,.45)'
    },
    '.ant-input-search>.ant-input-group>.ant-input-group-addon:last-child .ant-input-search-button:not(.ant-btn-primary).ant-btn-loading::before': {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
    },
    '.ant-input-search-button': { height: '50px' },
    '.ant-input-number-group-lg .ant-select-single .ant-select-selector,.ant-input-search-large .ant-input-search-button': {
        height: '64px'
    },
    '.ant-input-search-button:focus,.ant-input-search-button:hover': {
        zIndex: 1
    },
    '.ant-input-search-small .ant-input-search-button': { height: '32px' },
    '.ant-input-search.ant-input-compact-item:not(.ant-input-compact-item-rtl):not(.ant-input-compact-last-item) .ant-input-group-addon .ant-input-search-button': {
        marginRight: '-1px',
        borderRadius: '0'
    },
    '.ant-input-search.ant-input-compact-item:not(.ant-input-compact-first-item) .ant-input,.ant-input-search.ant-input-compact-item:not(.ant-input-compact-first-item) .ant-input-affix-wrapper': {
        borderRadius: '0'
    },
    '.ant-input-search.ant-input-compact-item .ant-input-affix-wrapper:active,.ant-input-search.ant-input-compact-item .ant-input-affix-wrapper:focus,.ant-input-search.ant-input-compact-item .ant-input-affix-wrapper:hover,.ant-input-search.ant-input-compact-item>.ant-input-affix-wrapper-focused,.ant-input-search.ant-input-compact-item>.ant-input-group-addon .ant-input-search-button:active,.ant-input-search.ant-input-compact-item>.ant-input-group-addon .ant-input-search-button:focus,.ant-input-search.ant-input-compact-item>.ant-input-group-addon .ant-input-search-button:hover,.ant-input-search.ant-input-compact-item>.ant-input:active,.ant-input-search.ant-input-compact-item>.ant-input:focus,.ant-input-search.ant-input-compact-item>.ant-input:hover': {
        zIndex: 2
    },
    '.ant-input-search.ant-input-compact-item-rtl:not(.ant-input-compact-last-item) .ant-input-group-addon:last-child .ant-input-search-button': {
        marginLeft: '-1px',
        borderRadius: '0'
    },
    '.ant-input-affix-wrapper.ant-input-affix-wrapper-rtl>input.ant-input': {
        border: 'none',
        outline: '0'
    },
    '.ant-input-affix-wrapper-rtl .ant-input-prefix': { margin: '0 0 0 4px' },
    '.ant-input-affix-wrapper-rtl .ant-input-suffix': { margin: '0 4px 0 0' },
    '.ant-input-textarea-rtl.ant-input-textarea-show-count::after': {
        textAlign: 'left'
    },
    '.ant-input-affix-wrapper-rtl .ant-input-clear-icon-has-suffix': {
        marginRight: '0',
        marginLeft: '4px'
    },
    '.ant-input-affix-wrapper-rtl .ant-input-clear-icon': {
        right: 'auto',
        left: '8px'
    },
    '.ant-input-search-rtl .ant-input:focus+.ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary),.ant-input-search-rtl .ant-input:hover+.ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary)': {
        borderLeftColor: 'var(--border-base-color)'
    },
    '.ant-input-search-rtl .ant-input:focus+.ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary):hover,.ant-input-search-rtl .ant-input:hover+.ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary):hover': {
        borderLeftColor: 'var(--ant-primary-5)'
    },
    '.ant-input-search-rtl>.ant-input-group>.ant-input-affix-wrapper-focused,.ant-input-search-rtl>.ant-input-group>.ant-input-affix-wrapper:hover': {
        borderRightColor: 'var(--ant-primary-5)'
    },
    '.ant-input-search-rtl>.ant-input-group>.ant-input-group-addon:last-child': {
        right: '-1px',
        left: 'auto'
    },
    '.ant-input-search-rtl>.ant-input-group>.ant-input-group-addon:last-child .ant-input-search-button': {
        borderRadius: '7px 0 0 7px'
    },
    '@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none)': [
        {
        '.ant-input': { height: '50px' },
        '.ant-input-lg': { height: '64px' },
        '.ant-input-sm': { height: '32px' },
        '.ant-input-affix-wrapper>input.ant-input': { height: 'auto' }
        },
        {
        '.ant-popover-inner': {
            boxShadow:
            '0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)'
        }
        }
    ],
    '.ant-mentions,textarea.ant-input-number,textarea.ant-input-number-affix-wrapper,textarea.ant-mentions': {
        height: 'auto',
        verticalAlign: 'bottom'
    },
    '.ant-input-number-affix-wrapper': {
        minWidth: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        lineHeight: 1.5715,
        backgroundColor: 'var(--background-color)',
        backgroundImage: 'none',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        transition: 'all .3s',
        position: 'relative',
        display: 'inline-flex',
        width: '90px',
        padding: '0',
        paddingInlineStart: '11px'
    },
    '.ant-input-number-affix-wrapper::placeholder': {
        color: 'var(--input-placeholder-color)',
        userSelect: 'none'
    },
    '.ant-input-number-affix-wrapper-disabled,.ant-input-number-affix-wrapper[disabled]': {
        color: 'var(--disabled-color)',
        backgroundColor: 'var(--disabled-bg-color)',
        opacity: 1,
        cursor: 'not-allowed'
    },
    '.ant-input-number-affix-wrapper:placeholder-shown': {
        textOverflow: 'ellipsis'
    },
    '.ant-input-number-affix-wrapper:hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-rtl .ant-input-number-affix-wrapper:hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-number-affix-wrapper-focused,.ant-input-number-affix-wrapper:focus': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0',
        zIndex: 1
    },
    '.ant-input-rtl .ant-input-number-affix-wrapper-focused,.ant-input-rtl .ant-input-number-affix-wrapper:focus': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-number-affix-wrapper-disabled:hover,.ant-input-number-affix-wrapper[disabled]:hover': {
        borderColor: 'var(--border-base-color)',
        borderRightWidth: '1px'
    },
    '.ant-input-number-affix-wrapper-disabled': {
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none'
    },
    '.ant-input-number-affix-wrapper[disabled]': {
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none'
    },
    '.ant-input-number-affix-wrapper-borderless,.ant-input-number-affix-wrapper-borderless-disabled,.ant-input-number-affix-wrapper-borderless-focused,.ant-input-number-affix-wrapper-borderless:focus,.ant-input-number-affix-wrapper-borderless:hover,.ant-input-number-affix-wrapper-borderless[disabled]': {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none'
    },
    'textarea.ant-input-number-affix-wrapper': {
        maxWidth: '100%',
        minHeight: '50px',
        lineHeight: 1.5715,
        transition: 'all .3s,height 0s'
    },
    '.ant-input-number-affix-wrapper-lg': {
        padding: '16.9px 11px',
        fontSize: '18px'
    },
    '.ant-input-number-affix-wrapper-sm': { padding: '2.4px 7px' },
    '.ant-input-number-affix-wrapper:not(.ant-input-number-affix-wrapper-disabled):hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px',
        zIndex: 1
    },
    '.ant-input-number-affix-wrapper .ant-input-number-handler-wrap,.ant-input-number-compact-item.ant-input-number-focused,.ant-input-number-compact-item:active,.ant-input-number-compact-item:focus,.ant-input-number-compact-item:hover': {
        zIndex: 2
    },
    '.ant-input-rtl .ant-input-number-affix-wrapper:not(.ant-input-number-affix-wrapper-disabled):hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-number-affix-wrapper-disabled .ant-input-number[disabled]': {
        background: '0 0'
    },
    '.ant-input-number,.ant-mentions,.ant-mentions-dropdown': {
        backgroundColor: 'var(--background-color)'
    },
    '.ant-input-number-affix-wrapper>div.ant-input-number': {
        width: '100%',
        border: 'none',
        outline: '0'
    },
    '.ant-input-number-affix-wrapper>div.ant-input-number.ant-input-number-focused': {
        boxShadow: 'none !important' as any
    },
    '.ant-input-number-affix-wrapper input.ant-input-number-input': {
        padding: '0'
    },
    '.ant-input-number-affix-wrapper::before': {
        width: '0',
        visibility: 'hidden',
        content: '"\\a0"'
    },
    '.ant-input-number-prefix,.ant-input-number-suffix': {
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        pointerEvents: 'none'
    },
    '.ant-input-number-suffix': {
        position: 'absolute',
        top: '0',
        right: '0',
        zIndex: 1,
        height: '100%',
        marginRight: '11px',
        marginLeft: '4px'
    },
    '.ant-input-number,.ant-input-number-group': {
        padding: '0',
        lineHeight: 1.5715,
        margin: '0',
        listStyle: 'none',
        fontVariant: 'tabular-nums',
        fontFeatureSettings: '"tnum"',
        boxSizing: 'border-box'
    },
    '.ant-input-number-group-wrapper .ant-input-number-affix-wrapper': {
        width: '100%'
    },
    '.ant-input-number-status-error:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number,.ant-input-number-status-error:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number:hover': {
        background: 'var(--background-color)',
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-input-number-status-error:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number-focused,.ant-input-number-status-error:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number:focus': {
        borderColor: 'var(--ant-error-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-error-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-number-status-error .ant-input-number-prefix': {
        color: 'var(--ant-error-color)'
    },
    '.ant-input-number-status-warning:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number,.ant-input-number-status-warning:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number:hover': {
        background: 'var(--background-color)',
        borderColor: 'var(--ant-warning-color)'
    },
    '.ant-input-number-status-warning:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number-focused,.ant-input-number-status-warning:not(.ant-input-number-disabled):not(.ant-input-number-borderless).ant-input-number:focus': {
        borderColor: 'var(--ant-warning-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-warning-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-number-status-warning .ant-input-number-prefix': {
        color: 'var(--ant-warning-color)'
    },
    '.ant-input-number-affix-wrapper-status-error:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper,.ant-input-number-affix-wrapper-status-error:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover': {
        background: 'var(--background-color)',
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-input-number-affix-wrapper-status-error:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper-focused,.ant-input-number-affix-wrapper-status-error:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:focus': {
        borderColor: 'var(--ant-error-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-error-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-number-affix-wrapper-status-error .ant-input-number-prefix': {
        color: 'var(--ant-error-color)'
    },
    '.ant-input-number-affix-wrapper-status-warning:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper,.ant-input-number-affix-wrapper-status-warning:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover': {
        background: 'var(--background-color)',
        borderColor: 'var(--ant-warning-color)'
    },
    '.ant-input-number-affix-wrapper-status-warning:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper-focused,.ant-input-number-affix-wrapper-status-warning:not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:focus': {
        borderColor: 'var(--ant-warning-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-warning-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-number-affix-wrapper-status-warning .ant-input-number-prefix': {
        color: 'var(--ant-warning-color)'
    },
    '.ant-input-number-group-wrapper-status-error .ant-input-number-group-addon': {
        color: 'var(--ant-error-color)',
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-input-number-group-wrapper-status-warning .ant-input-number-group-addon': {
        color: 'var(--ant-warning-color)',
        borderColor: 'var(--ant-warning-color)'
    },
    '.ant-input-number': {
        position: 'relative',
        minWidth: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        backgroundImage: 'none',
        transition: 'all .3s',
        display: 'inline-block',
        width: '90px',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px'
    },
    '.ant-input-number::placeholder': {
        color: 'var(--input-placeholder-color)',
        userSelect: 'none'
    },
    '.ant-input-number:placeholder-shown': { textOverflow: 'ellipsis' },
    '.ant-input-rtl .ant-input-number:hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-number-focused,.ant-input-number:focus': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-rtl .ant-input-number-focused,.ant-input-rtl .ant-input-number:focus': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-number[disabled]': {
        color: 'var(--disabled-color)',
        backgroundColor: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none',
        cursor: 'not-allowed',
        opacity: 1
    },
    '.ant-input-number-group,.ant-input-number-group-addon': {
        color: 'var(--text-main-color)',
        fontSize: '16px',
        position: 'relative'
    },
    '.ant-input-number[disabled]:hover': {
        borderColor: 'var(--border-base-color)',
        borderRightWidth: '1px'
    },
    '.ant-input-number-borderless,.ant-input-number-borderless-disabled,.ant-input-number-borderless-focused,.ant-input-number-borderless:focus,.ant-input-number-borderless:hover,.ant-input-number-borderless[disabled]': {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none'
    },
    'textarea.ant-input-number': {
        maxWidth: '100%',
        minHeight: '50px',
        lineHeight: 1.5715,
        transition: 'all .3s,height 0s'
    },
    '.ant-input-number-group': {
        display: 'table',
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: '0'
    },
    '.ant-input-number-group[class*=col-]': {
        cssFloat: 'none',
        paddingRight: '0',
        paddingLeft: '0'
    },
    '.ant-input-number-group>[class*=col-],span.ant-radio+*': {
        paddingRight: '8px'
    },
    '.ant-input-number-group>[class*=col-]:last-child': { paddingRight: '0' },
    '.ant-input-number-group-addon,.ant-input-number-group-wrap,.ant-input-number-group>.ant-input-number': {
        display: 'table-cell'
    },
    '.ant-input-number-group-addon:not(:first-child):not(:last-child),.ant-input-number-group-wrap:not(:first-child):not(:last-child),.ant-input-number-group>.ant-input-number:not(:first-child):not(:last-child)': {
        borderRadius: '0'
    },
    '.ant-input-number-group-addon,.ant-input-number-group-wrap': {
        width: '1px',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle'
    },
    '.ant-input-number-group-wrap>*': { display: 'block !important' as any },
    '.ant-input-number-group .ant-input-number': {
        cssFloat: 'left',
        width: '100%',
        marginBottom: '0',
        textAlign: 'inherit'
    },
    '.ant-input-number-group .ant-input-number:focus,.ant-input-number-group .ant-input-number:hover': {
        zIndex: 1,
        borderRightWidth: '1px'
    },
    '.ant-input-search-with-button .ant-input-number-group .ant-input-number:hover': {
        zIndex: 0
    },
    '.ant-input-number-group.ant-input-number-group-compact-addon:not(:first-child):not(:last-child):focus,.ant-input-number-group.ant-input-number-group-compact-addon:not(:first-child):not(:last-child):hover,.ant-input-number-group.ant-input-number-group-compact-wrap:not(:first-child):not(:last-child):focus,.ant-input-number-group.ant-input-number-group-compact-wrap:not(:first-child):not(:last-child):hover,.ant-input-number-group.ant-input-number-group-compact>.ant-cascader-picker .ant-input:focus,.ant-input-number-group.ant-input-number-group-compact>.ant-cascader-picker .ant-input:hover,.ant-input-number-group.ant-input-number-group-compact>.ant-input-group-wrapper .ant-input:focus,.ant-input-number-group.ant-input-number-group-compact>.ant-input-group-wrapper .ant-input:hover,.ant-input-number-group.ant-input-number-group-compact>.ant-input-number:not(:first-child):not(:last-child):focus,.ant-input-number-group.ant-input-number-group-compact>.ant-input-number:not(:first-child):not(:last-child):hover,.ant-input-number-group.ant-input-number-group-compact>.ant-select-auto-complete .ant-input:focus,.ant-input-number-group.ant-input-number-group-compact>.ant-select-auto-complete .ant-input:hover,.ant-input-number-group.ant-input-number-group-compact>.ant-select-focused,.ant-input-number-group.ant-input-number-group-compact>.ant-select>.ant-select-arrow,.ant-input-number-group.ant-input-number-group-compact>.ant-select>.ant-select-selector:focus,.ant-input-number-group.ant-input-number-group-compact>.ant-select>.ant-select-selector:hover': {
        zIndex: 1
    },
    '.ant-input-number-group-addon': {
        padding: '0 11px',
        fontWeight: 400,
        textAlign: 'center',
        backgroundColor: 'rgba(1,80,154,.05)',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        transition: 'all .3s'
    },
    '.ant-input-number-group-addon .ant-select': { margin: '-12.4px -11px' },
    '.ant-input-number-group-addon .ant-select.ant-select-single:not(.ant-select-customize-input) .ant-select-selector': {
        backgroundColor: 'inherit',
        border: '1px solid transparent',
        boxShadow: 'none'
    },
    '.ant-input-number-group-addon .ant-select-focused .ant-select-selector,.ant-input-number-group-addon .ant-select-open .ant-select-selector': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-input-number-group-addon .ant-cascader-picker': {
        margin: '-9px -12px',
        backgroundColor: 'transparent'
    },
    '.ant-input-number-group-addon .ant-cascader-picker .ant-cascader-input': {
        textAlign: 'left',
        border: '0',
        boxShadow: 'none'
    },
    '.ant-input-number-group-addon:last-child,.ant-input-number-group-addon:last-child .ant-select .ant-select-selector,.ant-input-number-group>.ant-input-number-affix-wrapper:not(:first-child) .ant-input-number,.ant-input-number-group>.ant-input-number:last-child,.ant-input-number-group>.ant-input-number:last-child .ant-select .ant-select-selector': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-input-number-group .ant-input-number-affix-wrapper:not(:last-child),.ant-input-number-group-addon:first-child,.ant-input-number-group-addon:first-child .ant-select .ant-select-selector,.ant-input-number-group>.ant-input-number-affix-wrapper:not(:last-child) .ant-input-number,.ant-input-number-group>.ant-input-number:first-child,.ant-input-number-group>.ant-input-number:first-child .ant-select .ant-select-selector': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
    },
    '.ant-input-number-group-addon:first-child': { borderRight: '0' },
    '.ant-input-number-group-addon:last-child': { borderLeft: '0' },
    '.ant-input-number-group-lg .ant-input-number,.ant-input-number-group-lg>.ant-input-number-group-addon': {
        padding: '16.9px 11px',
        fontSize: '18px'
    },
    '.ant-input-number-group-sm .ant-input-number,.ant-input-number-group-sm>.ant-input-number-group-addon': {
        padding: '2.4px 7px'
    },
    '.ant-input-number-group-sm .ant-select-single .ant-select-selector': {
        height: '32px'
    },
    '.ant-input-search .ant-input-number-group .ant-input-number-affix-wrapper:not(:last-child)': {
        borderTopLeftRadius: '7px',
        borderBottomLeftRadius: '7px'
    },
    '.ant-input-number-group .ant-input-number-affix-wrapper:not(:first-child),.ant-input-search .ant-input-number-group .ant-input-number-affix-wrapper:not(:first-child)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-input-number-group.ant-input-number-group-compact::before': {
        display: 'table',
        content: '""'
    },
    '.ant-input-number-group.ant-input-number-group-compact::after': {
        display: 'table',
        clear: 'both',
        content: '""'
    },
    '.ant-input-number-group.ant-input-number-group-compact-addon:not(:first-child):not(:last-child),.ant-input-number-group.ant-input-number-group-compact-wrap:not(:first-child):not(:last-child),.ant-input-number-group.ant-input-number-group-compact>.ant-input-number:not(:first-child):not(:last-child)': {
        borderRightWidth: '1px'
    },
    '.ant-input-number-group.ant-input-number-group-compact>*': {
        display: 'inline-block',
        cssFloat: 'none',
        verticalAlign: 'top',
        borderRadius: '0'
    },
    '.ant-input-number-group.ant-input-number-group-compact>.ant-input-number-affix-wrapper,.ant-input-number-group.ant-input-number-group-compact>.ant-picker-range': {
        display: 'inline-flex'
    },
    '.ant-input-number-group.ant-input-number-group-compact>:not(:last-child)': {
        marginRight: '-1px',
        borderRightWidth: '1px'
    },
    '.ant-input-number-group.ant-input-number-group-compact .ant-input-number': {
        cssFloat: 'none'
    },
    '.ant-input-number-group.ant-input-number-group-compact>.ant-cascader-picker .ant-input,.ant-input-number-group.ant-input-number-group-compact>.ant-input-group-wrapper .ant-input,.ant-input-number-group.ant-input-number-group-compact>.ant-select-auto-complete .ant-input,.ant-input-number-group.ant-input-number-group-compact>.ant-select>.ant-select-selector': {
        borderRightWidth: '1px',
        borderRadius: '0'
    },
    '.ant-input-number-group.ant-input-number-group-compact>.ant-cascader-picker:first-child .ant-input,.ant-input-number-group.ant-input-number-group-compact>.ant-select-auto-complete:first-child .ant-input,.ant-input-number-group.ant-input-number-group-compact>.ant-select:first-child>.ant-select-selector,.ant-input-number-group.ant-input-number-group-compact>:first-child': {
        borderTopLeftRadius: '7px',
        borderBottomLeftRadius: '7px'
    },
    '.ant-input-number-group.ant-input-number-group-compact>.ant-cascader-picker-focused:last-child .ant-input,.ant-input-number-group.ant-input-number-group-compact>.ant-cascader-picker:last-child .ant-input,.ant-input-number-group.ant-input-number-group-compact>.ant-select:last-child>.ant-select-selector,.ant-input-number-group.ant-input-number-group-compact>:last-child': {
        borderRightWidth: '1px',
        borderTopRightRadius: '7px',
        borderBottomRightRadius: '7px'
    },
    '.ant-input-number-group.ant-input-number-group-compact>.ant-select-auto-complete .ant-input': {
        verticalAlign: 'top'
    },
    '.ant-input-number-group.ant-input-number-group-compact .ant-input-group-wrapper+.ant-input-group-wrapper': {
        marginLeft: '-1px'
    },
    '.ant-input-number-group.ant-input-number-group-compact .ant-input-group-wrapper+.ant-input-group-wrapper .ant-input-affix-wrapper,.ant-input-number-group.ant-input-number-group-compact .ant-input-group-wrapper:not(:last-child).ant-input-search>.ant-input-group>.ant-input-group-addon>.ant-input-search-button': {
        borderRadius: '0'
    },
    '.ant-input-number-group.ant-input-number-group-compact .ant-input-group-wrapper:not(:last-child).ant-input-search>.ant-input-group>.ant-input': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-input-number-group-rtl .ant-input-number-group-addon:first-child,.ant-input-number-group>.ant-input-number-rtl:first-child': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-input-number-group-rtl.ant-input-number-group .ant-input-number-affix-wrapper:not(:first-child),.ant-input-number-group-rtl.ant-input-number-group-addon:last-child,.ant-input-number-group-rtl.ant-input-number-group>.ant-input-number:last-child': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-input-number-group-rtl.ant-input-number-group .ant-input-number-affix-wrapper:not(:last-child),.ant-input-number-group-rtl.ant-input-number-group.ant-input-number-group-compact>.ant-cascader-picker:first-child .ant-input,.ant-input-number-group-rtl.ant-input-number-group.ant-input-number-group-compact>.ant-select-auto-complete:first-child .ant-input,.ant-input-number-group-rtl.ant-input-number-group.ant-input-number-group-compact>.ant-select:first-child>.ant-select-selector,.ant-input-number-group-rtl.ant-input-number-group.ant-input-number-group-compact>:first-child': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-input-number-group-rtl.ant-input-number-group.ant-input-number-group-compact>:not(:last-child)': {
        marginRight: '0',
        marginLeft: '-1px',
        borderLeftWidth: '1px'
    },
    '.ant-input-number-group-rtl.ant-input-number-group.ant-input-number-group-compact>.ant-cascader-picker-focused:last-child .ant-input,.ant-input-number-group-rtl.ant-input-number-group.ant-input-number-group-compact>.ant-cascader-picker:last-child .ant-input,.ant-input-number-group-rtl.ant-input-number-group.ant-input-number-group-compact>.ant-select-auto-complete:last-child .ant-input,.ant-input-number-group-rtl.ant-input-number-group.ant-input-number-group-compact>.ant-select:last-child>.ant-select-selector,.ant-input-number-group-rtl.ant-input-number-group.ant-input-number-group-compact>:last-child': {
        borderLeftWidth: '1px',
        borderRadius: '7px 0 0 7px'
    },
    '.ant-input-number-group.ant-input-number-group-compact .ant-input-group-wrapper-rtl+.ant-input-group-wrapper-rtl': {
        marginRight: '-1px',
        marginLeft: '0'
    },
    '.ant-input-number-group.ant-input-number-group-compact .ant-input-group-wrapper-rtl:not(:last-child).ant-input-search>.ant-input-group>.ant-input,.ant-input-number-group>.ant-input-number-rtl:first-child': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-input-number-group>.ant-input-number-rtl:last-child': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-input-number-group-rtl .ant-input-number-group-addon:first-child': {
        borderRight: '1px solid var(--border-base-color)',
        borderLeft: '0',
        borderRadius: '0 7px 7px 0'
    },
    '.ant-input-number-group-rtl .ant-input-number-group-addon:last-child': {
        borderRight: '0',
        borderLeft: '1px solid var(--border-base-color)',
        borderRadius: '7px 0 0 7px'
    },
    '.ant-input-number-group-wrapper': {
        display: 'inline-block',
        textAlign: 'start',
        verticalAlign: 'top'
    },
    '.ant-input-number-handler': {
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '50%',
        overflow: 'hidden',
        color: 'rgba(0,0,0,.45)',
        fontWeight: 700,
        lineHeight: 0,
        textAlign: 'center',
        borderLeft: '1px solid var(--border-base-color)',
        transition: 'all .1s linear'
    },
    '.ant-input-number-handler:active': { background: '#f4f4f4' },
    '.ant-input-number-handler:hover .ant-input-number-handler-down-inner,.ant-input-number-handler:hover .ant-input-number-handler-up-inner': {
        color: 'var(--ant-primary-5)'
    },
    '.ant-input-number-handler-down-inner,.ant-input-number-handler-up-inner': {
        display: 'inline-block',
        color: ['inherit', 'rgba(0,0,0,.45)'],
        fontStyle: 'normal',
        textTransform: 'none',
        verticalAlign: '-.125em',
        position: 'absolute',
        right: '4px',
        width: '12px',
        height: '12px',
        lineHeight: '12px',
        transition: 'all .1s linear',
        userSelect: 'none'
    },
    '.ant-input-number-handler-down-inner>*,.ant-input-number-handler-up-inner>*': {
        lineHeight: 1
    },
    '.ant-input-number-handler-down-inner svg,.ant-input-number-handler-up-inner svg': {
        display: 'inline-block'
    },
    '.ant-input-number-handler-down-inner::before,.ant-input-number-handler-up-inner::before': {
        display: 'none'
    },
    '.ant-input-number-handler-down-inner .ant-input-number-handler-down-inner-icon,.ant-input-number-handler-down-inner .ant-input-number-handler-up-inner-icon,.ant-input-number-handler-up-inner .ant-input-number-handler-down-inner-icon,.ant-input-number-handler-up-inner .ant-input-number-handler-up-inner-icon': {
        display: 'block'
    },
    '.ant-input-number:hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-number:hover+.ant-form-item-children-icon': {
        opacity: 0,
        transition: 'opacity .24s linear .24s'
    },
    '.ant-input-number-focused': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-rtl .ant-input-number-focused': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-input-number-disabled': {
        color: 'var(--disabled-color)',
        backgroundColor: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none',
        cursor: 'not-allowed',
        opacity: 1
    },
    '.ant-input-number-disabled:hover': {
        borderColor: 'var(--border-base-color)',
        borderRightWidth: '1px'
    },
    '.ant-input-number-disabled .ant-input-number-input': {
        cursor: 'not-allowed'
    },
    '.ant-input-number-disabled .ant-input-number-handler-wrap,.ant-input-number-readonly .ant-input-number-handler-wrap': {
        display: 'none'
    },
    '.ant-input-number-input': {
        width: '100%',
        height: '48px',
        padding: '0 11px',
        textAlign: 'left',
        backgroundColor: 'transparent',
        border: '0',
        borderRadius: '7px',
        outline: '0',
        transition: 'all .3s linear',
        appearance: 'textfield !important' as any
    },
    '.ant-input-number-input::placeholder': {
        color: 'var(--input-placeholder-color)',
        userSelect: 'none'
    },
    '.ant-input-number-input:placeholder-shown': { textOverflow: 'ellipsis' },
    '.ant-input-number-input[type=number]::-webkit-inner-spin-button,.ant-input-number-input[type=number]::-webkit-outer-spin-button': {
        margin: '0',
        WebkitAppearance: 'none',
        appearance: 'none'
    },
    '.ant-input-number-lg': { padding: '0', fontSize: '18px' },
    '.ant-input-number-lg input': { height: '62px' },
    '.ant-input-number-sm': { padding: '0' },
    '.ant-input-number-sm input': { height: '30px', padding: '0 7px' },
    '.ant-input-number-handler-wrap': {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '22px',
        height: '100%',
        background: 'var(--background-color)',
        borderRadius: '0 7px 7px 0',
        opacity: 0,
        transition: 'opacity .24s linear .1s'
    },
    '.ant-input-number-handler-wrap .ant-input-number-handler .ant-input-number-handler-down-inner,.ant-input-number-handler-wrap .ant-input-number-handler .ant-input-number-handler-up-inner': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 'auto',
        marginRight: '0',
        fontSize: '7px'
    },
    '.ant-input-number-compact-item:not(.ant-input-number-compact-last-item):not(.ant-input-number-compact-item-rtl),.ant-select-compact-item:not(.ant-select-compact-last-item)': {
        marginRight: '-1px'
    },
    '.ant-input-number-borderless .ant-input-number-handler-wrap': {
        borderLeftWidth: '0'
    },
    '.ant-input-number-handler-wrap:hover .ant-input-number-handler': {
        height: '40%'
    },
    '.ant-input-number-handler-down:hover,.ant-input-number-handler-up:hover': {
        height: '60% !important' as any
    },
    '.ant-input-number-focused .ant-input-number-handler-wrap,.ant-input-number:hover .ant-input-number-handler-wrap': {
        opacity: 1
    },
    '.ant-input-number-handler-up': {
        borderTopRightRadius: '7px',
        cursor: 'pointer'
    },
    '.ant-input-number-compact-item.ant-input-number.ant-input-number-compact-first-item:not(.ant-input-number-compact-last-item):not(.ant-input-number-compact-item-rtl),.ant-input-number-compact-item.ant-input-number.ant-input-number-compact-item-rtl.ant-input-number-compact-last-item:not(.ant-input-number-compact-first-item)': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
    },
    '.ant-input-number-handler-up-inner': {
        top: '50%',
        marginTop: '-5px',
        textAlign: 'center'
    },
    '.ant-input-number-handler-down': {
        top: '0',
        borderTop: '1px solid var(--border-base-color)',
        borderBottomRightRadius: '7px',
        cursor: 'pointer'
    },
    '.ant-input-number-handler-down-inner': {
        top: '50%',
        textAlign: 'center',
        transform: 'translateY(-50%)'
    },
    '.ant-input-number-borderless .ant-input-number-handler-down': {
        borderTopWidth: '0'
    },
    '.ant-input-number-focused:not(.ant-input-number-borderless) .ant-input-number-handler-down,.ant-input-number:hover:not(.ant-input-number-borderless) .ant-input-number-handler-down': {
        borderTop: '1px solid var(--border-base-color)'
    },
    '.ant-input-number-handler-down-disabled,.ant-input-number-handler-up-disabled': {
        cursor: 'not-allowed'
    },
    '.ant-input-number-handler-down-disabled:hover .ant-input-number-handler-down-inner,.ant-input-number-handler-up-disabled:hover .ant-input-number-handler-up-inner': {
        color: 'rgba(0,0,0,.25)'
    },
    '.ant-input-number-borderless': { boxShadow: 'none' },
    '.ant-input-number-out-of-range input': { color: 'var(--ant-error-color)' },
    '.ant-input-number-compact-item:not(.ant-input-number-compact-last-item).ant-input-number-compact-item-rtl': {
        marginLeft: '-1px'
    },
    '.ant-input-number-compact-item[disabled]': { zIndex: 0 },
    '.ant-input-number-compact-item:not(.ant-input-number-compact-first-item):not(.ant-input-number-compact-last-item).ant-input-number': {
        borderRadius: '0'
    },
    '.ant-input-number-compact-item.ant-input-number.ant-input-number-compact-item-rtl.ant-input-number-compact-first-item:not(.ant-input-number-compact-last-item),.ant-input-number-compact-item.ant-input-number.ant-input-number-compact-last-item:not(.ant-input-number-compact-first-item):not(.ant-input-number-compact-item-rtl)': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-input-number-rtl .ant-input-number-handler': {
        borderRight: '1px solid var(--border-base-color)',
        borderLeft: '0'
    },
    '.ant-input-number-rtl .ant-input-number-handler-wrap': {
        right: 'auto',
        left: '0'
    },
    '.ant-input-number-rtl.ant-input-number-borderless .ant-input-number-handler-wrap': {
        borderRightWidth: '0'
    },
    '.ant-input-number-rtl .ant-input-number-handler-up': {
        borderTopRightRadius: '0'
    },
    '.ant-input-number-rtl .ant-input-number-handler-down': {
        borderBottomRightRadius: '0'
    },
    '.ant-input-number-rtl .ant-input-number-input': {
        direction: 'ltr',
        textAlign: 'right'
    },
    '.ant-layout-rtl,.ant-list-rtl,.ant-list-rtl .ReactVirtualized__List .ant-list-item,.ant-mentions-rtl,.ant-menu.ant-menu-rtl,.ant-message-rtl,.ant-message-rtl span,.ant-modal-wrap-rtl,.ant-modal-wrap-rtl .ant-modal-confirm-body,.ant-notification-rtl,.ant-page-header-rtl,.ant-pagination-options-quick-jumper input-rtl,.ant-popover-rtl,.ant-progress-rtl,.ant-radio-group.ant-radio-group-rtl,.ant-radio-wrapper.ant-radio-wrapper-rtl,.ant-rate-rtl,.ant-result-rtl,.ant-segmented.ant-segmented-rtl,.ant-select-dropdown-rtl,.ant-select-rtl,.ant-skeleton-rtl,.ant-slider-rtl,.ant-space-compact-rtl,.ant-space-rtl,.ant-spin-rtl': {
        direction: 'rtl'
    },
    '.ant-layout': {
        display: 'flex',
        flex: 'auto',
        flexDirection: 'column',
        minHeight: '0',
        background: 'var(--layout-body-bg-color)'
    },
    '.ant-layout,.ant-layout *': { boxSizing: 'border-box' },
    '.ant-layout.ant-layout-has-sider': { flexDirection: 'row' },
    '.ant-layout.ant-layout-has-sider>.ant-layout,.ant-layout.ant-layout-has-sider>.ant-layout-content': {
        width: '0'
    },
    '.ant-layout-footer,.ant-layout-header': { flex: '0 0 auto' },
    '.ant-layout-header': {
        height: '4.25rem',
        padding: '1rem',
        color: 'var(--text-main-color)',
        lineHeight: '4.25rem',
        background: 'var(--layout-header-bg-color)'
    },
    '.ant-layout-footer': {
        padding: '24px 50px',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        background: 'var(--layout-body-bg-color)'
    },
    '.ant-layout-content': { flex: 'auto', minHeight: '0' },
    '.ant-layout-sider': {
        position: 'relative',
        minWidth: '0',
        background: 'var(--layout-sider-bg-color)',
        transition: 'all .2s'
    },
    '.ant-layout-sider-children': {
        height: '100%',
        marginTop: '-.1px',
        paddingTop: '.1px'
    },
    '.ant-layout-sider-children .ant-menu.ant-menu-inline-collapsed': {
        width: 'auto'
    },
    '.ant-layout-sider-has-trigger': { paddingBottom: '48px' },
    '.ant-layout-sider-trigger': {
        position: 'fixed',
        bottom: '0',
        zIndex: 1,
        height: '48px',
        color: '#fff',
        lineHeight: '48px',
        textAlign: 'center',
        background: '#002140',
        cursor: 'pointer',
        transition: 'all .2s'
    },
    '.ant-layout-sider-zero-width>*': { overflow: 'hidden' },
    '.ant-layout-sider-zero-width-trigger': {
        position: 'absolute',
        top: '4.25rem',
        right: '-36px',
        zIndex: 1,
        width: '36px',
        height: '42px',
        color: '#fff',
        fontSize: '18px',
        lineHeight: '42px',
        textAlign: 'center',
        background: 'var(--layout-sider-bg-color)',
        borderRadius: '0 7px 7px 0',
        cursor: 'pointer',
        transition: 'background .3s ease'
    },
    '.ant-layout-sider-zero-width-trigger::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '0 0',
        transition: 'all .3s',
        content: '""'
    },
    '.ant-layout-sider-zero-width-trigger:hover::after': {
        background: 'rgba(255,255,255,.1)'
    },
    '.ant-layout-sider-zero-width-trigger-right': {
        left: '-36px',
        borderRadius: '7px 0 0 7px'
    },
    '.ant-layout-sider-light': { background: '#fff' },
    '.ant-layout-sider-light .ant-layout-sider-trigger,.ant-layout-sider-light .ant-layout-sider-zero-width-trigger': {
        color: 'var(--text-main-color)',
        background: '#fff'
    },
    '.ant-list': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'relative'
    },
    '.ant-list *': { outline: '0' },
    '.ant-list-pagination': { marginTop: '24px', textAlign: 'right' },
    '.ant-list-pagination .ant-pagination-options': { textAlign: 'left' },
    '.ant-list-more': { marginTop: '12px', textAlign: 'center' },
    '.ant-list-more button': { paddingRight: '32px', paddingLeft: '32px' },
    '.ant-list-spin': { minHeight: '40px', textAlign: 'center' },
    '.ant-list-empty-text': {
        padding: '16px',
        color: 'rgba(0,0,0,.25)',
        fontSize: '16px',
        textAlign: 'center'
    },
    '.ant-list-items': { margin: '0', padding: '0', listStyle: 'none' },
    '.ant-list-item': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0',
        color: 'var(--text-main-color)'
    },
    '.ant-list-item-meta': {
        display: 'flex',
        flex: 1,
        alignItems: 'flex-start',
        maxWidth: '100%'
    },
    '.ant-list-item-meta-avatar': { marginRight: '16px' },
    '.ant-list-item-meta-content': {
        flex: '1 0',
        width: '0',
        color: 'var(--text-main-color)'
    },
    '.ant-list-item-meta-title': {
        marginBottom: '4px',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        lineHeight: 1.5715
    },
    '.ant-list-item-meta-title>a': {
        color: 'var(--text-main-color)',
        transition: 'all .3s'
    },
    '.ant-list-item-meta-title>a:hover': { color: 'var(--ant-primary-color)' },
    '.ant-list-item-meta-description': {
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px',
        lineHeight: 1.5715
    },
    '.ant-list-item-action': {
        flex: '0 0 auto',
        marginLeft: '48px',
        padding: '0',
        fontSize: '0',
        listStyle: 'none'
    },
    '.ant-list-item-action>li': {
        position: 'relative',
        display: 'inline-block',
        padding: '0 8px',
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px',
        lineHeight: 1.5715,
        textAlign: 'center'
    },
    '.ant-list-item-action>li:first-child': { paddingLeft: '0' },
    '.ant-list-item-action-split': {
        position: 'absolute',
        top: '50%',
        right: '0',
        width: '1px',
        height: '14px',
        marginTop: '-7px',
        backgroundColor: '#f0f0f0'
    },
    '.ant-list-footer,.ant-list-header': {
        background: '0 0',
        paddingTop: '12px',
        paddingBottom: '12px'
    },
    '.ant-list-empty': {
        padding: '16px 0',
        color: 'rgba(0,0,0,.45)',
        fontSize: '12px',
        textAlign: 'center'
    },
    '.ant-list-split .ant-list-item:last-child': { borderBottom: 'none' },
    '.ant-list-split .ant-list-header,.ant-list-split.ant-list-something-after-last-item .ant-spin-container>.ant-list-items>.ant-list-item:last-child': {
        borderBottom: '1px solid #f0f0f0'
    },
    '.ant-list-loading .ant-list-spin-nested-loading': { minHeight: '32px' },
    '.ant-list-lg .ant-list-item': { padding: '16px 24px' },
    '.ant-list-sm .ant-list-item': { padding: '8px 16px' },
    '.ant-list-vertical .ant-list-item': { alignItems: 'initial' },
    '.ant-list-vertical .ant-list-item-main': { display: 'block', flex: 1 },
    '.ant-list-vertical .ant-list-item-extra': { marginLeft: '40px' },
    '.ant-list-vertical .ant-list-item-meta-title': {
        marginBottom: '12px',
        color: 'var(--heading-color)',
        fontSize: '18px',
        lineHeight: '24px'
    },
    '.ant-list-vertical .ant-list-item-action': {
        marginTop: '16px',
        marginLeft: 'auto'
    },
    '.ant-list-vertical .ant-list-item-action>li': { padding: '0 16px' },
    '.ant-list-vertical .ant-list-item-action>li:first-child': {
        paddingLeft: '0'
    },
    '.ant-list-grid .ant-col>.ant-list-item': {
        display: 'block',
        maxWidth: '100%',
        marginBottom: '16px',
        paddingTop: '0',
        paddingBottom: '0',
        borderBottom: 'none'
    },
    '.ant-list-item-no-flex': { display: 'block' },
    '.ant-list:not(.ant-list-vertical) .ant-list-item-no-flex .ant-list-item-action': {
        cssFloat: 'right'
    },
    '.ant-list-bordered': {
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px'
    },
    '.ant-list-bordered .ant-list-footer,.ant-list-bordered .ant-list-header,.ant-list-bordered .ant-list-item': {
        paddingRight: '24px',
        paddingLeft: '24px'
    },
    '.ant-list-bordered .ant-list-pagination': { margin: '16px 24px' },
    '.ant-list-bordered.ant-list-sm .ant-list-footer,.ant-list-bordered.ant-list-sm .ant-list-header,.ant-list-bordered.ant-list-sm .ant-list-item': {
        padding: '8px 16px'
    },
    '.ant-list-bordered.ant-list-lg .ant-list-footer,.ant-list-bordered.ant-list-lg .ant-list-header,.ant-list-bordered.ant-list-lg .ant-list-item': {
        padding: '16px 24px'
    },
    '.ant-list-rtl .ant-list-vertical .ant-list-item-action>li:first-child,.ant-list.ant-list-rtl .ant-list-item-action>li:first-child': {
        paddingRight: '0',
        paddingLeft: '16px'
    },
    '@media screen and (max-width:568px)': [
        {
        '.ant-list-item': { flexWrap: 'wrap' },
        '.ant-list-item-action': { marginLeft: '12px' },
        '.ant-list-vertical .ant-list-item': { flexWrap: 'wrap-reverse' },
        '.ant-list-vertical .ant-list-item-main': { minWidth: '220px' },
        '.ant-list-vertical .ant-list-item-extra': { margin: 'auto auto 16px' }
        },
        {
        '.ant-list-rtl .ant-list-item-action': {
            marginRight: '22px',
            marginLeft: '0'
        },
        '.ant-list-rtl.ant-list-vertical .ant-list-item-extra': {
            margin: 'auto auto 16px'
        }
        }
    ],
    '.ant-list-rtl': { textAlign: 'right' },
    '.ant-list-rtl .ant-list-pagination': { textAlign: 'left' },
    '.ant-list-rtl .ant-list-item-meta-avatar': {
        marginRight: '0',
        marginLeft: '16px'
    },
    '.ant-list-rtl .ant-list-item-action': {
        marginRight: '48px',
        marginLeft: '0'
    },
    '.ant-list-rtl .ant-list-item-action-split': { right: 'auto', left: '0' },
    '.ant-list-rtl.ant-list-vertical .ant-list-item-extra': {
        marginRight: '40px',
        marginLeft: '0'
    },
    '.ant-list-rtl.ant-list-vertical .ant-list-item-action': {
        marginRight: 'auto'
    },
    '.ant-list-rtl .ant-list:not(.ant-list-vertical) .ant-list-item-no-flex .ant-list-item-action': {
        cssFloat: 'left'
    },
    '.ant-mentions-status-error:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions,.ant-mentions-status-error:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions:hover': {
        background: 'var(--background-color)',
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-mentions-status-error:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions-focused,.ant-mentions-status-error:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions:focus': {
        borderColor: 'var(--ant-error-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-error-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-mentions-status-error .ant-input-prefix': {
        color: 'var(--ant-error-color)'
    },
    '.ant-mentions-status-warning:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions,.ant-mentions-status-warning:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions:hover': {
        background: 'var(--background-color)',
        borderColor: 'var(--ant-warning-color)'
    },
    '.ant-mentions-status-warning:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions-focused,.ant-mentions-status-warning:not(.ant-mentions-disabled):not(.ant-mentions-borderless).ant-mentions:focus': {
        borderColor: 'var(--ant-warning-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-warning-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-mentions-status-warning .ant-input-prefix': {
        color: 'var(--ant-warning-color)'
    },
    '.ant-mentions': {
        boxSizing: 'border-box',
        margin: '0',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        width: '100%',
        minWidth: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        backgroundImage: 'none',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        transition: 'all .3s',
        position: 'relative',
        display: 'inline-block',
        padding: '0',
        overflow: 'hidden',
        lineHeight: 1.5715,
        whiteSpace: 'pre-wrap'
    },
    '.ant-mentions-disabled,.ant-mentions[disabled]': {
        backgroundColor: 'var(--disabled-bg-color)',
        opacity: 1
    },
    '.ant-mentions::placeholder': {
        color: 'var(--input-placeholder-color)',
        userSelect: 'none'
    },
    '.ant-mentions-disabled,.ant-mentions-disabled>textarea,.ant-mentions[disabled]': {
        color: 'var(--disabled-color)',
        boxShadow: 'none'
    },
    '.ant-mentions:placeholder-shown': { textOverflow: 'ellipsis' },
    '.ant-mentions:hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-rtl .ant-mentions:hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-mentions-focused,.ant-mentions:focus': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-rtl .ant-mentions-focused,.ant-input-rtl .ant-mentions:focus': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-mentions-disabled:hover,.ant-mentions[disabled]:hover': {
        borderColor: 'var(--border-base-color)',
        borderRightWidth: '1px'
    },
    '.ant-mentions-disabled': {
        borderColor: 'var(--border-base-color)',
        cursor: 'not-allowed'
    },
    '.ant-mentions[disabled]': {
        borderColor: 'var(--border-base-color)',
        cursor: 'not-allowed'
    },
    '.ant-mentions-borderless,.ant-mentions-borderless-disabled,.ant-mentions-borderless-focused,.ant-mentions-borderless:focus,.ant-mentions-borderless:hover,.ant-mentions-borderless[disabled]': {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none'
    },
    'textarea.ant-mentions': {
        maxWidth: '100%',
        minHeight: '50px',
        lineHeight: 1.5715,
        transition: 'all .3s,height 0s'
    },
    '.ant-mentions-lg': { padding: '16.9px 11px', fontSize: '18px' },
    '.ant-mentions-sm': { padding: '2.4px 7px' },
    '.ant-mentions-disabled>textarea': {
        backgroundColor: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color)',
        cursor: 'not-allowed',
        opacity: 1
    },
    '.ant-mentions-disabled>textarea:hover': {
        borderColor: 'var(--border-base-color)',
        borderRightWidth: '1px'
    },
    '.ant-mentions-focused': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-mentions-dropdown,.ant-menu,.ant-message-notice-content,.ant-modal-content,.ant-notification-notice': {
        boxShadow:
        '0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)'
    },
    '.ant-input-rtl .ant-mentions-focused': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-mentions-measure,.ant-mentions>textarea': {
        minHeight: '48px',
        margin: '0',
        padding: '11.4px 11px',
        overflow: 'inherit',
        overflowX: 'hidden',
        overflowY: 'auto',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontStyle: 'inherit',
        fontVariant: 'inherit',
        fontSizeAdjust: 'inherit',
        fontStretch: 'inherit',
        lineHeight: 'inherit',
        direction: 'inherit',
        letterSpacing: 'inherit',
        whiteSpace: 'inherit',
        textAlign: 'inherit',
        verticalAlign: 'top',
        wordWrap: 'break-word',
        wordBreak: 'inherit',
        tabSize: 'inherit'
    },
    '.ant-mentions>textarea': {
        width: '100%',
        border: 'none',
        outline: '0',
        resize: 'none'
    },
    '.ant-mentions>textarea::placeholder': {
        color: 'var(--input-placeholder-color)',
        userSelect: 'none'
    },
    '.ant-mentions>textarea:placeholder-shown': { textOverflow: 'ellipsis' },
    '.ant-mentions-measure': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: -1,
        color: 'transparent',
        pointerEvents: 'none'
    },
    '.ant-mentions-dropdown,.ant-select-dropdown': {
        left: '-9999px',
        fontVariant: 'initial',
        outline: '0'
    },
    '.ant-mentions-measure>span': { display: 'inline-block', minHeight: '1em' },
    '.ant-mentions-dropdown': {
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'absolute',
        top: '-9999px',
        zIndex: 1050,
        boxSizing: 'border-box',
        fontSize: '16px',
        borderRadius: '7px'
    },
    '.ant-mentions-dropdown-hidden': { display: 'none' },
    '.ant-mentions-dropdown-menu': {
        maxHeight: '250px',
        marginBottom: '0',
        paddingLeft: '0',
        overflow: 'auto',
        listStyle: 'none',
        outline: '0'
    },
    '.ant-mentions-dropdown-menu-item': {
        position: 'relative',
        display: 'block',
        minWidth: '100px',
        padding: '5px 12px',
        overflow: 'hidden',
        color: 'var(--text-main-color)',
        fontWeight: 400,
        lineHeight: 1.5715,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
        transition: 'background .3s ease'
    },
    '.ant-mentions-dropdown-menu-item:hover': {
        backgroundColor: 'var(--item-hover-bg)'
    },
    '.ant-mentions-dropdown-menu-item:first-child': {
        borderRadius: '7px 7px 0 0'
    },
    '.ant-mentions-dropdown-menu-item:last-child': {
        borderRadius: '0 0 7px 7px'
    },
    '.ant-mentions-dropdown-menu-item-disabled': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-mentions-dropdown-menu-item-disabled:hover': {
        color: 'rgba(0,0,0,.25)',
        backgroundColor: 'var(--background-color)',
        cursor: 'not-allowed'
    },
    '.ant-mentions-dropdown-menu-item-selected': {
        color: 'var(--text-main-color)',
        fontWeight: 500,
        backgroundColor: 'rgba(1,80,154,.05)'
    },
    '.ant-menu-dark .ant-menu-item-danger.ant-menu-item,.ant-menu-dark .ant-menu-item-danger.ant-menu-item:hover,.ant-menu-dark .ant-menu-item-danger.ant-menu-item>a,.ant-menu-item-danger.ant-menu-item,.ant-menu-item-danger.ant-menu-item-active,.ant-menu-item-danger.ant-menu-item-selected,.ant-menu-item-danger.ant-menu-item-selected>a,.ant-menu-item-danger.ant-menu-item-selected>a:hover,.ant-menu-item-danger.ant-menu-item:hover': {
        color: 'var(--ant-error-color)'
    },
    '.ant-mentions-dropdown-menu-item-active,.ant-select-item-option-active:not(.ant-select-item-option-disabled)': {
        backgroundColor: 'var(--item-hover-bg)'
    },
    '.ant-mentions-suffix': {
        position: 'absolute',
        top: '0',
        right: '11px',
        bottom: '0',
        zIndex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        margin: 'auto'
    },
    '.ant-menu::after,.ant-menu::before': { display: 'table', content: '""' },
    '.ant-menu,.ant-menu ol,.ant-menu ul': {
        margin: '0',
        padding: '0',
        listStyle: 'none'
    },
    '.ant-menu-item-danger.ant-menu-item:active': { background: '#fff1f0' },
    '.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-danger.ant-menu-item-selected': {
        backgroundColor: '#fff1f0'
    },
    '.ant-menu-inline .ant-menu-item-danger.ant-menu-item::after': {
        borderRightColor: 'var(--ant-error-color)'
    },
    '.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-danger.ant-menu-item-selected': {
        color: '#fff',
        backgroundColor: 'var(--ant-error-color)'
    },
    '.ant-menu': {
        boxSizing: 'border-box',
        fontVariant: 'tabular-nums',
        fontFeatureSettings: '"tnum"',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        lineHeight: 0,
        textAlign: 'left',
        background: 'var(--background-color)',
        outline: '0',
        transition: 'background .3s,width .3s cubic-bezier(.2,0,0,1) 0s'
    },
    '.ant-menu::after': { clear: 'both' },
    '.ant-menu-overflow': { display: 'flex' },
    '.ant-menu-hidden,.ant-menu-submenu-hidden,.ant-menu-submenu-horizontal .ant-menu-submenu-arrow': {
        display: 'none'
    },
    '.ant-menu-overflow-item': { flex: 'none' },
    '.ant-menu-item-group-title': {
        height: '1.5715',
        padding: '8px 16px',
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px',
        lineHeight: 1.5715,
        transition: 'all .3s'
    },
    '.ant-menu-horizontal .ant-menu-submenu': {
        transition:
        'border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-menu-submenu,.ant-menu-submenu-inline': {
        transition:
        'border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-menu-submenu-selected': { color: 'var(--ant-primary-color)' },
    '.ant-menu-horizontal>.ant-menu-item-active,.ant-menu-horizontal>.ant-menu-item:hover,.ant-menu-horizontal>.ant-menu-submenu .ant-menu-submenu-title:hover,.ant-menu-item a::before': {
        backgroundColor: 'transparent'
    },
    '.ant-menu-submenu .ant-menu-sub': {
        cursor: 'initial',
        transition:
        'background .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-menu-title-content': { transition: 'color .3s' },
    '.ant-menu-item a': { color: 'var(--text-main-color)' },
    '.ant-menu-item a:hover': { color: 'var(--ant-primary-color)' },
    '.ant-menu-item a::before': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        content: '""'
    },
    '.ant-menu-item>.ant-badge a': { color: 'var(--text-main-color)' },
    '.ant-menu-item-selected,.ant-menu-item-selected a,.ant-menu-item-selected a:hover,.ant-menu-item>.ant-badge a:hover': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-menu-item-divider': {
        overflow: 'hidden',
        lineHeight: 0,
        borderColor: '#f0f0f0',
        borderStyle: 'solid',
        borderWidth: '1px 0 0'
    },
    '.ant-menu-item-divider-dashed': { borderStyle: 'dashed' },
    '.ant-menu-horizontal .ant-menu-item,.ant-menu-horizontal .ant-menu-submenu': {
        marginTop: '-1px'
    },
    '.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected': {
        backgroundColor: 'var(--ant-primary-1)'
    },
    '.ant-menu-inline,.ant-menu-vertical,.ant-menu-vertical-left': {
        borderRight: '1px solid #f0f0f0'
    },
    '.ant-menu-vertical-right': { borderLeft: '1px solid #f0f0f0' },
    '.ant-menu-vertical-left.ant-menu-sub,.ant-menu-vertical-right.ant-menu-sub,.ant-menu-vertical.ant-menu-sub': {
        minWidth: '160px',
        maxHeight: 'calc(100vh - 100px)',
        padding: '0',
        overflow: 'hidden',
        borderRight: '0'
    },
    '.ant-menu-vertical-left.ant-menu-sub:not([class*="-active"]),.ant-menu-vertical-right.ant-menu-sub:not([class*="-active"]),.ant-menu-vertical.ant-menu-sub:not([class*="-active"]),.ant-table-filter-dropdown-submenu>ul,.ant-tabs-dropdown-menu': {
        overflowX: 'hidden',
        overflowY: 'auto'
    },
    '.ant-menu-vertical-left.ant-menu-sub .ant-menu-item,.ant-menu-vertical-right.ant-menu-sub .ant-menu-item,.ant-menu-vertical.ant-menu-sub .ant-menu-item': {
        left: '0',
        marginLeft: '0',
        borderRight: '0'
    },
    '.ant-menu-vertical-left.ant-menu-sub .ant-menu-item::after,.ant-menu-vertical-right.ant-menu-sub .ant-menu-item::after,.ant-menu-vertical.ant-menu-sub .ant-menu-item::after': {
        borderRight: '0'
    },
    '.ant-menu-vertical-left.ant-menu-sub>.ant-menu-item,.ant-menu-vertical-left.ant-menu-sub>.ant-menu-submenu,.ant-menu-vertical-right.ant-menu-sub>.ant-menu-item,.ant-menu-vertical-right.ant-menu-sub>.ant-menu-submenu,.ant-menu-vertical.ant-menu-sub>.ant-menu-item,.ant-menu-vertical.ant-menu-sub>.ant-menu-submenu': {
        transformOrigin: '0 0'
    },
    '.ant-menu-horizontal.ant-menu-sub': { minWidth: '114px' },
    '.ant-menu-horizontal .ant-menu-item,.ant-menu-horizontal .ant-menu-submenu-title': {
        transition: 'border-color .3s,background .3s'
    },
    '.ant-menu-item,.ant-menu-submenu-title': {
        position: 'relative',
        display: 'block',
        margin: '0',
        padding: '0 20px',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition:
        'border-color .3s,background .3s,padding .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-menu-item .ant-menu-item-icon,.ant-menu-item .anticon,.ant-menu-submenu-title .ant-menu-item-icon,.ant-menu-submenu-title .anticon': {
        minWidth: '14px',
        fontSize: '1.25rem',
        transition:
        'font-size .15s cubic-bezier(.215,.61,.355,1),margin .3s cubic-bezier(.645,.045,.355,1),color .3s'
    },
    '.ant-menu-item .ant-menu-item-icon+span,.ant-menu-item .anticon+span,.ant-menu-submenu-title .ant-menu-item-icon+span,.ant-menu-submenu-title .anticon+span': {
        marginLeft: '1rem',
        opacity: 1,
        transition:
        'opacity .3s cubic-bezier(.645,.045,.355,1),margin .3s,color .3s'
    },
    '.ant-menu-submenu-arrow,.ant-menu-submenu-expand-icon,.ant-menu-submenu>.ant-menu-submenu-title::after': {
        transition: 'transform .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-menu-item .ant-menu-item-icon.svg,.ant-menu-submenu-title .ant-menu-item-icon.svg': {
        verticalAlign: '-.125em'
    },
    '.ant-menu-item.ant-menu-item-only-child>.ant-menu-item-icon,.ant-menu-item.ant-menu-item-only-child>.anticon,.ant-menu-submenu-title.ant-menu-item-only-child>.ant-menu-item-icon,.ant-menu-submenu-title.ant-menu-item-only-child>.anticon': {
        marginRight: '0'
    },
    '.ant-menu-item:not(.ant-menu-item-disabled):focus-visible,.ant-menu-submenu-title:not(.ant-menu-item-disabled):focus-visible': {
        boxShadow: '0 0 0 2px var(--ant-primary-2)'
    },
    '.ant-menu>.ant-menu-item-divider': { margin: '1px 0', padding: '0' },
    '.ant-menu-submenu-popup': {
        position: 'absolute',
        zIndex: 1050,
        background: '0 0',
        borderRadius: '7px',
        boxShadow: 'none',
        transformOrigin: '0 0'
    },
    '.ant-menu-submenu-popup>.ant-menu,.ant-menu-submenu>.ant-menu': {
        backgroundColor: 'var(--background-color)'
    },
    '.ant-menu-submenu-popup::before': {
        position: 'absolute',
        top: '-7px',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: -1,
        width: '100%',
        height: '100%',
        opacity: 0.0001,
        content: '" "'
    },
    '.ant-menu-submenu-placement-rightTop::before': { top: '0', left: '-7px' },
    '.ant-menu-submenu>.ant-menu': { borderRadius: '7px' },
    '.ant-menu-submenu-arrow,.ant-menu-submenu-expand-icon': {
        position: 'absolute',
        top: '50%',
        right: '16px',
        width: '10px',
        color: 'var(--text-main-color)',
        transform: 'translateY(-50%)'
    },
    '.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-active,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-open,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item:hover,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-active,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-open,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-selected,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu:hover,.ant-menu-submenu:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-submenu:hover>.ant-menu-submenu-title>.ant-menu-submenu-expand-icon,.ant-menu-vertical .ant-menu-submenu-selected,.ant-menu-vertical-left .ant-menu-submenu-selected,.ant-menu-vertical-right .ant-menu-submenu-selected': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-menu-submenu-arrow::after,.ant-menu-submenu-arrow::before': {
        position: 'absolute',
        width: '6px',
        height: '1.5px',
        backgroundColor: 'currentcolor',
        borderRadius: '2px',
        transition:
        'background .3s cubic-bezier(.645,.045,.355,1),transform .3s cubic-bezier(.645,.045,.355,1),top .3s cubic-bezier(.645,.045,.355,1),color .3s cubic-bezier(.645,.045,.355,1)',
        content: '""'
    },
    '.ant-menu-submenu-arrow::before': {
        transform: 'rotate(45deg) translateY(-2.5px)'
    },
    '.ant-menu-submenu-arrow::after': {
        transform: 'rotate(-45deg) translateY(2.5px)'
    },
    '.ant-menu-inline-collapsed .ant-menu-submenu-arrow::before,.ant-menu-submenu-inline .ant-menu-submenu-arrow::before': {
        transform: 'rotate(-45deg) translateX(2.5px)'
    },
    '.ant-menu-inline-collapsed .ant-menu-submenu-arrow::after,.ant-menu-submenu-inline .ant-menu-submenu-arrow::after': {
        transform: 'rotate(45deg) translateX(-2.5px)'
    },
    '.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title>.ant-menu-submenu-arrow': {
        transform: 'translateY(-2px)'
    },
    '.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after': {
        transform: 'rotate(-45deg) translateX(-2.5px)'
    },
    '.ant-menu-submenu-open.ant-menu-submenu-inline>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before': {
        transform: 'rotate(45deg) translateX(2.5px)'
    },
    '.ant-menu-horizontal': {
        lineHeight: '46px',
        border: '0',
        borderBottom: '1px solid #f0f0f0',
        boxShadow: 'none'
    },
    '.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu': {
        marginTop: '-1px',
        marginBottom: '0',
        padding: '0 20px'
    },
    '.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-active::after,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-open::after,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item-selected::after,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-item:hover::after,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-active::after,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-open::after,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu-selected::after,.ant-menu-horizontal:not(.ant-menu-dark)>.ant-menu-submenu:hover::after': {
        borderBottom: '2px solid var(--ant-primary-color)'
    },
    '.ant-menu-horizontal>.ant-menu-item,.ant-menu-horizontal>.ant-menu-submenu': {
        position: 'relative',
        top: '1px',
        display: 'inline-block',
        verticalAlign: 'bottom'
    },
    '.ant-menu-horizontal>.ant-menu-item::after,.ant-menu-horizontal>.ant-menu-submenu::after': {
        position: 'absolute',
        right: '20px',
        bottom: '0',
        left: '20px',
        borderBottom: '2px solid transparent',
        transition: 'border-color .3s cubic-bezier(.645,.045,.355,1)',
        content: '""'
    },
    '.ant-menu-horizontal>.ant-menu-submenu>.ant-menu-submenu-title': {
        padding: '0'
    },
    '.ant-menu-horizontal>.ant-menu-item a': { color: 'var(--text-main-color)' },
    '.ant-menu-horizontal>.ant-menu-item a:hover,.ant-menu-horizontal>.ant-menu-item-selected a': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-menu-horizontal>.ant-menu-item a::before': { bottom: '-2px' },
    '.ant-menu-horizontal::after': {
        display: 'block',
        clear: 'both',
        height: '0',
        content: '"\\20"'
    },
    '.ant-menu-inline .ant-menu-item,.ant-menu-vertical .ant-menu-item,.ant-menu-vertical-left .ant-menu-item,.ant-menu-vertical-right .ant-menu-item': {
        position: 'relative'
    },
    '.ant-menu-inline .ant-menu-item::after,.ant-menu-vertical .ant-menu-item::after,.ant-menu-vertical-left .ant-menu-item::after,.ant-menu-vertical-right .ant-menu-item::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        borderRight: '3px solid var(--ant-primary-color)',
        transform: 'scaleY(.0001)',
        opacity: 0,
        transition:
        'transform .15s cubic-bezier(.215,.61,.355,1),opacity .15s cubic-bezier(.215,.61,.355,1)',
        content: '""'
    },
    '.ant-menu-inline .ant-menu-item,.ant-menu-inline .ant-menu-submenu-title,.ant-menu-vertical .ant-menu-item,.ant-menu-vertical .ant-menu-submenu-title,.ant-menu-vertical-left .ant-menu-item,.ant-menu-vertical-left .ant-menu-submenu-title,.ant-menu-vertical-right .ant-menu-item,.ant-menu-vertical-right .ant-menu-submenu-title': {
        height: '50px',
        marginTop: '4px',
        marginBottom: '4px',
        padding: '0 16px',
        overflow: 'hidden',
        lineHeight: '50px',
        textOverflow: 'ellipsis'
    },
    '.ant-menu-inline .ant-menu-item-group-list .ant-menu-submenu-title,.ant-menu-inline .ant-menu-submenu-title,.ant-menu-vertical .ant-menu-item-group-list .ant-menu-submenu-title,.ant-menu-vertical .ant-menu-submenu-title': {
        paddingRight: '34px'
    },
    '.ant-menu-inline .ant-menu-submenu,.ant-menu-vertical .ant-menu-submenu,.ant-menu-vertical-left .ant-menu-submenu,.ant-menu-vertical-right .ant-menu-submenu': {
        paddingBottom: '.02px'
    },
    '.ant-menu-inline .ant-menu-item:not(:last-child),.ant-menu-vertical .ant-menu-item:not(:last-child),.ant-menu-vertical-left .ant-menu-item:not(:last-child),.ant-menu-vertical-right .ant-menu-item:not(:last-child)': {
        marginBottom: '8px'
    },
    '.ant-menu-inline>.ant-menu-item,.ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical-left>.ant-menu-item,.ant-menu-vertical-left>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical-right>.ant-menu-item,.ant-menu-vertical-right>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu-vertical>.ant-menu-item,.ant-menu-vertical>.ant-menu-submenu>.ant-menu-submenu-title': {
        height: '50px',
        lineHeight: '50px'
    },
    '.ant-menu-inline': { width: '100%' },
    '.ant-menu-inline .ant-menu-item-selected::after,.ant-menu-inline .ant-menu-selected::after': {
        transform: 'scaleY(1)',
        opacity: 1,
        transition:
        'transform .15s cubic-bezier(.645,.045,.355,1),opacity .15s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-menu-inline .ant-menu-item,.ant-menu-inline .ant-menu-submenu-title': {
        width: 'calc(100% + 1px)'
    },
    '.ant-menu-inline.ant-menu-root .ant-menu-item,.ant-menu-inline.ant-menu-root .ant-menu-submenu-title': {
        display: 'flex',
        alignItems: 'center',
        transition:
        'border-color .3s,background .3s,padding .1s cubic-bezier(.215,.61,.355,1)'
    },
    '.ant-menu-inline.ant-menu-root .ant-menu-item>.ant-menu-title-content,.ant-menu-inline.ant-menu-root .ant-menu-submenu-title>.ant-menu-title-content': {
        flex: 'auto',
        minWidth: '0',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    '.ant-menu-inline.ant-menu-root .ant-menu-item>*,.ant-menu-inline.ant-menu-root .ant-menu-submenu-title>*': {
        flex: 'none'
    },
    '.ant-menu.ant-menu-inline-collapsed': { width: '80px' },
    '.ant-menu.ant-menu-inline-collapsed>.ant-menu-item,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title,.ant-menu.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title': {
        left: '0',
        padding: '0 calc(50% - 18px / 2)',
        textOverflow: 'clip'
    },
    '.ant-menu.ant-menu-inline-collapsed>.ant-menu-item .ant-menu-submenu-arrow,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .ant-menu-submenu-arrow,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-submenu-arrow': {
        opacity: 0
    },
    '.ant-menu.ant-menu-inline-collapsed>.ant-menu-item .ant-menu-item-icon,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item .anticon,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .ant-menu-item-icon,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .anticon,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-item-icon,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .anticon,.ant-menu.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-item-icon,.ant-menu.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .anticon': {
        margin: '0',
        fontSize: '18px',
        lineHeight: '50px'
    },
    '.ant-menu.ant-menu-inline-collapsed>.ant-menu-item .ant-menu-item-icon+span,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item .anticon+span,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .ant-menu-item-icon+span,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-item .anticon+span,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-item-icon+span,.ant-menu.ant-menu-inline-collapsed>.ant-menu-item-group>.ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title .anticon+span,.ant-menu.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .ant-menu-item-icon+span,.ant-menu.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title .anticon+span': {
        display: 'inline-block',
        opacity: 0
    },
    '.ant-menu.ant-menu-inline-collapsed .ant-menu-item-icon,.ant-menu.ant-menu-inline-collapsed .anticon': {
        display: 'inline-block'
    },
    '.ant-menu.ant-menu-inline-collapsed-tooltip': { pointerEvents: 'none' },
    '.ant-menu.ant-menu-inline-collapsed-tooltip .ant-menu-item-icon,.ant-menu.ant-menu-inline-collapsed-tooltip .anticon': {
        display: 'none'
    },
    '.ant-menu.ant-menu-inline-collapsed-tooltip a': {
        color: 'rgba(255,255,255,.85)'
    },
    '.ant-menu.ant-menu-inline-collapsed .ant-menu-item-group-title': {
        paddingRight: '4px',
        paddingLeft: '4px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-menu-item-group-list': { margin: '0', padding: '0' },
    '.ant-menu-item-group-list .ant-menu-item,.ant-menu-item-group-list .ant-menu-submenu-title': {
        padding: '0 16px 0 28px'
    },
    '.ant-menu-root.ant-menu-inline,.ant-menu-root.ant-menu-vertical,.ant-menu-root.ant-menu-vertical-left,.ant-menu-root.ant-menu-vertical-right': {
        boxShadow: 'none'
    },
    '.ant-menu-root.ant-menu-inline-collapsed .ant-menu-item>.ant-menu-inline-collapsed-noicon,.ant-menu-root.ant-menu-inline-collapsed .ant-menu-submenu .ant-menu-submenu-title>.ant-menu-inline-collapsed-noicon': {
        fontSize: '18px',
        textAlign: 'center'
    },
    '.ant-menu-rtl .ant-menu-item-group-title,.ant-menu-rtl.ant-menu-inline .ant-menu-item,.ant-menu-rtl.ant-menu-inline .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical .ant-menu-item,.ant-menu-rtl.ant-menu-vertical .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-item,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-submenu-title,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-item,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-submenu-title,.ant-menu.ant-menu-rtl': {
        textAlign: 'right'
    },
    '.ant-menu-sub.ant-menu-inline': {
        padding: '0',
        background: 'rgba(1,80,154,.05)',
        borderRadius: '0',
        boxShadow: 'none',
        border: '0'
    },
    '.ant-menu-sub.ant-menu-inline>.ant-menu-item,.ant-menu-sub.ant-menu-inline>.ant-menu-submenu>.ant-menu-submenu-title': {
        height: '50px',
        lineHeight: '50px',
        listStylePosition: 'inside',
        listStyleType: 'disc'
    },
    '.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title': {
        paddingLeft: '32px'
    },
    '.ant-menu-item-disabled,.ant-menu-submenu-disabled': {
        color: 'rgba(0,0,0,.25) !important' as any,
        background: '0 0',
        cursor: 'not-allowed'
    },
    '.ant-menu-item-disabled::after,.ant-menu-submenu-disabled::after': {
        borderColor: 'transparent !important' as any
    },
    '.ant-menu-item-disabled a,.ant-menu-submenu-disabled a': {
        color: 'rgba(0,0,0,.25) !important' as any,
        pointerEvents: 'none'
    },
    '.ant-menu-item-disabled>.ant-menu-submenu-title,.ant-menu-submenu-disabled>.ant-menu-submenu-title': {
        color: 'rgba(0,0,0,.25) !important' as any,
        cursor: 'not-allowed'
    },
    '.ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before': {
        background: 'rgba(0,0,0,.25) !important' as any
    },
    '.ant-layout-header .ant-menu': { lineHeight: 'inherit' },
    '.ant-menu-inline-collapsed-tooltip a,.ant-menu-inline-collapsed-tooltip a:hover': {
        color: '#fff'
    },
    '.ant-menu-light .ant-menu-item-active,.ant-menu-light .ant-menu-item:hover,.ant-menu-light .ant-menu-submenu-active,.ant-menu-light .ant-menu-submenu-title:hover,.ant-menu-light .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-menu-dark .ant-menu-item:focus-visible,.ant-menu-dark .ant-menu-submenu-title:focus-visible,.ant-menu.ant-menu-root:focus-visible': {
        boxShadow: '0 0 0 2px var(--ant-primary-7)'
    },
    '.ant-menu-dark .ant-menu-sub,.ant-menu.ant-menu-dark,.ant-menu.ant-menu-dark .ant-menu-sub': {
        color: 'rgba(255,255,255,.65)',
        background: 'var(--layout-header-bg-color)'
    },
    '.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow': {
        opacity: 0.45,
        transition: 'all .3s'
    },
    '.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu.ant-menu-dark .ant-menu-sub .ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu.ant-menu-dark .ant-menu-submenu-title .ant-menu-submenu-arrow::before': {
        background: '#fff'
    },
    '.ant-menu-dark.ant-menu-submenu-popup': { background: '0 0' },
    '.ant-menu-dark .ant-menu-inline.ant-menu-sub': { background: '#000c17' },
    '.ant-menu-dark.ant-menu-horizontal': { borderBottom: '0' },
    '.ant-menu-dark.ant-menu-horizontal>.ant-menu-item,.ant-menu-dark.ant-menu-horizontal>.ant-menu-submenu': {
        top: '0',
        marginTop: '0',
        padding: '0 20px',
        borderColor: 'var(--layout-header-bg-color)',
        borderBottom: '0'
    },
    '.ant-menu-dark.ant-menu-horizontal>.ant-menu-item:hover': {
        backgroundColor: 'var(--ant-primary-color)'
    },
    '.ant-menu-dark.ant-menu-horizontal>.ant-menu-item>a::before': {
        bottom: '0'
    },
    '.ant-menu-dark .ant-menu-item,.ant-menu-dark .ant-menu-item-group-title,.ant-menu-dark .ant-menu-item>a,.ant-menu-dark .ant-menu-item>span>a': {
        color: 'rgba(255,255,255,.65)'
    },
    '.ant-menu-dark.ant-menu-inline,.ant-menu-dark.ant-menu-vertical,.ant-menu-dark.ant-menu-vertical-left,.ant-menu-dark.ant-menu-vertical-right': {
        borderRight: '0'
    },
    '.ant-menu-dark.ant-menu-inline .ant-menu-item,.ant-menu-dark.ant-menu-vertical .ant-menu-item,.ant-menu-dark.ant-menu-vertical-left .ant-menu-item,.ant-menu-dark.ant-menu-vertical-right .ant-menu-item': {
        left: '0',
        marginLeft: '0',
        borderRight: '0'
    },
    '.ant-menu-dark.ant-menu-inline .ant-menu-item::after,.ant-menu-dark.ant-menu-vertical .ant-menu-item::after,.ant-menu-dark.ant-menu-vertical-left .ant-menu-item::after,.ant-menu-dark.ant-menu-vertical-right .ant-menu-item::after': {
        borderRight: '0'
    },
    '.ant-menu-dark.ant-menu-inline .ant-menu-item,.ant-menu-dark.ant-menu-inline .ant-menu-submenu-title': {
        width: '100%'
    },
    '.ant-menu-dark .ant-menu-item-active,.ant-menu-dark .ant-menu-item:hover,.ant-menu-dark .ant-menu-submenu-active,.ant-menu-dark .ant-menu-submenu-open,.ant-menu-dark .ant-menu-submenu-selected,.ant-menu-dark .ant-menu-submenu-title:hover': {
        color: '#fff',
        backgroundColor: 'transparent'
    },
    '.ant-menu-dark .ant-menu-item-active>a,.ant-menu-dark .ant-menu-item-active>span>a,.ant-menu-dark .ant-menu-item:hover>a,.ant-menu-dark .ant-menu-item:hover>span>a,.ant-menu-dark .ant-menu-submenu-active>a,.ant-menu-dark .ant-menu-submenu-active>span>a,.ant-menu-dark .ant-menu-submenu-open>a,.ant-menu-dark .ant-menu-submenu-open>span>a,.ant-menu-dark .ant-menu-submenu-selected>a,.ant-menu-dark .ant-menu-submenu-selected>span>a,.ant-menu-dark .ant-menu-submenu-title:hover>a,.ant-menu-dark .ant-menu-submenu-title:hover>span>a': {
        color: '#fff'
    },
    '.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow': {
        opacity: 1
    },
    '.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-active>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-open>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-selected>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-title:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before': {
        background: '#fff'
    },
    '.ant-menu-dark .ant-menu-item:hover': { backgroundColor: 'transparent' },
    '.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected,.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected,.ant-menu.ant-menu-dark .ant-menu-item-selected': {
        backgroundColor: 'var(--ant-primary-color)'
    },
    '.ant-menu-dark .ant-menu-item-selected': { color: '#fff', borderRight: '0' },
    '.ant-menu-dark .ant-menu-item-selected::after': { borderRight: '0' },
    '.ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon,.ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon+span,.ant-menu-dark .ant-menu-item-selected .anticon,.ant-menu-dark .ant-menu-item-selected .anticon+span,.ant-menu-dark .ant-menu-item-selected>a,.ant-menu-dark .ant-menu-item-selected>a:hover,.ant-menu-dark .ant-menu-item-selected>span>a,.ant-menu-dark .ant-menu-item-selected>span>a:hover': {
        color: '#fff'
    },
    '.ant-menu-dark .ant-menu-item-disabled,.ant-menu-dark .ant-menu-item-disabled>a,.ant-menu-dark .ant-menu-item-disabled>span>a,.ant-menu-dark .ant-menu-submenu-disabled,.ant-menu-dark .ant-menu-submenu-disabled>a,.ant-menu-dark .ant-menu-submenu-disabled>span>a': {
        color: 'rgba(255,255,255,.35) !important' as any,
        opacity: 0.8
    },
    '.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title': {
        color: 'rgba(255,255,255,.35) !important' as any
    },
    '.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-item-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::after,.ant-menu-dark .ant-menu-submenu-disabled>.ant-menu-submenu-title>.ant-menu-submenu-arrow::before': {
        background: 'rgba(255,255,255,.35) !important' as any
    },
    '.ant-menu-rtl.ant-menu-inline,.ant-menu-rtl.ant-menu-vertical': {
        borderRight: 'none',
        borderLeft: '1px solid #f0f0f0'
    },
    '.ant-menu-rtl.ant-menu-dark.ant-menu-inline,.ant-menu-rtl.ant-menu-dark.ant-menu-vertical': {
        borderLeft: 'none'
    },
    '.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical-left.ant-menu-sub>.ant-menu-submenu,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical-right.ant-menu-sub>.ant-menu-submenu,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub>.ant-menu-item,.ant-menu-rtl.ant-menu-vertical.ant-menu-sub>.ant-menu-submenu': {
        transformOrigin: 'top right'
    },
    '.ant-menu-rtl .ant-menu-item .ant-menu-item-icon,.ant-menu-rtl .ant-menu-item .anticon,.ant-menu-rtl .ant-menu-submenu-title .ant-menu-item-icon,.ant-menu-rtl .ant-menu-submenu-title .anticon': {
        marginRight: 'auto',
        marginLeft: '1rem'
    },
    '.ant-menu-rtl .ant-menu-item.ant-menu-item-only-child>.ant-menu-item-icon,.ant-menu-rtl .ant-menu-item.ant-menu-item-only-child>.anticon,.ant-menu-rtl .ant-menu-submenu-title.ant-menu-item-only-child>.ant-menu-item-icon,.ant-menu-rtl .ant-menu-submenu-title.ant-menu-item-only-child>.anticon': {
        marginLeft: '0'
    },
    '.ant-menu-submenu-rtl.ant-menu-submenu-popup': { transformOrigin: '100% 0' },
    '.ant-menu-rtl .ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow': {
        right: 'auto',
        left: '16px'
    },
    '.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::before,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::before': {
        transform: 'rotate(-45deg) translateY(-2px)'
    },
    '.ant-menu-rtl .ant-menu-submenu-vertical-left>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-rtl .ant-menu-submenu-vertical-right>.ant-menu-submenu-title .ant-menu-submenu-arrow::after,.ant-menu-rtl .ant-menu-submenu-vertical>.ant-menu-submenu-title .ant-menu-submenu-arrow::after': {
        transform: 'rotate(45deg) translateY(2px)'
    },
    '.ant-menu-rtl.ant-menu-inline .ant-menu-item::after,.ant-menu-rtl.ant-menu-vertical .ant-menu-item::after,.ant-menu-rtl.ant-menu-vertical-left .ant-menu-item::after,.ant-menu-rtl.ant-menu-vertical-right .ant-menu-item::after': {
        right: 'auto',
        left: '0'
    },
    '.ant-menu-rtl.ant-menu-inline .ant-menu-submenu-title': {
        paddingRight: '0',
        paddingLeft: '34px'
    },
    '.ant-menu-rtl.ant-menu-vertical .ant-menu-submenu-title': {
        paddingRight: '16px',
        paddingLeft: '34px'
    },
    '.ant-menu-rtl.ant-menu-inline-collapsed.ant-menu-vertical .ant-menu-submenu-title': {
        padding: '0 calc(50% - 18px / 2)'
    },
    '.ant-menu-rtl .ant-menu-item-group-list .ant-menu-item,.ant-menu-rtl .ant-menu-item-group-list .ant-menu-submenu-title': {
        padding: '0 28px 0 16px'
    },
    '.ant-menu-rtl.ant-menu-sub.ant-menu-inline .ant-menu-item-group-title': {
        paddingRight: '32px',
        paddingLeft: '0'
    },
    '.ant-message': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'fixed',
        top: '8px',
        left: '0',
        zIndex: 1010,
        width: '100%',
        pointerEvents: 'none'
    },
    '.ant-message-notice': { padding: '8px', textAlign: 'center' },
    '.ant-message-notice-content': {
        display: 'inline-block',
        padding: '10px 16px',
        background: 'var(--background-color)',
        borderRadius: '7px',
        pointerEvents: 'all'
    },
    '.ant-message-success .anticon': { color: 'var(--ant-success-color)' },
    '.ant-message-error .anticon': { color: 'var(--ant-error-color)' },
    '.ant-message-warning .anticon': { color: 'var(--ant-warning-color)' },
    '.ant-message-info .anticon,.ant-message-loading .anticon': {
        color: 'var(--ant-info-color)'
    },
    '.ant-message .anticon': {
        position: 'relative',
        top: '1px',
        marginRight: '8px',
        fontSize: '18px'
    },
    '.ant-message-notice.ant-move-up-leave.ant-move-up-leave-active': {
        animationName: 'MessageMoveOut',
        animationDuration: '.3s'
    },
    '@keyframes MessageMoveOut': {
        '0%': { maxHeight: '150px', padding: '8px', opacity: 1 },
        '100%': { maxHeight: '0', padding: '0', opacity: 0 }
    },
    '.ant-message-rtl .anticon': { marginRight: '0', marginLeft: '8px' },
    '.ant-modal': {
        boxSizing: 'border-box',
        padding: '0 0 24px',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        pointerEvents: 'none',
        position: 'relative',
        top: '100px',
        width: 'auto',
        maxWidth: 'calc(100vw - 32px)',
        margin: '0 auto'
    },
    '.ant-modal-mask,.ant-modal-wrap': {
        position: 'fixed',
        zIndex: 1000,
        right: '0',
        left: '0',
        bottom: '0'
    },
    '.ant-modal.ant-zoom-appear,.ant-modal.ant-zoom-enter': {
        transform: 'none',
        opacity: 0,
        animationDuration: '.3s',
        userSelect: 'none'
    },
    '.ant-modal-mask': {
        top: '0',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.45)'
    },
    '.ant-modal-content,.ant-page-header': {
        backgroundColor: 'var(--background-color)'
    },
    '.ant-modal-mask-hidden': { display: 'none' },
    '.ant-modal-wrap': { top: '0', overflow: 'auto', outline: '0' },
    '.ant-modal-title': {
        margin: '0',
        color: 'var(--heading-color)',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '22px',
        wordWrap: 'break-word'
    },
    '.ant-modal-content': {
        position: 'relative',
        backgroundClip: 'padding-box',
        border: '0',
        borderRadius: '7px',
        pointerEvents: 'auto'
    },
    '.ant-modal-close': {
        position: 'absolute',
        top: '0',
        right: '0',
        zIndex: 10,
        padding: '0',
        color: 'var(--icon-color)',
        fontWeight: 700,
        lineHeight: 1,
        textDecoration: 'none',
        background: '0 0',
        border: '0',
        outline: '0',
        cursor: 'pointer',
        transition: 'color .3s'
    },
    '.ant-modal-close-x': {
        display: 'block',
        width: '54px',
        height: '54px',
        fontSize: '18px',
        fontStyle: 'normal',
        lineHeight: '54px',
        textAlign: 'center',
        textTransform: 'none',
        textRendering: 'auto'
    },
    '.ant-modal-close:focus,.ant-modal-close:hover': {
        color: 'var(--icon-hover-color)',
        textDecoration: 'none'
    },
    '.ant-modal-header': {
        padding: '16px 24px',
        color: 'var(--text-main-color)',
        background: 'var(--background-color)',
        borderBottom: '1px solid #f0f0f0',
        borderRadius: '7px 7px 0 0'
    },
    '.ant-modal-body': {
        padding: '24px',
        fontSize: '16px',
        lineHeight: 1.5715,
        wordWrap: 'break-word'
    },
    '.ant-modal-footer': {
        padding: '10px 16px',
        textAlign: 'right',
        background: '0 0',
        borderTop: '1px solid #f0f0f0',
        borderRadius: '0 0 7px 7px'
    },
    '.ant-modal-footer .ant-btn+.ant-btn:not(.ant-dropdown-trigger)': {
        marginBottom: '0',
        marginLeft: '8px'
    },
    '.ant-modal-open': { overflow: 'hidden' },
    '.ant-modal-centered': { textAlign: 'center' },
    '.ant-modal-centered::before': {
        display: 'inline-block',
        width: '0',
        height: '100%',
        verticalAlign: 'middle',
        content: '""'
    },
    '.ant-modal-centered .ant-modal': {
        top: '0',
        display: 'inline-block',
        paddingBottom: '0',
        textAlign: 'left',
        verticalAlign: 'middle'
    },
    '.ant-modal-confirm .ant-modal-header,.ant-popover-hidden': {
        display: 'none'
    },
    '.ant-modal-confirm .ant-modal-body': { padding: '32px 32px 24px' },
    '.ant-modal-confirm-body-wrapper::before': {
        display: 'table',
        content: '""'
    },
    '.ant-modal-confirm-body-wrapper::after': {
        display: 'table',
        clear: 'both',
        content: '""'
    },
    '.ant-modal-confirm-body .ant-modal-confirm-title': {
        display: 'block',
        overflow: 'hidden',
        color: 'var(--heading-color)',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: 1.4
    },
    '.ant-modal-confirm-body .ant-modal-confirm-content': {
        marginTop: '8px',
        color: 'var(--text-main-color)',
        fontSize: '16px'
    },
    '.ant-modal-confirm-body>.anticon': {
        cssFloat: 'left',
        marginRight: '16px',
        fontSize: '22px'
    },
    '.ant-modal-confirm-body>.anticon+.ant-modal-confirm-title+.ant-modal-confirm-content': {
        marginLeft: '38px'
    },
    '.ant-modal-confirm .ant-modal-confirm-btns': {
        marginTop: '24px',
        textAlign: 'right'
    },
    '.ant-modal-wrap-rtl .ant-modal-confirm-btns,.ant-modal-wrap-rtl .ant-modal-footer': {
        textAlign: 'left'
    },
    '.ant-modal-confirm .ant-modal-confirm-btns .ant-btn+.ant-btn': {
        marginBottom: '0',
        marginLeft: '8px'
    },
    '.ant-modal-confirm-error .ant-modal-confirm-body>.anticon': {
        color: 'var(--ant-error-color)'
    },
    '.ant-modal-confirm-confirm .ant-modal-confirm-body>.anticon,.ant-modal-confirm-warning .ant-modal-confirm-body>.anticon': {
        color: 'var(--ant-warning-color)'
    },
    '.ant-modal-confirm-info .ant-modal-confirm-body>.anticon': {
        color: 'var(--ant-info-color)'
    },
    '.ant-modal-confirm-success .ant-modal-confirm-body>.anticon': {
        color: 'var(--ant-success-color)'
    },
    '.ant-modal-confirm .ant-zoom-leave .ant-modal-confirm-btns': {
        pointerEvents: 'none'
    },
    '.ant-modal-wrap-rtl .ant-modal-close': { right: 'initial', left: '0' },
    '.ant-modal-wrap-rtl .ant-modal-footer .ant-btn+.ant-btn': {
        marginRight: '8px',
        marginLeft: '0'
    },
    '.ant-modal-wrap-rtl .ant-modal-confirm-body>.anticon': {
        cssFloat: 'right',
        marginRight: '0',
        marginLeft: '16px'
    },
    '.ant-modal-wrap-rtl .ant-modal-confirm-body>.anticon+.ant-modal-confirm-title+.ant-modal-confirm-content': {
        marginRight: '38px',
        marginLeft: '0'
    },
    '.ant-modal-wrap-rtl .ant-modal-confirm-btns .ant-btn+.ant-btn': {
        marginRight: '8px',
        marginLeft: '0'
    },
    '.ant-modal-wrap-rtl.ant-modal-centered .ant-modal': { textAlign: 'right' },
    '.ant-notification': {
        boxSizing: 'border-box',
        margin: '0 24px 0 0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'fixed',
        zIndex: 9999
    },
    '.ant-notification-close-icon': { fontSize: '16px', cursor: 'pointer' },
    '.ant-notification-hook-holder': { position: 'relative' },
    '.ant-notification-notice': {
        position: 'relative',
        width: '384px',
        maxWidth: 'calc(100vw - 24px * 2)',
        marginBottom: '16px',
        marginLeft: 'auto',
        padding: '16px 24px',
        overflow: 'hidden',
        lineHeight: 1.5715,
        wordWrap: 'break-word',
        background: 'var(--background-color)',
        borderRadius: '7px'
    },
    '.ant-notification-bottom .ant-notification-notice,.ant-notification-top .ant-notification-notice': {
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    '.ant-notification-bottomLeft .ant-notification-notice,.ant-notification-topLeft .ant-notification-notice': {
        marginRight: 'auto',
        marginLeft: '0'
    },
    '.ant-notification-notice-message': {
        marginBottom: '8px',
        color: 'var(--heading-color)',
        fontSize: '18px',
        lineHeight: '24px'
    },
    '.ant-notification-notice-message-single-line-auto-margin': {
        display: 'block',
        width: 'calc(384px - 24px * 2 - 24px - 48px - 100%)',
        maxWidth: '4px',
        backgroundColor: 'transparent',
        pointerEvents: 'none'
    },
    '.ant-notification-notice-message-single-line-auto-margin::before': {
        display: 'block',
        content: '""'
    },
    '.ant-notification-notice-description': { fontSize: '16px' },
    '.ant-notification-notice-closable .ant-notification-notice-message': {
        paddingRight: '24px'
    },
    '.ant-notification-notice-with-icon .ant-notification-notice-message': {
        marginBottom: '4px',
        marginLeft: '48px',
        fontSize: '18px'
    },
    '.ant-notification-notice-with-icon .ant-notification-notice-description': {
        marginLeft: '48px',
        fontSize: '16px'
    },
    '.ant-notification-notice-icon': {
        position: 'absolute',
        marginLeft: '4px',
        fontSize: '24px',
        lineHeight: '24px'
    },
    '.anticon.ant-notification-notice-icon-success': {
        color: 'var(--ant-success-color)'
    },
    '.anticon.ant-notification-notice-icon-info': {
        color: 'var(--ant-info-color)'
    },
    '.anticon.ant-notification-notice-icon-warning': {
        color: 'var(--ant-warning-color)'
    },
    '.anticon.ant-notification-notice-icon-error': {
        color: 'var(--ant-error-color)'
    },
    '.ant-notification-notice-close': {
        position: 'absolute',
        top: '16px',
        right: '22px',
        color: 'rgba(0,0,0,.45)',
        outline: '0'
    },
    '.ant-notification-notice-close:hover': { color: 'rgba(0,0,0,.67)' },
    '.ant-notification-notice-btn': { cssFloat: 'right', marginTop: '16px' },
    '.ant-notification .notification-fade-effect': {
        animationDuration: '.24s',
        animationTimingFunction: 'cubic-bezier(.645,.045,.355,1)',
        animationFillMode: 'both'
    },
    '.ant-notification-fade-appear,.ant-notification-fade-enter': {
        animationDuration: '.24s',
        animationTimingFunction: 'cubic-bezier(.645,.045,.355,1)',
        animationFillMode: 'both',
        opacity: 0,
        animationPlayState: 'paused'
    },
    '.ant-notification-fade-leave': {
        animationTimingFunction: 'cubic-bezier(.645,.045,.355,1)',
        animationFillMode: 'both',
        animationDuration: '.2s',
        animationPlayState: 'paused'
    },
    '.ant-notification-fade-appear.ant-notification-fade-appear-active,.ant-notification-fade-enter.ant-notification-fade-enter-active': {
        animationName: 'NotificationFadeIn',
        animationPlayState: 'running'
    },
    '.ant-notification-fade-leave.ant-notification-fade-leave-active': {
        animationName: 'NotificationFadeOut',
        animationPlayState: 'running'
    },
    '@keyframes NotificationFadeIn': {
        '0%': { left: '384px', opacity: 0 },
        '100%': { left: '0', opacity: 1 }
    },
    '@keyframes NotificationFadeOut': {
        '0%': { maxHeight: '150px', marginBottom: '16px', opacity: 1 },
        '100%': {
        maxHeight: '0',
        marginBottom: '0',
        paddingTop: '0',
        paddingBottom: '0',
        opacity: 0
        }
    },
    '.ant-notification-rtl .ant-notification-notice-closable .ant-notification-notice-message': {
        paddingRight: '0',
        paddingLeft: '24px'
    },
    '.ant-notification-rtl .ant-notification-notice-with-icon .ant-notification-notice-description,.ant-notification-rtl .ant-notification-notice-with-icon .ant-notification-notice-message': {
        marginRight: '48px',
        marginLeft: '0'
    },
    '.ant-notification-rtl .ant-notification-notice-icon': {
        marginRight: '4px',
        marginLeft: '0'
    },
    '.ant-notification-rtl .ant-notification-notice-close': {
        right: 'auto',
        left: '22px'
    },
    '.ant-notification-rtl .ant-notification-notice-btn': { cssFloat: 'left' },
    '.ant-notification-bottom,.ant-notification-top': {
        marginRight: '0',
        marginLeft: '0'
    },
    '.ant-notification-top .ant-notification-fade-appear.ant-notification-fade-appear-active,.ant-notification-top .ant-notification-fade-enter.ant-notification-fade-enter-active': {
        animationName: 'NotificationTopFadeIn'
    },
    '.ant-notification-bottom .ant-notification-fade-appear.ant-notification-fade-appear-active,.ant-notification-bottom .ant-notification-fade-enter.ant-notification-fade-enter-active': {
        animationName: 'NotificationBottomFadeIn'
    },
    '.ant-notification-bottomLeft,.ant-notification-topLeft': {
        marginRight: '0',
        marginLeft: '24px'
    },
    '.ant-notification-bottomLeft .ant-notification-fade-appear.ant-notification-fade-appear-active,.ant-notification-bottomLeft .ant-notification-fade-enter.ant-notification-fade-enter-active,.ant-notification-topLeft .ant-notification-fade-appear.ant-notification-fade-appear-active,.ant-notification-topLeft .ant-notification-fade-enter.ant-notification-fade-enter-active': {
        animationName: 'NotificationLeftFadeIn'
    },
    '@keyframes NotificationTopFadeIn': {
        '0%': { marginTop: '-100%', opacity: 0 },
        '100%': { marginTop: '0', opacity: 1 }
    },
    '@keyframes NotificationBottomFadeIn': {
        '0%': { marginBottom: '-100%', opacity: 0 },
        '100%': { marginBottom: '0', opacity: 1 }
    },
    '@keyframes NotificationLeftFadeIn': {
        '0%': { right: '384px', opacity: 0 },
        '100%': { right: '0', opacity: 1 }
    },
    '.ant-page-header': {
        boxSizing: 'border-box',
        margin: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'relative',
        padding: '16px 24px'
    },
    '.ant-page-header-content,.ant-page-header.has-breadcrumb': {
        paddingTop: '12px'
    },
    '.ant-page-header-ghost': { backgroundColor: 'inherit' },
    '.ant-page-header.has-footer': { paddingBottom: '0' },
    '.ant-page-header-back': {
        marginRight: '16px',
        fontSize: '16px',
        lineHeight: 1
    },
    '.ant-page-header-back-button': {
        outline: '0',
        cursor: 'pointer',
        transition: 'color .3s',
        color: '#000'
    },
    '.ant-page-header-back-button:focus-visible,.ant-page-header-back-button:hover': {
        color: 'var(--ant-primary-color-hover)'
    },
    '.ant-page-header-back-button:active': {
        color: 'var(--ant-primary-color-active)'
    },
    '.ant-page-header .ant-divider-vertical': {
        height: '14px',
        margin: '0 12px',
        verticalAlign: 'middle'
    },
    '.ant-breadcrumb+.ant-page-header-heading': { marginTop: '8px' },
    '.ant-page-header-heading': { display: 'flex' },
    '.ant-page-header-heading-left': {
        display: 'flex',
        alignItems: 'center',
        margin: '4px 0',
        overflow: 'hidden'
    },
    '.ant-page-header-heading-title': {
        marginRight: '12px',
        marginBottom: '0',
        color: 'var(--heading-color)',
        fontWeight: 600,
        fontSize: '23px',
        lineHeight: '50px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-page-header-heading .ant-avatar': { marginRight: '12px' },
    '.ant-page-header-heading-sub-title': {
        marginRight: '12px',
        color: 'rgba(0,0,0,.45)',
        fontSize: '14px',
        lineHeight: 1.5715,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-page-header-heading-extra': { margin: '4px 0', whiteSpace: 'nowrap' },
    '.ant-page-header-heading-extra>*': { whiteSpace: 'unset' },
    '.ant-page-header-footer': { marginTop: '16px' },
    '.ant-page-header-footer .ant-tabs>.ant-tabs-nav': { margin: '0' },
    '.ant-page-header-footer .ant-tabs>.ant-tabs-nav::before': { border: 'none' },
    '.ant-page-header-footer .ant-tabs .ant-tabs-tab': {
        paddingTop: '8px',
        paddingBottom: '8px',
        fontSize: '16px'
    },
    '.ant-page-header-compact .ant-page-header-heading': { flexWrap: 'wrap' },
    '.ant-page-header-rtl .ant-page-header-back': {
        cssFloat: 'right',
        marginRight: '0',
        marginLeft: '16px'
    },
    '.ant-page-header-rtl .ant-page-header-heading .ant-avatar,.ant-page-header-rtl .ant-page-header-heading-title': {
        marginRight: '0',
        marginLeft: '12px'
    },
    '.ant-page-header-rtl .ant-page-header-heading-sub-title': {
        cssFloat: 'right',
        marginRight: '0',
        marginLeft: '12px'
    },
    '.ant-page-header-rtl .ant-page-header-heading-tags': { cssFloat: 'right' },
    '.ant-page-header-rtl .ant-page-header-heading-extra': { cssFloat: 'left' },
    '.ant-page-header-rtl .ant-page-header-heading-extra>*': {
        marginRight: '12px',
        marginLeft: '0'
    },
    '.ant-pagination,.ant-pagination ol,.ant-pagination ul': {
        margin: '0',
        listStyle: 'none',
        padding: '0'
    },
    '.ant-page-header-rtl .ant-page-header-heading-extra>:first-child': {
        marginRight: '0'
    },
    '.ant-page-header-rtl .ant-page-header-footer .ant-tabs-bar .ant-tabs-nav': {
        cssFloat: 'right'
    },
    '.ant-pagination': {
        boxSizing: 'border-box',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        fontFeatureSettings: '"tnum"'
    },
    '.ant-pagination::after': {
        display: 'block',
        clear: 'both',
        height: '0',
        overflow: 'hidden',
        visibility: 'hidden',
        content: '" "'
    },
    '.ant-pagination-item,.ant-pagination-total-text': {
        display: 'inline-block',
        marginRight: '8px',
        lineHeight: '48px',
        verticalAlign: 'middle'
    },
    '.ant-pagination-total-text': { height: '50px' },
    '.ant-pagination-item': {
        minWidth: '50px',
        height: '50px',
        textAlign: 'center',
        listStyle: 'none',
        backgroundColor: 'var(--background-color)',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        outline: '0',
        cursor: 'pointer',
        userSelect: 'none'
    },
    '.ant-pagination-item a': {
        display: 'block',
        padding: '0 6px',
        color: 'var(--text-main-color)'
    },
    '.ant-pagination-item-active a,.ant-pagination-item:focus-visible a,.ant-pagination-item:hover a': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-pagination-item a:hover': { textDecoration: 'none' },
    '.ant-pagination-item:hover': {
        borderColor: 'var(--ant-primary-color)',
        transition: 'all .3s'
    },
    '.ant-pagination-item:focus-visible': {
        borderColor: 'var(--ant-primary-color)',
        transition: 'all .3s'
    },
    '.ant-pagination-item-active': {
        fontWeight: 500,
        background: 'var(--background-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-pagination-item-active:focus-visible,.ant-pagination-item-active:hover,.ant-pagination-next:hover button,.ant-pagination-prev:hover button': {
        borderColor: 'var(--ant-primary-5)'
    },
    '.ant-pagination-item-active:focus-visible a,.ant-pagination-item-active:hover a': {
        color: 'var(--ant-primary-5)'
    },
    '.ant-pagination-jump-next,.ant-pagination-jump-prev': { outline: '0' },
    '.ant-pagination-jump-next .ant-pagination-item-container,.ant-pagination-jump-prev .ant-pagination-item-container': {
        position: 'relative'
    },
    '.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon,.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon': {
        color: 'var(--ant-primary-color)',
        fontSize: '14px',
        letterSpacing: '-1px',
        opacity: 0,
        transition: 'all .2s'
    },
    '.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon-svg,.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon-svg': {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        margin: 'auto'
    },
    '.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-ellipsis,.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-ellipsis': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        display: 'block',
        margin: 'auto',
        color: 'rgba(0,0,0,.25)',
        fontFamily: 'Arial,Helvetica,sans-serif',
        letterSpacing: '2px',
        textAlign: 'center',
        textIndent: '.13em',
        opacity: 1,
        transition: 'all .2s'
    },
    '.ant-pagination-jump-next:hover .ant-pagination-item-link-icon,.ant-pagination-jump-prev:hover .ant-pagination-item-link-icon': {
        opacity: 1
    },
    '.ant-pagination-jump-next:hover .ant-pagination-item-ellipsis,.ant-pagination-jump-prev:hover .ant-pagination-item-ellipsis': {
        opacity: 0
    },
    '.ant-pagination-jump-next:focus-visible .ant-pagination-item-link-icon,.ant-pagination-jump-prev:focus-visible .ant-pagination-item-link-icon': {
        opacity: 1
    },
    '.ant-pagination-jump-next:focus-visible .ant-pagination-item-ellipsis,.ant-pagination-jump-prev:focus-visible .ant-pagination-item-ellipsis': {
        opacity: 0
    },
    '.ant-pagination-jump-next,.ant-pagination-jump-prev,.ant-pagination-prev': {
        marginRight: '8px'
    },
    '.ant-pagination-jump-next,.ant-pagination-jump-prev,.ant-pagination-next,.ant-pagination-prev': {
        display: 'inline-block',
        minWidth: '50px',
        height: '50px',
        color: 'var(--text-main-color)',
        fontFamily: 'Montserrat,sans-serif',
        lineHeight: '50px',
        textAlign: 'center',
        verticalAlign: 'middle',
        listStyle: 'none',
        borderRadius: '7px',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-pagination-next,.ant-pagination-prev': {
        fontFamily: 'Arial,Helvetica,sans-serif',
        outline: '0'
    },
    '.ant-pagination-next button,.ant-pagination-prev button': {
        color: 'var(--text-main-color)',
        cursor: 'pointer',
        userSelect: 'none'
    },
    '.ant-pagination-next .ant-pagination-item-link,.ant-pagination-prev .ant-pagination-item-link': {
        display: 'block',
        width: '100%',
        height: '100%',
        padding: '0',
        fontSize: '12px',
        textAlign: 'center',
        backgroundColor: 'var(--background-color)',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        outline: '0',
        transition: 'all .3s'
    },
    '.ant-pagination-next:focus-visible .ant-pagination-item-link,.ant-pagination-next:hover .ant-pagination-item-link,.ant-pagination-prev:focus-visible .ant-pagination-item-link,.ant-pagination-prev:hover .ant-pagination-item-link': {
        color: 'var(--ant-primary-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-pagination-disabled .ant-pagination-item-link,.ant-pagination-disabled:focus-visible .ant-pagination-item-link,.ant-pagination-disabled:hover .ant-pagination-item-link': {
        borderColor: 'var(--border-base-color)',
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-pagination-disabled,.ant-pagination-disabled:hover': {
        cursor: 'not-allowed'
    },
    '.ant-pagination-disabled:focus-visible': { cursor: 'not-allowed' },
    '.ant-pagination-slash': { margin: '0 10px 0 5px' },
    '.ant-pagination-options': {
        display: 'inline-block',
        marginLeft: '16px',
        verticalAlign: 'middle'
    },
    '@media all and (-ms-high-contrast:none)': [
        {
        '.ant-pagination-options,.ant-pagination-options ::-ms-backdrop': {
            verticalAlign: 'top'
        }
        },
        {
        '.ant-select-selection-item,.ant-select-selection-item ::-ms-backdrop': {
            flex: 'auto'
        }
        },
        {
        '.ant-select-selection-placeholder,.ant-select-selection-placeholder ::-ms-backdrop': {
            flex: 'auto'
        }
        },
        {
        '.ant-table-ping-left .ant-table-cell-fix-left-last::after,.ant-table-ping-right .ant-table-cell-fix-right-first::after': {
            boxShadow: 'none !important' as any
        }
        }
    ],
    '.ant-pagination-options-size-changer.ant-select': {
        display: 'inline-block',
        width: 'auto'
    },
    '.ant-pagination-options-quick-jumper': {
        display: 'inline-block',
        height: '50px',
        marginLeft: '8px',
        lineHeight: '50px',
        verticalAlign: 'top'
    },
    '.ant-pagination-options-quick-jumper input': {
        position: 'relative',
        display: 'inline-block',
        minWidth: '0',
        padding: '11.4px 11px',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        lineHeight: 1.5715,
        backgroundColor: 'var(--background-color)',
        backgroundImage: 'none',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        transition: 'all .3s',
        width: '50px',
        height: '50px',
        margin: '0 8px'
    },
    '.ant-pagination-options-quick-jumper input::placeholder': {
        color: 'var(--input-placeholder-color)',
        userSelect: 'none'
    },
    '.ant-pagination-options-quick-jumper input:placeholder-shown': {
        textOverflow: 'ellipsis'
    },
    '.ant-pagination-options-quick-jumper input:hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-rtl .ant-pagination-options-quick-jumper input:hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-pagination-options-quick-jumper input-focused,.ant-pagination-options-quick-jumper input:focus': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-rtl .ant-pagination-options-quick-jumper input-focused,.ant-input-rtl .ant-pagination-options-quick-jumper input:focus': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-pagination-options-quick-jumper input-disabled:hover,.ant-pagination-options-quick-jumper input[disabled]:hover': {
        borderColor: 'var(--border-base-color)',
        borderRightWidth: '1px'
    },
    '.ant-pagination-options-quick-jumper input-disabled': {
        color: 'var(--disabled-color)',
        backgroundColor: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none',
        cursor: 'not-allowed',
        opacity: 1
    },
    '.ant-pagination-options-quick-jumper input[disabled]': {
        color: 'var(--disabled-color)',
        backgroundColor: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none',
        cursor: 'not-allowed',
        opacity: 1
    },
    '.ant-pagination-options-quick-jumper input-borderless,.ant-pagination-options-quick-jumper input-borderless-disabled,.ant-pagination-options-quick-jumper input-borderless-focused,.ant-pagination-options-quick-jumper input-borderless:focus,.ant-pagination-options-quick-jumper input-borderless:hover,.ant-pagination-options-quick-jumper input-borderless[disabled]': {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none'
    },
    'textarea.ant-pagination-options-quick-jumper input': {
        maxWidth: '100%',
        height: 'auto',
        minHeight: '50px',
        lineHeight: 1.5715,
        verticalAlign: 'bottom',
        transition: 'all .3s,height 0s'
    },
    '.ant-pagination-options-quick-jumper input-lg': {
        padding: '16.9px 11px',
        fontSize: '18px'
    },
    '.ant-pagination-options-quick-jumper input-sm': { padding: '2.4px 7px' },
    '.ant-pagination-simple .ant-pagination-next,.ant-pagination-simple .ant-pagination-prev': {
        height: '24px',
        lineHeight: '24px',
        verticalAlign: 'top'
    },
    '.ant-pagination-simple .ant-pagination-next .ant-pagination-item-link,.ant-pagination-simple .ant-pagination-prev .ant-pagination-item-link': {
        height: '24px',
        backgroundColor: 'transparent',
        border: '0'
    },
    '.ant-pagination-simple .ant-pagination-next .ant-pagination-item-link::after,.ant-pagination-simple .ant-pagination-prev .ant-pagination-item-link::after': {
        height: '24px',
        lineHeight: '24px'
    },
    '.ant-pagination-simple .ant-pagination-simple-pager': {
        display: 'inline-block',
        height: '24px',
        marginRight: '8px'
    },
    '.ant-pagination-simple .ant-pagination-simple-pager input': {
        boxSizing: 'border-box',
        height: '100%',
        marginRight: '8px',
        padding: '0 6px',
        textAlign: 'center',
        backgroundColor: 'var(--background-color)',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        outline: '0',
        transition: 'border-color .3s'
    },
    '.ant-pagination-simple .ant-pagination-simple-pager input:hover': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-pagination-simple .ant-pagination-simple-pager input:focus': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)'
    },
    '.ant-popover-inner,.ant-select-dropdown': {
        boxShadow:
        '0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)'
    },
    '.ant-pagination-simple .ant-pagination-simple-pager input[disabled]': {
        color: 'rgba(0,0,0,.25)',
        background: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color)',
        cursor: 'not-allowed'
    },
    '.ant-pagination.ant-pagination-mini .ant-pagination-item:not(.ant-pagination-item-active),.ant-pagination.ant-pagination-mini .ant-pagination-next .ant-pagination-item-link,.ant-pagination.ant-pagination-mini .ant-pagination-prev .ant-pagination-item-link': {
        background: '0 0',
        borderColor: 'transparent'
    },
    '.ant-pagination.ant-pagination-mini .ant-pagination-simple-pager,.ant-pagination.ant-pagination-mini .ant-pagination-total-text': {
        height: '24px',
        lineHeight: '24px'
    },
    '.ant-pagination.ant-pagination-mini .ant-pagination-item': {
        minWidth: '24px',
        height: '24px',
        margin: '0',
        lineHeight: '22px'
    },
    '.ant-pagination.ant-pagination-mini .ant-pagination-next,.ant-pagination.ant-pagination-mini .ant-pagination-prev': {
        minWidth: '24px',
        height: '24px',
        margin: '0',
        lineHeight: '24px'
    },
    '.ant-pagination.ant-pagination-mini .ant-pagination-next .ant-pagination-item-link::after,.ant-pagination.ant-pagination-mini .ant-pagination-prev .ant-pagination-item-link::after': {
        height: '24px',
        lineHeight: '24px'
    },
    '.ant-pagination.ant-pagination-mini .ant-pagination-jump-next,.ant-pagination.ant-pagination-mini .ant-pagination-jump-prev': {
        height: '24px',
        marginRight: '0',
        lineHeight: '24px'
    },
    '.ant-pagination.ant-pagination-mini .ant-pagination-options': {
        marginLeft: '2px'
    },
    '.ant-pagination.ant-pagination-mini .ant-pagination-options-size-changer': {
        top: '0'
    },
    '.ant-pagination.ant-pagination-mini .ant-pagination-options-quick-jumper': {
        height: '24px',
        lineHeight: '24px'
    },
    '.ant-popover,.ant-progress': {
        boxSizing: 'border-box',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        fontSize: '16px'
    },
    '.ant-pagination.ant-pagination-mini .ant-pagination-options-quick-jumper input': {
        padding: '2.4px 7px',
        width: '44px',
        height: '32px'
    },
    '.ant-pagination.ant-pagination-disabled': { cursor: 'not-allowed' },
    '.ant-pagination.ant-pagination-disabled .ant-pagination-item': {
        background: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color)',
        cursor: 'not-allowed'
    },
    '.ant-pagination.ant-pagination-disabled .ant-pagination-item a': {
        color: 'rgba(0,0,0,.25)',
        background: '0 0',
        border: 'none',
        cursor: 'not-allowed'
    },
    '.ant-pagination.ant-pagination-disabled .ant-pagination-item-active': {
        background: '#e6e6e6'
    },
    '.ant-pagination.ant-pagination-disabled .ant-pagination-item-active a': {
        color: 'var(--disabled-color)'
    },
    '.ant-pagination.ant-pagination-disabled .ant-pagination-item-link': {
        color: 'rgba(0,0,0,.25)',
        background: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color)',
        cursor: 'not-allowed'
    },
    '.ant-pagination-simple.ant-pagination.ant-pagination-disabled .ant-pagination-item-link': {
        background: '0 0'
    },
    '.ant-pagination.ant-pagination-disabled .ant-pagination-item-link-icon': {
        opacity: 0
    },
    '.ant-pagination.ant-pagination-disabled .ant-pagination-item-ellipsis': {
        opacity: 1
    },
    '.ant-pagination.ant-pagination-disabled .ant-pagination-simple-pager': {
        color: 'rgba(0,0,0,.25)'
    },
    '@media only screen and (max-width:992px)': {
        '.ant-pagination-item-after-jump-prev,.ant-pagination-item-before-jump-next': {
        display: 'none'
        }
    },
    '@media only screen and (max-width:568px)': {
        '.ant-pagination-options': { display: 'none' }
    },
    '.ant-pagination-rtl .ant-pagination-item,.ant-pagination-rtl .ant-pagination-jump-next,.ant-pagination-rtl .ant-pagination-jump-prev,.ant-pagination-rtl .ant-pagination-prev,.ant-pagination-rtl .ant-pagination-total-text': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-pagination-rtl .ant-pagination-slash': { margin: '0 5px 0 10px' },
    '.ant-pagination-rtl .ant-pagination-options': {
        marginRight: '16px',
        marginLeft: '0'
    },
    '.ant-pagination-rtl .ant-pagination-options .ant-pagination-options-size-changer.ant-select': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-pagination-rtl .ant-pagination-options .ant-pagination-options-quick-jumper': {
        marginLeft: '0'
    },
    '.ant-pagination-rtl.ant-pagination-simple .ant-pagination-simple-pager,.ant-pagination-rtl.ant-pagination-simple .ant-pagination-simple-pager input': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-pagination-rtl.ant-pagination.mini .ant-pagination-options': {
        marginRight: '2px',
        marginLeft: '0'
    },
    '.ant-popconfirm': { zIndex: 1060 },
    '.ant-popover': {
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: 2000,
        fontWeight: 400,
        whiteSpace: 'normal',
        textAlign: 'left',
        cursor: 'auto',
        userSelect: 'text'
    },
    '.ant-popover-content': { position: 'relative' },
    '.ant-popover::after': {
        position: 'absolute',
        background: 'rgba(255,255,255,.01)',
        content: '""'
    },
    '.ant-popover-inner,.ant-radio-inner': {
        backgroundColor: 'var(--background-color)'
    },
    '.ant-popover-placement-top,.ant-popover-placement-topLeft,.ant-popover-placement-topRight': {
        paddingBottom: '15.31px'
    },
    '.ant-popover-placement-right,.ant-popover-placement-rightBottom,.ant-popover-placement-rightTop': {
        paddingLeft: '15.31px'
    },
    '.ant-popover-placement-bottom,.ant-popover-placement-bottomLeft,.ant-popover-placement-bottomRight': {
        paddingTop: '15.31px'
    },
    '.ant-popover-placement-left,.ant-popover-placement-leftBottom,.ant-popover-placement-leftTop': {
        paddingRight: '15.31px'
    },
    '.ant-popover-inner': { backgroundClip: 'padding-box', borderRadius: '7px' },
    '.ant-popover-title': {
        minWidth: '177px',
        minHeight: '32px',
        margin: '0',
        padding: '5px 16px 4px',
        color: 'var(--heading-color)',
        fontWeight: 500,
        borderBottom: '1px solid #f0f0f0'
    },
    '.ant-popover-inner-content': {
        padding: '12px 16px',
        color: 'var(--text-main-color)'
    },
    '.ant-popover-message': {
        display: 'flex',
        padding: '4px 0 12px',
        color: 'var(--text-main-color)',
        fontSize: '16px'
    },
    '.ant-popover-message-icon': {
        display: 'inline-block',
        marginRight: '8px',
        color: 'var(--ant-warning-color)',
        fontSize: '16px'
    },
    '.ant-popover-buttons': { marginBottom: '4px', textAlign: 'right' },
    '.ant-popover-buttons button:not(:first-child)': { marginLeft: '8px' },
    '.ant-popover-arrow': {
        position: 'absolute',
        display: 'block',
        width: '22px',
        height: '22px',
        overflow: 'hidden',
        background: '0 0',
        pointerEvents: 'none'
    },
    '.ant-popover-arrow-content': {
        '--antd-arrow-background-color': 'var(--background-color)',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        display: 'block',
        width: '11.31px',
        height: '11.31px',
        margin: 'auto',
        content: '""',
        borderRadius: '0 0 2px',
        pointerEvents: 'none'
    },
    '.ant-progress,.ant-progress-steps': { display: 'inline-block' },
    '.ant-popover-arrow-content::before': {
        position: 'absolute',
        top: '-11.31px',
        left: '-11.31px',
        width: '33.94px',
        height: '33.94px',
        background: 'var(--antd-arrow-background-color)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-10px -10px',
        content: '""',
        clipPath: [
        'inset(33% 33%)',
        'path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")'
        ]
    },
    '.ant-popover-placement-top .ant-popover-arrow,.ant-popover-placement-topLeft .ant-popover-arrow,.ant-popover-placement-topRight .ant-popover-arrow': {
        bottom: '0',
        transform: 'translateY(100%)'
    },
    '.ant-popover-placement-leftBottom .ant-popover-arrow,.ant-popover-placement-rightBottom .ant-popover-arrow': {
        bottom: '12px'
    },
    '.ant-popover-placement-top .ant-popover-arrow-content,.ant-popover-placement-topLeft .ant-popover-arrow-content,.ant-popover-placement-topRight .ant-popover-arrow-content': {
        boxShadow: '3px 3px 7px rgba(0,0,0,.07)',
        transform: 'translateY(-11px) rotate(45deg)'
    },
    '.ant-popover-placement-top .ant-popover-arrow': {
        left: '50%',
        transform: 'translateY(100%) translateX(-50%)'
    },
    '.ant-popover-placement-topLeft .ant-popover-arrow': { left: '16px' },
    '.ant-popover-placement-topRight .ant-popover-arrow': { right: '16px' },
    '.ant-popover-placement-right .ant-popover-arrow,.ant-popover-placement-rightBottom .ant-popover-arrow,.ant-popover-placement-rightTop .ant-popover-arrow': {
        left: '0',
        transform: 'translateX(-100%)'
    },
    '.ant-popover-placement-right .ant-popover-arrow-content,.ant-popover-placement-rightBottom .ant-popover-arrow-content,.ant-popover-placement-rightTop .ant-popover-arrow-content': {
        boxShadow: '3px 3px 7px rgba(0,0,0,.07)',
        transform: 'translateX(11px) rotate(135deg)'
    },
    '.ant-popover-placement-right .ant-popover-arrow': {
        top: '50%',
        transform: 'translateX(-100%) translateY(-50%)'
    },
    '.ant-popover-placement-rightTop .ant-popover-arrow': { top: '12px' },
    '.ant-popover-placement-bottom .ant-popover-arrow,.ant-popover-placement-bottomLeft .ant-popover-arrow,.ant-popover-placement-bottomRight .ant-popover-arrow': {
        top: '0',
        transform: 'translateY(-100%)'
    },
    '.ant-popover-placement-bottom .ant-popover-arrow-content,.ant-popover-placement-bottomLeft .ant-popover-arrow-content,.ant-popover-placement-bottomRight .ant-popover-arrow-content': {
        boxShadow: '2px 2px 5px rgba(0,0,0,.06)',
        transform: 'translateY(11px) rotate(-135deg)'
    },
    '.ant-popover-placement-bottom .ant-popover-arrow': {
        left: '50%',
        transform: 'translateY(-100%) translateX(-50%)'
    },
    '.ant-popover-placement-bottomLeft .ant-popover-arrow': { left: '16px' },
    '.ant-popover-placement-bottomRight .ant-popover-arrow': { right: '16px' },
    '.ant-popover-placement-left .ant-popover-arrow,.ant-popover-placement-leftBottom .ant-popover-arrow,.ant-popover-placement-leftTop .ant-popover-arrow': {
        right: '0',
        transform: 'translateX(100%)'
    },
    '.ant-popover-placement-left .ant-popover-arrow-content,.ant-popover-placement-leftBottom .ant-popover-arrow-content,.ant-popover-placement-leftTop .ant-popover-arrow-content': {
        boxShadow: '3px 3px 7px rgba(0,0,0,.07)',
        transform: 'translateX(-11px) rotate(-45deg)'
    },
    '.ant-popover-placement-left .ant-popover-arrow': {
        top: '50%',
        transform: 'translateX(100%) translateY(-50%)'
    },
    '.ant-popover-placement-leftTop .ant-popover-arrow': { top: '12px' },
    '.ant-popover-magenta .ant-popover-arrow-content,.ant-popover-magenta .ant-popover-inner,.ant-popover-pink .ant-popover-arrow-content,.ant-popover-pink .ant-popover-inner': {
        backgroundColor: '#eb2f96'
    },
    '.ant-popover-red .ant-popover-arrow-content,.ant-popover-red .ant-popover-inner': {
        backgroundColor: '#f5222d'
    },
    '.ant-popover-volcano .ant-popover-arrow-content,.ant-popover-volcano .ant-popover-inner': {
        backgroundColor: '#fa541c'
    },
    '.ant-popover-orange .ant-popover-arrow-content,.ant-popover-orange .ant-popover-inner': {
        backgroundColor: '#fa8c16'
    },
    '.ant-popover-yellow .ant-popover-arrow-content,.ant-popover-yellow .ant-popover-inner': {
        backgroundColor: '#fadb14'
    },
    '.ant-popover-gold .ant-popover-arrow-content,.ant-popover-gold .ant-popover-inner': {
        backgroundColor: '#faad14'
    },
    '.ant-popover-cyan .ant-popover-arrow-content,.ant-popover-cyan .ant-popover-inner': {
        backgroundColor: '#13c2c2'
    },
    '.ant-popover-lime .ant-popover-arrow-content,.ant-popover-lime .ant-popover-inner': {
        backgroundColor: '#a0d911'
    },
    '.ant-popover-green .ant-popover-arrow-content,.ant-popover-green .ant-popover-inner': {
        backgroundColor: '#52c41a'
    },
    '.ant-popover-blue .ant-popover-arrow-content,.ant-popover-blue .ant-popover-inner': {
        backgroundColor: '#1890ff'
    },
    '.ant-popover-geekblue .ant-popover-arrow-content,.ant-popover-geekblue .ant-popover-inner': {
        backgroundColor: '#2f54eb'
    },
    '.ant-popover-purple .ant-popover-arrow-content,.ant-popover-purple .ant-popover-inner': {
        backgroundColor: '#722ed1'
    },
    '.ant-popover-rtl': { textAlign: 'right' },
    '.ant-popover-rtl .ant-popover-message-icon': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-popover-rtl .ant-popover-message-title': { paddingLeft: '16px' },
    '.ant-popover-rtl .ant-popover-buttons': { textAlign: 'left' },
    '.ant-popover-rtl .ant-popover-buttons button': {
        marginRight: '8px',
        marginLeft: '0'
    },
    '.ant-progress': {
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)'
    },
    '.ant-progress-line': {
        position: 'relative',
        width: '100%',
        fontSize: '16px'
    },
    '.ant-progress-steps-outer': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    '.ant-progress-steps-item': {
        flexShrink: 0,
        minWidth: '2px',
        marginRight: '2px',
        background: '#f3f3f3',
        transition: 'all .3s'
    },
    '.ant-progress-steps-item-active': { background: 'var(--ant-primary-color)' },
    '.ant-progress-small.ant-progress-line,.ant-progress-small.ant-progress-line .ant-progress-text .anticon': {
        fontSize: '14px'
    },
    '.ant-progress-outer': {
        display: 'inline-block',
        width: '100%',
        marginRight: '0',
        paddingRight: '0'
    },
    '.ant-progress-show-info .ant-progress-outer': {
        marginRight: 'calc(-2em - 8px)',
        paddingRight: 'calc(2em + 8px)'
    },
    '.ant-progress-inner': {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        overflow: 'hidden',
        verticalAlign: 'middle',
        backgroundColor: 'var(--background-base-color)',
        borderRadius: '100px'
    },
    '.ant-progress-circle-trail': { stroke: 'var(--background-base-color)' },
    '.ant-progress-circle-path': { animation: 'ant-progress-appear .3s' },
    '.ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path': {
        stroke: 'var(--ant-primary-color)'
    },
    '.ant-progress-bg,.ant-progress-success-bg': {
        position: 'relative',
        backgroundColor: 'var(--ant-primary-color)',
        borderRadius: '100px',
        transition: 'all .4s cubic-bezier(.08,.82,.17,1) 0s'
    },
    '.ant-progress-success-bg': {
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: 'var(--ant-success-color)'
    },
    '.ant-progress-text': {
        display: 'inline-block',
        width: '2em',
        marginLeft: '8px',
        color: 'var(--text-main-color)',
        fontSize: '1em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        textAlign: 'left',
        verticalAlign: 'middle',
        wordBreak: 'normal'
    },
    '.ant-progress-text .anticon': { fontSize: '16px' },
    '.ant-progress-status-active .ant-progress-bg::before': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: 'var(--background-color)',
        borderRadius: '10px',
        opacity: 0,
        animation: 'ant-progress-active 2.4s cubic-bezier(.23,1,.32,1) infinite',
        content: '""'
    },
    '.ant-progress-status-exception .ant-progress-bg': {
        backgroundColor: 'var(--ant-error-color)'
    },
    '.ant-progress-status-exception .ant-progress-text': {
        color: 'var(--ant-error-color)'
    },
    '.ant-progress-status-exception .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path': {
        stroke: 'var(--ant-error-color)'
    },
    '.ant-progress-status-success .ant-progress-bg': {
        backgroundColor: 'var(--ant-success-color)'
    },
    '.ant-progress-status-success .ant-progress-text': {
        color: 'var(--ant-success-color)'
    },
    '.ant-progress-status-success .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path': {
        stroke: 'var(--ant-success-color)'
    },
    '.ant-progress-circle .ant-progress-inner': {
        position: 'relative',
        lineHeight: 1,
        backgroundColor: 'transparent'
    },
    '.ant-progress-circle .ant-progress-text': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '1em',
        lineHeight: 1,
        whiteSpace: 'normal',
        textAlign: 'center',
        transform: 'translate(-50%,-50%)'
    },
    '.ant-radio,.ant-radio-wrapper': { position: 'relative', fontSize: '16px' },
    '.ant-progress-circle .ant-progress-text .anticon': {
        fontSize: '1.16666667em'
    },
    '.ant-progress-circle.ant-progress-status-exception .ant-progress-text': {
        color: 'var(--ant-error-color)'
    },
    '.ant-progress-circle.ant-progress-status-success .ant-progress-text': {
        color: 'var(--ant-success-color)'
    },
    '@keyframes ant-progress-active': {
        '0%': { transform: 'translateX(-100%) scaleX(0)', opacity: 0.1 },
        '20%': { transform: 'translateX(-100%) scaleX(0)', opacity: 0.5 },
        '100%': { transform: 'translateX(0) scaleX(1)', opacity: 0 }
    },
    '.ant-progress-rtl.ant-progress-show-info .ant-progress-outer': {
        marginRight: '0',
        marginLeft: 'calc(-2em - 8px)',
        paddingRight: '0',
        paddingLeft: 'calc(2em + 8px)'
    },
    '.ant-radio,.ant-radio-group,.ant-radio-wrapper': {
        boxSizing: 'border-box',
        padding: '0',
        color: 'var(--text-main-color)',
        lineHeight: 1.5715,
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"'
    },
    '.ant-progress-rtl .ant-progress-success-bg': { right: '0', left: 'auto' },
    '.ant-progress-rtl.ant-progress-line .ant-progress-text,.ant-progress-rtl.ant-progress-steps .ant-progress-text': {
        marginRight: '8px',
        marginLeft: '0',
        textAlign: 'right'
    },
    '.ant-radio-group': { margin: '0', display: 'inline-block', fontSize: '0' },
    '.ant-radio-group .ant-badge-count': { zIndex: 1 },
    '.ant-radio-group>.ant-badge:not(:first-child)>.ant-radio-button-wrapper': {
        borderLeft: 'none'
    },
    '.ant-radio-wrapper': {
        margin: '0 8px 0 0',
        display: 'inline-flex',
        alignItems: 'baseline',
        cursor: 'pointer'
    },
    '.ant-radio-wrapper-disabled': { cursor: 'not-allowed' },
    '.ant-radio-wrapper::after': {
        display: 'inline-block',
        width: '0',
        overflow: 'hidden',
        content: '"\\a0"'
    },
    '.ant-radio': {
        margin: '0',
        top: '.2em',
        display: 'inline-block',
        outline: '0',
        cursor: 'pointer'
    },
    '.ant-radio-input:focus+.ant-radio-inner,.ant-radio-wrapper:hover .ant-radio,.ant-radio:hover .ant-radio-inner': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-radio-input:focus+.ant-radio-inner': {
        boxShadow: '0 0 0 3px var(--ant-primary-color-deprecated-f-12)'
    },
    '.ant-radio-checked::after': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '1px solid var(--ant-primary-color)',
        borderRadius: '50%',
        visibility: 'hidden',
        animation: 'antRadioEffect .36s ease-in-out',
        animationFillMode: 'both',
        content: '""'
    },
    '.ant-radio-wrapper:hover .ant-radio::after,.ant-radio:hover::after,.ant-tooltip': {
        visibility: 'visible'
    },
    '.ant-radio-inner': {
        position: 'relative',
        top: '0',
        left: '0',
        display: 'block',
        width: '16px',
        height: '16px',
        borderColor: 'var(--border-base-color)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '50%',
        transition: 'all .3s'
    },
    '.ant-radio-inner::after': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'block',
        width: '16px',
        height: '16px',
        marginTop: '-8px',
        marginLeft: '-8px',
        backgroundColor: 'var(--ant-primary-color)',
        borderTop: '0',
        borderLeft: '0',
        borderRadius: '16px',
        transform: 'scale(0)',
        opacity: 0,
        transition: 'all .3s cubic-bezier(.78,.14,.15,.86)',
        content: '" "'
    },
    '.ant-radio-button-wrapper,.ant-rate,.ant-rate-star,.ant-rate-text,.ant-segmented': {
        display: 'inline-block'
    },
    '.ant-radio-input': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 1,
        cursor: 'pointer',
        opacity: 0
    },
    '.ant-radio-button-wrapper-disabled,.ant-radio-disabled,.ant-radio-disabled .ant-radio-inner,.ant-radio-disabled .ant-radio-input,.ant-radio-disabled+span': {
        cursor: 'not-allowed'
    },
    '.ant-radio.ant-radio-disabled .ant-radio-inner': {
        borderColor: 'var(--border-base-color)'
    },
    '.ant-radio-checked .ant-radio-inner': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-radio-checked .ant-radio-inner::after': {
        transform: 'scale(.5)',
        opacity: 1,
        transition: 'all .3s cubic-bezier(.78,.14,.15,.86)'
    },
    '.ant-radio-disabled .ant-radio-inner': {
        backgroundColor: 'var(--disabled-bg-color)'
    },
    '.ant-radio-disabled .ant-radio-inner::after': {
        backgroundColor: 'rgba(0,0,0,.2)'
    },
    '.ant-radio-disabled+span': { color: 'rgba(0,0,0,.25)' },
    '.ant-radio-button-wrapper,.ant-radio-button-wrapper a': {
        color: 'var(--text-main-color)'
    },
    'span.ant-radio+*': { paddingLeft: '8px' },
    '.ant-radio-button-wrapper': {
        position: 'relative',
        height: '50px',
        margin: '0',
        padding: '0 15px',
        fontSize: '16px',
        lineHeight: '48px',
        background: 'var(--background-color)',
        border: '1px solid var(--border-base-color)',
        borderTopWidth: '1.02px',
        borderLeftWidth: '0',
        cursor: 'pointer',
        transition: 'color .3s,background .3s,border-color .3s,box-shadow .3s'
    },
    '.ant-radio-button-wrapper>.ant-radio-button': {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: -1,
        width: '100%',
        height: '100%'
    },
    '.ant-radio-group-large .ant-radio-button-wrapper': {
        height: '64px',
        fontSize: '18px',
        lineHeight: '62px'
    },
    '.ant-radio-group-small .ant-radio-button-wrapper': {
        height: '32px',
        padding: '0 7px',
        lineHeight: '30px'
    },
    '.ant-radio-button-wrapper:not(:first-child)::before': {
        position: 'absolute',
        top: '-1px',
        left: '-1px',
        display: 'block',
        boxSizing: 'content-box',
        width: '1px',
        height: '100%',
        padding: '1px 0',
        backgroundColor: 'var(--border-base-color)',
        transition: 'background-color .3s',
        content: '""'
    },
    '.ant-radio-button-wrapper:first-child': {
        borderLeft: '1px solid var(--border-base-color)',
        borderRadius: '7px 0 0 7px'
    },
    '.ant-radio-button-wrapper:last-child': { borderRadius: '0 7px 7px 0' },
    '.ant-radio-button-wrapper:first-child:last-child': { borderRadius: '7px' },
    '.ant-radio-button-wrapper:hover': {
        position: 'relative',
        color: 'var(--ant-primary-color)'
    },
    '.ant-radio-button-wrapper:focus-within': {
        boxShadow: '0 0 0 3px var(--ant-primary-color-deprecated-f-12)'
    },
    '.ant-radio-button-wrapper .ant-radio-inner,.ant-radio-button-wrapper input[type=radio],.ant-radio-button-wrapper input[type=checkbox]': {
        width: '0',
        height: '0',
        opacity: 0,
        pointerEvents: 'none'
    },
    '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)': {
        zIndex: 1,
        color: 'var(--ant-primary-color)',
        background: 'var(--background-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before': {
        backgroundColor: 'var(--ant-primary-color)'
    },
    '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover': {
        color: 'var(--ant-primary-5)',
        borderColor: 'var(--ant-primary-5)'
    },
    '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover::before': {
        backgroundColor: 'var(--ant-primary-5)'
    },
    '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active': {
        color: 'var(--ant-primary-7)',
        borderColor: 'var(--ant-primary-7)'
    },
    '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active::before': {
        backgroundColor: 'var(--ant-primary-7)'
    },
    '.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within': {
        boxShadow: '0 0 0 3px var(--ant-primary-color-deprecated-f-12)'
    },
    '.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)': {
        color: 'var(--background-color)',
        background: 'var(--ant-primary-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover': {
        color: 'var(--background-color)',
        background: 'var(--ant-primary-5)',
        borderColor: 'var(--ant-primary-5)'
    },
    '.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active': {
        color: 'var(--background-color)',
        background: 'var(--ant-primary-7)',
        borderColor: 'var(--ant-primary-7)'
    },
    '.ant-radio-button-wrapper-disabled,.ant-radio-button-wrapper-disabled:first-child,.ant-radio-button-wrapper-disabled:hover': {
        color: 'rgba(0,0,0,.25)',
        backgroundColor: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color)'
    },
    '.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within': {
        boxShadow: '0 0 0 3px var(--ant-primary-color-deprecated-f-12)'
    },
    '.ant-radio-button-wrapper-disabled:first-child': {
        borderLeftColor: 'var(--border-base-color)'
    },
    '.ant-radio-button-wrapper-disabled.ant-radio-button-wrapper-checked': {
        color: 'var(--disabled-color)',
        backgroundColor: '#e6e6e6',
        borderColor: 'var(--border-base-color)',
        boxShadow: 'none'
    },
    '@keyframes antRadioEffect': {
        '0%': { transform: 'scale(1)', opacity: 0.5 },
        '100%': { transform: 'scale(1.6)', opacity: 0 }
    },
    '.ant-radio-wrapper.ant-radio-wrapper-rtl': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl': {
        borderRightWidth: '0',
        borderLeftWidth: '1px'
    },
    '.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:not(:first-child)::before': {
        right: '-1px',
        left: '0'
    },
    '.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:first-child': {
        borderRight: '1px solid var(--border-base-color)',
        borderRadius: '0 7px 7px 0'
    },
    '.ant-radio-button-wrapper-checked:not([class*=" ant-radio-button-wrapper-disabled"]).ant-radio-button-wrapper:first-child': {
        borderRightColor: 'var(--ant-primary-5)'
    },
    '.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper:last-child': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-radio-button-wrapper.ant-radio-button-wrapper-rtl.ant-radio-button-wrapper-disabled:first-child': {
        borderRightColor: 'var(--border-base-color)'
    },
    '.ant-rate': {
        boxSizing: 'border-box',
        fontVariant: 'tabular-nums',
        fontFeatureSettings: '"tnum"',
        margin: '0',
        padding: '0',
        color: '#ffc24b',
        fontSize: '8px',
        lineHeight: 'unset',
        listStyle: 'none',
        outline: '0'
    },
    '.ant-rate-disabled .ant-rate-star': { cursor: 'default' },
    '.ant-rate-disabled .ant-rate-star>div:hover': { transform: 'scale(1)' },
    '.ant-rate-star': {
        position: 'relative',
        color: 'inherit',
        cursor: 'pointer'
    },
    '.ant-rate-star:not(:last-child)': { marginRight: '8px' },
    '.ant-rate-star>div': { transition: 'all .3s,outline 0s' },
    '.ant-rate-star>div:hover': { transform: 'scale(1.1)' },
    '.ant-rate-star>div:focus': { outline: '0' },
    '.ant-rate-star>div:focus-visible': {
        outline: '#ffc24b dashed 1px',
        transform: 'scale(1.1)'
    },
    '.ant-rate-star-first,.ant-rate-star-second': {
        color: '#f0f0f0',
        transition: 'all .3s',
        userSelect: 'none'
    },
    '.ant-rate-star-first .anticon,.ant-rate-star-second .anticon': {
        verticalAlign: 'middle'
    },
    '.ant-rate-star-first': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        opacity: 0
    },
    '.ant-rate-star-half .ant-rate-star-first,.ant-rate-star-half .ant-rate-star-second': {
        opacity: 1
    },
    '.ant-rate-star-full .ant-rate-star-second,.ant-rate-star-half .ant-rate-star-first': {
        color: 'inherit'
    },
    '.ant-rate-text': { margin: '0 8px', fontSize: '16px' },
    '.ant-rate-rtl .ant-rate-star:not(:last-child)': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-rate-rtl .ant-rate-star-first': { right: '0', left: 'auto' },
    '.ant-result': { padding: '48px 32px' },
    '.ant-result-success .ant-result-icon>.anticon': {
        color: 'var(--ant-success-color)'
    },
    '.ant-result-error .ant-result-icon>.anticon': {
        color: 'var(--ant-error-color)'
    },
    '.ant-result-info .ant-result-icon>.anticon': {
        color: 'var(--ant-info-color)'
    },
    '.ant-result-warning .ant-result-icon>.anticon': {
        color: 'var(--ant-warning-color)'
    },
    '.ant-result-image': { width: '250px', height: '295px', margin: 'auto' },
    '.ant-result-icon': { marginBottom: '24px', textAlign: 'center' },
    '.ant-result-icon>.anticon': { fontSize: '72px' },
    '.ant-result-title': {
        color: 'var(--heading-color)',
        fontSize: '24px',
        lineHeight: 1.8,
        textAlign: 'center'
    },
    '.ant-result-subtitle': {
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px',
        lineHeight: 1.6,
        textAlign: 'center'
    },
    '.ant-result-extra': { margin: '24px 0 0', textAlign: 'center' },
    '.ant-result-extra>*': { marginRight: '8px' },
    '.ant-result-extra>:last-child': { marginRight: '0' },
    '.ant-result-content': {
        marginTop: '24px',
        padding: '24px 40px',
        backgroundColor: 'rgba(1,80,154,.05)'
    },
    '.ant-result-rtl .ant-result-extra>*': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-result-rtl .ant-result-extra>:last-child': { marginLeft: '0' },
    '.segmented-disabled-item,.segmented-disabled-item:focus,.segmented-disabled-item:hover': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.segmented-item-selected': {
        backgroundColor: '#fff',
        borderRadius: '7px',
        boxShadow:
        '0 2px 8px -2px rgba(0,0,0,.05),0 1px 4px -1px rgba(0,0,0,.07),0 0 1px 0 rgba(0,0,0,.08)'
    },
    '.segmented-text-ellipsis': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'keep-all'
    },
    '.ant-segmented': {
        boxSizing: 'border-box',
        margin: '0',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        padding: '2px',
        color: 'rgba(0,0,0,.65)',
        backgroundColor: 'rgba(0,0,0,.04)',
        borderRadius: '7px',
        transition: 'all .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-segmented-group,.ant-segmented.ant-segmented-block,.ant-select-single .ant-select-selector': {
        display: 'flex'
    },
    '.ant-segmented-item-selected,.ant-segmented-item:focus,.ant-segmented-item:hover': {
        color: '#262626'
    },
    '.ant-segmented-group': {
        position: 'relative',
        alignItems: 'stretch',
        justifyItems: 'flex-start',
        width: '100%'
    },
    '.ant-segmented.ant-segmented-block .ant-segmented-item': {
        flex: 1,
        minWidth: '0'
    },
    '.ant-segmented:not(.ant-segmented-disabled):focus,.ant-segmented:not(.ant-segmented-disabled):hover': {
        backgroundColor: 'rgba(0,0,0,.06)'
    },
    '.ant-segmented-item-selected,.ant-segmented-thumb': {
        backgroundColor: '#fff',
        boxShadow:
        '0 2px 8px -2px rgba(0,0,0,.05),0 1px 4px -1px rgba(0,0,0,.07),0 0 1px 0 rgba(0,0,0,.08)',
        borderRadius: '7px'
    },
    '.ant-segmented-item': {
        position: 'relative',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'color .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-segmented-item-label': {
        minHeight: '46px',
        padding: '0 11px',
        lineHeight: '46px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'keep-all'
    },
    '.ant-segmented-item-icon+*': { marginLeft: '6px' },
    '.ant-segmented-item-input': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '0',
        height: '0',
        opacity: 0,
        pointerEvents: 'none'
    },
    '.ant-segmented.ant-segmented-lg .ant-segmented-item-label': {
        minHeight: '60px',
        padding: '0 11px',
        fontSize: '18px',
        lineHeight: '60px'
    },
    '.ant-segmented.ant-segmented-sm .ant-segmented-item-label': {
        minHeight: '28px',
        padding: '0 7px',
        lineHeight: '28px'
    },
    '.ant-segmented-item-disabled,.ant-segmented-item-disabled:focus,.ant-segmented-item-disabled:hover': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-segmented-thumb': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '0',
        height: '100%',
        padding: '4px 0'
    },
    '.ant-segmented-thumb-motion-appear-active': {
        transition:
        'transform .3s cubic-bezier(.645,.045,.355,1),width .3s cubic-bezier(.645,.045,.355,1)',
        willChange: 'transform,width'
    },
    '.ant-segmented.ant-segmented-rtl .ant-segmented-item-icon': {
        marginRight: '0',
        marginLeft: '6px'
    },
    '.ant-select-single .ant-select-selector .ant-select-selection-search': {
        position: 'absolute',
        top: '0',
        right: '11px',
        bottom: '0',
        left: '11px'
    },
    '.ant-select-single .ant-select-selector .ant-select-selection-search-input': {
        width: '100%'
    },
    '.ant-select-single .ant-select-selector .ant-select-selection-item,.ant-select-single .ant-select-selector .ant-select-selection-placeholder': {
        padding: '0',
        lineHeight: '48px',
        transition: 'all .3s'
    },
    '.ant-select-single .ant-select-selector .ant-select-selection-item': {
        position: 'relative',
        userSelect: 'none'
    },
    '.ant-select-single .ant-select-selector .ant-select-selection-placeholder': {
        transition: 'none',
        pointerEvents: 'none'
    },
    '.ant-select-single .ant-select-selector .ant-select-selection-item::after,.ant-select-single .ant-select-selector .ant-select-selection-placeholder::after,.ant-select-single .ant-select-selector::after': {
        display: 'inline-block',
        width: '0',
        visibility: 'hidden',
        content: '"\\a0"'
    },
    '.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder::after,.ant-select-single.ant-select-customize-input .ant-select-selector::after': {
        display: 'none'
    },
    '.ant-select-single.ant-select-show-arrow .ant-select-selection-search': {
        right: '27px'
    },
    '.ant-select-single.ant-select-show-arrow .ant-select-selection-item,.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder': {
        paddingRight: '20px'
    },
    '.ant-select-single.ant-select-open .ant-select-selection-item': {
        color: 'var(--input-placeholder-color)'
    },
    '.ant-select-single:not(.ant-select-customize-input) .ant-select-selector': {
        width: '100%',
        height: '50px',
        padding: '0 11px'
    },
    '.ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input': {
        height: '48px'
    },
    '.ant-select-single:not(.ant-select-customize-input) .ant-select-selector::after': {
        lineHeight: '48px'
    },
    '.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-search': {
        position: 'static',
        width: '100%'
    },
    '.ant-select-single.ant-select-customize-input .ant-select-selector .ant-select-selection-placeholder': {
        position: 'absolute',
        right: '0',
        left: '0',
        padding: '0 11px'
    },
    '.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector': {
        height: '64px',
        padding: '0 11px'
    },
    '.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder,.ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector::after': {
        lineHeight: '62px'
    },
    '.ant-select-single.ant-select-lg:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input': {
        height: '62px'
    },
    '.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector': {
        height: '32px',
        padding: '0 7px'
    },
    '.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item,.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-placeholder,.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector::after': {
        lineHeight: '30px'
    },
    '.ant-select-single.ant-select-sm:not(.ant-select-customize-input):not(.ant-select-customize-input) .ant-select-selection-search-input': {
        height: '30px'
    },
    '.ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selection-search': {
        right: '7px',
        left: '7px'
    },
    '.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search': {
        right: '31px'
    },
    '.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder': {
        paddingRight: '24px'
    },
    '.ant-select-selection-overflow': {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%'
    },
    '.ant-select-selection-overflow-item': {
        flex: 'none',
        alignSelf: 'center',
        maxWidth: '100%'
    },
    '.ant-select-multiple .ant-select-selector': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '4.4px 11.4px'
    },
    '.ant-select-show-search.ant-select-multiple .ant-select-selector': {
        cursor: 'text'
    },
    '.ant-select-disabled.ant-select-multiple .ant-select-selector': {
        background: 'var(--disabled-bg-color)',
        cursor: 'not-allowed'
    },
    '.ant-select-multiple .ant-select-selector::after': {
        display: 'inline-block',
        width: '0',
        margin: '6px 0',
        lineHeight: '27.2px',
        content: '"\\a0"'
    },
    '.ant-select-multiple.ant-select-allow-clear .ant-select-selector,.ant-select-multiple.ant-select-show-arrow .ant-select-selector': {
        paddingRight: '26px'
    },
    '.ant-select-multiple .ant-select-selection-item': {
        position: 'relative',
        display: 'flex',
        flex: 'none',
        boxSizing: 'border-box',
        maxWidth: '100%',
        height: '27.2px',
        marginTop: '6px',
        marginBottom: '6px',
        lineHeight: '25.2px',
        background: 'var(--background-base-color)',
        border: '1px solid #f0f0f0',
        borderRadius: '7px',
        cursor: 'default',
        transition: 'font-size .3s,line-height .3s,height .3s',
        userSelect: 'none',
        marginInlineEnd: '11.4px',
        paddingInlineStart: '8px',
        paddingInlineEnd: '4px'
    },
    '.ant-select-disabled.ant-select-multiple .ant-select-selection-item': {
        color: '#bfbfbf',
        borderColor: 'var(--border-base-color)',
        cursor: 'not-allowed'
    },
    '.ant-select-multiple .ant-select-selection-item-content': {
        display: 'inline-block',
        marginRight: '4px',
        overflow: 'hidden',
        whiteSpace: 'pre',
        textOverflow: 'ellipsis'
    },
    '.ant-select-multiple .ant-select-selection-item-remove': {
        color: ['inherit', 'rgba(0,0,0,.45)'],
        fontStyle: 'normal',
        textAlign: 'center',
        textTransform: 'none',
        verticalAlign: '-.125em',
        display: 'inline-block',
        fontWeight: 700,
        fontSize: '10px',
        lineHeight: 'inherit',
        cursor: 'pointer'
    },
    '.ant-select-multiple .ant-select-selection-item-remove>.anticon,.ant-spin,.ant-switch,.ant-transfer-operation': {
        verticalAlign: 'middle'
    },
    '.ant-select-multiple .ant-select-selection-item-remove>*': { lineHeight: 1 },
    '.ant-select-multiple .ant-select-selection-item-remove svg': {
        display: 'inline-block'
    },
    '.ant-select-disabled .ant-select-selection-item-remove,.ant-select-multiple .ant-select-selection-item-remove::before': {
        display: 'none'
    },
    '.ant-select-multiple .ant-select-selection-item-remove .ant-select-multiple .ant-select-selection-item-remove-icon': {
        display: 'block'
    },
    '.ant-select-multiple .ant-select-selection-item-remove:hover': {
        color: 'var(--icon-hover-color)'
    },
    '.ant-select-multiple .ant-select-selection-overflow-item+.ant-select-selection-overflow-item .ant-select-selection-search': {
        marginInlineStart: '0'
    },
    '.ant-select-multiple .ant-select-selection-search': {
        position: 'relative',
        maxWidth: '100%',
        marginInlineStart: '-.4px'
    },
    '.ant-select-multiple .ant-select-selection-search-input,.ant-select-multiple .ant-select-selection-search-mirror': {
        height: '27.2px',
        fontFamily: 'Montserrat,sans-serif',
        lineHeight: '27.2px',
        transition: 'all .3s'
    },
    '.ant-select-multiple .ant-select-selection-search-input': {
        width: '100%',
        minWidth: '4.1px'
    },
    '.ant-select-multiple .ant-select-selection-search-mirror': {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: 999,
        whiteSpace: 'pre',
        visibility: 'hidden'
    },
    '.ant-select-multiple .ant-select-selection-placeholder': {
        position: 'absolute',
        top: '50%',
        right: '11px',
        left: '11px',
        transform: 'translateY(-50%)',
        transition: 'all .3s'
    },
    '.ant-select-multiple.ant-select-lg .ant-select-selector::after': {
        lineHeight: '41.2px'
    },
    '.ant-select-multiple.ant-select-lg .ant-select-selection-search': {
        height: '41.2px',
        lineHeight: '41.2px'
    },
    '.ant-select-multiple.ant-select-lg .ant-select-selection-search-input,.ant-select-multiple.ant-select-lg .ant-select-selection-search-mirror': {
        height: '41.2px',
        lineHeight: '39.2px'
    },
    '.ant-select-multiple.ant-select-sm .ant-select-selector::after': {
        lineHeight: '9.2px'
    },
    '.ant-select-multiple.ant-select-sm .ant-select-selection-item': {
        height: '9.2px',
        lineHeight: '7.2px'
    },
    '.ant-select-multiple.ant-select-sm .ant-select-selection-search': {
        height: '9.2px',
        lineHeight: '9.2px',
        marginInlineStart: '3px'
    },
    '.ant-select-multiple.ant-select-sm .ant-select-selection-search-input,.ant-select-multiple.ant-select-sm .ant-select-selection-search-mirror': {
        height: '9.2px',
        lineHeight: '7.2px'
    },
    '.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder': {
        left: '7px'
    },
    '.ant-select-multiple.ant-select-lg .ant-select-selection-item': {
        height: '32px',
        lineHeight: '32px'
    },
    '.ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer) .ant-select-selector': {
        backgroundColor: 'var(--background-color)',
        borderColor: 'var(--ant-error-color) !important' as any
    },
    '.ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer).ant-select-focused .ant-select-selector,.ant-select-status-error.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer).ant-select-open .ant-select-selector': {
        borderColor: 'var(--ant-error-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-error-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-select-status-warning.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer) .ant-select-selector': {
        backgroundColor: 'var(--background-color)',
        borderColor: 'var(--ant-warning-color) !important' as any
    },
    '.ant-select-status-warning.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer).ant-select-focused .ant-select-selector,.ant-select-status-warning.ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer).ant-select-open .ant-select-selector': {
        borderColor: 'var(--ant-warning-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-warning-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-select-status-error.ant-select-has-feedback .ant-select-clear,.ant-select-status-success.ant-select-has-feedback .ant-select-clear,.ant-select-status-validating.ant-select-has-feedback .ant-select-clear,.ant-select-status-warning.ant-select-has-feedback .ant-select-clear': {
        right: '32px'
    },
    '.ant-select-status-error.ant-select-has-feedback .ant-select-selection-selected-value,.ant-select-status-success.ant-select-has-feedback .ant-select-selection-selected-value,.ant-select-status-validating.ant-select-has-feedback .ant-select-selection-selected-value,.ant-select-status-warning.ant-select-has-feedback .ant-select-selection-selected-value': {
        paddingRight: '42px'
    },
    '.ant-select': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer'
    },
    '.ant-select:not(.ant-select-customize-input) .ant-select-selector': {
        position: 'relative',
        backgroundColor: 'var(--background-color)',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        transition: 'all .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-select:not(.ant-select-customize-input) .ant-select-selector input': {
        cursor: 'pointer'
    },
    '.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector': {
        cursor: 'text'
    },
    '.ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector input': {
        cursor: 'auto'
    },
    '.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-rtl .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector': {
        color: 'rgba(0,0,0,.25)',
        background: 'var(--disabled-bg-color)',
        cursor: 'not-allowed'
    },
    '.ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector': {
        background: 'var(--disabled-bg-color)'
    },
    '.ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector input': {
        cursor: 'not-allowed'
    },
    '.ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input': {
        margin: '0',
        padding: '0',
        background: '0 0',
        border: 'none',
        outline: '0',
        appearance: 'none'
    },
    '.ant-select-arrow,.ant-select-clear': {
        marginTop: '-7px',
        fontSize: '14px',
        lineHeight: 1,
        textTransform: 'none',
        position: 'absolute',
        height: '14px',
        textAlign: 'center',
        fontStyle: 'normal'
    },
    '.ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input::-webkit-search-cancel-button': {
        display: 'none',
        WebkitAppearance: 'none'
    },
    '.ant-select:not(.ant-select-disabled):hover .ant-select-selector': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-rtl .ant-select:not(.ant-select-disabled):hover .ant-select-selector': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-select-selection-item': {
        flex: 1,
        overflow: 'hidden',
        fontWeight: 400,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-select-selection-placeholder': {
        flex: 1,
        overflow: 'hidden',
        color: 'var(--input-placeholder-color)',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        pointerEvents: 'none'
    },
    '.ant-select-arrow': {
        color: ['inherit', 'rgba(0,0,0,.25)'],
        verticalAlign: '-.125em',
        top: '50%',
        right: '11px',
        display: 'flex',
        alignItems: 'center',
        pointerEvents: 'none'
    },
    '.ant-select-arrow>*': { lineHeight: 1 },
    '.ant-select-arrow svg': { display: 'inline-block' },
    '.ant-select-arrow::before': { display: 'none' },
    '.ant-select-arrow .ant-select-arrow-icon': { display: 'block' },
    '.ant-select-arrow .anticon': {
        verticalAlign: 'top',
        transition: 'transform .3s'
    },
    '.ant-select-arrow .anticon>svg': { verticalAlign: 'top' },
    '.ant-select-arrow .anticon:not(.ant-select-suffix)': {
        pointerEvents: 'auto'
    },
    '.ant-select-disabled .ant-select-arrow': { cursor: 'not-allowed' },
    '.ant-select-arrow>:not(:last-child)': { marginInlineEnd: '8px' },
    '.ant-select-clear': {
        top: '50%',
        right: '11px',
        zIndex: 1,
        display: 'inline-block',
        width: '14px',
        color: 'rgba(0,0,0,.25)',
        background: 'var(--background-color)',
        cursor: 'pointer',
        opacity: 0,
        transition: 'color .3s ease,opacity .15s ease',
        textRendering: 'auto'
    },
    '.ant-select-clear::before': { display: 'block' },
    '.ant-select-clear:hover': { color: 'rgba(0,0,0,.45)' },
    '.ant-select:hover .ant-select-clear': { opacity: 1 },
    '.ant-select-dropdown': {
        margin: '0',
        color: 'var(--text-main-color)',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'absolute',
        top: '-9999px',
        zIndex: 1050,
        boxSizing: 'border-box',
        padding: '4px 0',
        overflow: 'hidden',
        fontSize: '16px',
        backgroundColor: 'var(--background-color)',
        borderRadius: '7px'
    },
    '.ant-select-dropdown-empty,.ant-select-item-empty': {
        color: 'rgba(0,0,0,.25)'
    },
    '.ant-select-compact-item.ant-select-compact-first-item.ant-select:not(.ant-select-compact-last-item):not(.ant-select-compact-item-rtl)>.ant-select-selector,.ant-select-compact-item.ant-select.ant-select-compact-last-item.ant-select-compact-item-rtl:not(.ant-select-compact-first-item)>.ant-select-selector': {
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
    },
    '.ant-select-dropdown.ant-slide-up-appear.ant-slide-up-appear-active.ant-select-dropdown-placement-topLeft,.ant-select-dropdown.ant-slide-up-enter.ant-slide-up-enter-active.ant-select-dropdown-placement-topLeft': {
        animationName: 'antSlideDownIn'
    },
    '.ant-select-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-select-dropdown-placement-bottomLeft': {
        animationName: 'antSlideUpOut'
    },
    '.ant-select-dropdown.ant-slide-up-leave.ant-slide-up-leave-active.ant-select-dropdown-placement-topLeft': {
        animationName: 'antSlideDownOut'
    },
    '.ant-select-dropdown-hidden': { display: 'none' },
    '.ant-select-item,.ant-select-item-empty': {
        display: 'block',
        fontSize: '16px',
        position: 'relative',
        fontWeight: 400,
        lineHeight: '22px',
        padding: '5px 12px',
        minHeight: '32px'
    },
    '.ant-select-item': {
        color: 'var(--text-main-color)',
        cursor: 'pointer',
        transition: 'background .3s ease'
    },
    '.ant-select-item-group': {
        color: 'rgba(0,0,0,.45)',
        fontSize: '14px',
        cursor: 'default'
    },
    '.ant-select-item-option': { display: 'flex' },
    '.ant-select-item-option-content': {
        flex: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-select-item-option-state': { flex: 'none' },
    '.ant-select-item-option-selected:not(.ant-select-item-option-disabled)': {
        color: 'var(--text-main-color)',
        fontWeight: 500,
        backgroundColor: 'var(--ant-primary-1)'
    },
    '.ant-select-item-option-selected:not(.ant-select-item-option-disabled) .ant-select-item-option-state': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-select-item-option-disabled': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-select-item-option-disabled.ant-select-item-option-selected': {
        backgroundColor: 'var(--disabled-bg-color)'
    },
    '.ant-select-item-option-grouped': { paddingLeft: '24px' },
    '.ant-select-lg': { fontSize: '18px' },
    '.ant-select-borderless .ant-select-selector': {
        backgroundColor: 'transparent !important' as any,
        borderColor: 'transparent !important' as any,
        boxShadow: 'none !important' as any
    },
    '.ant-select.ant-select-in-form-item': { width: '100%' },
    '.ant-select-compact-item:not(.ant-select-compact-last-item).ant-select-compact-item-rtl': {
        marginRight: '0',
        marginLeft: '-1px'
    },
    '.ant-select-compact-item.ant-select-focused>*,.ant-select-compact-item:active>*,.ant-select-compact-item:focus>*,.ant-select-compact-item:hover>*': {
        zIndex: 2
    },
    '.ant-select-compact-item[disabled]>*': { zIndex: 0 },
    '.ant-select-compact-item:not(.ant-select-compact-first-item):not(.ant-select-compact-last-item).ant-select>.ant-select-selector': {
        borderRadius: '0'
    },
    '.ant-select-compact-item.ant-select-compact-last-item.ant-select:not(.ant-select-compact-first-item):not(.ant-select-compact-item-rtl)>.ant-select-selector,.ant-select-compact-item.ant-select.ant-select-compact-first-item.ant-select-compact-item-rtl:not(.ant-select-compact-last-item)>.ant-select-selector': {
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0'
    },
    '.ant-skeleton-header .ant-skeleton-avatar-lg.ant-skeleton-avatar-circle,.ant-skeleton-header .ant-skeleton-avatar-sm.ant-skeleton-avatar-circle,.ant-skeleton-header .ant-skeleton-avatar.ant-skeleton-avatar-circle': {
        borderRadius: '50%'
    },
    '.ant-select-rtl .ant-select-arrow,.ant-select-rtl .ant-select-clear': {
        right: 'initial',
        left: '11px'
    },
    '.ant-select-dropdown-rtl .ant-select-item-option-grouped': {
        paddingRight: '24px',
        paddingLeft: '12px'
    },
    '.ant-select-rtl.ant-select-multiple.ant-select-allow-clear .ant-select-selector,.ant-select-rtl.ant-select-multiple.ant-select-show-arrow .ant-select-selector': {
        paddingRight: '11.4px',
        paddingLeft: '26px'
    },
    '.ant-select-rtl.ant-select-multiple .ant-select-selection-item': {
        textAlign: 'right'
    },
    '.ant-select-rtl.ant-select-multiple .ant-select-selection-item-content': {
        marginRight: '0',
        marginLeft: '4px',
        textAlign: 'right'
    },
    '.ant-select-rtl.ant-select-multiple .ant-select-selection-search-mirror': {
        right: '0',
        left: 'auto'
    },
    '.ant-select-rtl.ant-select-multiple .ant-select-selection-placeholder': {
        right: '11px',
        left: 'auto'
    },
    '.ant-select-rtl.ant-select-multiple.ant-select-sm .ant-select-selection-placeholder': {
        right: '7px'
    },
    '.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-item,.ant-select-rtl.ant-select-single .ant-select-selector .ant-select-selection-placeholder': {
        right: '0',
        left: '9px',
        textAlign: 'right'
    },
    '.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-search': {
        right: '11px',
        left: '27px'
    },
    '.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-item,.ant-select-rtl.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder': {
        paddingRight: '0',
        paddingLeft: '20px'
    },
    '.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-search': {
        right: '6px'
    },
    '.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-item,.ant-select-rtl.ant-select-single.ant-select-sm:not(.ant-select-customize-input).ant-select-show-arrow .ant-select-selection-placeholder': {
        paddingRight: '0',
        paddingLeft: '24px'
    },
    '.ant-skeleton': { display: 'table', width: '100%' },
    '.ant-skeleton-header': {
        display: 'table-cell',
        paddingRight: '16px',
        verticalAlign: 'top'
    },
    '.ant-skeleton-header .ant-skeleton-avatar': {
        display: 'inline-block',
        verticalAlign: 'top',
        background: 'rgba(190,190,190,.2)',
        width: '32px',
        height: '32px',
        lineHeight: '32px'
    },
    '.ant-skeleton-header .ant-skeleton-avatar-lg': {
        width: '40px',
        height: '40px',
        lineHeight: '40px'
    },
    '.ant-skeleton-header .ant-skeleton-avatar-sm': {
        width: '24px',
        height: '24px',
        lineHeight: '24px'
    },
    '.ant-skeleton-content .ant-skeleton-paragraph>li,.ant-skeleton-content .ant-skeleton-title': {
        width: '100%',
        height: '16px',
        background: 'rgba(190,190,190,.2)',
        borderRadius: '7px'
    },
    '.ant-skeleton-content': {
        display: 'table-cell',
        width: '100%',
        verticalAlign: 'top'
    },
    '.ant-skeleton-content .ant-skeleton-title+.ant-skeleton-paragraph': {
        marginTop: '24px'
    },
    '.ant-skeleton-content .ant-skeleton-paragraph': { padding: '0' },
    '.ant-skeleton-content .ant-skeleton-paragraph>li': { listStyle: 'none' },
    '.ant-skeleton-content .ant-skeleton-paragraph>li:last-child:not(:first-child):not(:nth-child(2))': {
        width: '61%'
    },
    '.ant-skeleton-content .ant-skeleton-paragraph>li+li': { marginTop: '16px' },
    '.ant-skeleton-with-avatar .ant-skeleton-content .ant-skeleton-title': {
        marginTop: '12px'
    },
    '.ant-skeleton-with-avatar .ant-skeleton-content .ant-skeleton-title+.ant-skeleton-paragraph': {
        marginTop: '28px'
    },
    '.ant-skeleton-round .ant-skeleton-content .ant-skeleton-paragraph>li,.ant-skeleton-round .ant-skeleton-content .ant-skeleton-title': {
        borderRadius: '100px'
    },
    '.ant-skeleton-active .ant-skeleton-avatar,.ant-skeleton-active .ant-skeleton-button,.ant-skeleton-active .ant-skeleton-image,.ant-skeleton-active .ant-skeleton-input,.ant-skeleton-active .ant-skeleton-paragraph>li,.ant-skeleton-active .ant-skeleton-title': {
        position: 'relative',
        zIndex: 0,
        overflow: 'hidden',
        background: '0 0'
    },
    '.ant-skeleton-active .ant-skeleton-avatar::after,.ant-skeleton-active .ant-skeleton-button::after,.ant-skeleton-active .ant-skeleton-image::after,.ant-skeleton-active .ant-skeleton-input::after,.ant-skeleton-active .ant-skeleton-paragraph>li::after,.ant-skeleton-active .ant-skeleton-title::after': {
        position: 'absolute',
        top: '0',
        right: '-150%',
        bottom: '0',
        left: '-150%',
        background:
        'linear-gradient(90deg,rgba(190,190,190,.2) 25%,rgba(129,129,129,.24) 37%,rgba(190,190,190,.2) 63%)',
        animation: 'ant-skeleton-loading 1.4s ease infinite',
        content: '""'
    },
    '.ant-skeleton.ant-skeleton-block,.ant-skeleton.ant-skeleton-block .ant-skeleton-button,.ant-skeleton.ant-skeleton-block .ant-skeleton-input': {
        width: '100%'
    },
    '.ant-skeleton-element': { display: 'inline-block', width: 'auto' },
    '.ant-skeleton-element .ant-skeleton-button': {
        display: 'inline-block',
        verticalAlign: 'top',
        background: 'rgba(190,190,190,.2)',
        borderRadius: '7px',
        width: '100px',
        minWidth: '100px',
        height: '50px',
        lineHeight: '50px'
    },
    '.ant-skeleton-element .ant-skeleton-button.ant-skeleton-button-square': {
        width: '50px',
        minWidth: '50px'
    },
    '.ant-skeleton-element .ant-skeleton-button.ant-skeleton-button-circle': {
        width: '50px',
        minWidth: '50px',
        borderRadius: '50%'
    },
    '.ant-skeleton-element .ant-skeleton-button.ant-skeleton-button-round': {
        borderRadius: '50px'
    },
    '.ant-skeleton-element .ant-skeleton-button-lg': {
        width: '128px',
        minWidth: '128px',
        height: '64px',
        lineHeight: '64px'
    },
    '.ant-skeleton-element .ant-skeleton-button-lg.ant-skeleton-button-square': {
        width: '64px',
        minWidth: '64px'
    },
    '.ant-skeleton-element .ant-skeleton-button-lg.ant-skeleton-button-circle': {
        width: '64px',
        minWidth: '64px',
        borderRadius: '50%'
    },
    '.ant-skeleton-element .ant-skeleton-button-lg.ant-skeleton-button-round': {
        borderRadius: '64px'
    },
    '.ant-skeleton-element .ant-skeleton-button-sm': {
        width: '64px',
        minWidth: '64px',
        height: '32px',
        lineHeight: '32px'
    },
    '.ant-skeleton-element .ant-skeleton-button-sm.ant-skeleton-button-square': {
        width: '32px',
        minWidth: '32px'
    },
    '.ant-skeleton-element .ant-skeleton-button-sm.ant-skeleton-button-circle': {
        width: '32px',
        minWidth: '32px',
        borderRadius: '50%'
    },
    '.ant-skeleton-element .ant-skeleton-button-sm.ant-skeleton-button-round': {
        borderRadius: '32px'
    },
    '.ant-skeleton-element .ant-skeleton-avatar-lg.ant-skeleton-avatar-circle,.ant-skeleton-element .ant-skeleton-avatar-sm.ant-skeleton-avatar-circle,.ant-skeleton-element .ant-skeleton-avatar.ant-skeleton-avatar-circle,.ant-skeleton-element .ant-skeleton-image-svg.ant-skeleton-image-circle,.ant-skeleton-element .ant-skeleton-image.ant-skeleton-image-circle': {
        borderRadius: '50%'
    },
    '.ant-skeleton-element .ant-skeleton-avatar': {
        display: 'inline-block',
        verticalAlign: 'top',
        background: 'rgba(190,190,190,.2)',
        width: '32px',
        height: '32px',
        lineHeight: '32px'
    },
    '.ant-skeleton-element .ant-skeleton-avatar-lg': {
        width: '40px',
        height: '40px',
        lineHeight: '40px'
    },
    '.ant-skeleton-element .ant-skeleton-avatar-sm': {
        width: '24px',
        height: '24px',
        lineHeight: '24px'
    },
    '.ant-skeleton-element .ant-skeleton-input': {
        display: 'inline-block',
        verticalAlign: 'top',
        background: 'rgba(190,190,190,.2)',
        width: '250px',
        minWidth: '250px',
        height: '50px',
        lineHeight: '50px'
    },
    '.ant-skeleton-element .ant-skeleton-input-lg': {
        width: '320px',
        minWidth: '320px',
        height: '64px',
        lineHeight: '64px'
    },
    '.ant-skeleton-element .ant-skeleton-input-sm': {
        width: '160px',
        minWidth: '160px',
        height: '32px',
        lineHeight: '32px'
    },
    '.ant-skeleton-element .ant-skeleton-image': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'top',
        background: 'rgba(190,190,190,.2)',
        width: '96px',
        height: '96px',
        lineHeight: '96px'
    },
    '.ant-skeleton-element .ant-skeleton-image-path': { fill: '#bfbfbf' },
    '.ant-skeleton-element .ant-skeleton-image-svg': {
        width: '48px',
        height: '48px',
        lineHeight: '48px',
        maxWidth: '192px',
        maxHeight: '192px'
    },
    '@keyframes ant-skeleton-loading': {
        '0%': { transform: 'translateX(-37.5%)' },
        '100%': { transform: 'translateX(37.5%)' }
    },
    '.ant-skeleton-rtl .ant-skeleton-header': {
        paddingRight: '0',
        paddingLeft: '16px'
    },
    '.ant-skeleton-rtl.ant-skeleton.ant-skeleton-active .ant-skeleton-avatar,.ant-skeleton-rtl.ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-paragraph>li,.ant-skeleton-rtl.ant-skeleton.ant-skeleton-active .ant-skeleton-content .ant-skeleton-title': {
        animationName: 'ant-skeleton-loading-rtl'
    },
    '@keyframes ant-skeleton-loading-rtl': {
        '0%': { backgroundPosition: '0 50%' },
        '100%': { backgroundPosition: '100% 50%' }
    },
    '.ant-slider': {
        boxSizing: 'border-box',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'relative',
        height: '12px',
        margin: '10px 6px',
        padding: '4px 0',
        cursor: 'pointer',
        touchAction: 'none'
    },
    '.ant-slider-vertical': {
        width: '12px',
        height: '100%',
        margin: '6px 10px',
        padding: '0 4px'
    },
    '.ant-slider-vertical .ant-slider-rail': { width: '4px', height: '100%' },
    '.ant-slider-vertical .ant-slider-track': { width: '4px' },
    '.ant-slider-vertical .ant-slider-handle': {
        marginTop: '-6px',
        marginLeft: '-5px'
    },
    '.ant-slider-vertical .ant-slider-mark': {
        top: '0',
        left: '12px',
        width: '18px',
        height: '100%'
    },
    '.ant-slider-vertical .ant-slider-mark-text': {
        left: '4px',
        whiteSpace: 'nowrap'
    },
    '.ant-slider-vertical .ant-slider-step': { width: '4px', height: '100%' },
    '.ant-slider-rail,.ant-slider-track': {
        height: '4px',
        borderRadius: '7px',
        transition: 'background-color .3s',
        position: 'absolute'
    },
    '.ant-slider-vertical .ant-slider-dot': { top: 'auto', marginLeft: '-2px' },
    '.ant-slider-rtl.ant-slider-vertical .ant-slider-handle': {
        marginRight: '-5px',
        marginLeft: '0'
    },
    '.ant-slider-rtl.ant-slider-vertical .ant-slider-mark': {
        right: '12px',
        left: 'auto'
    },
    '.ant-slider-rtl.ant-slider-vertical .ant-slider-mark-text': {
        right: '4px',
        left: 'auto'
    },
    '.ant-slider-rtl.ant-slider-vertical .ant-slider-dot': {
        right: '2px',
        left: 'auto'
    },
    '.ant-slider-with-marks': { marginBottom: '28px' },
    '.ant-slider-rail': {
        width: '100%',
        backgroundColor: 'var(--background-base-color)'
    },
    '.ant-slider-track': { backgroundColor: 'var(--ant-primary-3)' },
    '.ant-slider-handle': {
        position: 'absolute',
        width: '14px',
        height: '14px',
        marginTop: '-5px',
        backgroundColor: 'var(--background-color)',
        border: '2px solid var(--ant-primary-3)',
        borderRadius: '50%',
        boxShadow: '0',
        cursor: 'pointer',
        transition:
        'border-color .3s,box-shadow .6s,transform .3s cubic-bezier(.18,.89,.32,1.28)'
    },
    '.ant-spin,.ant-statistic': {
        margin: '0',
        padding: '0',
        lineHeight: 1.5715,
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        boxSizing: 'border-box'
    },
    '.ant-slider-handle-dragging': { zIndex: 1 },
    '.ant-slider-handle:focus': {
        borderColor: 'var(--ant-primary-color-deprecated-t-20)',
        outline: '0',
        boxShadow: '0 0 0 5px var(--ant-primary-color-deprecated-f-12)'
    },
    '.ant-slider-handle.ant-tooltip-open': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-slider-handle::after': {
        position: 'absolute',
        top: '-6px',
        right: '-6px',
        bottom: '-6px',
        left: '-6px',
        content: '""'
    },
    '.ant-slider:hover .ant-slider-rail': { backgroundColor: '#e1e1e1' },
    '.ant-slider:hover .ant-slider-track': {
        backgroundColor: 'var(--ant-primary-4)'
    },
    '.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)': {
        borderColor: 'var(--ant-primary-4)'
    },
    '.ant-slider-mark': {
        position: 'absolute',
        top: '14px',
        left: '0',
        width: '100%',
        fontSize: '16px'
    },
    '.ant-slider-mark-text': {
        position: 'absolute',
        display: 'inline-block',
        color: 'rgba(0,0,0,.45)',
        textAlign: 'center',
        wordBreak: 'keep-all',
        cursor: 'pointer',
        userSelect: 'none'
    },
    '.ant-slider-mark-text-active': { color: 'var(--text-main-color)' },
    '.ant-slider-step': {
        position: 'absolute',
        width: '100%',
        height: '4px',
        background: '0 0',
        pointerEvents: 'none'
    },
    '.ant-slider-dot': {
        position: 'absolute',
        top: '-2px',
        width: '8px',
        height: '8px',
        backgroundColor: 'var(--background-color)',
        border: '2px solid #f0f0f0',
        borderRadius: '50%',
        cursor: 'pointer'
    },
    '.ant-slider-dot-active': {
        borderColor: 'var(--ant-primary-color-deprecated-t-50)'
    },
    '.ant-slider-disabled': { cursor: 'not-allowed' },
    '.ant-slider-disabled .ant-slider-rail': {
        backgroundColor: 'var(--background-base-color) !important' as any
    },
    '.ant-slider-disabled .ant-slider-track': {
        backgroundColor: 'var(--disabled-color) !important' as any
    },
    '.ant-slider-disabled .ant-slider-dot,.ant-slider-disabled .ant-slider-handle': {
        backgroundColor: 'var(--background-color)',
        borderColor: 'var(--disabled-color) !important' as any,
        boxShadow: 'none',
        cursor: 'not-allowed'
    },
    '.ant-slider-disabled .ant-slider-dot,.ant-slider-disabled .ant-slider-mark-text': {
        cursor: 'not-allowed !important' as any
    },
    '.ant-slider-rtl .ant-slider-mark': { right: '0', left: 'auto' },
    '.ant-space': { display: 'inline-flex' },
    '.ant-space-vertical': { flexDirection: 'column' },
    '.ant-space-align-center': { alignItems: 'center' },
    '.ant-space-align-start': { alignItems: 'flex-start' },
    '.ant-space-align-end': { alignItems: 'flex-end' },
    '.ant-space-align-baseline': { alignItems: 'baseline' },
    '.ant-space-compact-vertical,.ant-steps-vertical': {
        flexDirection: 'column'
    },
    '.ant-space-item:empty': { display: 'none' },
    '.ant-space-compact': { display: 'inline-flex' },
    '.ant-space-compact-block': { display: 'flex', width: '100%' },
    '.ant-spin': {
        fontSize: '16px',
        fontFeatureSettings: '"tnum"',
        position: 'absolute',
        display: 'none',
        color: 'var(--ant-primary-color)',
        textAlign: 'center',
        opacity: 0,
        transition: 'transform .3s cubic-bezier(.78,.14,.15,.86)'
    },
    '.ant-spin-spinning': {
        position: 'static',
        display: 'inline-block',
        opacity: 1
    },
    '.ant-spin-nested-loading': { position: 'relative' },
    '.ant-spin-nested-loading>div>.ant-spin': {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: 4,
        display: 'block',
        width: '100%',
        height: '100%',
        maxHeight: '400px'
    },
    '.ant-spin-nested-loading>div>.ant-spin .ant-spin-dot': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '-10px'
    },
    '.ant-spin-nested-loading>div>.ant-spin .ant-spin-text': {
        position: 'absolute',
        top: '50%',
        width: '100%',
        paddingTop: '4px',
        textShadow: '0 1px 2px var(--background-color)'
    },
    '.ant-spin-nested-loading>div>.ant-spin.ant-spin-show-text .ant-spin-dot': {
        marginTop: '-20px'
    },
    '.ant-spin-nested-loading>div>.ant-spin-sm .ant-spin-dot': { margin: '-7px' },
    '.ant-spin-nested-loading>div>.ant-spin-sm .ant-spin-text': {
        paddingTop: '1px'
    },
    '.ant-spin-nested-loading>div>.ant-spin-sm.ant-spin-show-text .ant-spin-dot': {
        marginTop: '-17px'
    },
    '.ant-spin-nested-loading>div>.ant-spin-lg .ant-spin-dot': {
        margin: '-16px'
    },
    '.ant-spin-nested-loading>div>.ant-spin-lg .ant-spin-text': {
        paddingTop: '10px'
    },
    '.ant-spin-nested-loading>div>.ant-spin-lg.ant-spin-show-text .ant-spin-dot': {
        marginTop: '-26px'
    },
    '.ant-spin-container': { position: 'relative', transition: 'opacity .3s' },
    '.ant-spin-container::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 10,
        display: 'none\\9',
        width: '100%',
        height: '100%',
        background: 'var(--background-color)',
        opacity: 0,
        transition: 'all .3s',
        content: '""',
        pointerEvents: 'none'
    },
    '.ant-spin-blur': {
        clear: 'both',
        opacity: 0.5,
        userSelect: 'none',
        pointerEvents: 'none'
    },
    '.ant-spin-blur::after': { opacity: 0.4, pointerEvents: 'auto' },
    '.ant-spin-tip': { color: 'rgba(0,0,0,.45)' },
    '.ant-spin-dot': {
        position: 'relative',
        display: 'inline-block',
        fontSize: '20px',
        width: '1em',
        height: '1em'
    },
    '.ant-spin-dot-item': {
        position: 'absolute',
        display: 'block',
        width: '9px',
        height: '9px',
        backgroundColor: 'var(--ant-primary-color)',
        borderRadius: '100%',
        transform: 'scale(.75)',
        transformOrigin: '50% 50%',
        opacity: 0.3,
        animation: 'antSpinMove 1s infinite linear alternate'
    },
    '.ant-spin-dot-item:nth-child(1)': { top: '0', left: '0' },
    '.ant-spin-dot-item:nth-child(2)': {
        top: '0',
        right: '0',
        animationDelay: '.4s'
    },
    '.ant-spin-dot-item:nth-child(3)': {
        right: '0',
        bottom: '0',
        animationDelay: '.8s'
    },
    '.ant-spin-dot-item:nth-child(4)': {
        bottom: '0',
        left: '0',
        animationDelay: '1.2s'
    },
    '.ant-spin-dot-spin': {
        transform: 'rotate(0)',
        animation: 'antRotate 1.2s infinite linear'
    },
    '.ant-spin-sm .ant-spin-dot': { fontSize: '14px' },
    '.ant-spin-sm .ant-spin-dot i': { width: '6px', height: '6px' },
    '.ant-spin-lg .ant-spin-dot': { fontSize: '32px' },
    '.ant-spin-lg .ant-spin-dot i': { width: '14px', height: '14px' },
    '.ant-spin.ant-spin-show-text .ant-spin-text': { display: 'block' },
    '@media all and (-ms-high-contrast:none),(-ms-high-contrast:active)': {
        '.ant-spin-blur': { background: 'var(--background-color)', opacity: 0.5 }
    },
    '@keyframes antSpinMove': { to: { opacity: 1 } },
    '@keyframes antRotate': { to: { transform: 'rotate(360deg)' } },
    '.ant-spin-rtl .ant-spin-dot-spin': {
        transform: 'rotate(-45deg)',
        animationName: 'antRotateRtl'
    },
    '@keyframes antRotateRtl': { to: { transform: 'rotate(-405deg)' } },
    '.ant-statistic': {
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontFeatureSettings: '"tnum"'
    },
    '.ant-statistic-title': {
        marginBottom: '4px',
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px'
    },
    '.ant-statistic-skeleton': { paddingTop: '16px' },
    '.ant-statistic-content': {
        color: 'var(--heading-color)',
        fontSize: '24px',
        fontFamily: 'Montserrat,sans-serif'
    },
    '.ant-statistic-content-value': { display: 'inline-block', direction: 'ltr' },
    '.ant-select-tree-checkbox-rtl,.ant-statistic-rtl,.ant-steps-rtl,.ant-switch-rtl,.ant-table-rtl,.ant-table-wrapper-rtl,.ant-tabs-dropdown-rtl,.ant-tabs-rtl,.ant-tag.ant-tag-rtl,.ant-timeline-rtl,.ant-tooltip-rtl,.ant-transfer-rtl,.ant-tree .ant-tree-treenode-rtl,.ant-tree-checkbox-rtl,.ant-tree-rtl,.ant-tree-select-dropdown-rtl,.ant-typography-rtl,.ant-upload-list-rtl,.ant-upload-rtl': {
        direction: 'rtl'
    },
    '.ant-statistic-content-prefix,.ant-statistic-content-suffix': {
        display: 'inline-block'
    },
    '.ant-statistic-content-prefix': { marginRight: '4px' },
    '.ant-statistic-content-suffix': { marginLeft: '4px' },
    '.ant-statistic-rtl .ant-statistic-content-prefix': {
        marginRight: '0',
        marginLeft: '4px'
    },
    '.ant-statistic-rtl .ant-statistic-content-suffix': {
        marginRight: '4px',
        marginLeft: '0'
    },
    '.ant-steps': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        display: 'flex',
        width: '100%',
        fontSize: '0',
        textAlign: 'initial'
    },
    '.ant-steps-item': {
        position: 'relative',
        display: 'inline-block',
        flex: 1,
        overflow: 'hidden',
        verticalAlign: 'top'
    },
    '.ant-steps-item-container': { outline: '0' },
    '.ant-steps-item:last-child': { flex: 'none' },
    '.ant-steps-item:last-child>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after,.ant-steps-item:last-child>.ant-steps-item-container>.ant-steps-item-tail': {
        display: 'none'
    },
    '.ant-steps-item-content,.ant-steps-item-icon': {
        display: 'inline-block',
        verticalAlign: 'top'
    },
    '.ant-steps-item-icon': {
        width: '32px',
        height: '32px',
        margin: '0 8px 0 0',
        fontSize: '18px',
        fontFamily: 'Montserrat,sans-serif',
        lineHeight: '32px',
        textAlign: 'center',
        border: '1px solid rgba(0,0,0,.25)',
        borderRadius: '32px',
        transition: 'background-color .3s,border-color .3s'
    },
    '.ant-steps-item-icon .ant-steps-icon': {
        position: 'relative',
        top: '-.5px',
        color: 'var(--ant-primary-color)',
        lineHeight: 1
    },
    '.ant-steps-item-tail': {
        position: 'absolute',
        top: '12px',
        left: '0',
        width: '100%',
        padding: '0 10px'
    },
    '.ant-steps-item-tail::after': {
        display: 'inline-block',
        width: '100%',
        height: '1px',
        background: '#f0f0f0',
        borderRadius: '1px',
        transition: 'background .3s',
        content: '""'
    },
    '.ant-steps-item-title': {
        position: 'relative',
        display: 'inline-block',
        paddingRight: '16px',
        color: 'var(--text-main-color)',
        fontSize: '18px',
        lineHeight: '50px'
    },
    '.ant-steps-item-description,.ant-steps-item-subtitle': {
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px'
    },
    '.ant-steps-item-title::after': {
        position: 'absolute',
        top: '25px',
        left: '100%',
        display: 'block',
        width: '9999px',
        height: '1px',
        background: '#f0f0f0',
        content: '""'
    },
    '.ant-steps-item-subtitle': {
        display: 'inline',
        marginLeft: '8px',
        fontWeight: 400
    },
    '.ant-steps-item-wait .ant-steps-item-icon': {
        backgroundColor: 'var(--background-color)',
        borderColor: 'rgba(0,0,0,.25)'
    },
    '.ant-steps-item-wait .ant-steps-item-icon>.ant-steps-icon': {
        color: 'rgba(0,0,0,.25)'
    },
    '.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title': {
        color: 'rgba(0,0,0,.45)'
    },
    '.ant-steps-item-wait .ant-steps-item-icon>.ant-steps-icon .ant-steps-icon-dot': {
        background: 'rgba(0,0,0,.25)'
    },
    '.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after,.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-tail::after': {
        backgroundColor: '#f0f0f0'
    },
    '.ant-steps-item-process .ant-steps-item-icon': {
        backgroundColor: 'var(--background-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon .ant-steps-icon-dot': {
        background: 'var(--ant-primary-color)'
    },
    '.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after,.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-tail::after': {
        backgroundColor: '#f0f0f0'
    },
    '.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title': {
        color: 'var(--heading-color)'
    },
    '.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description': {
        color: 'var(--text-main-color)'
    },
    '.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-icon': {
        background: 'var(--ant-primary-color)'
    },
    '.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-icon .ant-steps-icon': {
        color: '#fff'
    },
    '.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-title': {
        fontWeight: 500
    },
    '.ant-steps-item-finish .ant-steps-item-icon': {
        backgroundColor: 'var(--background-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after,.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-tail::after': {
        backgroundColor: 'var(--ant-primary-color)'
    },
    '.ant-steps-item-finish .ant-steps-item-icon>.ant-steps-icon': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title,.ant-switch': {
        color: 'var(--text-main-color)'
    },
    '.ant-steps-item-finish .ant-steps-item-icon>.ant-steps-icon .ant-steps-icon-dot': {
        background: 'var(--ant-primary-color)'
    },
    '.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description': {
        color: 'rgba(0,0,0,.45)'
    },
    '.ant-steps-item-error .ant-steps-item-icon>.ant-steps-icon,.ant-steps-item-error>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-error>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title': {
        color: 'var(--ant-error-color)'
    },
    '.ant-steps-item-error .ant-steps-item-icon': {
        backgroundColor: 'var(--background-color)',
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-steps-item-error .ant-steps-item-icon>.ant-steps-icon .ant-steps-icon-dot': {
        background: 'var(--ant-error-color)'
    },
    '.ant-steps-item-error>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after,.ant-steps-item-error>.ant-steps-item-container>.ant-steps-item-tail::after': {
        backgroundColor: '#f0f0f0'
    },
    '.ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process)>.ant-steps-item-container[role=button]:hover .ant-steps-item-icon .ant-steps-icon,.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button]:hover .ant-steps-item-description,.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button]:hover .ant-steps-item-subtitle,.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button]:hover .ant-steps-item-title,.ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-steps-item.ant-steps-next-error .ant-steps-item-title::after': {
        background: 'var(--ant-error-color)'
    },
    '.ant-steps-item-disabled': { cursor: 'not-allowed' },
    '.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button],.ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role=button],.ant-switch': {
        cursor: 'pointer'
    },
    '.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button] .ant-steps-item-description,.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button] .ant-steps-item-icon .ant-steps-icon,.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button] .ant-steps-item-subtitle,.ant-steps .ant-steps-item:not(.ant-steps-item-active)>.ant-steps-item-container[role=button] .ant-steps-item-title': {
        transition: 'color .3s'
    },
    '.ant-steps .ant-steps-item:not(.ant-steps-item-active):not(.ant-steps-item-process)>.ant-steps-item-container[role=button]:hover .ant-steps-item-icon': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item': {
        paddingLeft: '16px',
        whiteSpace: 'nowrap'
    },
    '.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:first-child': {
        paddingLeft: '0'
    },
    '.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title': {
        paddingRight: '0'
    },
    '.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-tail': {
        display: 'none'
    },
    '.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-description': {
        maxWidth: '140px',
        whiteSpace: 'normal'
    },
    '.ant-steps-item-custom>.ant-steps-item-container>.ant-steps-item-icon': {
        height: 'auto',
        background: '0 0',
        border: '0'
    },
    '.ant-steps-item-custom>.ant-steps-item-container>.ant-steps-item-icon>.ant-steps-icon': {
        top: '0',
        left: '.5px',
        width: '32px',
        height: '32px',
        fontSize: '24px',
        lineHeight: '32px'
    },
    '.ant-steps:not(.ant-steps-vertical) .ant-steps-item-custom .ant-steps-item-icon': {
        width: 'auto',
        background: '0 0'
    },
    '.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item': {
        paddingLeft: '12px'
    },
    '.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:first-child': {
        paddingLeft: '0'
    },
    '.ant-steps-small .ant-steps-item-icon': {
        width: '24px',
        height: '24px',
        margin: '0 8px 0 0',
        fontSize: '14px',
        lineHeight: '24px',
        textAlign: 'center',
        borderRadius: '24px'
    },
    '.ant-steps-small .ant-steps-item-title': {
        paddingRight: '12px',
        fontSize: '16px',
        lineHeight: '24px'
    },
    '.ant-steps-small .ant-steps-item-title::after': { top: '12px' },
    '.ant-steps-small .ant-steps-item-description': {
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px'
    },
    '.ant-steps-small .ant-steps-item-tail': { top: '8px' },
    '.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon': {
        width: 'inherit',
        height: 'inherit',
        lineHeight: 'inherit',
        background: '0 0',
        border: '0',
        borderRadius: '0'
    },
    '.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon>.ant-steps-icon': {
        fontSize: '24px',
        lineHeight: '24px',
        transform: 'none'
    },
    '.ant-steps-vertical': { display: 'flex' },
    '.ant-steps-vertical>.ant-steps-item': {
        display: 'block',
        flex: '1 0 auto',
        paddingLeft: '0',
        overflow: 'visible'
    },
    '.ant-steps-vertical>.ant-steps-item .ant-steps-item-icon': {
        cssFloat: 'left',
        marginRight: '16px'
    },
    '.ant-steps-vertical>.ant-steps-item .ant-steps-item-content': {
        display: 'block',
        minHeight: '48px',
        overflow: 'hidden'
    },
    '.ant-steps-vertical>.ant-steps-item .ant-steps-item-title': {
        lineHeight: '32px'
    },
    '.ant-steps-vertical>.ant-steps-item .ant-steps-item-description': {
        paddingBottom: '12px'
    },
    '.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail': {
        position: 'absolute',
        top: '0',
        left: '15px',
        width: '1px',
        height: '100%',
        padding: '38px 0 6px'
    },
    '.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail::after': {
        width: '1px',
        height: '100%'
    },
    '.ant-steps-vertical>.ant-steps-item:not(:last-child)>.ant-steps-item-container>.ant-steps-item-tail': {
        display: 'block'
    },
    '.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after': {
        display: 'none'
    },
    '.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-tail': {
        position: 'absolute',
        top: '0',
        left: '11px',
        padding: '30px 0 6px'
    },
    '.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-title': {
        lineHeight: '24px'
    },
    '.ant-steps-label-vertical .ant-steps-item': { overflow: 'visible' },
    '.ant-steps-label-vertical .ant-steps-item-tail': {
        marginLeft: '58px',
        padding: '3.5px 24px'
    },
    '.ant-steps-label-vertical .ant-steps-item-content': {
        display: 'block',
        width: '116px',
        marginTop: '8px',
        textAlign: 'center'
    },
    '.ant-steps-label-vertical .ant-steps-item-icon': {
        display: 'inline-block',
        marginLeft: '42px'
    },
    '.ant-steps-label-vertical .ant-steps-item-title': {
        paddingRight: '0',
        paddingLeft: '0'
    },
    '.ant-steps-label-vertical .ant-steps-item-title::after': { display: 'none' },
    '.ant-steps-label-vertical .ant-steps-item-subtitle': {
        display: 'block',
        marginBottom: '4px',
        marginLeft: '0',
        lineHeight: 1.5715
    },
    '.ant-steps-label-vertical.ant-steps-small:not(.ant-steps-dot) .ant-steps-item-icon': {
        marginLeft: '46px'
    },
    '.ant-steps-dot .ant-steps-item-title,.ant-steps-dot.ant-steps-small .ant-steps-item-title': {
        lineHeight: 1.5715
    },
    '.ant-steps-dot .ant-steps-item-tail,.ant-steps-dot.ant-steps-small .ant-steps-item-tail': {
        top: '2px',
        width: '100%',
        margin: '0 0 0 70px',
        padding: '0'
    },
    '.ant-steps-dot .ant-steps-item-tail::after,.ant-steps-dot.ant-steps-small .ant-steps-item-tail::after': {
        width: 'calc(100% - 20px)',
        height: '3px',
        marginLeft: '12px'
    },
    '.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot,.ant-steps-dot.ant-steps-small .ant-steps-item:first-child .ant-steps-icon-dot': {
        left: '2px'
    },
    '.ant-steps-dot .ant-steps-item-icon,.ant-steps-dot.ant-steps-small .ant-steps-item-icon': {
        width: '8px',
        height: '8px',
        marginLeft: '67px',
        paddingRight: '0',
        lineHeight: '8px',
        background: '0 0',
        border: '0'
    },
    '.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot': {
        position: 'relative',
        cssFloat: 'left',
        width: '100%',
        height: '100%',
        borderRadius: '100px',
        transition: 'all .3s'
    },
    '.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot::after,.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot::after': {
        position: 'absolute',
        top: '-12px',
        left: '-26px',
        width: '60px',
        height: '32px',
        background: 'rgba(0,0,0,.001)',
        content: '""'
    },
    '.ant-steps-dot .ant-steps-item-content,.ant-steps-dot.ant-steps-small .ant-steps-item-content': {
        width: '140px'
    },
    '.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon,.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-item-icon': {
        position: 'relative',
        top: '-1px',
        width: '10px',
        height: '10px',
        lineHeight: '10px',
        background: '0 0'
    },
    '.ant-steps-dot .ant-steps-item-process .ant-steps-icon:first-child .ant-steps-icon-dot,.ant-steps-dot.ant-steps-small .ant-steps-item-process .ant-steps-icon:first-child .ant-steps-icon-dot': {
        left: '0'
    },
    '.ant-steps-vertical.ant-steps-dot .ant-steps-item-icon': {
        marginTop: '13px',
        marginLeft: '0',
        background: '0 0'
    },
    '.ant-steps-vertical.ant-steps-dot .ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail': {
        top: '6.5px',
        left: '-9px',
        margin: '0',
        padding: '22px 0 4px'
    },
    '.ant-steps-vertical.ant-steps-dot.ant-steps-small .ant-steps-item-icon': {
        marginTop: '10px'
    },
    '.ant-steps-vertical.ant-steps-dot.ant-steps-small .ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail': {
        top: '3.5px'
    },
    '.ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot': {
        left: '0'
    },
    '.ant-steps-vertical.ant-steps-dot .ant-steps-item-content': {
        width: 'inherit'
    },
    '.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-item-container .ant-steps-item-icon .ant-steps-icon-dot': {
        top: '-1px',
        left: '-1px'
    },
    '.ant-steps-navigation': { paddingTop: '12px' },
    '.ant-steps-navigation.ant-steps-small .ant-steps-item-container': {
        marginLeft: '-12px'
    },
    '.ant-steps-navigation .ant-steps-item': {
        overflow: 'visible',
        textAlign: 'center'
    },
    '.ant-steps-navigation .ant-steps-item-container': {
        display: 'inline-block',
        height: '100%',
        marginLeft: '-16px',
        paddingBottom: '12px',
        textAlign: 'left',
        transition: 'opacity .3s'
    },
    '.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title::after,.ant-steps-navigation .ant-steps-item:last-child::after': {
        display: 'none'
    },
    '.ant-steps-navigation .ant-steps-item-container .ant-steps-item-content': {
        maxWidth: 'auto'
    },
    '.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title': {
        maxWidth: '100%',
        paddingRight: '0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-steps-navigation .ant-steps-item:not(.ant-steps-item-active) .ant-steps-item-container[role=button]:hover': {
        opacity: 0.85
    },
    '.ant-steps-navigation .ant-steps-item:last-child': { flex: 1 },
    '.ant-steps-navigation .ant-steps-item::after': {
        position: 'absolute',
        top: '50%',
        left: '100%',
        display: 'inline-block',
        width: '12px',
        height: '12px',
        marginTop: '-14px',
        marginLeft: '-2px',
        border: '1px solid rgba(0,0,0,.25)',
        borderBottom: 'none',
        borderLeft: 'none',
        transform: 'rotate(45deg)',
        content: '""'
    },
    '.ant-steps-navigation .ant-steps-item::before': {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        display: 'inline-block',
        width: '0',
        height: '2px',
        backgroundColor: 'var(--ant-primary-color)',
        transition: 'width .3s,left .3s',
        transitionTimingFunction: 'ease-out',
        content: '""'
    },
    '.ant-steps-navigation .ant-steps-item.ant-steps-item-active::before': {
        left: '0',
        width: '100%'
    },
    '.ant-steps-navigation.ant-steps-vertical>.ant-steps-item': {
        marginRight: '0 !important' as any
    },
    '.ant-steps-navigation.ant-steps-vertical>.ant-steps-item::before': {
        display: 'none'
    },
    '.ant-steps-navigation.ant-steps-vertical>.ant-steps-item.ant-steps-item-active::before': {
        top: '0',
        right: '0',
        left: 'unset',
        display: 'block',
        width: '3px',
        height: 'calc(100% - 24px)'
    },
    '.ant-steps-navigation.ant-steps-vertical>.ant-steps-item::after': {
        position: 'relative',
        top: '-2px',
        left: '50%',
        display: 'block',
        width: '8px',
        height: '8px',
        marginBottom: '8px',
        textAlign: 'center',
        transform: 'rotate(135deg)'
    },
    '.ant-steps-navigation.ant-steps-horizontal>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail,.ant-steps-navigation.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail': {
        visibility: 'hidden'
    },
    '.ant-steps.ant-steps-rtl .ant-steps-item-icon': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-steps-rtl .ant-steps-item-tail': { right: '0', left: 'auto' },
    '.ant-steps-rtl .ant-steps-item-title': {
        paddingRight: '0',
        paddingLeft: '16px'
    },
    '.ant-steps-rtl .ant-steps-item-title .ant-steps-item-subtitle': {
        cssFloat: 'left',
        marginRight: '8px',
        marginLeft: '0'
    },
    '.ant-steps-rtl .ant-steps-item-title::after': {
        right: '100%',
        left: 'auto'
    },
    '.ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item': {
        paddingRight: '16px',
        paddingLeft: '0'
    },
    '.ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:first-child': {
        paddingRight: '0'
    },
    '.ant-steps-rtl.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title': {
        paddingLeft: '0'
    },
    '.ant-steps-rtl .ant-steps-item-custom .ant-steps-item-icon>.ant-steps-icon': {
        right: '.5px',
        left: 'auto'
    },
    '.ant-steps-rtl.ant-steps-navigation.ant-steps-small .ant-steps-item-container': {
        marginRight: '-12px',
        marginLeft: '0'
    },
    '.ant-steps-rtl.ant-steps-navigation .ant-steps-item-container': {
        marginRight: '-16px',
        marginLeft: '0',
        textAlign: 'right'
    },
    '.ant-steps-rtl.ant-steps-navigation .ant-steps-item-container .ant-steps-item-title': {
        paddingLeft: '0'
    },
    '.ant-steps-rtl.ant-steps-navigation .ant-steps-item::after': {
        right: '100%',
        left: 'auto',
        marginRight: '-2px',
        marginLeft: '0',
        transform: 'rotate(225deg)'
    },
    '.ant-steps-rtl.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item': {
        paddingRight: '12px',
        paddingLeft: '0'
    },
    '.ant-steps-rtl.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:first-child': {
        paddingRight: '0'
    },
    '.ant-steps-rtl.ant-steps-small .ant-steps-item-title': {
        paddingRight: '0',
        paddingLeft: '12px'
    },
    '.ant-steps-rtl.ant-steps-vertical>.ant-steps-item .ant-steps-item-icon': {
        cssFloat: 'right',
        marginRight: '0',
        marginLeft: '16px'
    },
    '.ant-steps-rtl.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail': {
        right: '16px',
        left: 'auto'
    },
    '.ant-steps-rtl.ant-steps-vertical.ant-steps-small .ant-steps-item-container .ant-steps-item-tail': {
        right: '12px',
        left: 'auto'
    },
    '.ant-steps-rtl.ant-steps-label-vertical .ant-steps-item-title': {
        paddingLeft: '0'
    },
    '.ant-steps-rtl.ant-steps-dot .ant-steps-item-tail,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-tail': {
        margin: '0 70px 0 0'
    },
    '.ant-steps-rtl.ant-steps-dot .ant-steps-item-tail::after,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-tail::after': {
        marginRight: '12px',
        marginLeft: '0'
    },
    '.ant-steps-rtl.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item:first-child .ant-steps-icon-dot': {
        right: '2px',
        left: 'auto'
    },
    '.ant-steps-rtl.ant-steps-dot .ant-steps-item-icon,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon': {
        marginRight: '67px',
        marginLeft: '0'
    },
    '.ant-steps-rtl.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot': {
        cssFloat: 'right'
    },
    '.ant-steps-rtl.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot::after,.ant-steps-rtl.ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot::after': {
        right: '-26px',
        left: 'auto'
    },
    '.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item-icon': {
        marginRight: '0',
        marginLeft: '16px'
    },
    '.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail': {
        right: '-9px',
        left: 'auto'
    },
    '.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot': {
        right: '0',
        left: 'auto'
    },
    '.ant-steps-rtl.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-icon-dot': {
        right: '-2px',
        left: 'auto'
    },
    '.ant-steps-rtl.ant-steps-with-progress.ant-steps-vertical>.ant-steps-item': {
        paddingRight: '4px'
    },
    '.ant-steps-rtl.ant-steps-with-progress.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail': {
        right: '19px'
    },
    '.ant-steps-rtl.ant-steps-with-progress.ant-steps-small.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail': {
        right: '15px'
    },
    '.ant-steps-rtl.ant-steps-with-progress.ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item:first-child': {
        paddingRight: '4px',
        paddingLeft: '0'
    },
    '.ant-steps-rtl.ant-steps-with-progress.ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item:first-child.ant-steps-item-active': {
        paddingRight: '4px'
    },
    '.ant-steps-with-progress .ant-steps-item': { paddingTop: '4px' },
    '.ant-steps-with-progress .ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail': {
        top: '4px',
        left: '19px'
    },
    '.ant-steps-with-progress.ant-steps-horizontal .ant-steps-item:first-child,.ant-steps-with-progress.ant-steps-small.ant-steps-horizontal .ant-steps-item:first-child': {
        paddingBottom: '4px',
        paddingLeft: '4px'
    },
    '.ant-steps-with-progress.ant-steps-small>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail': {
        left: '15px'
    },
    '.ant-steps-with-progress.ant-steps-vertical .ant-steps-item': {
        paddingLeft: '4px'
    },
    '.ant-steps-with-progress.ant-steps-label-vertical .ant-steps-item .ant-steps-item-tail': {
        top: '14px !important' as any
    },
    '.ant-steps-with-progress .ant-steps-item-icon': { position: 'relative' },
    '.ant-steps-with-progress .ant-steps-item-icon .ant-progress': {
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        bottom: '-5px',
        left: '-5px'
    },
    '.ant-switch': {
        margin: '0',
        padding: '0',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'relative',
        display: 'inline-block',
        boxSizing: 'border-box',
        minWidth: '44px',
        height: '22px',
        lineHeight: '22px',
        backgroundColor: 'rgba(0,0,0,.25)',
        border: '0',
        borderRadius: '100px',
        transition: 'all .2s',
        userSelect: 'none'
    },
    '.ant-switch:focus': { outline: '0', boxShadow: '0 0 0 2px rgba(0,0,0,.1)' },
    '.ant-switch-checked:focus': { boxShadow: '0 0 0 2px var(--ant-primary-1)' },
    '.ant-switch:focus:hover': { boxShadow: 'none' },
    '.ant-switch-checked': { backgroundColor: 'var(--ant-primary-color)' },
    '.ant-switch-disabled,.ant-switch-loading': {
        cursor: 'not-allowed',
        opacity: 0.4
    },
    '.ant-switch-disabled *,.ant-switch-loading *': {
        boxShadow: 'none',
        cursor: 'not-allowed'
    },
    '.ant-switch-inner': {
        display: 'block',
        margin: '0 7px 0 25px',
        color: '#fff',
        fontSize: '14px',
        transition: 'margin .2s'
    },
    '.ant-table-wrapper::after,.ant-table-wrapper::before': {
        display: 'table',
        content: '""'
    },
    '.ant-switch-handle,.ant-switch-handle::before': {
        position: 'absolute',
        transition: 'all .2s ease-in-out'
    },
    '.ant-switch-checked .ant-switch-inner': { margin: '0 25px 0 7px' },
    '.ant-switch-handle': {
        top: '2px',
        left: '2px',
        width: '18px',
        height: '18px'
    },
    '.ant-switch-handle::before': {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        backgroundColor: 'var(--background-color)',
        borderRadius: '9px',
        boxShadow: '0 2px 4px 0 rgba(0,35,11,.2)',
        content: '""'
    },
    '.ant-switch-checked .ant-switch-handle': { left: 'calc(100% - 18px - 2px)' },
    '.ant-switch:not(.ant-switch-disabled):active .ant-switch-handle::before': {
        right: '-30%',
        left: '0'
    },
    '.ant-switch:not(.ant-switch-disabled):active.ant-switch-checked .ant-switch-handle::before': {
        right: '0',
        left: '-30%'
    },
    '.ant-switch-loading-icon.anticon': {
        position: 'relative',
        top: '1px',
        color: 'rgba(0,0,0,.65)',
        verticalAlign: 'top'
    },
    '.ant-switch-checked .ant-switch-loading-icon': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-switch-small': { minWidth: '28px', height: '16px', lineHeight: '16px' },
    '.ant-table,.ant-table-filter-dropdown': {
        lineHeight: 1.5715,
        fontFeatureSettings: '"tnum"',
        listStyle: 'none',
        boxSizing: 'border-box',
        fontVariant: 'tabular-nums'
    },
    '.ant-switch-small .ant-switch-inner': {
        margin: '0 5px 0 18px',
        fontSize: '14px'
    },
    '.ant-switch-small .ant-switch-handle': { width: '12px', height: '12px' },
    '.ant-switch-small .ant-switch-loading-icon': {
        top: '1.5px',
        fontSize: '9px'
    },
    '.ant-table,.ant-table.ant-table-middle,.ant-table.ant-table-small': {
        fontSize: '16px'
    },
    '.ant-switch-small.ant-switch-checked .ant-switch-inner': {
        margin: '0 18px 0 5px'
    },
    '.ant-switch-small.ant-switch-checked .ant-switch-handle': {
        left: 'calc(100% - 12px - 2px)'
    },
    '.ant-switch-rtl .ant-switch-inner': { margin: '0 25px 0 7px' },
    '.ant-switch-rtl .ant-switch-handle': { right: '2px', left: 'auto' },
    '.ant-switch-rtl:not(.ant-switch-rtl-disabled):active .ant-switch-handle::before': {
        right: '0',
        left: '-30%'
    },
    '.ant-switch-rtl:not(.ant-switch-rtl-disabled):active.ant-switch-checked .ant-switch-handle::before': {
        right: '-30%',
        left: '0'
    },
    '.ant-switch-rtl.ant-switch-checked .ant-switch-inner': {
        margin: '0 7px 0 25px'
    },
    '.ant-switch-rtl.ant-switch-checked .ant-switch-handle': {
        right: 'calc(100% - 18px - 2px)'
    },
    '.ant-switch-rtl.ant-switch-small.ant-switch-checked .ant-switch-handle': {
        right: 'calc(100% - 12px - 2px)'
    },
    '.ant-table.ant-table-middle .ant-table-footer,.ant-table.ant-table-middle .ant-table-tbody>tr>td,.ant-table.ant-table-middle .ant-table-thead>tr>th,.ant-table.ant-table-middle .ant-table-title,.ant-table.ant-table-middle tfoot>tr>td,.ant-table.ant-table-middle tfoot>tr>th': {
        padding: '12px 8px'
    },
    '.ant-table.ant-table-middle .ant-table-filter-trigger': {
        marginRight: '-4px'
    },
    '.ant-table.ant-table-middle .ant-table-expanded-row-fixed': {
        margin: '-12px -8px'
    },
    '.ant-table.ant-table-middle .ant-table-tbody .ant-table-wrapper:only-child .ant-table': {
        margin: '-12px -8px -12px 40px'
    },
    '.ant-table.ant-table-middle .ant-table-selection-column': {
        paddingInlineStart: '2px'
    },
    '.ant-table.ant-table-small .ant-table-footer,.ant-table.ant-table-small .ant-table-tbody>tr>td,.ant-table.ant-table-small .ant-table-thead>tr>th,.ant-table.ant-table-small .ant-table-title,.ant-table.ant-table-small tfoot>tr>td,.ant-table.ant-table-small tfoot>tr>th': {
        padding: '8px'
    },
    '.ant-table.ant-table-small .ant-table-filter-trigger': {
        marginRight: '-4px'
    },
    '.ant-table.ant-table-small .ant-table-expanded-row-fixed': {
        margin: '-8px'
    },
    '.ant-table.ant-table-small .ant-table-tbody .ant-table-wrapper:only-child .ant-table': {
        margin: '-8px -8px -8px 40px'
    },
    '.ant-table.ant-table-small .ant-table-selection-column': {
        paddingInlineStart: '2px'
    },
    '.ant-table.ant-table-bordered>.ant-table-title': {
        border: '1px solid #b3cbe1',
        borderBottom: '0'
    },
    '.ant-table-thead>tr>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>thead>tr:not(:last-child)>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>thead>tr:not(:last-child)>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>thead>tr:not(:last-child)>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>thead>tr:not(:last-child)>th': {
        borderBottom: '1px solid #b3cbe1'
    },
    '.ant-table.ant-table-bordered>.ant-table-container': {
        borderLeft: '1px solid #b3cbe1'
    },
    '.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>tbody>tr>td,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>tfoot>tr>td,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>tfoot>tr>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>thead>tr>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>tbody>tr>td,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>tfoot>tr>td,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>tfoot>tr>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>thead>tr>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>tbody>tr>td,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>tfoot>tr>td,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>tfoot>tr>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>thead>tr>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>tbody>tr>td,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>tfoot>tr>td,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>tfoot>tr>th,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>thead>tr>th': {
        borderRight: '1px solid #b3cbe1'
    },
    '.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>thead>tr>th::before,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>thead>tr>th::before,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>thead>tr>th::before,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>thead>tr>th::before': {
        backgroundColor: 'transparent !important' as any
    },
    '.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>tbody>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>tfoot>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>thead>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>tbody>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>tfoot>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>thead>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>tbody>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>tfoot>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>thead>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>tbody>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>tfoot>tr>.ant-table-cell-fix-right-first::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>thead>tr>.ant-table-cell-fix-right-first::after': {
        borderRight: '1px solid #b3cbe1'
    },
    '.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>tbody>tr>td>.ant-table-expanded-row-fixed,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>tbody>tr>td>.ant-table-expanded-row-fixed,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>tbody>tr>td>.ant-table-expanded-row-fixed,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>tbody>tr>td>.ant-table-expanded-row-fixed': {
        margin: '-16px -17px'
    },
    '.ant-table.ant-table-bordered>.ant-table-container>.ant-table-body>table>tbody>tr>td>.ant-table-expanded-row-fixed::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table>tbody>tr>td>.ant-table-expanded-row-fixed::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table>tbody>tr>td>.ant-table-expanded-row-fixed::after,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-summary>table>tbody>tr>td>.ant-table-expanded-row-fixed::after': {
        position: 'absolute',
        top: '0',
        right: '1px',
        bottom: '0',
        borderRight: '1px solid #b3cbe1',
        content: '""'
    },
    '.ant-table.ant-table-bordered>.ant-table-container>.ant-table-content>table,.ant-table.ant-table-bordered>.ant-table-container>.ant-table-header>table': {
        borderTop: '1px solid #b3cbe1'
    },
    '.ant-table.ant-table-bordered.ant-table-scroll-horizontal>.ant-table-container>.ant-table-body>table>tbody>tr.ant-table-expanded-row>td,.ant-table.ant-table-bordered.ant-table-scroll-horizontal>.ant-table-container>.ant-table-body>table>tbody>tr.ant-table-placeholder>td': {
        borderRight: '0'
    },
    '.ant-table.ant-table-bordered.ant-table-middle>.ant-table-container>.ant-table-body>table>tbody>tr>td>.ant-table-expanded-row-fixed,.ant-table.ant-table-bordered.ant-table-middle>.ant-table-container>.ant-table-content>table>tbody>tr>td>.ant-table-expanded-row-fixed': {
        margin: '-12px -9px'
    },
    '.ant-table.ant-table-bordered.ant-table-small>.ant-table-container>.ant-table-body>table>tbody>tr>td>.ant-table-expanded-row-fixed,.ant-table.ant-table-bordered.ant-table-small>.ant-table-container>.ant-table-content>table>tbody>tr>td>.ant-table-expanded-row-fixed': {
        margin: '-8px -9px'
    },
    '.ant-table.ant-table-bordered>.ant-table-footer': {
        border: '1px solid #b3cbe1',
        borderTop: '0'
    },
    '.ant-table,.ant-table table,.ant-table-tbody>tr>td>.ant-table-expanded-row-fixed>.ant-table-wrapper:only-child .ant-table-tbody>tr:last-child>td:first-child,.ant-table-tbody>tr>td>.ant-table-expanded-row-fixed>.ant-table-wrapper:only-child .ant-table-tbody>tr:last-child>td:last-child,.ant-table-tbody>tr>td>.ant-table-wrapper:only-child .ant-table-tbody>tr:last-child>td:first-child,.ant-table-tbody>tr>td>.ant-table-wrapper:only-child .ant-table-tbody>tr:last-child>td:last-child': {
        borderRadius: '0'
    },
    '.ant-table-cell .ant-table-container:first-child': { borderTop: '0' },
    '.ant-table-cell-scrollbar:not([rowspan])': {
        boxShadow: '0 1px 0 1px rgba(1,80,154,.05)'
    },
    '.ant-table-wrapper': { clear: 'both', maxWidth: '100%' },
    '.ant-table-wrapper::after': { clear: 'both' },
    '.ant-table': {
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        position: 'relative',
        background: 'var(--background-color)'
    },
    '.ant-table-footer,.ant-table-thead>tr>th': {
        color: 'var(--heading-color)',
        background: 'rgba(1,80,154,.05)'
    },
    '.ant-table table': {
        width: '100%',
        textAlign: 'left',
        borderCollapse: 'separate',
        borderSpacing: '0'
    },
    '.ant-table tfoot>tr>td,.ant-table tfoot>tr>th,.ant-table-tbody>tr>td,.ant-table-thead>tr>th': {
        position: 'relative',
        padding: '16px',
        overflowWrap: 'break-word'
    },
    '.ant-table-cell-ellipsis': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        wordBreak: 'keep-all'
    },
    '.ant-table-cell-ellipsis.ant-table-cell-fix-left-last,.ant-table-cell-ellipsis.ant-table-cell-fix-right-first': {
        overflow: 'visible'
    },
    '.ant-table-cell-ellipsis.ant-table-cell-fix-left-last .ant-table-cell-content,.ant-table-cell-ellipsis.ant-table-cell-fix-right-first .ant-table-cell-content': {
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    '.ant-table-cell-ellipsis .ant-table-column-title': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordBreak: 'keep-all'
    },
    '.ant-table-footer,.ant-table-title': { padding: '16px' },
    '.ant-table-thead>tr>th': {
        position: 'relative',
        fontWeight: 500,
        textAlign: 'left',
        transition: 'background .3s ease'
    },
    '.ant-table-thead>tr>th[colspan]:not([colspan="1"])': { textAlign: 'center' },
    '.ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before': {
        position: 'absolute',
        top: '50%',
        right: '0',
        width: '1px',
        height: '1.6em',
        backgroundColor: 'rgba(0,0,0,.06)',
        transform: 'translateY(-50%)',
        transition: 'background-color .3s',
        content: '""'
    },
    '.ant-table-thead>tr:not(:last-child)>th[colspan]': { borderBottom: '0' },
    '.ant-table-tbody>tr>td': {
        borderBottom: '1px solid #b3cbe1',
        transition: 'background .3s'
    },
    '.ant-table-tbody>tr>td>.ant-table-expanded-row-fixed>.ant-table-wrapper:only-child .ant-table,.ant-table-tbody>tr>td>.ant-table-wrapper:only-child .ant-table': {
        margin: '-16px -16px -16px 32px'
    },
    '.ant-table-tbody>tr>td>.ant-table-expanded-row-fixed>.ant-table-wrapper:only-child .ant-table-tbody>tr:last-child>td,.ant-table-tbody>tr>td>.ant-table-wrapper:only-child .ant-table-tbody>tr:last-child>td': {
        borderBottom: '0'
    },
    '.ant-table-tbody>tr.ant-table-row:hover>td,.ant-table-tbody>tr>td.ant-table-cell-row-hover': {
        background: 'rgba(1,80,154,.05)'
    },
    '.ant-table-tbody>tr.ant-table-row-selected>td': {
        background: 'var(--ant-primary-1)',
        borderColor: 'rgba(0,0,0,.03)'
    },
    '.ant-table-tbody>tr.ant-table-row-selected:hover>td': {
        background: 'var(--ant-primary-color-active-deprecated-d-02)'
    },
    '.ant-table-summary': {
        position: 'relative',
        zIndex: 2,
        background: 'var(--background-color)'
    },
    'div.ant-table-summary': { boxShadow: '0 -1px 0 #b3cbe1' },
    '.ant-table-summary>tr>td,.ant-table-summary>tr>th': {
        borderBottom: '1px solid #b3cbe1'
    },
    '.ant-table-pagination.ant-pagination': { margin: '16px 0' },
    '.ant-table-pagination': { display: 'flex', flexWrap: 'wrap', rowGap: '8px' },
    '.ant-table-pagination>*': { flex: 'none' },
    '.ant-table-pagination-left': { justifyContent: 'flex-start' },
    '.ant-table-pagination-center': { justifyContent: 'center' },
    '.ant-table-pagination-right': { justifyContent: 'flex-end' },
    '.ant-table-thead th.ant-table-column-has-sorters': {
        outline: '0',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-table-thead th.ant-table-column-has-sorters:hover': {
        background: 'rgba(0,0,0,.04)'
    },
    '.ant-table-thead th.ant-table-column-has-sorters:hover::before': {
        backgroundColor: 'transparent !important' as any
    },
    '.ant-table-thead th.ant-table-column-has-sorters:focus-visible': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-table-thead th.ant-table-column-has-sorters.ant-table-cell-fix-left:hover,.ant-table-thead th.ant-table-column-has-sorters.ant-table-cell-fix-right:hover': {
        background: '#f5f5f5'
    },
    '.ant-table-thead th.ant-table-column-sort': {
        background: 'var(--background-base-color)'
    },
    '.ant-table-thead th.ant-table-column-sort::before': {
        backgroundColor: 'transparent !important' as any
    },
    'td.ant-table-column-sort': { background: '#fafafa' },
    '.ant-table-column-title': { position: 'relative', zIndex: 1, flex: 1 },
    '.ant-table-column-sorters': {
        display: 'flex',
        flex: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    '.ant-table-column-sorters::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100%',
        content: '""'
    },
    '.ant-table-column-sorter': {
        marginLeft: '4px',
        color: '#bfbfbf',
        fontSize: '0',
        transition: 'color .3s'
    },
    '.ant-table-column-sorter-inner': {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    '.ant-table-column-sorter-down,.ant-table-column-sorter-up': {
        fontSize: '11px'
    },
    '.ant-table-column-sorter-down.active,.ant-table-column-sorter-up.active': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-table-column-sorter-up+.ant-table-column-sorter-down': {
        marginTop: '-.3em'
    },
    '.ant-table-column-sorters:hover .ant-table-column-sorter': {
        color: '#a6a6a6'
    },
    '.ant-table-filter-column': {
        display: 'flex',
        justifyContent: 'space-between'
    },
    '.ant-table-filter-trigger': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        margin: '-4px -8px -4px 4px',
        padding: '0 4px',
        color: '#bfbfbf',
        fontSize: '14px',
        borderRadius: '7px',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-table-filter-trigger:hover': {
        color: 'rgba(0,0,0,.45)',
        background: 'rgba(0,0,0,.04)'
    },
    '.ant-table-filter-trigger.active': { color: 'var(--ant-primary-color)' },
    '.ant-table-filter-dropdown': {
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        minWidth: '120px',
        backgroundColor: 'var(--background-color)',
        borderRadius: '7px',
        boxShadow:
        '0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)'
    },
    '.ant-table-filter-dropdown .ant-dropdown-menu': {
        maxHeight: '264px',
        overflowX: 'hidden',
        border: '0',
        boxShadow: 'none'
    },
    '.ant-table-filter-dropdown .ant-dropdown-menu:empty::after': {
        display: 'block',
        padding: '8px 0',
        color: 'rgba(0,0,0,.25)',
        fontSize: '14px',
        textAlign: 'center',
        content: '"Not Found"'
    },
    '.ant-table-filter-dropdown-tree': { padding: '8px 8px 0' },
    '.ant-table-filter-dropdown-tree .ant-tree-treenode .ant-tree-node-content-wrapper:hover': {
        backgroundColor: 'var(--item-hover-bg)'
    },
    '.ant-table-filter-dropdown-tree .ant-tree-treenode-checkbox-checked .ant-tree-node-content-wrapper,.ant-table-filter-dropdown-tree .ant-tree-treenode-checkbox-checked .ant-tree-node-content-wrapper:hover': {
        backgroundColor: 'var(--ant-primary-2)'
    },
    '.ant-table-filter-dropdown-search': {
        padding: '8px',
        borderBottom: '1px #f0f0f0 solid'
    },
    '.ant-table-filter-dropdown-search-input input': { minWidth: '140px' },
    '.ant-table-filter-dropdown-search-input .anticon': {
        color: 'rgba(0,0,0,.25)'
    },
    '.ant-table-filter-dropdown-checkall': {
        width: '100%',
        marginBottom: '4px',
        marginLeft: '4px'
    },
    '.ant-table-filter-dropdown-submenu>ul': { maxHeight: 'calc(100vh - 130px)' },
    '.ant-table-filter-dropdown .ant-checkbox-wrapper+span,.ant-table-filter-dropdown-submenu .ant-checkbox-wrapper+span': {
        paddingLeft: '8px'
    },
    '.ant-table-filter-dropdown-btns': {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '7px 8px',
        overflow: 'hidden',
        backgroundColor: 'inherit',
        borderTop: '1px solid #b3cbe1'
    },
    '.ant-table-selection-col': { width: '32px' },
    '.ant-table-bordered .ant-table-selection-col': { width: '50px' },
    'table tr td.ant-table-selection-column,table tr th.ant-table-selection-column': {
        paddingRight: '8px',
        paddingLeft: '8px',
        textAlign: 'center'
    },
    'table tr td.ant-table-selection-column .ant-radio-wrapper,table tr th.ant-table-selection-column .ant-radio-wrapper': {
        marginRight: '0'
    },
    'table tr th.ant-table-selection-column.ant-table-cell-fix-left': {
        zIndex: 3
    },
    'table tr th.ant-table-selection-column::after': {
        backgroundColor: 'transparent !important' as any
    },
    '.ant-table-selection': {
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column'
    },
    '.ant-table-selection-extra': {
        position: 'absolute',
        top: '0',
        zIndex: 1,
        cursor: 'pointer',
        transition: 'all .3s',
        marginInlineStart: '100%',
        paddingInlineStart: '4px'
    },
    '.ant-table-selection-extra .anticon': { color: '#bfbfbf', fontSize: '10px' },
    '.ant-table-selection-extra .anticon:hover': { color: '#a6a6a6' },
    '.ant-table-expand-icon-col': { width: '48px' },
    '.ant-table-row-expand-icon-cell': { textAlign: 'center' },
    '.ant-table-row-expand-icon-cell .ant-table-row-expand-icon': {
        display: 'inline-flex',
        cssFloat: 'none',
        verticalAlign: 'sub'
    },
    '.ant-table-row-indent': { cssFloat: 'left', height: '1px' },
    '.ant-table-row-expand-icon': {
        outline: '0',
        cursor: 'pointer',
        position: 'relative',
        cssFloat: 'left',
        boxSizing: 'border-box',
        width: '21px',
        height: '21px',
        padding: '0',
        color: 'inherit',
        lineHeight: '21px',
        background: 'var(--background-color)',
        border: '1px solid #b3cbe1',
        borderRadius: '7px',
        transform: 'scale(.76190476)',
        transition: 'all .3s',
        userSelect: 'none'
    },
    '.ant-table-row-expand-icon:focus-visible,.ant-table-row-expand-icon:hover': {
        color: 'var(--ant-primary-color-hover)'
    },
    '.ant-table-row-expand-icon:active': {
        color: 'var(--ant-primary-color-active)'
    },
    '.ant-table-row-expand-icon:active,.ant-table-row-expand-icon:focus,.ant-table-row-expand-icon:hover': {
        borderColor: 'currentcolor'
    },
    '.ant-table-row-expand-icon::after,.ant-table-row-expand-icon::before': {
        position: 'absolute',
        background: 'currentcolor',
        transition: 'transform .3s ease-out',
        content: '""'
    },
    '.ant-table-row-expand-icon::before': {
        top: '9px',
        right: '3px',
        left: '3px',
        height: '1px'
    },
    '.ant-table-row-expand-icon::after': {
        top: '3px',
        bottom: '3px',
        left: '9px',
        width: '1px',
        transform: 'rotate(90deg)'
    },
    '.ant-table-row-expand-icon-collapsed::before': {
        transform: 'rotate(-180deg)'
    },
    '.ant-table-row-expand-icon-collapsed::after': { transform: 'rotate(0)' },
    '.ant-table-row-expand-icon-spaced': {
        background: '0 0',
        border: '0',
        visibility: 'hidden'
    },
    '.ant-table-row-expand-icon-spaced::after,.ant-table-row-expand-icon-spaced::before': {
        display: 'none',
        content: 'none'
    },
    '.ant-table-row-indent+.ant-table-row-expand-icon': {
        marginTop: '2.07px',
        marginRight: '8px'
    },
    'tr.ant-table-expanded-row:hover>td,tr.ant-table-expanded-row>td': {
        background: '#fbfbfb'
    },
    'tr.ant-table-expanded-row .ant-descriptions-view': { display: 'flex' },
    'tr.ant-table-expanded-row .ant-descriptions-view table': {
        flex: 'auto',
        width: 'auto'
    },
    '.ant-table .ant-table-expanded-row-fixed': {
        position: 'relative',
        margin: '-16px',
        padding: '16px'
    },
    '.ant-table-tbody>tr.ant-table-placeholder': { textAlign: 'center' },
    '.ant-table-empty .ant-table-tbody>tr.ant-table-placeholder': {
        color: 'rgba(0,0,0,.25)'
    },
    '.ant-table-tbody>tr.ant-table-placeholder:hover>td': {
        background: 'var(--background-color)'
    },
    '.ant-table-cell-fix-left,.ant-table-cell-fix-right': {
        position: 'sticky !important' as any,
        zIndex: 2,
        background: 'var(--background-color)'
    },
    '.ant-table .ant-table-container::after,.ant-table .ant-table-container::before,.ant-table-cell-fix-left-first::after,.ant-table-cell-fix-left-last::after,.ant-table-cell-fix-right-first::after,.ant-table-cell-fix-right-last::after': {
        position: 'absolute',
        transition: 'box-shadow .3s',
        width: '30px',
        top: '0',
        pointerEvents: 'none',
        content: '""'
    },
    '.ant-table-cell-fix-left-first::after,.ant-table-cell-fix-left-last::after': {
        right: '0',
        bottom: '-1px',
        transform: 'translateX(100%)'
    },
    '.ant-table-cell-fix-left-all::after': { display: 'none' },
    '.ant-table-cell-fix-right-first::after,.ant-table-cell-fix-right-last::after': {
        bottom: '-1px',
        left: '0',
        transform: 'translateX(-100%)'
    },
    '.ant-table .ant-table-container::after,.ant-table .ant-table-container::before': {
        bottom: '0',
        zIndex: 'calc(calc(2 + 1) + 1)'
    },
    '.ant-table .ant-table-container::before': { left: '0' },
    '.ant-table .ant-table-container::after': { right: '0' },
    '.ant-table-ping-left:not(.ant-table-has-fix-left)>.ant-table-container': {
        position: 'relative'
    },
    '.ant-table-ping-left .ant-table-cell-fix-left-first::after,.ant-table-ping-left .ant-table-cell-fix-left-last::after,.ant-table-ping-left:not(.ant-table-has-fix-left)>.ant-table-container::before': {
        boxShadow: 'inset 10px 0 8px -8px rgba(0,0,0,.15)'
    },
    '.ant-table-ping-left .ant-table-cell-fix-left-last::before': {
        backgroundColor: 'transparent !important' as any
    },
    '.ant-table-ping-right:not(.ant-table-has-fix-right)>.ant-table-container': {
        position: 'relative'
    },
    '.ant-table-ping-right .ant-table-cell-fix-right-first::after,.ant-table-ping-right .ant-table-cell-fix-right-last::after,.ant-table-ping-right:not(.ant-table-has-fix-right)>.ant-table-container::after': {
        boxShadow: 'inset -10px 0 8px -8px rgba(0,0,0,.15)'
    },
    '.ant-table-sticky-holder': {
        position: 'sticky',
        zIndex: 'calc(2 + 1)',
        background: 'var(--background-color)'
    },
    '.ant-table-sticky-scroll': {
        position: 'sticky',
        bottom: '0',
        zIndex: 'calc(2 + 1)',
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        borderTop: '1px solid #b3cbe1',
        opacity: 0.6
    },
    '.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-left::before,.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-right::after,.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-left::before,.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-right::after,.ant-tabs-left>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-bottom::after,.ant-tabs-left>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-top::before,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-bottom::after,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-top::before,.ant-tabs-right>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-bottom::after,.ant-tabs-right>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-top::before,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-bottom::after,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-top::before,.ant-tabs-top>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-left::before,.ant-tabs-top>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-right::after,.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-left::before,.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-right::after': {
        opacity: 1
    },
    '.ant-table-sticky-scroll:hover': { transformOrigin: 'center bottom' },
    '.ant-table-sticky-scroll-bar': {
        height: '8px',
        backgroundColor: 'rgba(0,0,0,.35)',
        borderRadius: '4px'
    },
    '.ant-table-container,.ant-table-title+.ant-table-container': {
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0'
    },
    '.ant-table-footer,.ant-table-title,.ant-table-title+.ant-table-container table,.ant-table-title+.ant-table-container table>thead>tr:first-child th:first-child,.ant-table-title+.ant-table-container table>thead>tr:first-child th:last-child': {
        borderRadius: '0'
    },
    '.ant-table-sticky-scroll-bar-active,.ant-table-sticky-scroll-bar:hover': {
        backgroundColor: 'rgba(0,0,0,.8)'
    },
    '.ant-table-container table>thead>tr:first-child th:first-child': {
        borderTopLeftRadius: '0'
    },
    '.ant-table-container table>thead>tr:first-child th:last-child': {
        borderTopRightRadius: '0'
    },
    '.ant-table-wrapper-rtl .ant-table table': { textAlign: 'right' },
    '.ant-table-wrapper-rtl .ant-table-thead>tr>th[colspan]:not([colspan="1"])': {
        textAlign: 'center'
    },
    '.ant-table-wrapper-rtl .ant-table-thead>tr>th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before': {
        right: 'auto',
        left: '0'
    },
    '.ant-table-wrapper-rtl .ant-table-thead>tr>th': { textAlign: 'right' },
    '.ant-table-tbody>tr .ant-table-wrapper:only-child .ant-table.ant-table-rtl': {
        margin: '-16px 36px -16px -16px'
    },
    '.ant-table-wrapper.ant-table-wrapper-rtl .ant-table-pagination-left': {
        justifyContent: 'flex-end'
    },
    '.ant-table-wrapper.ant-table-wrapper-rtl .ant-table-pagination-right': {
        justifyContent: 'flex-start'
    },
    '.ant-table-wrapper-rtl .ant-table-column-sorter': {
        marginRight: '4px',
        marginLeft: '0'
    },
    '.ant-table-wrapper-rtl .ant-table-filter-column-title': {
        padding: '16px 16px 16px 2.3em'
    },
    '.ant-table-rtl .ant-table-thead tr th.ant-table-column-has-sorters .ant-table-filter-column-title': {
        padding: '0 0 0 2.3em'
    },
    '.ant-table-wrapper-rtl .ant-table-filter-trigger': {
        margin: '-4px 4px -4px -8px'
    },
    '.ant-dropdown-menu-submenu-rtl.ant-table-filter-dropdown .ant-checkbox-wrapper+span,.ant-dropdown-menu-submenu-rtl.ant-table-filter-dropdown-submenu .ant-checkbox-wrapper+span,.ant-dropdown-rtl .ant-table-filter-dropdown .ant-checkbox-wrapper+span,.ant-dropdown-rtl .ant-table-filter-dropdown-submenu .ant-checkbox-wrapper+span': {
        paddingRight: '8px',
        paddingLeft: '0'
    },
    '.ant-table-wrapper-rtl .ant-table-selection': { textAlign: 'center' },
    '.ant-table-wrapper-rtl .ant-table-row-expand-icon,.ant-table-wrapper-rtl .ant-table-row-indent': {
        cssFloat: 'right'
    },
    '.ant-table-wrapper-rtl .ant-table-row-indent+.ant-table-row-expand-icon': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-table-wrapper-rtl .ant-table-row-expand-icon::after': {
        transform: 'rotate(-90deg)'
    },
    '.ant-table-wrapper-rtl .ant-table-row-expand-icon-collapsed::before': {
        transform: 'rotate(180deg)'
    },
    '.ant-table-wrapper-rtl .ant-table-row-expand-icon-collapsed::after': {
        transform: 'rotate(0)'
    },
    '.ant-tabs-small>.ant-tabs-nav .ant-tabs-tab': {
        padding: '8px 0',
        fontSize: '16px'
    },
    '.ant-tabs-large>.ant-tabs-nav .ant-tabs-tab': {
        padding: '16px 0',
        fontSize: '18px'
    },
    '.ant-tabs-card.ant-tabs-small>.ant-tabs-nav .ant-tabs-tab': {
        padding: '6px 16px'
    },
    '.ant-tabs-card.ant-tabs-large>.ant-tabs-nav .ant-tabs-tab': {
        padding: '7px 16px 6px'
    },
    '.ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab': { margin: '0 0 0 32px' },
    '.ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab:last-of-type': { marginLeft: '0' },
    '.ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab .anticon': {
        marginRight: '0',
        marginLeft: '12px'
    },
    '.ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab .ant-tabs-tab-remove': {
        marginRight: '8px',
        marginLeft: '-4px'
    },
    '.ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab .ant-tabs-tab-remove .anticon': {
        margin: '0'
    },
    '.ant-tabs-rtl.ant-tabs-left>.ant-tabs-content-holder,.ant-tabs-rtl.ant-tabs-right>.ant-tabs-nav': {
        order: 0
    },
    '.ant-tabs-rtl.ant-tabs-right>.ant-tabs-content-holder': { order: 1 },
    '.ant-tabs-rtl.ant-tabs-card.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-nav-add,.ant-tabs-rtl.ant-tabs-card.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-rtl.ant-tabs-card.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-nav-add,.ant-tabs-rtl.ant-tabs-card.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-rtl.ant-tabs-card.ant-tabs-top>.ant-tabs-nav .ant-tabs-nav-add,.ant-tabs-rtl.ant-tabs-card.ant-tabs-top>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-rtl.ant-tabs-card.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-nav-add,.ant-tabs-rtl.ant-tabs-card.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab': {
        marginRight: '2px',
        marginLeft: '0'
    },
    '.ant-tabs-dropdown-rtl .ant-tabs-dropdown-menu-item': { textAlign: 'right' },
    '.ant-tabs-bottom,.ant-tabs-top': { flexDirection: 'column' },
    '.ant-tabs-bottom>.ant-tabs-nav,.ant-tabs-bottom>div>.ant-tabs-nav,.ant-tabs-top>.ant-tabs-nav,.ant-tabs-top>div>.ant-tabs-nav': {
        margin: '0 0 16px'
    },
    '.ant-tabs-bottom>.ant-tabs-nav::before,.ant-tabs-bottom>div>.ant-tabs-nav::before,.ant-tabs-top>.ant-tabs-nav::before,.ant-tabs-top>div>.ant-tabs-nav::before': {
        position: 'absolute',
        right: '0',
        left: '0',
        borderBottom: '1px solid #f0f0f0',
        content: '""'
    },
    '.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-top>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-ink-bar': {
        height: '2px'
    },
    '.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-ink-bar-animated,.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-ink-bar-animated,.ant-tabs-top>.ant-tabs-nav .ant-tabs-ink-bar-animated,.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-ink-bar-animated': {
        transition: 'width .3s,left .3s,right .3s'
    },
    '.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-top>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-top>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-nav-wrap::before': {
        top: '0',
        bottom: '0',
        width: '30px'
    },
    '.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-top>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-nav-wrap::before': {
        left: '0',
        boxShadow: 'inset 10px 0 8px -8px rgba(0,0,0,.08)'
    },
    '.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-top>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-nav-wrap::after': {
        right: '0',
        boxShadow: 'inset -10px 0 8px -8px rgba(0,0,0,.08)'
    },
    '.ant-tabs-top>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-top>.ant-tabs-nav::before,.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-top>div>.ant-tabs-nav::before': {
        bottom: '0'
    },
    '.ant-tabs-bottom>.ant-tabs-nav,.ant-tabs-bottom>div>.ant-tabs-nav': {
        order: 1,
        marginTop: '16px',
        marginBottom: '0'
    },
    '.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-bottom>.ant-tabs-nav::before,.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-bottom>div>.ant-tabs-nav::before': {
        top: '0'
    },
    '.ant-tabs-bottom>.ant-tabs-content-holder,.ant-tabs-bottom>div>.ant-tabs-content-holder': {
        order: 0
    },
    '.ant-tabs-left>.ant-tabs-nav,.ant-tabs-left>div>.ant-tabs-nav,.ant-tabs-right>.ant-tabs-nav,.ant-tabs-right>div>.ant-tabs-nav': {
        flexDirection: 'column',
        minWidth: '50px'
    },
    '.ant-tabs-left>.ant-tabs-nav .ant-tabs-tab,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-tab,.ant-tabs-right>.ant-tabs-nav .ant-tabs-tab,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-tab': {
        padding: '8px 24px',
        textAlign: 'center'
    },
    '.ant-tabs-left>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-right>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab': {
        margin: '16px 0 0'
    },
    '.ant-tabs-left>.ant-tabs-nav .ant-tabs-nav-wrap,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-nav-wrap,.ant-tabs-right>.ant-tabs-nav .ant-tabs-nav-wrap,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-nav-wrap': {
        flexDirection: 'column'
    },
    '.ant-tabs-left>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-left>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-right>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-right>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-nav-wrap::before': {
        right: '0',
        left: '0',
        height: '30px'
    },
    '.ant-tabs-left>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-right>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-nav-wrap::before': {
        top: '0',
        boxShadow: 'inset 0 10px 8px -8px rgba(0,0,0,.08)'
    },
    '.ant-tabs-left>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-right>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-nav-wrap::after': {
        bottom: '0',
        boxShadow: 'inset 0 -10px 8px -8px rgba(0,0,0,.08)'
    },
    '.ant-tabs-dropdown-menu,.ant-tooltip-inner': {
        boxShadow:
        '0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)'
    },
    '.ant-tabs-left>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-right>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-ink-bar': {
        width: '2px'
    },
    '.ant-tabs-left>.ant-tabs-nav .ant-tabs-ink-bar-animated,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-ink-bar-animated,.ant-tabs-right>.ant-tabs-nav .ant-tabs-ink-bar-animated,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-ink-bar-animated': {
        transition: 'height .3s,top .3s'
    },
    '.ant-tabs-left>.ant-tabs-nav .ant-tabs-nav-list,.ant-tabs-left>.ant-tabs-nav .ant-tabs-nav-operations,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-nav-list,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-nav-operations,.ant-tabs-right>.ant-tabs-nav .ant-tabs-nav-list,.ant-tabs-right>.ant-tabs-nav .ant-tabs-nav-operations,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-nav-list,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-nav-operations': {
        flex: '1 0 auto',
        flexDirection: 'column'
    },
    '.ant-tabs-left>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-ink-bar': {
        right: '0'
    },
    '.ant-tabs-left>.ant-tabs-content-holder,.ant-tabs-left>div>.ant-tabs-content-holder': {
        marginLeft: '-1px',
        borderLeft: '1px solid #f0f0f0'
    },
    '.ant-tabs-left>.ant-tabs-content-holder>.ant-tabs-content>.ant-tabs-tabpane,.ant-tabs-left>div>.ant-tabs-content-holder>.ant-tabs-content>.ant-tabs-tabpane': {
        paddingLeft: '24px'
    },
    '.ant-tabs-right>.ant-tabs-nav,.ant-tabs-right>div>.ant-tabs-nav': {
        order: 1
    },
    '.ant-tabs-right>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-ink-bar': {
        left: '0'
    },
    '.ant-tabs-right>.ant-tabs-content-holder,.ant-tabs-right>div>.ant-tabs-content-holder': {
        order: 0,
        marginRight: '-1px',
        borderRight: '1px solid #f0f0f0'
    },
    '.ant-tabs-right>.ant-tabs-content-holder>.ant-tabs-content>.ant-tabs-tabpane,.ant-tabs-right>div>.ant-tabs-content-holder>.ant-tabs-content>.ant-tabs-tabpane': {
        paddingRight: '24px'
    },
    '.ant-tabs-dropdown': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        zIndex: 1050,
        display: 'block'
    },
    '.ant-tabs-dropdown-hidden': { display: 'none' },
    '.ant-tabs-dropdown-menu': {
        maxHeight: '200px',
        margin: '0',
        padding: '4px 0',
        textAlign: 'left',
        listStyleType: 'none',
        backgroundColor: 'var(--background-color)',
        backgroundClip: 'padding-box',
        borderRadius: '7px',
        outline: '0'
    },
    '.ant-tabs-dropdown-menu-item': {
        display: 'flex',
        alignItems: 'center',
        minWidth: '120px',
        margin: '0',
        padding: '5px 12px',
        overflow: 'hidden',
        color: 'var(--text-main-color)',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-tabs,.ant-timeline': {
        lineHeight: 1.5715,
        fontFeatureSettings: '"tnum"'
    },
    '.ant-tabs-dropdown-menu-item>span': { flex: 1, whiteSpace: 'nowrap' },
    '.ant-tabs-dropdown-menu-item-remove': {
        flex: 'none',
        marginLeft: '12px',
        color: 'rgba(0,0,0,.45)',
        fontSize: '14px',
        background: '0 0',
        border: '0',
        cursor: 'pointer'
    },
    '.ant-tabs-dropdown-menu-item-remove:hover': {
        color: 'var(--ant-primary-5)'
    },
    '.ant-tabs-dropdown-menu-item:hover': { background: 'var(--item-hover-bg)' },
    '.ant-tabs-dropdown-menu-item-disabled,.ant-tabs-dropdown-menu-item-disabled:hover': {
        color: 'rgba(0,0,0,.25)',
        background: '0 0',
        cursor: 'not-allowed'
    },
    '.ant-tabs-card>.ant-tabs-nav .ant-tabs-tab,.ant-tabs-card>div>.ant-tabs-nav .ant-tabs-tab': {
        margin: '0',
        padding: '6.5px 16px',
        background: 'rgba(1,80,154,.05)',
        border: '1px solid #f0f0f0',
        transition: 'all .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-tabs-card>.ant-tabs-nav .ant-tabs-tab-active,.ant-tabs-card>div>.ant-tabs-nav .ant-tabs-tab-active': {
        color: 'var(--ant-primary-color)',
        background: 'var(--background-color)'
    },
    '.ant-tabs-card>.ant-tabs-nav .ant-tabs-ink-bar,.ant-tabs-card>div>.ant-tabs-nav .ant-tabs-ink-bar': {
        visibility: 'hidden'
    },
    '.ant-tabs-card.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-card.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-card.ant-tabs-top>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-card.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab': {
        marginLeft: '2px'
    },
    '.ant-tabs-card.ant-tabs-top>.ant-tabs-nav .ant-tabs-tab,.ant-tabs-card.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-tab': {
        borderRadius: '7px 7px 0 0'
    },
    '.ant-tabs-card.ant-tabs-top>.ant-tabs-nav .ant-tabs-tab-active,.ant-tabs-card.ant-tabs-top>div>.ant-tabs-nav .ant-tabs-tab-active': {
        borderBottomColor: 'var(--background-color)'
    },
    '.ant-tabs-card.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-tab,.ant-tabs-card.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-tab': {
        borderRadius: '0 0 7px 7px'
    },
    '.ant-tabs-card.ant-tabs-bottom>.ant-tabs-nav .ant-tabs-tab-active,.ant-tabs-card.ant-tabs-bottom>div>.ant-tabs-nav .ant-tabs-tab-active': {
        borderTopColor: 'var(--background-color)'
    },
    '.ant-tabs-card.ant-tabs-left>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-card.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-card.ant-tabs-right>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab,.ant-tabs-card.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-tab+.ant-tabs-tab': {
        marginTop: '2px'
    },
    '.ant-tabs-card.ant-tabs-left>.ant-tabs-nav .ant-tabs-tab,.ant-tabs-card.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-tab': {
        borderRadius: '7px 0 0 7px'
    },
    '.ant-tabs-card.ant-tabs-left>.ant-tabs-nav .ant-tabs-tab-active,.ant-tabs-card.ant-tabs-left>div>.ant-tabs-nav .ant-tabs-tab-active': {
        borderRightColor: 'var(--background-color)'
    },
    '.ant-tabs-card.ant-tabs-right>.ant-tabs-nav .ant-tabs-tab,.ant-tabs-card.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-tab': {
        borderRadius: '0 7px 7px 0'
    },
    '.ant-tabs-card.ant-tabs-right>.ant-tabs-nav .ant-tabs-tab-active,.ant-tabs-card.ant-tabs-right>div>.ant-tabs-nav .ant-tabs-tab-active': {
        borderLeftColor: 'var(--background-color)'
    },
    '.ant-tabs': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        display: 'flex'
    },
    '.ant-tabs>.ant-tabs-nav,.ant-tabs>div>.ant-tabs-nav': {
        position: 'relative',
        display: 'flex',
        flex: 'none',
        alignItems: 'center'
    },
    '.ant-tabs>.ant-tabs-nav .ant-tabs-nav-wrap,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-wrap': {
        position: 'relative',
        display: ['inline-block', 'flex'],
        flex: 'auto',
        alignSelf: 'stretch',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        transform: 'translate(0)'
    },
    '.ant-tabs>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs>.ant-tabs-nav .ant-tabs-nav-wrap::before,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-wrap::after,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-wrap::before': {
        position: 'absolute',
        zIndex: 1,
        opacity: 0,
        transition: 'opacity .3s',
        content: '""',
        pointerEvents: 'none'
    },
    '.ant-tabs>.ant-tabs-nav .ant-tabs-nav-list,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-list': {
        position: 'relative',
        display: 'flex',
        transition: 'transform .3s'
    },
    '.ant-tabs>.ant-tabs-nav .ant-tabs-nav-operations,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-operations': {
        display: 'flex',
        alignSelf: 'stretch'
    },
    '.ant-tabs>.ant-tabs-nav .ant-tabs-nav-operations-hidden,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-operations-hidden': {
        position: 'absolute',
        visibility: 'hidden',
        pointerEvents: 'none'
    },
    '.ant-tabs>.ant-tabs-nav .ant-tabs-nav-more,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-more': {
        position: 'relative',
        padding: '6.5px 16px',
        background: '0 0',
        border: '0'
    },
    '.ant-tabs>.ant-tabs-nav .ant-tabs-nav-more::after,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-more::after': {
        position: 'absolute',
        right: '0',
        bottom: '0',
        left: '0',
        height: '5px',
        transform: 'translateY(100%)',
        content: '""'
    },
    '.ant-tabs>.ant-tabs-nav .ant-tabs-nav-add,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-add': {
        minWidth: '40px',
        marginLeft: '2px',
        padding: '0 8px',
        background: 'rgba(1,80,154,.05)',
        border: '1px solid #f0f0f0',
        borderRadius: '7px 7px 0 0',
        outline: '0',
        cursor: 'pointer',
        transition: 'all .3s cubic-bezier(.645,.045,.355,1)'
    },
    '.ant-tabs>.ant-tabs-nav .ant-tabs-nav-add:hover,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-add:hover': {
        color: 'var(--ant-primary-5)'
    },
    '.ant-tabs-tab-btn:active,.ant-tabs-tab-btn:focus,.ant-tabs-tab-remove:active,.ant-tabs-tab-remove:focus,.ant-tabs>.ant-tabs-nav .ant-tabs-nav-add:active,.ant-tabs>.ant-tabs-nav .ant-tabs-nav-add:focus,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-add:active,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-add:focus': {
        color: 'var(--ant-primary-7)'
    },
    '.ant-tabs-extra-content': { flex: 'none' },
    '.ant-tabs-centered>.ant-tabs-nav .ant-tabs-nav-wrap:not([class*=ant-tabs-nav-wrap-ping]),.ant-tabs-centered>div>.ant-tabs-nav .ant-tabs-nav-wrap:not([class*=ant-tabs-nav-wrap-ping])': {
        justifyContent: 'center'
    },
    '.ant-tabs-ink-bar': {
        position: 'absolute',
        background: 'var(--ant-primary-color)',
        pointerEvents: 'none'
    },
    '.ant-tabs-tab': {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        padding: '12px 0',
        fontSize: '16px',
        background: '0 0',
        border: '0',
        outline: '0',
        cursor: 'pointer'
    },
    '.ant-tabs-tab-remove,.ant-tag': { fontSize: '14px', transition: 'all .3s' },
    '.ant-tabs-tab-btn': { outline: '0', transition: 'all .3s' },
    '.ant-tabs-tab-remove': {
        flex: 'none',
        marginRight: '-4px',
        marginLeft: '8px',
        color: 'rgba(0,0,0,.45)',
        background: '0 0',
        border: 'none',
        outline: '0',
        cursor: 'pointer'
    },
    '.ant-tag,.ant-transfer-list': {
        border: '1px solid var(--border-base-color)'
    },
    '.ant-tabs-tab-remove:hover': { color: 'var(--heading-color)' },
    '.ant-tabs-tab:hover': { color: 'var(--ant-primary-5)' },
    '.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn': {
        color: 'var(--ant-primary-color)',
        textShadow: '0 0 .25px currentcolor'
    },
    '.ant-tabs-tab.ant-tabs-tab-disabled': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-tabs-tab.ant-tabs-tab-disabled .ant-tabs-tab-btn:active,.ant-tabs-tab.ant-tabs-tab-disabled .ant-tabs-tab-btn:focus,.ant-tabs-tab.ant-tabs-tab-disabled .ant-tabs-tab-remove:active,.ant-tabs-tab.ant-tabs-tab-disabled .ant-tabs-tab-remove:focus': {
        color: 'rgba(0,0,0,.25)'
    },
    '.ant-tabs-tab .ant-tabs-tab-remove .anticon': { margin: '0' },
    '.ant-tabs-tab .anticon': { marginRight: '12px' },
    '.ant-tabs-tab+.ant-tabs-tab': { margin: '0 0 0 32px' },
    '.ant-tabs-content': { position: 'relative', width: '100%' },
    '.ant-tabs-content-holder': { flex: 'auto', minWidth: '0', minHeight: '0' },
    '.ant-tabs-tabpane': { outline: '0' },
    '.ant-tabs-tabpane-hidden': { display: 'none' },
    '.ant-tabs-switch-appear,.ant-tabs-switch-enter': { transition: 'none' },
    '.ant-tabs-switch-appear-start,.ant-tabs-switch-enter-start': { opacity: 0 },
    '.ant-tabs-switch-appear-active,.ant-tabs-switch-enter-active': {
        opacity: 1,
        transition: 'opacity .3s'
    },
    '.ant-tabs-switch-leave': {
        position: 'absolute',
        transition: 'none',
        inset: '0'
    },
    '.ant-tabs-switch-leave-start': { opacity: 1 },
    '.ant-tabs-switch-leave-active': { opacity: 0, transition: 'opacity .3s' },
    '.ant-tag': {
        boxSizing: 'border-box',
        margin: '0 8px 0 0',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        display: 'inline-block',
        height: 'auto',
        padding: '0 7px',
        lineHeight: '20px',
        whiteSpace: 'nowrap',
        background: 'rgba(1,80,154,.05)',
        borderRadius: '7px',
        opacity: 1
    },
    '.ant-tag-checkable,.ant-tag-has-color': { borderColor: 'transparent' },
    '.ant-tag,.ant-tag a,.ant-tag a:hover': { color: 'var(--text-main-color)' },
    '.ant-tag>a:first-child:last-child': {
        display: 'inline-block',
        margin: '0 -8px',
        padding: '0 8px'
    },
    '.ant-tag-hidden,.ant-timeline-item-last>.ant-timeline-item-tail,.ant-timeline-item-pending .ant-timeline-item-tail': {
        display: 'none'
    },
    '.ant-tag-close-icon': {
        marginLeft: '3px',
        color: 'rgba(0,0,0,.45)',
        fontSize: '10px',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-tag-close-icon:hover': { color: 'var(--heading-color)' },
    '.ant-tag-has-color,.ant-tag-has-color .anticon-close,.ant-tag-has-color .anticon-close:hover,.ant-tag-has-color a,.ant-tag-has-color a:hover': {
        color: '#fff'
    },
    '.ant-tag-checkable': { backgroundColor: 'transparent', cursor: 'pointer' },
    '.ant-tag-checkable:not(.ant-tag-checkable-checked):hover': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-tag-checkable-checked,.ant-tag-checkable:active': { color: '#fff' },
    '.ant-tag-checkable-checked': { backgroundColor: 'var(--ant-primary-6)' },
    '.ant-tag-checkable:active': { backgroundColor: 'var(--ant-primary-7)' },
    '.ant-tag-pink': {
        color: '#c41d7f',
        background: '#fff0f6',
        borderColor: '#ffadd2'
    },
    '.ant-tag-pink-inverse': {
        color: '#fff',
        background: '#eb2f96',
        borderColor: '#eb2f96'
    },
    '.ant-tag-magenta': {
        color: '#c41d7f',
        background: '#fff0f6',
        borderColor: '#ffadd2'
    },
    '.ant-tag-magenta-inverse,.ant-tooltip-magenta .ant-tooltip-arrow-content::before,.ant-tooltip-pink .ant-tooltip-arrow-content::before': {
        background: '#eb2f96'
    },
    '.ant-tag-magenta-inverse': { color: '#fff', borderColor: '#eb2f96' },
    '.ant-tag-red': {
        color: '#cf1322',
        background: '#fff1f0',
        borderColor: '#ffa39e'
    },
    '.ant-tag-red-inverse': {
        color: '#fff',
        background: '#f5222d',
        borderColor: '#f5222d'
    },
    '.ant-tag-volcano': {
        color: '#d4380d',
        background: '#fff2e8',
        borderColor: '#ffbb96'
    },
    '.ant-tag-volcano-inverse': {
        color: '#fff',
        background: '#fa541c',
        borderColor: '#fa541c'
    },
    '.ant-tag-orange': {
        color: '#d46b08',
        background: '#fff7e6',
        borderColor: '#ffd591'
    },
    '.ant-tag-orange-inverse': {
        color: '#fff',
        background: '#fa8c16',
        borderColor: '#fa8c16'
    },
    '.ant-tag-yellow': {
        color: '#d4b106',
        background: '#feffe6',
        borderColor: '#fffb8f'
    },
    '.ant-tag-yellow-inverse': {
        color: '#fff',
        background: '#fadb14',
        borderColor: '#fadb14'
    },
    '.ant-tag-gold': {
        color: '#d48806',
        background: '#fffbe6',
        borderColor: '#ffe58f'
    },
    '.ant-tag-gold-inverse': {
        color: '#fff',
        background: '#faad14',
        borderColor: '#faad14'
    },
    '.ant-tag-cyan': {
        color: '#08979c',
        background: '#e6fffb',
        borderColor: '#87e8de'
    },
    '.ant-tag-cyan-inverse': {
        color: '#fff',
        background: '#13c2c2',
        borderColor: '#13c2c2'
    },
    '.ant-tag-lime': {
        color: '#7cb305',
        background: '#fcffe6',
        borderColor: '#eaff8f'
    },
    '.ant-tag-lime-inverse': {
        color: '#fff',
        background: '#a0d911',
        borderColor: '#a0d911'
    },
    '.ant-tag-green': {
        color: '#389e0d',
        background: '#f6ffed',
        borderColor: '#b7eb8f'
    },
    '.ant-tag-green-inverse': {
        color: '#fff',
        background: '#52c41a',
        borderColor: '#52c41a'
    },
    '.ant-tag-blue': {
        color: '#096dd9',
        background: '#e6f7ff',
        borderColor: '#91d5ff'
    },
    '.ant-tag-blue-inverse': {
        color: '#fff',
        background: '#1890ff',
        borderColor: '#1890ff'
    },
    '.ant-tag-geekblue': {
        color: '#1d39c4',
        background: '#f0f5ff',
        borderColor: '#adc6ff'
    },
    '.ant-tag-geekblue-inverse': {
        color: '#fff',
        background: '#2f54eb',
        borderColor: '#2f54eb'
    },
    '.ant-tag-purple': {
        color: '#531dab',
        background: '#f9f0ff',
        borderColor: '#d3adf7'
    },
    '.ant-tag-purple-inverse': {
        color: '#fff',
        background: '#722ed1',
        borderColor: '#722ed1'
    },
    '.ant-tag-success': {
        color: 'var(--ant-success-color)',
        background: 'var(--ant-success-color-deprecated-bg)',
        borderColor: 'var(--ant-success-color-deprecated-border)'
    },
    '.ant-tag-processing': {
        color: 'var(--ant-info-color)',
        background: 'var(--ant-info-color-deprecated-bg)',
        borderColor: 'var(--ant-info-color-deprecated-border)'
    },
    '.ant-tag-error': {
        color: 'var(--ant-error-color)',
        background: 'var(--ant-error-color-deprecated-bg)',
        borderColor: 'var(--ant-error-color-deprecated-border)'
    },
    '.ant-tag-warning': {
        color: 'var(--ant-warning-color)',
        background: 'var(--ant-warning-color-deprecated-bg)',
        borderColor: 'var(--ant-warning-color-deprecated-border)'
    },
    '.ant-timeline,.ant-tooltip': {
        color: 'var(--text-main-color)',
        padding: '0'
    },
    '.ant-tag.ant-tag-rtl': {
        marginRight: '0',
        marginLeft: '8px',
        textAlign: 'right'
    },
    '.ant-tag-rtl .ant-tag-close-icon': { marginRight: '3px', marginLeft: '0' },
    '.ant-tag-rtl.ant-tag>.anticon+span,.ant-tag-rtl.ant-tag>span+.anticon': {
        marginRight: '7px',
        marginLeft: '0'
    },
    '.ant-timeline,.ant-timeline-item': {
        margin: '0',
        fontSize: '16px',
        listStyle: 'none'
    },
    '.ant-timeline': { boxSizing: 'border-box', fontVariant: 'tabular-nums' },
    '.ant-timeline-item': { position: 'relative', paddingBottom: '20px' },
    '.ant-timeline-item-tail': {
        position: 'absolute',
        top: '10px',
        left: '4px',
        height: 'calc(100% - 10px)',
        borderLeft: '2px solid #f0f0f0'
    },
    '.ant-timeline-item-pending .ant-timeline-item-head': {
        fontSize: '14px',
        backgroundColor: 'transparent'
    },
    '.ant-timeline-item-head': {
        position: 'absolute',
        width: '10px',
        height: '10px',
        backgroundColor: 'var(--background-color)',
        border: '2px solid transparent',
        borderRadius: '100px'
    },
    '.ant-timeline-item-head-blue': {
        color: 'var(--ant-primary-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-timeline-item-head-red': {
        color: 'var(--ant-error-color)',
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-timeline-item-head-green': {
        color: 'var(--ant-success-color)',
        borderColor: 'var(--ant-success-color)'
    },
    '.ant-timeline-item-head-gray': {
        color: 'rgba(0,0,0,.25)',
        borderColor: 'rgba(0,0,0,.25)'
    },
    '.ant-timeline-item-head-custom': {
        position: 'absolute',
        top: '5.5px',
        left: '5px',
        width: 'auto',
        height: 'auto',
        marginTop: '0',
        padding: '3px 1px',
        lineHeight: 1,
        textAlign: 'center',
        border: '0',
        borderRadius: '0',
        transform: 'translate(-50%,-50%)'
    },
    '.ant-tooltip,.ant-transfer': {
        boxSizing: 'border-box',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        fontFeatureSettings: '"tnum"',
        listStyle: 'none'
    },
    '.ant-timeline-item-content': {
        position: 'relative',
        top: '-8.14px',
        margin: '0 0 0 26px',
        wordBreak: 'break-word'
    },
    '.ant-timeline-item-last>.ant-timeline-item-content': { minHeight: '48px' },
    '.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-alternate .ant-timeline-item-tail,.ant-timeline.ant-timeline-label .ant-timeline-item-head,.ant-timeline.ant-timeline-label .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-label .ant-timeline-item-tail,.ant-timeline.ant-timeline-right .ant-timeline-item-head,.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-right .ant-timeline-item-tail': {
        left: '50%'
    },
    '.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,.ant-timeline.ant-timeline-label .ant-timeline-item-head,.ant-timeline.ant-timeline-right .ant-timeline-item-head': {
        marginLeft: '-4px'
    },
    '.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-label .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom': {
        marginLeft: '1px'
    },
    '.ant-timeline.ant-timeline-alternate .ant-timeline-item-left .ant-timeline-item-content,.ant-timeline.ant-timeline-label .ant-timeline-item-left .ant-timeline-item-content,.ant-timeline.ant-timeline-right .ant-timeline-item-left .ant-timeline-item-content': {
        left: 'calc(50% - 4px)',
        width: 'calc(50% - 14px)',
        textAlign: 'left'
    },
    '.ant-timeline.ant-timeline-alternate .ant-timeline-item-right .ant-timeline-item-content,.ant-timeline.ant-timeline-label .ant-timeline-item-right .ant-timeline-item-content,.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content': {
        width: 'calc(50% - 12px)',
        margin: '0',
        textAlign: 'right'
    },
    '.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head,.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head-custom,.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-tail': {
        left: 'calc(100% - 4px - 2px)'
    },
    '.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content': {
        width: 'calc(100% - 18px)'
    },
    '.ant-timeline.ant-timeline-pending .ant-timeline-item-last .ant-timeline-item-tail': {
        display: 'block',
        height: 'calc(100% - 14px)',
        borderLeft: '2px dotted #f0f0f0'
    },
    '.ant-timeline.ant-timeline-reverse .ant-timeline-item-last .ant-timeline-item-tail': {
        display: 'none'
    },
    '.ant-timeline.ant-timeline-reverse .ant-timeline-item-pending .ant-timeline-item-tail': {
        top: '15px',
        display: 'block',
        height: 'calc(100% - 15px)',
        borderLeft: '2px dotted #f0f0f0'
    },
    '.ant-timeline.ant-timeline-reverse .ant-timeline-item-pending .ant-timeline-item-content': {
        minHeight: '48px'
    },
    '.ant-timeline.ant-timeline-label .ant-timeline-item-label': {
        position: 'absolute',
        top: '-8.14px',
        width: 'calc(50% - 12px)',
        textAlign: 'right'
    },
    '.ant-timeline.ant-timeline-label .ant-timeline-item-right .ant-timeline-item-label': {
        left: 'calc(50% + 14px)',
        width: 'calc(50% - 14px)',
        textAlign: 'left'
    },
    '.ant-timeline-rtl .ant-timeline-item-tail': {
        right: '4px',
        left: 'auto',
        borderRight: '2px solid #f0f0f0',
        borderLeft: 'none'
    },
    '.ant-timeline-rtl .ant-timeline-item-head-custom': {
        right: '5px',
        left: 'auto',
        transform: 'translate(50%,-50%)'
    },
    '.ant-timeline-rtl .ant-timeline-item-content': { margin: '0 18px 0 0' },
    '.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-tail,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-tail,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-tail': {
        right: '50%',
        left: 'auto'
    },
    '.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-head': {
        marginRight: '-4px',
        marginLeft: '0'
    },
    '.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-head-custom': {
        marginRight: '1px',
        marginLeft: '0'
    },
    '.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-left .ant-timeline-item-content,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-left .ant-timeline-item-content,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-left .ant-timeline-item-content': {
        right: 'calc(50% - 4px)',
        left: 'auto',
        textAlign: 'right'
    },
    '.ant-timeline-rtl.ant-timeline.ant-timeline-alternate .ant-timeline-item-right .ant-timeline-item-content,.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-right .ant-timeline-item-content,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content': {
        textAlign: 'left'
    },
    '.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-head-custom,.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-tail': {
        right: '0',
        left: 'auto'
    },
    '.ant-timeline-rtl.ant-timeline.ant-timeline-right .ant-timeline-item-right .ant-timeline-item-content': {
        width: '100%',
        marginRight: '18px',
        textAlign: 'right'
    },
    '.ant-timeline-rtl.ant-timeline.ant-timeline-pending .ant-timeline-item-last .ant-timeline-item-tail,.ant-timeline-rtl.ant-timeline.ant-timeline-reverse .ant-timeline-item-pending .ant-timeline-item-tail': {
        borderRight: '2px dotted #f0f0f0',
        borderLeft: 'none'
    },
    '.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-label': {
        textAlign: 'left'
    },
    '.ant-timeline-rtl.ant-timeline.ant-timeline-label .ant-timeline-item-right .ant-timeline-item-label': {
        right: 'calc(50% + 14px)',
        textAlign: 'right'
    },
    '.ant-tooltip': {
        margin: '0',
        position: 'absolute',
        zIndex: 1070,
        display: 'block',
        width: ['max-content', 'intrinsic'],
        maxWidth: '250px'
    },
    '.ant-tooltip-content': { position: 'relative' },
    '.ant-tooltip-hidden': { display: 'none' },
    '.ant-tooltip-arrow,.ant-tooltip-arrow-content': {
        display: 'block',
        position: 'absolute',
        pointerEvents: 'none'
    },
    '.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight': {
        paddingBottom: '14.31px'
    },
    '.ant-tooltip-placement-right,.ant-tooltip-placement-rightBottom,.ant-tooltip-placement-rightTop': {
        paddingLeft: '14.31px'
    },
    '.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight': {
        paddingTop: '14.31px'
    },
    '.ant-tooltip-placement-left,.ant-tooltip-placement-leftBottom,.ant-tooltip-placement-leftTop': {
        paddingRight: '14.31px'
    },
    '.ant-tooltip-inner': {
        minWidth: '30px',
        minHeight: '32px',
        padding: '6px 8px',
        color: '#fff',
        textAlign: 'left',
        textDecoration: 'none',
        wordWrap: 'break-word',
        backgroundColor: 'rgba(0,0,0,.75)',
        borderRadius: '7px'
    },
    '.ant-tooltip-arrow': {
        zIndex: 2,
        width: '22px',
        height: '22px',
        overflow: 'hidden',
        background: '0 0'
    },
    '.ant-tooltip-arrow-content': {
        '--antd-arrow-background-color':
        'linear-gradient(to right bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75))',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        width: '11.31px',
        height: '11.31px',
        margin: 'auto',
        content: '""',
        borderRadius: '0 0 2px'
    },
    '.ant-tooltip-arrow-content::before': {
        position: 'absolute',
        top: '-11.31px',
        left: '-11.31px',
        width: '33.94px',
        height: '33.94px',
        background: 'var(--antd-arrow-background-color)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-10px -10px',
        content: '""',
        clipPath: [
        'inset(33% 33%)',
        'path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")'
        ]
    },
    '.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow': {
        bottom: '0',
        transform: 'translateY(100%)'
    },
    '.ant-tooltip-placement-top .ant-tooltip-arrow-content,.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-topRight .ant-tooltip-arrow-content': {
        boxShadow: '3px 3px 7px rgba(0,0,0,.07)',
        transform: 'translateY(-11px) rotate(45deg)'
    },
    '.ant-tooltip-placement-top .ant-tooltip-arrow': {
        left: '50%',
        transform: 'translateY(100%) translateX(-50%)'
    },
    '.ant-tooltip-placement-topLeft .ant-tooltip-arrow': { left: '13px' },
    '.ant-tooltip-placement-topRight .ant-tooltip-arrow': { right: '13px' },
    '.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow': {
        left: '0',
        transform: 'translateX(-100%)'
    },
    '.ant-tooltip-placement-right .ant-tooltip-arrow-content,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content,.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content': {
        boxShadow: '-3px 3px 7px rgba(0,0,0,.07)',
        transform: 'translateX(11px) rotate(135deg)'
    },
    '.ant-tooltip-placement-right .ant-tooltip-arrow': {
        top: '50%',
        transform: 'translateX(-100%) translateY(-50%)'
    },
    '.ant-tooltip-placement-rightTop .ant-tooltip-arrow': { top: '5px' },
    '.ant-tooltip-placement-rightBottom .ant-tooltip-arrow': { bottom: '5px' },
    '.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow': {
        right: '0',
        transform: 'translateX(100%)'
    },
    '.ant-tooltip-placement-left .ant-tooltip-arrow-content,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content,.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content': {
        boxShadow: '3px -3px 7px rgba(0,0,0,.07)',
        transform: 'translateX(-11px) rotate(315deg)'
    },
    '.ant-tooltip-placement-left .ant-tooltip-arrow': {
        top: '50%',
        transform: 'translateX(100%) translateY(-50%)'
    },
    '.ant-tooltip-placement-leftTop .ant-tooltip-arrow': { top: '5px' },
    '.ant-tooltip-placement-leftBottom .ant-tooltip-arrow': { bottom: '5px' },
    '.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow': {
        top: '0',
        transform: 'translateY(-100%)'
    },
    '.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content': {
        boxShadow: '-3px -3px 7px rgba(0,0,0,.07)',
        transform: 'translateY(11px) rotate(225deg)'
    },
    '.ant-tooltip-placement-bottom .ant-tooltip-arrow': {
        left: '50%',
        transform: 'translateY(-100%) translateX(-50%)'
    },
    '.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow': { left: '13px' },
    '.ant-tooltip-placement-bottomRight .ant-tooltip-arrow': { right: '13px' },
    '.ant-tooltip-pink .ant-tooltip-inner': { backgroundColor: '#eb2f96' },
    '.ant-tooltip-magenta .ant-tooltip-inner': { backgroundColor: '#eb2f96' },
    '.ant-tooltip-red .ant-tooltip-inner': { backgroundColor: '#f5222d' },
    '.ant-tooltip-red .ant-tooltip-arrow-content::before': {
        background: '#f5222d'
    },
    '.ant-tooltip-volcano .ant-tooltip-inner': { backgroundColor: '#fa541c' },
    '.ant-tooltip-volcano .ant-tooltip-arrow-content::before': {
        background: '#fa541c'
    },
    '.ant-tooltip-orange .ant-tooltip-inner': { backgroundColor: '#fa8c16' },
    '.ant-tooltip-orange .ant-tooltip-arrow-content::before': {
        background: '#fa8c16'
    },
    '.ant-tooltip-yellow .ant-tooltip-inner': { backgroundColor: '#fadb14' },
    '.ant-tooltip-yellow .ant-tooltip-arrow-content::before': {
        background: '#fadb14'
    },
    '.ant-tooltip-gold .ant-tooltip-inner': { backgroundColor: '#faad14' },
    '.ant-tooltip-gold .ant-tooltip-arrow-content::before': {
        background: '#faad14'
    },
    '.ant-tooltip-cyan .ant-tooltip-inner': { backgroundColor: '#13c2c2' },
    '.ant-tooltip-cyan .ant-tooltip-arrow-content::before': {
        background: '#13c2c2'
    },
    '.ant-tooltip-lime .ant-tooltip-inner': { backgroundColor: '#a0d911' },
    '.ant-tooltip-lime .ant-tooltip-arrow-content::before': {
        background: '#a0d911'
    },
    '.ant-tooltip-green .ant-tooltip-inner': { backgroundColor: '#52c41a' },
    '.ant-tooltip-green .ant-tooltip-arrow-content::before': {
        background: '#52c41a'
    },
    '.ant-tooltip-blue .ant-tooltip-inner': { backgroundColor: '#1890ff' },
    '.ant-tooltip-blue .ant-tooltip-arrow-content::before': {
        background: '#1890ff'
    },
    '.ant-tooltip-geekblue .ant-tooltip-inner': { backgroundColor: '#2f54eb' },
    '.ant-tooltip-geekblue .ant-tooltip-arrow-content::before': {
        background: '#2f54eb'
    },
    '.ant-tooltip-purple .ant-tooltip-inner': { backgroundColor: '#722ed1' },
    '.ant-tooltip-purple .ant-tooltip-arrow-content::before': {
        background: '#722ed1'
    },
    '.ant-transfer-customize-list .ant-table-wrapper .ant-table-small>.ant-table-content>.ant-table-body>table>.ant-table-thead>tr>th,.ant-upload.ant-upload-drag': {
        background: 'rgba(1,80,154,.05)'
    },
    '.ant-tooltip-rtl .ant-tooltip-inner': { textAlign: 'right' },
    '.ant-transfer-customize-list .ant-transfer-list': {
        flex: '1 1 50%',
        width: 'auto',
        height: 'auto',
        minHeight: '200px'
    },
    '.ant-transfer-customize-list .ant-table-wrapper .ant-table-small': {
        border: '0',
        borderRadius: '0'
    },
    '.ant-transfer-customize-list .ant-table-wrapper .ant-table-small .ant-table-selection-column': {
        width: '40px',
        minWidth: '40px'
    },
    '.ant-transfer-customize-list .ant-input[disabled],.ant-tree-checkbox-inner': {
        backgroundColor: 'transparent'
    },
    '.ant-transfer-customize-list .ant-table-wrapper .ant-table-small>.ant-table-content .ant-table-row:last-child td': {
        borderBottom: '1px solid #f0f0f0'
    },
    '.ant-transfer-customize-list .ant-table-wrapper .ant-table-small .ant-table-body': {
        margin: '0'
    },
    '.ant-transfer-customize-list .ant-table-wrapper .ant-table-pagination.ant-pagination': {
        margin: '16px 0 4px'
    },
    '.ant-transfer-status-error .ant-transfer-list': {
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-transfer-status-error .ant-transfer-list-search:not([disabled])': {
        borderColor: 'var(--border-base-color)'
    },
    '.ant-transfer-status-error .ant-transfer-list-search:not([disabled]):hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-rtl .ant-transfer-status-error .ant-transfer-list-search:not([disabled]):hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-transfer-status-error .ant-transfer-list-search:not([disabled]):focus': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-rtl .ant-transfer-status-error .ant-transfer-list-search:not([disabled]):focus': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-transfer-status-warning .ant-transfer-list': {
        borderColor: 'var(--ant-warning-color)'
    },
    '.ant-transfer-status-warning .ant-transfer-list-search:not([disabled])': {
        borderColor: 'var(--border-base-color)'
    },
    '.ant-transfer-status-warning .ant-transfer-list-search:not([disabled]):hover': {
        borderColor: 'var(--ant-primary-5)',
        borderRightWidth: '1px'
    },
    '.ant-input-rtl .ant-transfer-status-warning .ant-transfer-list-search:not([disabled]):hover': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-transfer-status-warning .ant-transfer-list-search:not([disabled]):focus': {
        borderColor: 'var(--ant-primary-color-hover)',
        boxShadow: '0 0 0 2px var(--ant-primary-color-outline)',
        borderRightWidth: '1px',
        outline: '0'
    },
    '.ant-input-rtl .ant-transfer-status-warning .ant-transfer-list-search:not([disabled]):focus': {
        borderRightWidth: '0',
        borderLeftWidth: '1px !important' as any
    },
    '.ant-transfer': {
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch'
    },
    '.ant-transfer-disabled .ant-transfer-list': {
        background: 'var(--disabled-bg-color)'
    },
    '.ant-transfer-list': {
        display: 'flex',
        flexDirection: 'column',
        width: '180px',
        height: '200px',
        borderRadius: '7px'
    },
    '.ant-transfer-list-with-pagination': { width: '250px', height: 'auto' },
    '.ant-transfer-list-search .anticon-search': { color: 'rgba(0,0,0,.25)' },
    '.ant-transfer-list-header': {
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        height: '40px',
        padding: '6px 12px 7px',
        color: 'var(--text-main-color)',
        background: 'var(--background-color)',
        borderBottom: '1px solid #f0f0f0',
        borderRadius: '7px 7px 0 0'
    },
    '.ant-transfer-list-header>:not(:last-child)': { marginRight: '4px' },
    '.ant-transfer-list-header>*': { flex: 'none' },
    '.ant-transfer-list-header-title': {
        flex: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'right',
        textOverflow: 'ellipsis'
    },
    '.ant-transfer-list-header-dropdown': {
        fontSize: '10px',
        transform: 'translateY(10%)',
        cursor: 'pointer'
    },
    '.ant-transfer-list-header-dropdown[disabled]': { cursor: 'not-allowed' },
    '.ant-transfer-list-body': {
        display: 'flex',
        flex: 'auto',
        flexDirection: 'column',
        overflow: 'hidden',
        fontSize: '16px'
    },
    '.ant-transfer-list-body-search-wrapper': {
        position: 'relative',
        flex: 'none',
        padding: '12px'
    },
    '.ant-transfer-list-content': {
        flex: 'auto',
        margin: '0',
        padding: '0',
        overflow: 'auto',
        listStyle: 'none'
    },
    '.ant-transfer-list-content-item': {
        display: 'flex',
        alignItems: 'center',
        minHeight: '50px',
        padding: '6px 12px',
        lineHeight: '38px',
        transition: 'all .3s'
    },
    '.ant-transfer-list-content-item>:not(:last-child)': { marginRight: '8px' },
    '.ant-transfer-list-content-item>*': { flex: 'none' },
    '.ant-transfer-list-content-item-text': {
        flex: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-transfer-list-content-item-remove': {
        position: 'relative',
        color: 'var(--border-base-color)',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-transfer-list-content-item-remove:hover': {
        color: 'var(--ant-primary-color-hover)'
    },
    '.ant-transfer-list-content-item-remove::after': {
        position: 'absolute',
        top: '-6px',
        right: '-50%',
        bottom: '-6px',
        left: '-50%',
        content: '""'
    },
    '.ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover': {
        backgroundColor: 'var(--item-hover-bg)',
        cursor: 'pointer'
    },
    '.ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled).ant-transfer-list-content-item-checked:hover': {
        backgroundColor: 'var(--ant-primary-color-active-deprecated-d-02)'
    },
    '.ant-transfer-list-content-show-remove .ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover': {
        background: '0 0',
        cursor: 'default'
    },
    '.ant-transfer-list-content-item-checked': {
        backgroundColor: 'var(--ant-primary-1)'
    },
    '.ant-transfer-list-content-item-disabled': {
        color: 'var(--disabled-color)',
        cursor: 'not-allowed'
    },
    '.ant-transfer-list-pagination': {
        padding: '8px 0',
        textAlign: 'right',
        borderTop: '1px solid #f0f0f0'
    },
    '.ant-transfer-list-body-not-found': {
        flex: 'none',
        width: '100%',
        margin: 'auto 0',
        color: 'rgba(0,0,0,.25)',
        textAlign: 'center'
    },
    '.ant-transfer-rtl .ant-transfer-list-header-title,.ant-transfer-rtl .ant-transfer-list-pagination': {
        textAlign: 'left'
    },
    '.ant-transfer-list-footer': { borderTop: '1px solid #f0f0f0' },
    '.ant-transfer-operation': {
        display: 'flex',
        flex: 'none',
        flexDirection: 'column',
        alignSelf: 'center',
        margin: '0 8px'
    },
    '.ant-select-tree-indent,.ant-select-tree-switcher,.ant-tree-indent,.ant-tree-switcher': {
        alignSelf: 'stretch',
        userSelect: 'none'
    },
    '.ant-transfer-operation .ant-btn': { display: 'block' },
    '.ant-transfer-operation .ant-btn:first-child': { marginBottom: '4px' },
    '.ant-transfer-operation .ant-btn .anticon': { fontSize: '12px' },
    '.ant-transfer .ant-empty-image': { maxHeight: '-2px' },
    '.ant-transfer-rtl .ant-transfer-list-search': {
        paddingRight: '8px',
        paddingLeft: '24px'
    },
    '.ant-tree-checkbox,.ant-tree-checkbox-wrapper': {
        boxSizing: 'border-box',
        padding: '0',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"'
    },
    '.ant-transfer-rtl .ant-transfer-list-search-action': {
        right: 'auto',
        left: '12px'
    },
    '.ant-transfer-rtl .ant-transfer-list-footer,.ant-transfer-rtl .ant-transfer-list-header': {
        left: 'auto',
        right: '0'
    },
    '.ant-transfer-rtl .ant-transfer-list-header>:not(:last-child)': {
        marginRight: '0',
        marginLeft: '4px'
    },
    '.ant-transfer-rtl .ant-transfer-list-content-item>:not(:last-child)': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '@keyframes ant-tree-node-fx-do-not-use': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
    },
    '.ant-tree.ant-tree-directory .ant-tree-treenode': { position: 'relative' },
    '.ant-tree.ant-tree-directory .ant-tree-treenode::before': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '4px',
        left: '0',
        transition: 'background-color .3s',
        content: '""',
        pointerEvents: 'none'
    },
    '.ant-tree.ant-tree-directory .ant-tree-treenode:hover::before': {
        background: 'var(--item-hover-bg)'
    },
    '.ant-tree.ant-tree-directory .ant-tree-treenode>*': { zIndex: 1 },
    '.ant-tree.ant-tree-directory .ant-tree-treenode .ant-tree-switcher': {
        transition: 'color .3s'
    },
    '.ant-tree.ant-tree-directory .ant-tree-treenode .ant-tree-node-content-wrapper': {
        borderRadius: '0',
        userSelect: 'none'
    },
    '.ant-tree.ant-tree-directory .ant-tree-treenode .ant-tree-node-content-wrapper:hover': {
        background: '0 0'
    },
    '.ant-tree.ant-tree-directory .ant-tree-treenode .ant-tree-node-content-wrapper.ant-tree-node-selected': {
        color: '#fff',
        background: '0 0'
    },
    '.ant-tree.ant-tree-directory .ant-tree-treenode-selected::before,.ant-tree.ant-tree-directory .ant-tree-treenode-selected:hover::before': {
        background: 'var(--ant-primary-color)'
    },
    '.ant-tree.ant-tree-directory .ant-tree-treenode-selected .ant-tree-switcher': {
        color: '#fff'
    },
    '.ant-tree.ant-tree-directory .ant-tree-treenode-selected .ant-tree-node-content-wrapper': {
        color: '#fff',
        background: '0 0'
    },
    '.ant-tree-checkbox': {
        color: 'var(--text-main-color)',
        position: 'relative',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        outline: '0',
        cursor: 'pointer',
        top: 'initial',
        margin: '4px 8px 0 0'
    },
    '.ant-tree-checkbox-input:focus+.ant-tree-checkbox-inner,.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-inner,.ant-tree-checkbox:hover .ant-tree-checkbox-inner': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-tree-checkbox-checked::after': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '1px solid var(--ant-primary-color)',
        borderRadius: '7px',
        visibility: 'hidden',
        animation: 'antCheckboxEffect .36s ease-in-out',
        animationFillMode: 'backwards',
        content: '""'
    },
    '.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox::after,.ant-tree-checkbox:hover::after': {
        visibility: 'visible'
    },
    '.ant-tree-checkbox-inner': {
        position: 'relative',
        top: '0',
        left: '0',
        display: 'block',
        width: '16px',
        height: '16px',
        direction: 'ltr',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        borderCollapse: 'separate',
        transition: 'all .3s'
    },
    '.ant-tree-checkbox-inner::after': {
        position: 'absolute',
        top: '50%',
        left: '21.5%',
        display: 'table',
        height: '9.14px',
        border: '2px solid #fff',
        borderTop: '0',
        borderLeft: '0',
        opacity: 0,
        transition: 'all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s',
        content: '" "'
    },
    '.ant-tree-checkbox-input': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 1,
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        opacity: 0
    },
    '.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after': {
        position: 'absolute',
        display: 'table',
        border: '2px solid #fff',
        borderTop: '0',
        borderLeft: '0',
        transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
        opacity: 1,
        transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
        content: '" "'
    },
    '.ant-tree-checkbox-checked .ant-tree-checkbox-inner': {
        backgroundColor: 'var(--ant-primary-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-tree-checkbox-disabled': { cursor: 'not-allowed' },
    '.ant-tree-checkbox-disabled.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after': {
        borderColor: 'rgba(0,0,0,.25)',
        animationName: 'none'
    },
    '.ant-tree-checkbox-disabled .ant-tree-checkbox-input': {
        cursor: 'not-allowed',
        pointerEvents: 'none'
    },
    '.ant-tree-checkbox-disabled .ant-tree-checkbox-inner': {
        backgroundColor: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color) !important' as any
    },
    '.ant-tree-checkbox-disabled .ant-tree-checkbox-inner::after': {
        borderColor: 'var(--disabled-bg-color)',
        borderCollapse: 'separate',
        animationName: 'none'
    },
    '.ant-tree-checkbox-disabled+span': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-tree-checkbox-disabled:hover::after,.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-disabled::after': {
        visibility: 'hidden'
    },
    '.ant-tree-checkbox-wrapper': {
        margin: '0',
        color: 'var(--text-main-color)',
        display: 'inline-flex',
        alignItems: 'baseline',
        lineHeight: 'unset',
        cursor: 'pointer'
    },
    '.ant-tree-checkbox-wrapper::after': {
        display: 'inline-block',
        width: '0',
        overflow: 'hidden',
        content: '"\\a0"'
    },
    '.ant-tree-checkbox-wrapper.ant-tree-checkbox-wrapper-disabled': {
        cursor: 'not-allowed'
    },
    '.ant-tree-checkbox-wrapper+.ant-tree-checkbox-wrapper': {
        marginLeft: '8px'
    },
    '.ant-tree-checkbox-wrapper.ant-tree-checkbox-wrapper-in-form-item input[type=checkbox]': {
        width: '14px',
        height: '14px'
    },
    '.ant-tree-checkbox+span': { paddingRight: '8px', paddingLeft: '8px' },
    '.ant-tree,.ant-tree-checkbox-group': {
        boxSizing: 'border-box',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        fontFeatureSettings: '"tnum"',
        listStyle: 'none'
    },
    '.ant-tree-checkbox-group': { margin: '0', display: 'inline-block' },
    '.ant-tree-checkbox-group-item': { marginRight: '8px' },
    '.ant-tree-checkbox-group-item:last-child': { marginRight: '0' },
    '.ant-tree-checkbox-group-item+.ant-tree-checkbox-group-item': {
        marginLeft: '0'
    },
    '.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner': {
        backgroundColor: 'transparent',
        borderColor: 'var(--border-base-color)'
    },
    '.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after': {
        top: '50%',
        left: '50%',
        width: '8px',
        height: '8px',
        backgroundColor: 'var(--ant-primary-color)',
        border: '0',
        transform: 'translate(-50%,-50%) scale(1)',
        opacity: 1,
        content: '" "'
    },
    '.ant-tree-checkbox-indeterminate.ant-tree-checkbox-disabled .ant-tree-checkbox-inner::after': {
        backgroundColor: 'rgba(0,0,0,.25)',
        borderColor: 'rgba(0,0,0,.25)'
    },
    '.ant-tree-checkbox-group-rtl .ant-tree-checkbox-group-item': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-tree-checkbox-group-rtl .ant-tree-checkbox-group-item:last-child': {
        marginLeft: '0 !important' as any
    },
    '.ant-tree-checkbox-group-rtl .ant-tree-checkbox-group-item+.ant-tree-checkbox-group-item': {
        marginLeft: '8px'
    },
    '.ant-tree': {
        margin: '0',
        background: 'var(--background-color)',
        borderRadius: '7px',
        transition: 'background-color .3s'
    },
    '.ant-tree-focused:not(:hover):not(.ant-tree-active-focused)': {
        background: 'var(--ant-primary-1)'
    },
    '.ant-tree-list-holder-inner': { alignItems: 'flex-start' },
    '.ant-tree.ant-tree-block-node .ant-tree-list-holder-inner': {
        alignItems: 'stretch'
    },
    '.ant-tree.ant-tree-block-node .ant-tree-list-holder-inner .ant-tree-node-content-wrapper': {
        flex: 'auto'
    },
    '.ant-tree.ant-tree-block-node .ant-tree-list-holder-inner .ant-tree-treenode.dragging': {
        position: 'relative'
    },
    '.ant-tree.ant-tree-block-node .ant-tree-list-holder-inner .ant-tree-treenode.dragging::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '4px',
        left: '0',
        border: '1px solid var(--ant-primary-color)',
        opacity: 0,
        animation: 'ant-tree-node-fx-do-not-use .3s',
        animationPlayState: 'running',
        animationFillMode: 'forwards',
        content: '""',
        pointerEvents: 'none'
    },
    '.ant-tree .ant-tree-treenode': {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '0 0 4px',
        outline: '0'
    },
    '.ant-tree .ant-tree-treenode-disabled .ant-tree-node-content-wrapper': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-tree .ant-tree-treenode-disabled .ant-tree-node-content-wrapper:hover': {
        background: '0 0'
    },
    '.ant-tree .ant-tree-treenode-active .ant-tree-node-content-wrapper': {
        background: 'var(--item-hover-bg)'
    },
    '.ant-tree .ant-tree-treenode:not(.ant-tree .ant-tree-treenode-disabled).filter-node .ant-tree-title': {
        color: 'inherit',
        fontWeight: 500
    },
    '.ant-tree .ant-tree-treenode-draggable .ant-tree-draggable-icon': {
        width: '24px',
        lineHeight: '24px',
        textAlign: 'center',
        visibility: 'visible',
        opacity: 0.2,
        transition: 'opacity .3s'
    },
    '.ant-tree-treenode:hover .ant-tree .ant-tree-treenode-draggable .ant-tree-draggable-icon': {
        opacity: 0.45
    },
    '.ant-tree .ant-tree-treenode-draggable.ant-tree-treenode-disabled .ant-tree-draggable-icon': {
        visibility: 'hidden'
    },
    '.ant-tree-indent': { whiteSpace: 'nowrap' },
    '.ant-tree-indent-unit': { display: 'inline-block', width: '24px' },
    '.ant-tree-draggable-icon': { visibility: 'hidden' },
    '.ant-tree-switcher': {
        position: 'relative',
        flex: 'none',
        width: '24px',
        margin: '0',
        lineHeight: '24px',
        textAlign: 'center',
        cursor: 'pointer'
    },
    '.ant-tree-switcher .ant-select-tree-switcher-icon,.ant-tree-switcher .ant-tree-switcher-icon': {
        display: 'inline-block',
        fontSize: '10px',
        verticalAlign: 'baseline'
    },
    '.ant-tree-switcher .ant-select-tree-switcher-icon svg,.ant-tree-switcher .ant-tree-switcher-icon svg': {
        transition: 'transform .3s'
    },
    '.ant-tree-switcher-noop': { cursor: 'default' },
    '.ant-tree-switcher_close .ant-tree-switcher-icon svg': {
        transform: 'rotate(-90deg)'
    },
    '.ant-tree-rtl .ant-tree-switcher_close .ant-tree-switcher-icon svg,.ant-tree-select-dropdown-rtl .ant-select-tree .ant-select-tree-switcher_close .ant-select-tree-switcher-icon svg': {
        transform: 'rotate(90deg)'
    },
    '.ant-tree-switcher-loading-icon': { color: 'var(--ant-primary-color)' },
    '.ant-tree-switcher-leaf-line': {
        position: 'relative',
        zIndex: 1,
        display: 'inline-block',
        width: '100%',
        height: '100%'
    },
    '.ant-tree-switcher-leaf-line::before': {
        position: 'absolute',
        top: '0',
        right: '12px',
        bottom: '-4px',
        marginLeft: '-1px',
        borderRight: '1px solid #d9d9d9',
        content: '" "'
    },
    '.ant-tree-switcher-leaf-line::after': {
        position: 'absolute',
        width: '10px',
        height: '14px',
        borderBottom: '1px solid #d9d9d9',
        content: '" "'
    },
    '.ant-tree .ant-tree-node-content-wrapper': {
        position: 'relative',
        zIndex: 'auto',
        minHeight: '24px',
        margin: '0',
        padding: '0 4px',
        color: 'inherit',
        lineHeight: '24px',
        background: '0 0',
        borderRadius: '7px',
        cursor: 'pointer',
        transition: 'all .3s,border 0s,line-height 0s,box-shadow 0s'
    },
    '.ant-select-tree-checkbox,.ant-select-tree-checkbox-wrapper': {
        boxSizing: 'border-box',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        fontFeatureSettings: '"tnum"'
    },
    '.ant-tree .ant-tree-node-content-wrapper:hover': {
        backgroundColor: 'var(--item-hover-bg)'
    },
    '.ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected': {
        backgroundColor: 'var(--ant-primary-2)'
    },
    '.ant-tree .ant-tree-node-content-wrapper .ant-tree-iconEle': {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        lineHeight: '24px',
        textAlign: 'center',
        verticalAlign: 'top'
    },
    '.ant-tree .ant-tree-node-content-wrapper .ant-tree-iconEle:empty,.ant-tree-show-line .ant-tree-indent-unit-end::before': {
        display: 'none'
    },
    '.ant-tree-unselectable .ant-tree-node-content-wrapper:hover': {
        backgroundColor: 'transparent'
    },
    '.ant-tree-node-content-wrapper': { lineHeight: '24px', userSelect: 'none' },
    '.ant-tree-node-content-wrapper .ant-tree-drop-indicator': {
        position: 'absolute',
        zIndex: 1,
        height: '2px',
        backgroundColor: 'var(--ant-primary-color)',
        borderRadius: '1px',
        pointerEvents: 'none'
    },
    '.ant-tree-node-content-wrapper .ant-tree-drop-indicator::after': {
        position: 'absolute',
        top: '-3px',
        left: '-6px',
        width: '8px',
        height: '8px',
        backgroundColor: 'transparent',
        border: '2px solid var(--ant-primary-color)',
        borderRadius: '50%',
        content: '""'
    },
    '.ant-tree .ant-tree-treenode.drop-container>[draggable]': {
        boxShadow: '0 0 0 2px var(--ant-primary-color)'
    },
    '.ant-tree-show-line .ant-tree-indent-unit': {
        position: 'relative',
        height: '100%'
    },
    '.ant-tree-show-line .ant-tree-indent-unit::before': {
        position: 'absolute',
        top: '0',
        right: '12px',
        bottom: '-4px',
        borderRight: '1px solid var(--border-base-color)',
        content: '""'
    },
    '.ant-tree-show-line .ant-tree-switcher': {
        background: 'var(--background-color)'
    },
    '.ant-tree-show-line .ant-tree-switcher-line-icon': {
        verticalAlign: '-.15em'
    },
    '.ant-tree .ant-tree-treenode-leaf-last .ant-tree-switcher-leaf-line::before': {
        top: 'auto !important' as any,
        bottom: 'auto !important' as any,
        height: '14px !important' as any
    },
    '.ant-tree-rtl .ant-tree-node-content-wrapper[draggable=true] .ant-tree-drop-indicator::after': {
        right: '-6px',
        left: 'unset'
    },
    '.ant-tree-rtl.ant-tree-show-line .ant-tree-indent-unit::before': {
        right: 'auto',
        left: '-13px',
        borderRight: 'none',
        borderLeft: '1px solid var(--border-base-color)'
    },
    '.ant-tree-rtl .ant-tree-checkbox,.ant-tree-select-dropdown-rtl .ant-select-tree-checkbox': {
        margin: '4px 0 0 8px'
    },
    '.ant-select-tree-checkbox': {
        listStyle: 'none',
        position: 'relative',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        outline: '0',
        cursor: 'pointer',
        top: 'initial',
        margin: '4px 8px 0 0'
    },
    '.ant-select-tree-checkbox-input:focus+.ant-select-tree-checkbox-inner,.ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox-inner,.ant-select-tree-checkbox:hover .ant-select-tree-checkbox-inner': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-select-tree-checkbox-checked::after': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '1px solid var(--ant-primary-color)',
        borderRadius: '7px',
        visibility: 'hidden',
        animation: 'antCheckboxEffect .36s ease-in-out',
        animationFillMode: 'backwards',
        content: '""'
    },
    '.ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox::after,.ant-select-tree-checkbox:hover::after': {
        visibility: 'visible'
    },
    '.ant-select-tree-checkbox-inner': {
        position: 'relative',
        top: '0',
        left: '0',
        display: 'block',
        width: '16px',
        height: '16px',
        direction: 'ltr',
        backgroundColor: 'transparent',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px',
        borderCollapse: 'separate',
        transition: 'all .3s'
    },
    '.ant-select-tree-checkbox-inner::after': {
        position: 'absolute',
        top: '50%',
        left: '21.5%',
        display: 'table',
        width: '5.71px',
        height: '9.14px',
        border: '2px solid #fff',
        borderTop: '0',
        borderLeft: '0',
        transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
        opacity: 0,
        transition: 'all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s',
        content: '" "'
    },
    '.ant-select-tree-checkbox-input': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        zIndex: 1,
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        opacity: 0
    },
    '.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner::after': {
        position: 'absolute',
        display: 'table',
        border: '2px solid #fff',
        borderTop: '0',
        borderLeft: '0',
        transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
        opacity: 1,
        transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
        content: '" "'
    },
    '.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner': {
        backgroundColor: 'var(--ant-primary-color)',
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-select-tree-checkbox-disabled': { cursor: 'not-allowed' },
    '.ant-select-tree-checkbox-disabled.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner::after': {
        borderColor: 'rgba(0,0,0,.25)',
        animationName: 'none'
    },
    '.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-input': {
        cursor: 'not-allowed',
        pointerEvents: 'none'
    },
    '.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner': {
        backgroundColor: 'var(--disabled-bg-color)',
        borderColor: 'var(--border-base-color) !important' as any
    },
    '.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner::after': {
        borderColor: 'var(--disabled-bg-color)',
        borderCollapse: 'separate',
        animationName: 'none'
    },
    '.ant-select-tree-checkbox-disabled+span': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-select-tree-checkbox-disabled:hover::after,.ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox-disabled::after': {
        visibility: 'hidden'
    },
    '.ant-select-tree-checkbox-wrapper': {
        margin: '0',
        listStyle: 'none',
        display: 'inline-flex',
        alignItems: 'baseline',
        lineHeight: 'unset',
        cursor: 'pointer'
    },
    '.ant-select-tree,.ant-select-tree-checkbox-group': {
        color: 'var(--text-main-color)',
        fontSize: '16px',
        lineHeight: 1.5715,
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        boxSizing: 'border-box'
    },
    '.ant-select-tree-checkbox-wrapper::after': {
        display: 'inline-block',
        width: '0',
        overflow: 'hidden',
        content: '"\\a0"'
    },
    '.ant-select-tree-checkbox-wrapper.ant-select-tree-checkbox-wrapper-disabled': {
        cursor: 'not-allowed'
    },
    '.ant-select-tree-checkbox-wrapper+.ant-select-tree-checkbox-wrapper': {
        marginLeft: '8px'
    },
    '.ant-select-tree-checkbox-wrapper.ant-select-tree-checkbox-wrapper-in-form-item input[type=checkbox]': {
        width: '14px',
        height: '14px'
    },
    '.ant-select-tree-checkbox+span': { paddingRight: '8px', paddingLeft: '8px' },
    '.ant-select-tree-checkbox-group': {
        margin: '0',
        padding: '0',
        display: 'inline-block'
    },
    '.ant-select-tree-checkbox-group-item': { marginRight: '8px' },
    '.ant-select-tree-checkbox-group-item:last-child': { marginRight: '0' },
    '.ant-select-tree-checkbox-group-item+.ant-select-tree-checkbox-group-item': {
        marginLeft: '0'
    },
    '.ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner': {
        backgroundColor: 'transparent',
        borderColor: 'var(--border-base-color)'
    },
    '.ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner::after': {
        top: '50%',
        left: '50%',
        width: '8px',
        height: '8px',
        backgroundColor: 'var(--ant-primary-color)',
        border: '0',
        transform: 'translate(-50%,-50%) scale(1)',
        opacity: 1,
        content: '" "'
    },
    '.ant-select-tree-checkbox-indeterminate.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner::after': {
        backgroundColor: 'rgba(0,0,0,.25)',
        borderColor: 'rgba(0,0,0,.25)'
    },
    '.ant-select-tree-checkbox-group-rtl .ant-select-tree-checkbox-group-item': {
        marginRight: '0',
        marginLeft: '8px'
    },
    '.ant-select-tree-checkbox-group-rtl .ant-select-tree-checkbox-group-item:last-child': {
        marginLeft: '0 !important' as any
    },
    '.ant-select-tree-checkbox-group-rtl .ant-select-tree-checkbox-group-item+.ant-select-tree-checkbox-group-item': {
        marginLeft: '8px'
    },
    '.ant-tree-select-dropdown': { padding: '8px 4px' },
    '.ant-tree-select-dropdown .ant-select-tree': { borderRadius: '0' },
    '.ant-tree-select-dropdown .ant-select-tree-list-holder-inner': {
        alignItems: 'stretch'
    },
    '.ant-tree-select-dropdown .ant-select-tree-list-holder-inner .ant-select-tree-treenode .ant-select-tree-node-content-wrapper': {
        flex: 'auto'
    },
    '.ant-select-tree': {
        margin: '0',
        padding: '0',
        background: 'var(--background-color)',
        borderRadius: '7px',
        transition: 'background-color .3s'
    },
    '.ant-select-tree-focused:not(:hover):not(.ant-select-tree-active-focused)': {
        background: 'var(--ant-primary-1)'
    },
    '.ant-select-tree-list-holder-inner': { alignItems: 'flex-start' },
    '.ant-select-tree.ant-select-tree-block-node .ant-select-tree-list-holder-inner': {
        alignItems: 'stretch'
    },
    '.ant-select-tree.ant-select-tree-block-node .ant-select-tree-list-holder-inner .ant-select-tree-node-content-wrapper': {
        flex: 'auto'
    },
    '.ant-select-tree.ant-select-tree-block-node .ant-select-tree-list-holder-inner .ant-select-tree-treenode.dragging': {
        position: 'relative'
    },
    '.ant-select-tree.ant-select-tree-block-node .ant-select-tree-list-holder-inner .ant-select-tree-treenode.dragging::after': {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '4px',
        left: '0',
        border: '1px solid var(--ant-primary-color)',
        opacity: 0,
        animation: 'ant-tree-node-fx-do-not-use .3s',
        animationPlayState: 'running',
        animationFillMode: 'forwards',
        content: '""',
        pointerEvents: 'none'
    },
    '.ant-select-tree .ant-select-tree-treenode': {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '0 0 4px',
        outline: '0'
    },
    '.ant-select-tree .ant-select-tree-treenode-disabled .ant-select-tree-node-content-wrapper': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-select-tree .ant-select-tree-treenode-disabled .ant-select-tree-node-content-wrapper:hover': {
        background: '0 0'
    },
    '.ant-select-tree .ant-select-tree-treenode-active .ant-select-tree-node-content-wrapper': {
        background: 'var(--item-hover-bg)'
    },
    '.ant-select-tree .ant-select-tree-treenode:not(.ant-select-tree .ant-select-tree-treenode-disabled).filter-node .ant-select-tree-title': {
        color: 'inherit',
        fontWeight: 500
    },
    '.ant-select-tree .ant-select-tree-treenode-draggable .ant-select-tree-draggable-icon': {
        width: '24px',
        lineHeight: '24px',
        textAlign: 'center',
        visibility: 'visible',
        opacity: 0.2,
        transition: 'opacity .3s'
    },
    '.ant-select-tree .ant-select-tree-treenode-draggable.ant-select-tree-treenode-disabled .ant-select-tree-draggable-icon,.ant-select-tree-draggable-icon': {
        visibility: 'hidden'
    },
    '.ant-select-tree-treenode:hover .ant-select-tree .ant-select-tree-treenode-draggable .ant-select-tree-draggable-icon': {
        opacity: 0.45
    },
    '.ant-select-tree-indent': { whiteSpace: 'nowrap' },
    '.ant-select-tree-indent-unit': { display: 'inline-block', width: '24px' },
    '.ant-select-tree-switcher': {
        position: 'relative',
        flex: 'none',
        width: '24px',
        margin: '0',
        lineHeight: '24px',
        textAlign: 'center',
        cursor: 'pointer'
    },
    '.ant-select-tree-switcher .ant-select-tree-switcher-icon,.ant-select-tree-switcher .ant-tree-switcher-icon': {
        display: 'inline-block',
        fontSize: '10px',
        verticalAlign: 'baseline'
    },
    '.ant-select-tree-switcher .ant-select-tree-switcher-icon svg,.ant-select-tree-switcher .ant-tree-switcher-icon svg': {
        transition: 'transform .3s'
    },
    '.ant-select-tree-switcher-noop': { cursor: 'default' },
    '.ant-select-tree-switcher_close .ant-select-tree-switcher-icon svg': {
        transform: 'rotate(-90deg)'
    },
    '.ant-select-tree-switcher-loading-icon': {
        color: 'var(--ant-primary-color)'
    },
    '.ant-select-tree-switcher-leaf-line': {
        position: 'relative',
        zIndex: 1,
        display: 'inline-block',
        width: '100%',
        height: '100%'
    },
    '.ant-select-tree-switcher-leaf-line::before': {
        position: 'absolute',
        top: '0',
        right: '12px',
        bottom: '-4px',
        marginLeft: '-1px',
        borderRight: '1px solid #d9d9d9',
        content: '" "'
    },
    '.ant-select-tree-switcher-leaf-line::after': {
        position: 'absolute',
        width: '10px',
        height: '14px',
        borderBottom: '1px solid #d9d9d9',
        content: '" "'
    },
    '.ant-select-tree .ant-select-tree-node-content-wrapper': {
        position: 'relative',
        zIndex: 'auto',
        minHeight: '24px',
        margin: '0',
        padding: '0 4px',
        color: 'inherit',
        lineHeight: '24px',
        background: '0 0',
        borderRadius: '7px',
        cursor: 'pointer',
        transition: 'all .3s,border 0s,line-height 0s,box-shadow 0s'
    },
    '.ant-select-tree .ant-select-tree-node-content-wrapper:hover': {
        backgroundColor: 'var(--item-hover-bg)'
    },
    '.ant-select-tree .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected': {
        backgroundColor: 'var(--ant-primary-2)'
    },
    '.ant-select-tree .ant-select-tree-node-content-wrapper .ant-select-tree-iconEle': {
        display: 'inline-block',
        width: '24px',
        height: '24px',
        lineHeight: '24px',
        textAlign: 'center',
        verticalAlign: 'top'
    },
    '.ant-select-tree .ant-select-tree-node-content-wrapper .ant-select-tree-iconEle:empty,.ant-select-tree-show-line .ant-select-tree-indent-unit-end::before': {
        display: 'none'
    },
    '.ant-select-tree-unselectable .ant-select-tree-node-content-wrapper:hover': {
        backgroundColor: 'transparent'
    },
    '.ant-select-tree-node-content-wrapper': {
        lineHeight: '24px',
        userSelect: 'none'
    },
    '.ant-select-tree-node-content-wrapper .ant-tree-drop-indicator': {
        position: 'absolute',
        zIndex: 1,
        height: '2px',
        backgroundColor: 'var(--ant-primary-color)',
        borderRadius: '1px',
        pointerEvents: 'none'
    },
    '.ant-select-tree-node-content-wrapper .ant-tree-drop-indicator::after': {
        position: 'absolute',
        top: '-3px',
        left: '-6px',
        width: '8px',
        height: '8px',
        backgroundColor: 'transparent',
        border: '2px solid var(--ant-primary-color)',
        borderRadius: '50%',
        content: '""'
    },
    '.ant-select-tree .ant-select-tree-treenode.drop-container>[draggable]': {
        boxShadow: '0 0 0 2px var(--ant-primary-color)'
    },
    '.ant-select-tree-show-line .ant-select-tree-indent-unit': {
        position: 'relative',
        height: '100%'
    },
    '.ant-select-tree-show-line .ant-select-tree-indent-unit::before': {
        position: 'absolute',
        top: '0',
        right: '12px',
        bottom: '-4px',
        borderRight: '1px solid var(--border-base-color)',
        content: '""'
    },
    '.ant-select-tree-show-line .ant-select-tree-switcher': {
        background: 'var(--background-color)'
    },
    '.ant-select-tree-show-line .ant-select-tree-switcher-line-icon': {
        verticalAlign: '-.15em'
    },
    '.ant-select-tree .ant-select-tree-treenode-leaf-last .ant-select-tree-switcher-leaf-line::before': {
        top: 'auto !important' as any,
        bottom: 'auto !important' as any,
        height: '14px !important' as any
    },
    '.ant-tree-select-dropdown-rtl .ant-select-tree .ant-select-tree-switcher-loading-icon': {
        transform: 'scaleY(-1)'
    },
    '.ant-typography': {
        color: 'var(--text-main-color)',
        wordBreak: 'break-word'
    },
    '.ant-typography.ant-typography-secondary': { color: 'rgba(0,0,0,.45)' },
    '.ant-typography.ant-typography-success': {
        color: 'var(--ant-success-color)'
    },
    '.ant-typography.ant-typography-warning': {
        color: 'var(--ant-warning-color)'
    },
    '.ant-typography.ant-typography-danger': { color: 'var(--ant-error-color)' },
    'a.ant-typography.ant-typography-danger:active,a.ant-typography.ant-typography-danger:focus': {
        color: 'var(--ant-error-color-active)'
    },
    'a.ant-typography.ant-typography-danger:hover': {
        color: 'var(--ant-error-color-hover)'
    },
    '.ant-typography.ant-typography-disabled': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed',
        userSelect: 'none'
    },
    '.ant-typography p,div.ant-typography': { marginBottom: '1em' },
    '.ant-typography h1,div.ant-typography-h1,div.ant-typography-h1>textarea,h1.ant-typography': {
        marginBottom: '.5em',
        color: 'var(--heading-color)',
        fontWeight: 600,
        fontSize: '44px',
        lineHeight: 1.23
    },
    '.ant-typography h2,div.ant-typography-h2,div.ant-typography-h2>textarea,h2.ant-typography': {
        marginBottom: '.5em',
        color: 'var(--heading-color)',
        fontWeight: 600,
        fontSize: '35px',
        lineHeight: 1.35
    },
    '.ant-typography h3,div.ant-typography-h3,div.ant-typography-h3>textarea,h3.ant-typography': {
        marginBottom: '.5em',
        color: 'var(--heading-color)',
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: 1.35
    },
    '.ant-typography h4,div.ant-typography-h4,div.ant-typography-h4>textarea,h4.ant-typography': {
        marginBottom: '.5em',
        color: 'var(--heading-color)',
        fontWeight: 600,
        fontSize: '23px',
        lineHeight: 1.4
    },
    '.ant-typography h5,div.ant-typography-h5,div.ant-typography-h5>textarea,h5.ant-typography': {
        marginBottom: '.5em',
        color: 'var(--heading-color)',
        fontWeight: 600,
        fontSize: '19px',
        lineHeight: 1.5
    },
    '.ant-typography div+h1,.ant-typography div+h2,.ant-typography div+h3,.ant-typography div+h4,.ant-typography div+h5,.ant-typography h1+h1,.ant-typography h1+h2,.ant-typography h1+h3,.ant-typography h1+h4,.ant-typography h1+h5,.ant-typography h2+h1,.ant-typography h2+h2,.ant-typography h2+h3,.ant-typography h2+h4,.ant-typography h2+h5,.ant-typography h3+h1,.ant-typography h3+h2,.ant-typography h3+h3,.ant-typography h3+h4,.ant-typography h3+h5,.ant-typography h4+h1,.ant-typography h4+h2,.ant-typography h4+h3,.ant-typography h4+h4,.ant-typography h4+h5,.ant-typography h5+h1,.ant-typography h5+h2,.ant-typography h5+h3,.ant-typography h5+h4,.ant-typography h5+h5,.ant-typography li+h1,.ant-typography li+h2,.ant-typography li+h3,.ant-typography li+h4,.ant-typography li+h5,.ant-typography p+h1,.ant-typography p+h2,.ant-typography p+h3,.ant-typography p+h4,.ant-typography p+h5,.ant-typography ul+h1,.ant-typography ul+h2,.ant-typography ul+h3,.ant-typography ul+h4,.ant-typography ul+h5,.ant-typography+h1.ant-typography,.ant-typography+h2.ant-typography,.ant-typography+h3.ant-typography,.ant-typography+h4.ant-typography,.ant-typography+h5.ant-typography': {
        marginTop: '1.2em'
    },
    '.ant-typography code,.ant-typography kbd': {
        margin: '0 .2em',
        border: '1px solid rgba(100,100,100,.2)'
    },
    'a.ant-typography-ellipsis,span.ant-typography-ellipsis': {
        display: 'inline-block',
        maxWidth: '100%'
    },
    '.ant-typography a,a.ant-typography': {
        color: 'var(--ant-primary-color)',
        outline: '0',
        cursor: 'pointer',
        transition: 'color .3s',
        textDecoration: 'none'
    },
    '.ant-typography a:focus-visible,.ant-typography a:hover,a.ant-typography:focus-visible,a.ant-typography:hover': {
        color: 'var(--ant-primary-color-hover)'
    },
    '.ant-typography a:active,a.ant-typography:active': {
        color: 'var(--ant-primary-color-active)'
    },
    '.ant-typography a:active,.ant-typography a:hover,a.ant-typography:active,a.ant-typography:hover': {
        textDecoration: 'none'
    },
    '.ant-typography a.ant-typography-disabled,.ant-typography a[disabled],a.ant-typography.ant-typography-disabled,a.ant-typography[disabled]': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-typography a.ant-typography-disabled:active,.ant-typography a.ant-typography-disabled:hover,.ant-typography a[disabled]:active,.ant-typography a[disabled]:hover,a.ant-typography.ant-typography-disabled:active,a.ant-typography.ant-typography-disabled:hover,a.ant-typography[disabled]:active,a.ant-typography[disabled]:hover': {
        color: 'rgba(0,0,0,.25)'
    },
    '.ant-typography a.ant-typography-disabled:active,.ant-typography a[disabled]:active,a.ant-typography.ant-typography-disabled:active,a.ant-typography[disabled]:active': {
        pointerEvents: 'none'
    },
    '.ant-typography code': {
        padding: '.2em .4em .1em',
        fontSize: '85%',
        background: 'rgba(150,150,150,.1)',
        borderRadius: '3px'
    },
    '.ant-typography kbd': {
        padding: '.15em .4em .1em',
        fontSize: '90%',
        background: 'rgba(150,150,150,.06)',
        borderBottomWidth: '2px',
        borderRadius: '3px'
    },
    '.ant-typography mark': { padding: '0', backgroundColor: '#ffe58f' },
    '.ant-typography ins,.ant-typography u': {
        textDecoration: 'underline',
        textDecorationSkipInk: 'auto'
    },
    '.ant-typography del,.ant-typography s': { textDecoration: 'line-through' },
    '.ant-typography strong': { fontWeight: 600 },
    '.ant-typography-copy,.ant-typography-edit,.ant-typography-expand': {
        color: 'var(--ant-primary-color)',
        outline: '0',
        cursor: 'pointer',
        transition: 'color .3s',
        marginLeft: '4px'
    },
    '.ant-typography-copy:focus-visible,.ant-typography-copy:hover,.ant-typography-edit:focus-visible,.ant-typography-edit:hover,.ant-typography-expand:focus-visible,.ant-typography-expand:hover': {
        color: 'var(--ant-primary-color-hover)'
    },
    '.ant-typography-copy:active,.ant-typography-edit:active,.ant-typography-expand:active': {
        color: 'var(--ant-primary-color-active)'
    },
    '.ant-typography-copy-success,.ant-typography-copy-success:focus,.ant-typography-copy-success:hover': {
        color: 'var(--ant-success-color)'
    },
    '.ant-typography-edit-content': { position: 'relative' },
    'div.ant-typography-edit-content': {
        left: '-12px',
        marginTop: '-12.4px',
        marginBottom: 'calc(1em - 11.4px - 1px)'
    },
    '.ant-typography-edit-content-confirm': {
        position: 'absolute',
        right: '10px',
        bottom: '8px',
        color: 'rgba(0,0,0,.45)',
        fontWeight: 400,
        fontSize: '16px',
        fontStyle: 'normal',
        pointerEvents: 'none'
    },
    '.ant-typography-edit-content textarea': {
        height: '1em',
        margin: '0 !important' as any,
        MozTransition: 'none'
    },
    '.ant-typography ol,.ant-typography ul': { margin: '0 0 1em', padding: '0' },
    '.ant-typography ol li,.ant-typography ul li': {
        margin: '0 0 0 20px',
        padding: '0 0 0 4px'
    },
    '.ant-typography ul': { listStyleType: 'circle' },
    '.ant-typography ul ul': { listStyleType: 'disc' },
    '.ant-typography ol': { listStyleType: 'decimal' },
    '.ant-typography blockquote,.ant-typography pre': { margin: '1em 0' },
    '.ant-typography pre': {
        padding: '.4em .6em',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        background: 'rgba(150,150,150,.1)',
        border: '1px solid rgba(100,100,100,.2)',
        borderRadius: '3px'
    },
    '.ant-typography pre code': {
        display: 'inline',
        margin: '0',
        padding: '0',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        background: '0 0',
        border: '0'
    },
    '.ant-typography blockquote': {
        padding: '0 0 0 .6em',
        borderLeft: '4px solid rgba(100,100,100,.2)',
        opacity: 0.85
    },
    '.ant-typography-single-line': { whiteSpace: 'nowrap' },
    '.ant-typography-ellipsis-single-line': {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    'a.ant-typography-ellipsis-single-line,span.ant-typography-ellipsis-single-line': {
        verticalAlign: 'bottom'
    },
    '.ant-typography-ellipsis-multiple-line': {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical'
    },
    '.ant-typography-rtl .ant-typography-copy,.ant-typography-rtl .ant-typography-edit,.ant-typography-rtl .ant-typography-expand': {
        marginRight: '4px',
        marginLeft: '0'
    },
    '.ant-typography-rtl .ant-typography-expand': { cssFloat: 'left' },
    'div.ant-typography-edit-content.ant-typography-rtl': {
        right: '-12px',
        left: 'auto'
    },
    '.ant-typography-rtl .ant-typography-edit-content-confirm': {
        right: 'auto',
        left: '10px'
    },
    '.ant-typography-rtl.ant-typography ol li,.ant-typography-rtl.ant-typography ul li': {
        margin: '0 20px 0 0',
        padding: '0 4px 0 0'
    },
    '.ant-upload': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        lineHeight: 1.5715,
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        outline: '0'
    },
    '.ant-upload p': { margin: '0' },
    '.ant-upload-btn': { display: 'block', width: '100%', outline: '0' },
    '.ant-upload input[type=file]': { cursor: 'pointer' },
    '.ant-upload.ant-upload-select': { display: 'inline-block' },
    '.ant-upload.ant-upload-disabled': {
        color: 'rgba(0,0,0,.25)',
        cursor: 'not-allowed'
    },
    '.ant-upload.ant-upload-select-picture-card': {
        width: '104px',
        height: '104px',
        marginRight: '8px',
        marginBottom: '8px',
        textAlign: 'center',
        verticalAlign: 'top',
        backgroundColor: 'rgba(1,80,154,.05)',
        border: '1px dashed var(--border-base-color)',
        borderRadius: '7px',
        cursor: 'pointer',
        transition: 'border-color .3s'
    },
    '.ant-upload.ant-upload-select-picture-card>.ant-upload': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center'
    },
    '.ant-upload.ant-upload-select-picture-card:hover': {
        borderColor: 'var(--ant-primary-color)'
    },
    '.ant-upload-disabled.ant-upload.ant-upload-select-picture-card:hover': {
        borderColor: 'var(--border-base-color)'
    },
    '.ant-upload.ant-upload-drag': {
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        border: '1px dashed var(--border-base-color)',
        borderRadius: '7px',
        cursor: 'pointer',
        transition: 'border-color .3s'
    },
    '.ant-upload.ant-upload-drag .ant-upload': { padding: '16px 0' },
    '.ant-upload.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled)': {
        borderColor: 'var(--ant-primary-7)'
    },
    '.ant-upload.ant-upload-drag.ant-upload-disabled': { cursor: 'not-allowed' },
    '.ant-upload.ant-upload-drag .ant-upload-btn': {
        display: 'table',
        height: '100%'
    },
    '.ant-upload.ant-upload-drag .ant-upload-drag-container': {
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    '.ant-upload-list-item-name,.ant-upload-picture-card-wrapper': {
        display: 'inline-block',
        width: '100%'
    },
    '.ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover': {
        borderColor: 'var(--ant-primary-5)'
    },
    '.ant-upload.ant-upload-drag p.ant-upload-drag-icon': {
        marginBottom: '20px'
    },
    '.ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon': {
        color: 'var(--ant-primary-5)',
        fontSize: '48px'
    },
    '.ant-upload.ant-upload-drag p.ant-upload-text': {
        margin: '0 0 4px',
        color: 'var(--heading-color)',
        fontSize: '18px'
    },
    '.ant-upload.ant-upload-drag p.ant-upload-hint': {
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px'
    },
    '.ant-upload.ant-upload-drag .anticon-plus': {
        color: 'rgba(0,0,0,.25)',
        fontSize: '30px',
        transition: 'all .3s'
    },
    '.ant-upload.ant-upload-drag .anticon-plus:hover,.ant-upload.ant-upload-drag:hover .anticon-plus': {
        color: 'rgba(0,0,0,.45)'
    },
    '.ant-upload-list::after,.ant-upload-list::before,.ant-upload-picture-card-wrapper::after,.ant-upload-picture-card-wrapper::before': {
        display: 'table',
        content: '""'
    },
    '.ant-upload-picture-card-wrapper::after': { clear: 'both' },
    '.ant-upload-list': {
        boxSizing: 'border-box',
        margin: '0',
        padding: '0',
        color: 'var(--text-main-color)',
        fontSize: '16px',
        fontVariant: 'tabular-nums',
        listStyle: 'none',
        fontFeatureSettings: '"tnum"',
        lineHeight: 1.5715
    },
    '.ant-upload-list::after': { clear: 'both' },
    '.ant-upload-list-item': {
        position: 'relative',
        height: '25.14px',
        marginTop: '8px',
        fontSize: '16px'
    },
    '.ant-upload-list-item-name': {
        paddingLeft: '24px',
        overflow: 'hidden',
        lineHeight: 1.5715,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    '.ant-upload-list-item-card-actions': { position: 'absolute', right: '0' },
    '.ant-upload-list-item-card-actions-btn': { opacity: 0 },
    '.ant-upload-list-item-card-actions-btn:focus,.ant-upload-list-item-card-actions.picture .ant-upload-list-item-card-actions-btn,.ant-upload-list-item-error .ant-upload-list-item-card-actions-btn,.ant-upload-list-item:hover .ant-upload-list-item-card-actions-btn': {
        opacity: 1
    },
    '.ant-upload-list-item-card-actions-btn.ant-btn-sm': {
        height: '25.14px',
        lineHeight: 1,
        verticalAlign: 'top'
    },
    '.ant-upload-list-item-card-actions.picture': { top: '22px', lineHeight: 0 },
    '.ant-upload-list-item-card-actions .anticon': {
        color: 'rgba(0,0,0,.45)',
        transition: 'all .3s'
    },
    '.ant-upload-list-item-card-actions:hover .anticon': {
        color: 'var(--text-main-color)'
    },
    '.ant-upload-list-item-info': {
        height: '100%',
        transition: 'background-color .3s'
    },
    '.ant-upload-list-item-info>span': {
        display: 'block',
        width: '100%',
        height: '100%'
    },
    '.ant-upload-list-item-info .ant-upload-text-icon .anticon,.ant-upload-list-item-info .anticon-loading .anticon': {
        position: 'absolute',
        top: '6px',
        color: 'rgba(0,0,0,.45)',
        fontSize: '16px'
    },
    '.ant-upload-list-item:hover .ant-upload-list-item-info': {
        backgroundColor: 'var(--item-hover-bg)'
    },
    '.ant-upload-list-picture .ant-upload-list-item:hover,.ant-upload-list-picture .ant-upload-list-item:hover .ant-upload-list-item-info,.ant-upload-list-picture-card .ant-upload-list-item:hover,.ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info': {
        background: '0 0'
    },
    '.ant-upload-list-item-error,.ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon,.ant-upload-list-item-error .ant-upload-list-item-name,.ant-upload-list-item-error .ant-upload-text-icon>.anticon': {
        color: 'var(--ant-error-color)'
    },
    '.ant-upload-list-item-progress': {
        position: 'absolute',
        bottom: '-12px',
        width: '100%',
        paddingLeft: '28px',
        fontSize: '16px',
        lineHeight: 0
    },
    '.ant-upload-list-picture .ant-upload-list-item,.ant-upload-list-picture-card .ant-upload-list-item': {
        position: 'relative',
        height: '66px',
        padding: '8px',
        border: '1px solid var(--border-base-color)',
        borderRadius: '7px'
    },
    '.ant-upload-list-picture .ant-upload-list-item-error,.ant-upload-list-picture-card .ant-upload-list-item-error': {
        borderColor: 'var(--ant-error-color)'
    },
    '.ant-upload-list-picture .ant-upload-list-item-uploading,.ant-upload-list-picture-card .ant-upload-list-item-uploading': {
        borderStyle: 'dashed'
    },
    '.ant-upload-list-picture .ant-upload-list-item-thumbnail,.ant-upload-list-picture-card .ant-upload-list-item-thumbnail': {
        width: '48px',
        height: '48px',
        lineHeight: '60px',
        textAlign: 'center',
        opacity: 0.8
    },
    '.ant-upload-list-picture .ant-upload-list-item-thumbnail .anticon,.ant-upload-list-picture-card .ant-upload-list-item-thumbnail .anticon': {
        fontSize: '26px'
    },
    '.ant-upload-list-picture .ant-upload-list-item-error .ant-upload-list-item-thumbnail .anticon svg path[fill="#e6f7ff"],.ant-upload-list-picture-card .ant-upload-list-item-error .ant-upload-list-item-thumbnail .anticon svg path[fill="#e6f7ff"]': {
        fill: 'var(--ant-error-color-deprecated-bg)'
    },
    '.ant-upload-list-picture .ant-upload-list-item-error .ant-upload-list-item-thumbnail .anticon svg path[fill="#1890ff"],.ant-upload-list-picture-card .ant-upload-list-item-error .ant-upload-list-item-thumbnail .anticon svg path[fill="#1890ff"]': {
        fill: 'var(--ant-error-color)'
    },
    '.ant-upload-list-picture .ant-upload-list-item-icon,.ant-upload-list-picture-card .ant-upload-list-item-icon': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        fontSize: '26px',
        transform: 'translate(-50%,-50%)'
    },
    '.ant-upload-list-picture .ant-upload-list-item-icon .anticon,.ant-upload-list-picture-card .ant-upload-list-item-icon .anticon': {
        fontSize: '26px'
    },
    '.ant-upload-list-picture .ant-upload-list-item-image,.ant-upload-list-picture-card .ant-upload-list-item-image': {
        maxWidth: '100%'
    },
    '.ant-upload-list-picture .ant-upload-list-item-thumbnail img,.ant-upload-list-picture-card .ant-upload-list-item-thumbnail img': {
        display: 'block',
        width: '48px',
        height: '48px',
        overflow: 'hidden'
    },
    '.ant-upload-list-picture .ant-upload-list-item-name,.ant-upload-list-picture-card .ant-upload-list-item-name': {
        display: 'inline-block',
        boxSizing: 'border-box',
        maxWidth: '100%',
        margin: '0 0 0 8px',
        paddingRight: '8px',
        paddingLeft: '48px',
        overflow: 'hidden',
        lineHeight: '44px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        transition: 'all .3s'
    },
    '.ant-upload-list-picture .ant-upload-list-item-uploading .ant-upload-list-item-name,.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-name': {
        marginBottom: '12px'
    },
    '.ant-upload-list-picture .ant-upload-list-item-progress,.ant-upload-list-picture-card .ant-upload-list-item-progress': {
        bottom: '14px',
        width: 'calc(100% - 24px)',
        marginTop: '0',
        paddingLeft: '56px'
    },
    '.ant-upload-list-picture-card-container': {
        display: 'inline-block',
        width: '104px',
        height: '104px',
        margin: '0 8px 8px 0',
        verticalAlign: 'top'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item': {
        height: '100%',
        margin: '0'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-info': {
        position: 'relative',
        height: '100%',
        overflow: 'hidden'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-info::before': {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.5)',
        opacity: 0,
        transition: 'all .3s',
        content: '" "'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info::before': {
        opacity: 1
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-actions': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 10,
        whiteSpace: 'nowrap',
        transform: 'translate(-50%,-50%)',
        opacity: 0,
        transition: 'all .3s'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete,.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-download,.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye': {
        zIndex: 10,
        width: '16px',
        margin: '0 4px',
        color: 'rgba(255,255,255,.85)',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all .3s'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete:hover,.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-download:hover,.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye:hover': {
        color: '#fff'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-actions:hover,.ant-upload-list-picture-card .ant-upload-list-item-info:hover+.ant-upload-list-item-actions': {
        opacity: 1
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-thumbnail,.ant-upload-list-picture-card .ant-upload-list-item-thumbnail img': {
        position: 'static',
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-name': {
        display: 'none',
        margin: '8px 0 0',
        padding: '0',
        lineHeight: 1.5715,
        textAlign: 'center'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-file+.ant-upload-list-item-name': {
        position: 'absolute',
        bottom: '10px',
        display: 'block'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-uploading.ant-upload-list-item': {
        backgroundColor: 'rgba(1,80,154,.05)'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info': {
        height: 'auto'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info .anticon-delete,.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info .anticon-eye,.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info::before': {
        display: 'none'
    },
    '.ant-upload-list-picture-card .ant-upload-list-item-progress': {
        bottom: '32px',
        width: 'calc(100% - 14px)',
        paddingLeft: '0'
    },
    '.ant-upload-list-picture-container,.ant-upload-list-text-container': {
        transition: 'opacity .3s,height .3s'
    },
    '.ant-upload-list-picture-container::before,.ant-upload-list-text-container::before': {
        display: 'table',
        width: '0',
        height: '0',
        content: '""'
    },
    '.ant-upload-list-picture-container .ant-upload-span,.ant-upload-list-text-container .ant-upload-span': {
        display: 'block',
        flex: 'auto'
    },
    '.ant-upload-list-picture .ant-upload-span,.ant-upload-list-text .ant-upload-span': {
        display: 'flex',
        alignItems: 'center'
    },
    '.ant-upload-list-picture .ant-upload-span>*,.ant-upload-list-text .ant-upload-span>*': {
        flex: 'none'
    },
    '.ant-upload-list-picture .ant-upload-list-item-name,.ant-upload-list-text .ant-upload-list-item-name': {
        flex: 'auto',
        margin: '0',
        padding: '0 8px'
    },
    '.ant-upload-list-picture .ant-upload-list-item-card-actions,.ant-upload-list-text .ant-upload-list-item-card-actions,.ant-upload-list-text .ant-upload-text-icon .anticon': {
        position: 'static'
    },
    '.ant-upload-list .ant-upload-animate-inline-appear,.ant-upload-list .ant-upload-animate-inline-enter,.ant-upload-list .ant-upload-animate-inline-leave': {
        animationDuration: '.3s',
        animationTimingFunction: 'cubic-bezier(.78,.14,.15,.86)',
        animationFillMode: 'forwards'
    },
    '.ant-upload-list .ant-upload-animate-inline-appear,.ant-upload-list .ant-upload-animate-inline-enter': {
        animationName: 'uploadAnimateInlineIn'
    },
    '.ant-upload-list .ant-upload-animate-inline-leave': {
        animationName: 'uploadAnimateInlineOut'
    },
    '@keyframes uploadAnimateInlineIn': {
        from: { width: '0', height: '0', margin: '0', padding: '0', opacity: 0 }
    },
    '@keyframes uploadAnimateInlineOut': {
        to: { width: '0', height: '0', margin: '0', padding: '0', opacity: 0 }
    },
    '.ant-upload-rtl.ant-upload.ant-upload-select-picture-card': {
        marginRight: 'auto',
        marginLeft: '8px'
    },
    '.ant-upload-list-rtl .ant-upload-list-item-list-type-text:hover .ant-upload-list-item-name-icon-count-1': {
        paddingRight: '22px',
        paddingLeft: '14px'
    },
    '.ant-upload-list-rtl .ant-upload-list-item-list-type-text:hover .ant-upload-list-item-name-icon-count-2': {
        paddingRight: '22px',
        paddingLeft: '28px'
    },
    '.ant-upload-list-rtl .ant-upload-list-item-name': {
        paddingRight: '24px',
        paddingLeft: '0'
    },
    '.ant-upload-list-rtl .ant-upload-list-item-name-icon-count-1': {
        paddingLeft: '14px'
    },
    '.ant-upload-list-rtl .ant-upload-list-item-card-actions': {
        right: 'auto',
        left: '0'
    },
    '.ant-upload-list-rtl .ant-upload-list-item-card-actions .anticon': {
        paddingRight: '0',
        paddingLeft: '5px'
    },
    '.ant-upload-list-rtl .ant-upload-list-item-info': {
        padding: '0 4px 0 12px'
    },
    '.ant-upload-list-rtl .ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon': {
        paddingRight: '0',
        paddingLeft: '5px'
    },
    '.ant-upload-list-rtl .ant-upload-list-item-progress': {
        paddingRight: '28px',
        paddingLeft: '0'
    },
    '.ant-upload-list-picture .ant-upload-list-item-info,.ant-upload-list-picture-card .ant-upload-list-item-info': {
        padding: '0'
    },
    '.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-thumbnail,.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-thumbnail': {
        right: '8px',
        left: 'auto'
    },
    '.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-icon,.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-actions,.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-icon': {
        right: '50%',
        left: 'auto',
        transform: 'translate(50%,-50%)'
    },
    '.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-name,.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-name': {
        margin: '0 8px 0 0',
        paddingRight: '48px',
        paddingLeft: '8px'
    },
    '.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-name-icon-count-1,.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-name-icon-count-1': {
        paddingRight: '48px',
        paddingLeft: '18px'
    },
    '.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-name-icon-count-2,.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-name-icon-count-2': {
        paddingRight: '48px',
        paddingLeft: '36px'
    },
    '.ant-upload-list-rtl.ant-upload-list-picture .ant-upload-list-item-progress,.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-progress': {
        paddingRight: '0',
        paddingLeft: '0'
    },
    '.ant-upload-list-rtl .ant-upload-list-picture-card-container': {
        margin: '0 0 8px 8px'
    },
    '.ant-upload-list-rtl.ant-upload-list-picture-card .ant-upload-list-item-file+.ant-upload-list-item-name': {
        margin: '8px 0 0',
        padding: '0'
    }  
}));