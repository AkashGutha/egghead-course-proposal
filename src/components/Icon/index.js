import React from 'react'
import PropTypes from 'prop-types'
import {keys} from 'lodash'
import colors from 'lib/colors'
import {
EggheadAccept,
EggheadAlert,
EggheadArrowDown,
EggheadArrowLeft,
EggheadArrowRight,
EggheadArrowUp,
EggheadBrowseAll,
EggheadCheck,
EggheadCheckWatched,
EggheadCircleArrowDownOutline,
EggheadClockTime,
EggheadCommentAlert,
EggheadCommunityResource,
EggheadCross,
EggheadEdit,
EggheadEnterSearch,
EggheadFacebook,
EggheadFlag,
EggheadFolderLanguage,
EggheadFullCoursesHeadline,
EggheadHelp,
EggheadHistory,
EggheadInfo,
EggheadLessonPlayPlaylist,
EggheadMail,
EggheadPlay,
EggheadPlaybook,
EggheadPlayCourse,
EggheadPlayLesson,
EggheadPlus,
EggheadProfile,
EggheadProgressRing,
EggheadQuestion,
EggheadQuickLessonsHeadline,
EggheadRefresh,
EggheadRequest,
EggheadRevise,
EggheadRss,
EggheadSignOut,
EggheadStarFill,
EggheadStarOutline,
EggheadStats,
EggheadTechnology,
EggheadThumbsDown,
EggheadThumbsUp,
EggheadTimerPlus,
EggheadTwitter,
EggheadUpdate,
EggheadUpload,
EggheadUploadCloud,
EggheadThinHamburger
} from 'react-icons/lib/egghead'
import {
  FaAdjust,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaAngleDoubleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaApple,
  FaArchive,
  FaAreaChart,
  FaArrowCircleDown,
  FaArrowCircleLeft,
  FaArrowCircleODown,
  FaArrowCircleOLeft,
  FaArrowCircleORight,
  FaArrowCircleOUp,
  FaArrowCircleRight,
  FaArrowCircleUp,
  FaArrows,
  FaArrowsAlt,
  FaArrowsH,
  FaArrowsV,
  FaAsterisk,
  FaAt,
  FaBackward,
  FaBan,
  FaBank,
  FaBarChart,
  FaBarcode,
  FaBars,
  FaBirthdayCake,
  FaBold,
  FaBomb,
  FaBook,
  FaBookmark,
  FaBookmarkO,
  FaBug,
  FaBullhorn,
  FaBullseye,
  FaCalculator,
  FaCalendar,
  FaCalendarCheckO,
  FaCalendarMinusO,
  FaCalendarO,
  FaCalendarPlusO,
  FaCalendarTimesO,
  FaCamera,
  FaCameraRetro,
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaCaretSquareODown,
  FaCaretSquareOLeft,
  FaCaretSquareORight,
  FaCaretSquareOUp,
  FaCaretUp,
  FaCartArrowDown,
  FaCartPlus,
  FaCertificate,
  FaChain,
  FaChainBroken,
  FaCheckCircle,
  FaCheckCircleO,
  FaCheckSquare,
  FaCheckSquareO,
  FaChevronCircleDown,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronCircleUp,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChrome,
  FaCircle,
  FaCircleO,
  FaCircleONotch,
  FaCircleThin,
  FaClipboard,
  FaClockO,
  FaClone,
  FaClose,
  FaCloud,
  FaCloudDownload,
  FaCloudUpload,
  FaCode,
  FaCodeFork,
  FaCodepen,
  FaCoffee,
  FaCog,
  FaCogs,
  FaColumns,
  FaComment,
  FaCommentO,
  FaCommenting,
  FaCommentingO,
  FaComments,
  FaCommentsO,
  FaCompress,
  FaCopy,
  FaCopyright,
  FaCreativeCommons,
  FaCreditCard,
  FaCreditCardAlt,
  FaCrop,
  FaCrosshairs,
  FaCss3,
  FaCube,
  FaCubes,
  FaCut,
  FaDashboard,
  FaDatabase,
  FaDedent,
  FaDesktop,
  FaDiamond,
  FaDotCircleO,
  FaDownload,
  FaEject,
  FaEllipsisH,
  FaEllipsisV,
  FaEnvelope,
  FaEnvelopeO,
  FaEnvelopeSquare,
  FaEraser,
  FaExchange,
  FaExclamation,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaExpand,
  FaExternalLink,
  FaExternalLinkSquare,
  FaEye,
  FaEyeSlash,
  FaEyedropper,
  FaFastBackward,
  FaFastForward,
  FaFeed,
  FaFile,
  FaFileArchiveO,
  FaFileAudioO,
  FaFileCodeO,
  FaFileExcelO,
  FaFileImageO,
  FaFileMovieO,
  FaFileO,
  FaFilePdfO,
  FaFilePowerpointO,
  FaFileText,
  FaFileTextO,
  FaFileWordO,
  FaFilm,
  FaFilter,
  FaFlagCheckered,
  FaFlagO,
  FaFlask,
  FaFloppyO,
  FaFolder,
  FaFolderO,
  FaFolderOpen,
  FaFolderOpenO,
  FaFont,
  FaForward,
  FaFrownO,
  FaFutbolO,
  FaGavel,
  FaGift,
  FaGit,
  FaGitSquare,
  FaGithub,
  FaGithubAlt,
  FaGlass,
  FaGlobe,
  FaGoogle,
  FaGooglePlus,
  FaGooglePlusSquare,
  FaGraduationCap,
  FaGroup,
  FaHandGrabO,
  FaHandODown,
  FaHandOLeft,
  FaHandORight,
  FaHandOUp,
  FaHashtag,
  FaHddO,
  FaHeart,
  FaHeartO,
  FaHome,
  FaHourglass,
  FaHourglass1,
  FaHourglass2,
  FaHourglass3,
  FaHourglassO,
  FaHtml5,
  FaICursor,
  FaImage,
  FaInbox,
  FaIndent,
  FaInfoCircle,
  FaInstagram,
  FaItalic,
  FaJsfiddle,
  FaKey,
  FaKeyboardO,
  FaLaptop,
  FaLeaf,
  FaLevelDown,
  FaLevelUp,
  FaLightbulbO,
  FaLineChart,
  FaList,
  FaListAlt,
  FaListOl,
  FaListUl,
  FaLocationArrow,
  FaLock,
  FaLongArrowDown,
  FaLongArrowLeft,
  FaLongArrowRight,
  FaLongArrowUp,
  FaMagic,
  FaMagnet,
  FaMailForward,
  FaMailReply,
  FaMailReplyAll,
  FaMap,
  FaMapPin,
  FaMapSigns,
  FaMehO,
  FaMicrophone,
  FaMicrophoneSlash,
  FaMinus,
  FaMinusCircle,
  FaMinusSquare,
  FaMinusSquareO,
  FaMobile,
  FaMoney,
  FaMoonO,
  FaMousePointer,
  FaMusic,
  FaNewspaperO,
  FaObjectGroup,
  FaObjectUngroup,
  FaPaperPlane,
  FaPaperPlaneO,
  FaPaperclip,
  FaParagraph,
  FaPause,
  FaPauseCircle,
  FaPauseCircleO,
  FaPencil,
  FaPencilSquare,
  FaPercent,
  FaPhone,
  FaPhoneSquare,
  FaPieChart,
  FaPlug,
  FaPlusCircle,
  FaPlusSquare,
  FaPlusSquareO,
  FaPrint,
  FaQuestionCircle,
  FaQuestionCircleO,
  FaQuoteLeft,
  FaQuoteRight,
  FaRecycle,
  FaRegistered,
  FaRepeat,
  FaRetweet,
  FaRotateLeft,
  FaRotateRight,
  FaRssSquare,
  FaSearch,
  FaSearchMinus,
  FaSearchPlus,
  FaServer,
  FaShareAlt,
  FaShareAltSquare,
  FaShareSquare,
  FaShareSquareO,
  FaShoppingCart,
  FaSignIn,
  FaSignal,
  FaSitemap,
  FaSlack,
  FaSliders,
  FaSmileO,
  FaSort,
  FaSortAlphaAsc,
  FaSortAlphaDesc,
  FaSortAmountAsc,
  FaSortAmountDesc,
  FaSortAsc,
  FaSortDesc,
  FaSortNumericAsc,
  FaSortNumericDesc,
  FaSpinner,
  FaSquare,
  FaSquareO,
  FaStar,
  FaStarHalf,
  FaStarHalfEmpty,
  FaStarO,
  FaStepBackward,
  FaStepForward,
  FaStickyNote,
  FaStickyNoteO,
  FaStop,
  FaStopCircle,
  FaStopCircleO,
  FaSunO,
  FaTable,
  FaTablet,
  FaTag,
  FaTags,
  FaTasks,
  FaTelevision,
  FaTerminal,
  FaTextHeight,
  FaTextWidth,
  FaTh,
  FaThLarge,
  FaThList,
  FaThumbTack,
  FaThumbsODown,
  FaThumbsOUp,
  FaTicket,
  FaTimesCircle,
  FaTimesCircleO,
  FaToggleOff,
  FaToggleOn,
  FaTrademark,
  FaTrash,
  FaTrashO,
  FaTree,
  FaTrophy,
  FaTwitterSquare,
  FaUnderline,
  FaUniversalAccess,
  FaUnlock,
  FaUnlockAlt,
  FaUsb,
  FaUser,
  FaUserPlus,
  FaUserTimes,
  FaVideoCamera,
  FaVimeoSquare,
  FaVolumeControlPhone,
  FaVolumeDown,
  FaVolumeOff,
  FaVolumeUp,
  FaWheelchair,
  FaWheelchairAlt,
  FaWifi,
  FaWindows,
  FaWrench,
} from 'react-icons/lib/fa'

