import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: SupportIconImage,
      title: "Network Planning and Design ",
      description: (
        <ul>
          <li>
            • 5G SA-NSA, LTE, WCDMA, GSM, iDAS / oDAS Technology Design
            Services.
          </li>
          <li>
            • Green field / Coverage In-fill and Capacity planning of new sites
            using Atoll/Asset.
          </li>
          <li>
            • Link budget planning for different frequency bands and prediction
            plot to evaluate the coverage footprint for 5G/ 4G and capacity
            Dimensioning
          </li>
          <li>• EMF compliance reports as per guideline.</li>
          <li>• Port Matrices and Site Commissioning script creation</li>
        </ul>
      ),
    },

    {
      imageSrc: CustomizeIconImage,
      title: "RAN Integration & Alarm Monitoring ",
      description: (
        <ul>
          <li>
            • 5G NR600/ 850/ mmWave, AAS, LAA, LTE, UMTS, GSM Integration.{" "}
          </li>
          <li>• Script creation from Design data sheets. </li>
          <li>• Baseline and pre /post integration audits</li>
          <li>• RAN Modernization and software upgrade. </li>
          <li>• E911 Readiness and testing. </li>
          <li>
            • 24x7 remote Integration Support for op site integration teams
          </li>
          <li>• Alarms, VSWR, Massive MIMO, RET Troubleshooting. </li>
          <li>• Pre-Post Logs verification. </li>
          <li>
            • 24x7 remote site support for Field tech and construction crews.{" "}
          </li>
        </ul>
      ),
    },
    {
      imageSrc: ShieldIconImage,
      title: "Network Pre and Post Launch ",
      description: (
        <ul>
          <li>• Pre-Launch for 5G/4G/3G/2G Sites. </li>
          <li>• Single Site Verification (SSV) / Site Shake Down (SSDs). </li>
          <li>• GSA Audits, Pre-Post Parameter comparison. </li>
          <li>• Alarm management and reporting. </li>
          <li>• Cluster Optimization & Layer 3 Message Analysis. </li>
          <li>• Post-Launch optimization for 5G/4G/3G/2G Sites. </li>
          <li>
            • KPI monitoring post commercial launch – Drive test based, Call
            trace based and OSS stats based.{" "}
          </li>
          <li>
            • Daily cell/cluster level KPI reporting and performance tracking{" "}
          </li>
        </ul>
      ),
    },
    {
      imageSrc: ReliableIconImage,
      title: "Network Optimization",
      description: (
        <ul>
          <li>• Wholistic network optimization 4G / 5G. </li>
          <li>
            • Coverage, Capacity, Interference, Throughput, Voice, Mobility
            analysis, Hotspot.{" "}
          </li>
          <li>• Network health audits & parameter retuning. </li>
          <li>• Layer management strategies, ICLB and MLB. </li>
          <li>
            • Network Triaging – Issue finding, Severity, RCA and Tracking.{" "}
          </li>
          <li>
            • Leveraging OSS, Call trace and Crowdsourced data for Network
            Management.{" "}
          </li>
          <li>• New Feature and Parameter Trials. </li>
          <li>
            • Integration & Optimization. o IDAS/ODAS/BAU o CRAN o Radio Dot o
            Small Cells{" "}
          </li>
          <li>• PIM Troubleshooting and Mitigation. </li>
          <li>• RF Shaping, Hotspot SINR Improvement. </li>
          <li>• High Capacity event management. </li>
        </ul>
      ),
    },
    {
      imageSrc: FastIconImage,
      title: "Project Management ",
      description: (
        <ul>
          <li>
            • Flexible project management model and real-time monitoring of
            projects{" "}
          </li>
          <li>
            • Total responsibility and looking after safety and the environment{" "}
          </li>
          <li>
            • Ensuring the availability of a sufficient number of skilled
            personnel{" "}
          </li>
          <li>• Ensuring adherence to timetables </li>
          <li>
            • Management of the subcontracting chain and reporting to the tax
            authorities{" "}
          </li>
          <li>• Outsourcing services </li>
        </ul>
      ),
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>
          Our Professional <span tw="text-primary-500">Services</span>
        </Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">{card.description}</p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
