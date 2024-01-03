import Image from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function RichTextAsset({ node }) {
  const { sys, fields } = node.data.target;
  const {
    url,
    details: {
      image: { width, height }
    }
  } = fields.file;
  const alt = fields.description;

  return <Image src={url} alt={alt} width={width} height={height} />;
}

export default function markdown(document) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => <RichTextAsset node={node} />
    }
  };

  return documentToReactComponents(document, options);
}
