
async function getImageAsBuffer(githubImageUrl: string): Promise<Buffer> {
  const response = await fetch(githubImageUrl);
  if (!response.ok) throw new Error("Failed to fetch image from GitHub assets");
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function uploadAssetToLinkedIn(imageBuffer: Buffer) {
  const headers = {
    'Authorization': `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
    'LinkedIn-Version': '202603',
    'X-Restli-Protocol-Version': '2.0.0',
    'Content-Type': 'application/json',
  };

  // 1. Initialize Upload
  const registerResponse = await fetch('https://api.linkedin.com/rest/images?action=initializeUpload', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      "initializeUploadRequest": {
        "owner": `urn:li:person:${process.env.LINKEDIN_PERSON_URN}`
      }
    }),
  });

  const regData = await registerResponse.json();
  const uploadUrl = regData.value.uploadUrl;
  const imageUrn = regData.value.image;

  // 2. Upload Binary
  await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}` },
    body: new Uint8Array(imageBuffer),
  });

  return imageUrn;
}