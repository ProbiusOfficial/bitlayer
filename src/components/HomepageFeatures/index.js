import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cryptographic Innovations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Bitlayer pioneers with its BitVM approach to solve the trade-off between security and
        Turing completeness, enabling a robust Bitcoin layer 2 solution.
      </>
    ),
  },
  {
    title: 'Industry Leadership',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our team, comprising veterans from Huobi, Polygon, and Polkadot, brings proven expertise
        to advance the Bitcoin ecosystem.
      </>
    ),
  },
  {
    title: 'Ecosystem Prosperity',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Bitlayer aims to foster a thriving Bitcoin ecosystem through its scalable and secure layer
        2 infrastructure.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
