export function urlify(linkObject) {
  if (typeof linkObject === 'string') return linkObject;

  const isStory = linkObject.linktype === 'story' ?? false;
  const hasStory = linkObject. story ?? false;
  
  if (isStory && hasStory) {
    return linkObject.story.url;
  } else {
    return linkObject.url;
  }
}