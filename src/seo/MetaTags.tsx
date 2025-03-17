import { Helmet } from 'react-helmet';

interface MetaTagsProps {
    title: string,
    description: string,
    keywords: string
    ogTitle?: string
    ogDescription?: string
}

export const MetaTags = ({
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
  }: MetaTagsProps) => {
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
      </Helmet>
    );
  };