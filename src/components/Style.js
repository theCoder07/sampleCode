import LocalImages from "../images";
import Category from './category';

const style = {
    headerStyle: {
        // ".container": {
        //     width: "100%",
        //     marginRight: "auto",
        //     marginLeft: "auto",
        //     paddingLeft: "24px",
        //     paddingRight: "24px",
        //     "@media(min-Width: 1700px)": {
        //         maxWidth: "1710px",
        //     },
        //     "@media(min-Width: 87.5rem)": {},
        //     "@media(min-Width: 81.25rem)": {},
        //     "@media(min-Width: 75rem)": {},
        //     "@media(min-Width: 62rem)": {},
        //     "@media(min-Width: 48rem)": {},
        //     "@media(min-Width: 36rem)": {},
        // },
    },
    innerheaderStyle: {
        ".logo": {
            maxWidth: "11.375rem",
            img: {
                maxWidth: "4.975rem",
            },
        },
        height: "6.25rem",
        padding: "1rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    banner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundImage: `url(${LocalImages.BGIMG})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        ".bannerLeft": {
            width: "50%",
            textAlign: "left",
            paddingLeft: "15.75rem",
            paddingRight: "4.625rem",
            ".subheading": {
                color: "var(--primary)",
                marginBottom: ".125rem",
                fontSize: "2.75rem",
                fontWeight: "400",
                textTransform: "capitalize",
                lineHeight: "normal",
                marginTop: "-0.3em",
                fontFamily: "var(--font)",
            },
            ".heading": {
                marginBottom: ".9375rem",
                fontSize: "4.625rem",
                lineHeight: "1.167",
                fontWeight: "700",
                fontFamily: "var(--font)",
                span: {
                    color: "var(--primary)",
                },
            },
            ".para": {
                fontFamily: "var(--font)",
                fontSize: "1.125rem",
                lineHeight: "1.75",
                marginBottom: "1.875rem",
                display: "block",
            }
        },
        ".bannerRight": {
            position: "relative",
            width: "50%",
            ".rightBanner": {
                width: "100%",
            },
            ".spin": {
                top: "7.375rem",
                right: "4.375rem",
                zIndex: "3",
                position: "absolute",
                animation: "spin 20s linear infinite",
            },
        },
    },
    inputField: {
        ".MuiPaper-root": {
            boxShadow: "0px 7px 35px 0px #E8F2FD",
            width: "100%",
            maxWidth: "37.3125rem",
            height: "4.375rem",
            padding: ".625rem",
            ".btn": {
                color: "var(--white)",
                fontSize: ".875rem",
                fontWeight: "600",
                lineHeight: "1",
                padding: "1.125rem 1.8125rem",
                textTransform: "uppercase",
                backgroundColor: "var(--primary)",
                boxShadow: "0px 6px 16px rgba(13,94,244,0.24)",
                borderRadius: ".3125rem",
                fontFamily: "var(--font)",
                transition: "all ease 0.4s",
                appearance: "button",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    height: "0%",
                    left: "50%",
                    top: "50%",
                    width: "600%",
                    backgroundColor: "var(--secondary)",
                    transform: "translateX(-50%) translateY(-50%) rotate(60deg)",
                    zIndex: "1",
                    transition: "0.7s ease",

                },
                "&:hover": {
                    color: "var(--white)",
                    "&::before": {
                        height: "560%",
                    },
                },
                span: {
                    position: "relative",
                    zIndex: "11",
                    fontFamily: "var(--font)",
                },
            },
            ".MuiInputBase-root": {
                fontFamily: "var(--font)",
                fontSize: "1rem",
                color: "var(--secondary)",
            },
        },
    },
    cards: {
        display: "flex",
        gap: "1.5rem",
        marginTop: "calc(-45px - 1.5rem)",
        zIndex: "111",
        position: "relative",
        ".cards": {
            display: "flex",
            gap: "30px",
            borderRadius: "15px",
            background: "var(--white)",
            boxShadow: "0px 13px 30px 0px rgba(206, 211, 230, 0.3)",
            padding: "40px",
            margin: "0",
            transition: "0.4s",
            ".left": {
                transition: "0.4s",
            },
            ".right": {
                transition: "0.4s",
                textAlign: "left",
                ".title": {
                    color: "var(--secondary)",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: ".75rem",
                    fontFamily: "var(--font)",
                    span: {
                        color: "var(--primary)",
                    },
                },
                ".subtitle": {
                    color: "var(--text-color)",
                    transition: "0.4s",
                    fontSize: "1rem",
                    lineHeight: "1.75",
                    fontWeight: "400",
                    fontFamily: "var(--font)",
                },
            },
            "&:hover": {
                backgroundColor: "var(--primary)",
                ".left": {
                    transform: "rotateY(180deg)",
                },
                ".right": {
                    ".title": {
                        color: "var(--white)",
                        span: {
                            color: "var(--white)",
                        }
                    },
                    ".subtitle": {
                        color: "var(--white)",
                    },
                },
            },
        },
    },
    Category: {
        padding: "7.5rem 0",
        ".subtitle": {
            fontSize: "1rem",
            lineHeight: "1.625rem",
            fontWeight: "500",
            color: "var(--primary)",
            fontFamily: "var(--font)",
            textTransform: "uppercase",
            marginBottom: "1.375rem",
        },
        ".title": {
            fontSize: "2.75rem",
            lineHeight: "1.208",
            fontWeight: "700",
            color: "var(--secondary)",
            fontFamily: "var(--font)",
            textTransform: "uppercase",
            marginBottom: ".9375rem",
        },
        ".inner_Category": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            ".cates": {
                display: "flex",
                gap: "30px",
                borderRadius: "15px",
                background: "var(--white)",
                boxShadow: "0px 13px 30px 0px rgba(206, 211, 230, 0.3)",
                padding: "40px",
                margin: "0",
                transition: "0.4s",
                ".left": {
                    transition: "0.4s",
                },
                ".right": {
                    transition: "0.4s",
                    textAlign: "left",
                    ".title": {
                        color: "var(--secondary)",
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: ".75rem",
                        fontFamily: "var(--font)",
                        span: {
                            color: "var(--primary)",
                        },
                    },
                    ".subtitle": {
                        color: "var(--text-color)",
                        transition: "0.4s",
                        fontSize: "1rem",
                        lineHeight: "1.75",
                        fontWeight: "400",
                        fontFamily: "var(--font)",
                    },
                },
                "&:hover": {
                    backgroundColor: "var(--primary)",
                    ".left": {
                        transform: "rotateY(180deg)",
                    },
                    ".right": {
                        ".title": {
                            color: "var(--white)",
                            span: {
                                color: "var(--white)",
                            }
                        },
                        ".subtitle": {
                            color: "var(--white)",
                        },
                    },
                },
            },
        }

    }
};

export default style;