const typeToSvgIcon = {
  'accept': EggheadAccept,
  'add': EggheadPlus,
  'adjust': FaAdjust,
  'alert': EggheadAlert,
  'align-center': FaAlignCenter,
  'align-justify': FaAlignJustify,
  'align-left': FaAlignLeft,
  'align-right': FaAlignRight,
  'angle-double-down': FaAngleDoubleDown,
  'angle-double-left': FaAngleDoubleLeft,
  'angle-double-right': FaAngleDoubleRight,
  'angle-double-up': FaAngleDoubleUp,
  'angle-down': FaAngleDown,
  'angle-left': FaAngleLeft,
  'angle-right': FaAngleRight,
  'angle-up': FaAngleUp,
  'apple': FaApple,
  'archive': FaArchive,
  'area-chart': FaAreaChart,
  'arrow-circle-down': FaArrowCircleDown,
  'arrow-circle-left': FaArrowCircleLeft,
  'arrow-circle-o-down': FaArrowCircleODown,
  'arrow-circle-o-left': FaArrowCircleOLeft,
  'arrow-circle-o-right': FaArrowCircleORight,
  'arrow-circle-o-up': FaArrowCircleOUp,
  'arrow-circle-right': FaArrowCircleRight,
  'arrow-circle-up': FaArrowCircleUp,
  'arrow-down': EggheadArrowDown,
  'arrow-left': EggheadArrowLeft,
  'arrow-right': EggheadArrowRight,
  'arrow-up': EggheadArrowUp,
  'arrows': FaArrows,
  'arrows-alt': FaArrowsAlt,
  'arrows-h': FaArrowsH,
  'arrows-v': FaArrowsV,
  'asterisk': FaAsterisk,
  'at': FaAt,
  'browse-all': EggheadBrowseAll,
  'backward': FaBackward,
  'ban': FaBan,
  'bank': FaBank,
  'bar-chart': FaBarChart,
  'barcode': FaBarcode,
  'bars': FaBars,
  'birthday-cake': FaBirthdayCake,
  'bold': FaBold,
  'bomb': FaBomb,
  'book': FaBook,
  'bookmark': FaBookmark,
  'bookmark-o': FaBookmarkO,
  'box': FaSquareO,
  'box-check': FaCheckSquareO,
  'bug': FaBug,
  'bullhorn': FaBullhorn,
  'bullseye': FaBullseye,
  'calculator': FaCalculator,
  'calendar': FaCalendar,
  'calendar-check-o': FaCalendarCheckO,
  'calendar-minus-o': FaCalendarMinusO,
  'calendar-o': FaCalendarO,
  'calendar-plus-o': FaCalendarPlusO,
  'calendar-times-o': FaCalendarTimesO,
  'camera': FaCamera,
  'camera-retro': FaCameraRetro,
  'cancel': EggheadCross,
  'caret-down': FaCaretDown,
  'caret-left': FaCaretLeft,
  'caret-right': FaCaretRight,
  'caret-square-o-down': FaCaretSquareODown,
  'caret-square-o-left': FaCaretSquareOLeft,
  'caret-square-o-right': FaCaretSquareORight,
  'caret-square-o-up': FaCaretSquareOUp,
  'caret-up': FaCaretUp,
  'cart-arrow-down': FaCartArrowDown,
  'cart-plus': FaCartPlus,
  'certificate': FaCertificate,
  'chain': FaChain,
  'chain-broken': FaChainBroken,
  'check': EggheadCheck,
  'check-circle': FaCheckCircle,
  'check-circle-o': FaCheckCircleO,
  'check-square': FaCheckSquare,
  'check-square-o': FaCheckSquareO,
  'check-watched': EggheadCheckWatched,
  'chevron-circle-down': FaChevronCircleDown,
  'chevron-circle-left': FaChevronCircleLeft,
  'chevron-circle-right': FaChevronCircleRight,
  'chevron-circle-up': FaChevronCircleUp,
  'chevron-down': FaChevronDown,
  'chevron-left': FaChevronLeft,
  'chevron-right': FaChevronRight,
  'chevron-up': FaChevronUp,
  'chrome': FaChrome,
  'circle': FaCircle,
  'circle-arrow-down-outline': EggheadCircleArrowDownOutline,
  'circle-o': FaCircleO,
  'circle-o-notch': FaCircleONotch,
  'circle-thin': FaCircleThin,
  'clipboard': FaClipboard,
  'clock': FaClockO,
  'clock-time': EggheadClockTime,
  'clone': FaClone,
  'close': FaClose,
  'cloud': FaCloud,
  'cloud-download': FaCloudDownload,
  'cloud-upload': FaCloudUpload,
  'code': FaCode,
  'code-fork': FaCodeFork,
  'codepen': FaCodepen,
  'coffee': FaCoffee,
  'cog': FaCog,
  'cogs': FaCogs,
  'columns': FaColumns,
  'comment': FaComment,
  'comment-alert': EggheadCommentAlert,
  'comment-o': FaCommentO,
  'commenting': FaCommenting,
  'commenting-o': FaCommentingO,
  'comments': FaComments,
  'comments-o': FaCommentsO,
  'community-resource': EggheadCommunityResource,
  'compress': FaCompress,
  'copy': FaCopy,
  'copyright': FaCopyright,
  'course': FaFolderOpenO,
  'course-headline': EggheadFullCoursesHeadline,
  'creative-commons': FaCreativeCommons,
  'credit-card': FaCreditCard,
  'credit-card-alt': FaCreditCardAlt,
  'crop': FaCrop,
  'crosshairs': FaCrosshairs,
  'css3': FaCss3,
  'cube': FaCube,
  'cubes': FaCubes,
  'cut': FaCut,
  'dashboard': FaDashboard,
  'database': FaDatabase,
  'dedent': FaDedent,
  'desktop': FaDesktop,
  'diamond': FaDiamond,
  'dollar': FaMoney,
  'dot-circle-o': FaDotCircleO,
  'download': FaDownload,
  'edit': EggheadEdit,
  'eject': FaEject,
  'ellipsis-h': FaEllipsisH,
  'ellipsis-v': FaEllipsisV,
  'enter': EggheadEnterSearch,
  'envelope': FaEnvelope,
  'envelope-o': FaEnvelopeO,
  'envelope-square': FaEnvelopeSquare,
  'eraser': FaEraser,
  'exchange': FaExchange,
  'exclamation': FaExclamation,
  'exclamation-circle': FaExclamationCircle,
  'exclamation-triangle': FaExclamationTriangle,
  'expand': FaExpand,
  'external-link': FaExternalLink,
  'external-link-square': FaExternalLinkSquare,
  'eye': FaEye,
  'eye-slash': FaEyeSlash,
  'eyedropper': FaEyedropper,
  'facebook': EggheadFacebook,
  'fast-backward': FaFastBackward,
  'fast-forward': FaFastForward,
  'feed': FaFeed,
  'file': FaFile,
  'file-archive-o': FaFileArchiveO,
  'file-audio-o': FaFileAudioO,
  'file-code-o': FaFileCodeO,
  'file-excel-o': FaFileExcelO,
  'file-image-o': FaFileImageO,
  'file-movie-o': FaFileMovieO,
  'file-o': FaFileO,
  'file-pdf-o': FaFilePdfO,
  'file-powerpoint-o': FaFilePowerpointO,
  'file-text': FaFileText,
  'file-text-o': FaFileTextO,
  'file-word-o': FaFileWordO,
  'film': FaFilm,
  'filter': FaFilter,
  'flag': EggheadFlag,
  'flag-checkered': FaFlagCheckered,
  'flag-o': FaFlagO,
  'flask': FaFlask,
  'floppy-o': FaFloppyO,
  'folder': FaFolder,
  'folder-language': EggheadFolderLanguage,
  'folder-o': FaFolderO,
  'folder-open': FaFolderOpen,
  'folder-open-o': FaFolderOpenO,
  'font': FaFont,
  'forward': FaForward,
  'frown-o': FaFrownO,
  'futbol-o': FaFutbolO,
  'gavel': FaGavel,
  'gift': FaGift,
  'git': FaGit,
  'git-square': FaGitSquare,
  'github': FaGithub,
  'github-alt': FaGithubAlt,
  'glass': FaGlass,
  'globe': FaGlobe,
  'google': FaGoogle,
  'googlePlus': FaGooglePlus,
  'googlePlusSquare': FaGooglePlusSquare,
  'graduationCap': FaGraduationCap,
  'group': FaGroup,
  'hand-grab-o': FaHandGrabO,
  'hand-o-down': FaHandODown,
  'hand-o-left': FaHandOLeft,
  'hand-o-right': FaHandORight,
  'hand-o-up': FaHandOUp,
  'hashtag': FaHashtag,
  'hdd-o': FaHddO,
  'heart': FaHeart,
  'heart-o': FaHeartO,
  'help': EggheadHelp,
  'history': EggheadHistory,
  'home': FaHome,
  'hourglass': FaHourglass,
  'hourglass1': FaHourglass1,
  'hourglass2': FaHourglass2,
  'hourglass3': FaHourglass3,
  'hourglassO': FaHourglassO,
  'html5': FaHtml5,
  'iCursor': FaICursor,
  'image': FaImage,
  'inbox': FaInbox,
  'indent': FaIndent,
  'info': EggheadInfo,
  'info-circle': FaInfoCircle,
  'instagram': FaInstagram,
  'italic': FaItalic,
  'jsfiddle': FaJsfiddle,
  'key': FaKey,
  'keyboard-o': FaKeyboardO,
  'laptop': FaLaptop,
  'leaf': FaLeaf,
  'lesson': FaFileO,
  'lesson-headline': EggheadQuickLessonsHeadline,
  'lesson-play-playlist': EggheadLessonPlayPlaylist,
  'level-down': FaLevelDown,
  'level-up': FaLevelUp,
  'lightbulb-o': FaLightbulbO,
  'line-chart': FaLineChart,
  'list': FaList,
  'list-alt': FaListAlt,
  'list-ol': FaListOl,
  'list-ul': FaListUl,
  'locationArrow': FaLocationArrow,
  'lock': FaLock,
  'long-arrow-down': FaLongArrowDown,
  'long-arrow-left': FaLongArrowLeft,
  'long-arrow-right': FaLongArrowRight,
  'long-arrow-up': FaLongArrowUp,
  'magic': FaMagic,
  'magnet': FaMagnet,
  'mail': EggheadMail,
  'mail-forward': FaMailForward,
  'mail-reply': FaMailReply,
  'mail-reply-all': FaMailReplyAll,
  'map': FaMap,
  'map-pin': FaMapPin,
  'map-signs': FaMapSigns,
  'meh-o': FaMehO,
  'menu': FaBars,
  'microphone': FaMicrophone,
  'microphone-slash': FaMicrophoneSlash,
  'minus': FaMinus,
  'minus-circle': FaMinusCircle,
  'minus-square': FaMinusSquare,
  'minus-square-o': FaMinusSquareO,
  'mobile': FaMobile,
  'money': FaMoney,
  'moon-o': FaMoonO,
  'mouse-pointer': FaMousePointer,
  'music': FaMusic,
  'newspaper-o': FaNewspaperO,
  'object-group': FaObjectGroup,
  'object-ungroup': FaObjectUngroup,
  'paper-plane': FaPaperPlane,
  'paper-plane-o': FaPaperPlaneO,
  'paperclip': FaPaperclip,
  'paragraph': FaParagraph,
  'pause': FaPause,
  'pause-circle': FaPauseCircle,
  'pause-circle-o': FaPauseCircleO,
  'pencil': FaPencil,
  'pencil-square': FaPencilSquare,
  'percent': FaPercent,
  'phone': FaPhone,
  'phone-square': FaPhoneSquare,
  'pie-chart': FaPieChart,
  'play': EggheadPlay,
  'playbook': EggheadPlaybook,
  'play-course': EggheadPlayCourse,
  'play-lesson': EggheadPlayLesson,
  'plug': FaPlug,
  'plus-circle': FaPlusCircle,
  'plus-square': FaPlusSquare,
  'plus-square-o': FaPlusSquareO,
  'print': FaPrint,
  'profile': EggheadProfile,
  'progress-ring': EggheadProgressRing,
  'question': EggheadQuestion,
  'question-circle': FaQuestionCircle,
  'question-circle-o': FaQuestionCircleO,
  'quote-left': FaQuoteLeft,
  'quote-right': FaQuoteRight,
  'recycle': FaRecycle,
  'refresh': EggheadRefresh,
  'registered': FaRegistered,
  'remove': FaMinusCircle,
  'repeat': FaRepeat,
  'reply': FaMailReply,
  'request': EggheadRequest,
  'retweet': FaRetweet,
  'revise': EggheadRevise,
  'rotate-left': FaRotateLeft,
  'rotate-right': FaRotateRight,
  'rss': EggheadRss,
  'rss-square': FaRssSquare,
  'search': FaSearch,
  'search-minus': FaSearchMinus,
  'search-plus': FaSearchPlus,
  'server': FaServer,
  'share': FaShareAlt,
  'share-alt': FaShareAlt,
  'share-alt-square': FaShareAltSquare,
  'share-square': FaShareSquare,
  'share-square-o': FaShareSquareO,
  'shopping-cart': FaShoppingCart,
  'sign-out': EggheadSignOut,
  'sign-in': FaSignIn,
  'signal': FaSignal,
  'sitemap': FaSitemap,
  'slack': FaSlack,
  'sliders': FaSliders,
  'smile-o': FaSmileO,
  'sort': FaSort,
  'sort-alpha-asc': FaSortAlphaAsc,
  'sort-alpha-desc': FaSortAlphaDesc,
  'sort-amount-asc': FaSortAmountAsc,
  'sort-amount-desc': FaSortAmountDesc,
  'sort-asc': FaSortAsc,
  'sort-desc': FaSortDesc,
  'sort-numeric-asc': FaSortNumericAsc,
  'sort-numeric-desc': FaSortNumericDesc,
  'spinner': FaSpinner,
  'square': FaSquare,
  'star': FaStar,
  'star-fill': EggheadStarFill,
  'star-outline': EggheadStarOutline,
  'star-half': FaStarHalf,
  'star-half-empty': FaStarHalfEmpty,
  'star-o': FaStarO,
  'stats': EggheadStats,
  'step-backward': FaStepBackward,
  'step-forward': FaStepForward,
  'sticky-note': FaStickyNote,
  'sticky-note-o': FaStickyNoteO,
  'stop': FaStop,
  'stop-circle': FaStopCircle,
  'stop-circle-o': FaStopCircleO,
  'success': FaCheckCircle,
  'sun-o': FaSunO,
  'table': FaTable,
  'tablet': FaTablet,
  'tag': FaTag,
  'tags': FaTags,
  'tasks': FaTasks,
  'technology': EggheadTechnology,
  'television': FaTelevision,
  'terminal': FaTerminal,
  'text-height': FaTextHeight,
  'text-width': FaTextWidth,
  'th': FaTh,
  'th-large': FaThLarge,
  'th-list': FaThList,
  'thumb-tack': FaThumbTack,
  'thumbs-down': EggheadThumbsDown,
  'thumbs-up': EggheadThumbsUp,
  'thumbs-o-down': FaThumbsODown,
  'thumbs-o-up': FaThumbsOUp,
  'thin-hamburger': EggheadThinHamburger,
  'ticket': FaTicket,
  'timer-plus': EggheadTimerPlus,
  'times-circle': FaTimesCircle,
  'times-circle-o': FaTimesCircleO,
  'toggle-off': FaToggleOff,
  'toggle-on': FaToggleOn,
  'trademark': FaTrademark,
  'trash': FaTrash,
  'trash-o': FaTrashO,
  'tree': FaTree,
  'trophy': FaTrophy,
  'twitter': EggheadTwitter,
  'twitter-square': FaTwitterSquare,
  'underline': FaUnderline,
  'universal-access': FaUniversalAccess,
  'unlock': FaUnlock,
  'unlock-alt': FaUnlockAlt,
  'update': EggheadUpdate,
  'upload': EggheadUpload,
  'upload-cloud': EggheadUploadCloud,
  'usb': FaUsb,
  'user': FaUser,
  'user-plus': FaUserPlus,
  'user-times': FaUserTimes,
  'video-camera': FaVideoCamera,
  'vimeo-square': FaVimeoSquare,
  'volume-control-phone': FaVolumeControlPhone,
  'volume-down': FaVolumeDown,
  'volume-off': FaVolumeOff,
  'volume-up': FaVolumeUp,
  'warning': FaExclamationCircle,
  'wheelchair': FaWheelchair,
  'wheelchairAlt': FaWheelchairAlt,
  'wifi': FaWifi,
  'windows': FaWindows,
  'wrench': FaWrench,
}

export const types = keys(typeToSvgIcon)

const sizeToClass = {
  1: 'f1',
  2: 'f2',
  3: 'f3',
  4: 'f4',
  5: 'f5',
  6: 'f6'
}

export const sizes = keys(sizeToClass)

const Icon = ({
  type,
  size,
  color,
}) => {
  const DynamicIcon = typeToSvgIcon[type] || typeToSvgIcon['bomb']
  return <DynamicIcon className={`${sizeToClass[size]} ${color}`} />
}

Icon.propTypes = {
  type: PropTypes.oneOf(types).isRequired,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
}

Icon.defaultProps = {
  size: '3',
  color: 'dark-gray',
}

export default Icon
