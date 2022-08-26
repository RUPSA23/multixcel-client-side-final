import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"

import AgencyLandingPage from "demos/AgencyLandingPage.js";
import AgencyLandingPageImageSrc from "images/demo/AgencyLandingPage.jpeg";

// import LoginPage from "pages/Login.js";
// import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
// import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

// import LoginPageImageSrc from "images/demo/LoginPage.jpeg";
// import SignupPageImageSrc from "images/demo/SignupPage.jpeg";
// import PricingPageImageSrc from "images/demo/PricingPage.jpeg";
// import AboutUsPageImageSrc from "images/demo/AboutUsPage.jpeg";
// import ContactUsPageImageSrc from "images/demo/ContactUsPage.jpeg";
// import BlogIndexPageImageSrc from "images/demo/BlogIndexPage.jpeg";
// import TermsOfServicePageImageSrc from "images/demo/TermsOfServicePage.jpeg";
// import PrivacyPolicyPageImageSrc from "images/demo/PrivacyPolicyPage.jpeg";

import BackgroundAsImageHero from "components/hero/BackgroundAsImage.js";
import ThreeColumnDashedBorderFeatures from "components/features/DashedBorderSixFeatures";

// import SliderCards from "components/cards/ThreeColSlider.js";
// import TrendingCards from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import PortfolioCards from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGridCards from "components/cards/TabCardGrid.js";
// import ProfileThreeColGridCards from "components/cards/ProfileThreeColGrid.js"
// import ThreeColContactDetailsCards from "components/cards/ThreeColContactDetails.js"


import ThreeColSimpleWithImageAndDashedBorderBlog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import TwoColumnWithImageAndProfilePictureReviewTestimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import SimpleWithSideImageFAQS from "components/faqs/SimpleWithSideImage.js";


// import SimpleContactUsForm from "components/forms/SimpleContactUs.js";
// import SimpleSubscribeNewsletterForm from "components/forms/SimpleSubscribeNewsletter.js";
// import TwoColContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import TwoColContactUsFullForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";


import MiniCenteredFooter from "components/footers/MiniCenteredFooter.js";


export const components = {
  landingPages: {
    AgencyLandingPage: {
      component: AgencyLandingPage,
      imageSrc: AgencyLandingPageImageSrc,
      url: "/components/landingPages/AgencyLandingPage",
    },
  },

  // innerPages: {
  //   LoginPage: {
  //     component: LoginPage,
  //     imageSrc: LoginPageImageSrc,
  //     scrollAnimationDisabled: true,
  //     url: "/components/innerPages/LoginPage",
  //   },
  //   SignupPage: {
  //     component: SignupPage,
  //     url: `/components/innerPages/SignupPage`,
  //     imageSrc: SignupPageImageSrc,
  //     scrollAnimationDisabled: true,
  //   },
  //   PricingPage: {
  //     component: PricingPage,
  //     url: `/components/innerPages/PricingPage`,
  //     imageSrc: PricingPageImageSrc,
  //   },
  //   AboutUsPage: {
  //     component: AboutUsPage,
  //     url: `/components/innerPages/AboutUsPage`,
  //     imageSrc: AboutUsPageImageSrc,
  //   },
  //   ContactUsPage: {
  //     component: ContactUsPage,
  //     url: `/components/innerPages/ContactUsPage`,
  //     imageSrc: ContactUsPageImageSrc,
  //   },
  //   BlogIndexPage: {
  //     component: BlogIndexPage,
  //     url: `/components/innerPages/BlogIndexPage`,
  //     imageSrc: BlogIndexPageImageSrc,
  //   },
  //   TermsOfServicePage: {
  //     component: TermsOfServicePage,
  //     url: `/components/innerPages/TermsOfServicePage`,
  //     imageSrc: TermsOfServicePageImageSrc,
  //   },
  //   PrivacyPolicyPage: {
  //     component: PrivacyPolicyPage,
  //     url: `/components/innerPages/PrivacyPolicyPage`,
  //     imageSrc: PrivacyPolicyPageImageSrc,
  //   }
  // },

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BackgroundAsImageHero,
          url: "/components/blocks/Hero/BackgroundAsImage",
        }
      }
    },

    Form: {
      type: "Form Section",
      elements: {
        TwoColContactUsFullForm: {
          name: "Simple Contact Us Form",
          component: TwoColContactUsFullForm,
          url: "components/forms/TwoColContactUsWithIllustrationFullForm"
        }
      }
    },

    Features: {
      type: "Features Section",
      elements: {
        ThreeColumnDashedBorder: {
          name: "Three Column With Dashed Primary Border",
          component: ThreeColumnDashedBorderFeatures,
          url: "/components/blocks/Features/ThreeColumnDashedBorder",
        }
      }
    },

    Blog: {
      type: "Blog Section",
      elements: {
        ThreeColSimpleWithImageAndDashedBorder: {
          name: "Simple Three Column With Image and Dashed Border",
          component: ThreeColSimpleWithImageAndDashedBorderBlog,
          url: "/components/blocks/Blog/ThreeColSimpleWithImageAndDashedBorder",
        },
      } 
    },

    Testimonial: {
      type: "Testimonial Section",
      elements: {
        TwoColumnWithImageAndProfilePictureReview: {
          name: "Two Column With Image And Profile Picture Review",
          component: TwoColumnWithImageAndProfilePictureReviewTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImageAndProfilePictureReview",
        },
      }
    },

    FAQS: {
      type: "FAQs Section",
      elements: {
        SimpleWithSideImage: {
          name: "Simple With Side Image",
          component: SimpleWithSideImageFAQS,
          url: "/components/blocks/FAQS/SimpleWithSideImage",
        },
      }
    },

    Footer: {
      type: "Footers Section",
      elements: {
        MiniCentered: {
          name: "Mini Centered Dark",
          component: MiniCenteredFooter,
          url: "/components/blocks/Footer/MiniCentered",
        },
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
