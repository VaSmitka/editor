import { ThemeType } from '@app/interfaces/interfaces';
import { themeObject } from '@app/styles/themes/themeVariables';

export const getDefaultAntdStyles = (theme: ThemeType) => ({
  colorPrimary: themeObject[theme].primary,
  colorInfo: themeObject[theme].primary,
  colorSuccess: themeObject[theme].success,
  colorError: themeObject[theme].error,
  colorWarning: themeObject[theme].warning,

  // base override
  backgroundColorLight: 'rgba(1, 80, 154, 0.05)',

  fontFamily: '"Montserrat", sans-serif',
  fontSizeBase: '16px',
  fontSizeSm: '14px', // @font-size-base - 2px,

  heightSm: '32px',
  heightBase: '50px',
  heightLg: '64px',

  borderRadiusBase: '7px',
  borderColorSplit: '#f0f0f0',

  // Media queries
  screenXs: '360px',
  screenSm: '568px',
  screenXl: '1280px',
  screenXxl: '1920px',

  // Layout
  layoutHeaderHeight: '4.25rem',
  layoutHeaderPadding: '1rem',

  // Alert
  alertInfoBgColor: '#dfefff',

  // Card
  cardHeadColor: themeObject[theme].textMain, // @text-color,
  cardHeadPadding: '20px',
  cardHeadPaddingSm: '15px',
  cardHeadFontSize: '18px',
  cardHeadFontSizeSm: '16px', // @font-size-base,
  cardPaddingBase: '20px',
  cardPaddingBaseSm: '15px',

  // Table
  tableBorderRadiusBase: 0,

  // Checkbox
  checkboxCheckBg: 'transparent',

  // Tag
  tagFontSize: '14px', // @font-size-sm,

  // Button
  btnFontWeight: 600,

  btnGhostColor: themeObject[theme].primary, // @primary-color,
  btnGhostBorder: themeObject[theme].primary, // @primary-color,

  // Select
  selectItemSelectedFontWeight: 500,

  // Rate
  rateStarColor: '#ffc24b',
  rateStarSize: '8px',

  // Form
  formItemMarginBottom: '16px',
  formItemLabelFontSize: '14px', // @font-size-sm,

  // Select
  selectSingleItemHeightLg: '64px', // @height-lg,

  // Menu
  menuInlineToplevelItemHeight: '50px', // @height-base,
  menuItemHeight: '50px', // @height-base,
  menuIconMarginRight: '1rem',
  menuIconSize: '1.25rem',

  // Popconfirm
  zIndexPopover: 2000,
  zIndexNotification: 9999,

  // Table
  tableBorderColor: '#b3cbe1',

  // themes value override
  headingColor: 'var(--heading-color)',
  componentBackground: 'var(--background-color)',
  textColor: 'var(--text-main-color)',
  itemHoverBg: 'var(--item-hover-bg)',
  backgroundColorBase: 'var(--background-base-color)',
  borderColorBase: 'var(--border-base-color)',

  // Icons
  iconColorHover: 'var(--icon-hover-color)',

  // Disabled state
  disabledBg: 'var(--disabled-bg-color)',

  // Layout
  layoutBodyBackground: 'var(--layout-body-bg-color)',
  layoutHeaderBackground: 'var(--layout-header-bg-color)',
  layoutSiderBackground: 'var(--layout-sider-bg-color)',

  // Input
  inputPlaceholderColor: 'var(--input-placeholder-color)',
  inputDisabledColor: 'var(--disabled-color)',

  // Avatar
  avatarBg: 'var(--avatar-bg)',

  // Alert
  alertTextColor: 'var(--alert-text-color)',

  // Buttons
  btnDisableColor: 'var(--disabled-color)',

  // Breadcrumb
  breadcrumbBaseColor: 'var(--breadcrumb-color)',
  breadcrumbLinkColor: 'var(--breadcrumb-color)',
  breadcrumbSeparatorColor: 'var(--breadcrumb-color)',

  // Radio buttons
  radioDisabledButtonCheckedColor: 'var(--disabled-color)',

  // Pagination
  paginationItemDisabledColorActive: 'var(--disabled-color)',

  // Slider
  sliderDisabledColor: 'var(--disabled-color)',

  // Modal
  modalCloseColor: 'var(--icon-color)',

  // Progress
  progressRemainingColor: 'var(--background-base-color)',
});
