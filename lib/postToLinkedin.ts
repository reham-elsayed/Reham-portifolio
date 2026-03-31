interface LinkedInPostPreview {
  media: {
    id: string;
    altText: string;
  };
}

interface LinkedInPostBody {
  author: string;
  commentary: string;
  visibility: string;
  distribution: {
    feedDistribution: string;
    targetEntities: any[];
    thirdPartyDistributionChannels: any[];
  };
  lifecycleState: string;
  isReshareDisabledByAuthor: boolean;
  content?: {
    media: {
      id: string;
      altText: string;
    }
  };
}
async function postToLinkedIn(text: string,imageUrn: string) {
  const url = 'https://api.linkedin.com/rest/posts';
  const body: LinkedInPostBody = {
    author: `urn:li:person:${process.env.LINKEDIN_PERSON_URN}`,
    commentary: text,
    visibility: 'PUBLIC',
    distribution: {
      feedDistribution: 'MAIN_FEED',
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    lifecycleState: 'PUBLISHED',
    isReshareDisabledByAuthor: false,
  };
  if (imageUrn) {
    body.content = {
      media: {
        id: imageUrn,
        altText: "GitHub Project Preview"
      }
    };}

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      'Linkedin-Version': '202603', 
      'X-Restli-Protocol-Version': '2.0.0',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw { status: response.status, message: errorData.message };
  }

  return response.json();
}