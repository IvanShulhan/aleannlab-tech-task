export const splitDescription = (description: string) => {
  const content = description
    .split(/\n|\t/)
    .map((el: string) => el.trim())
    .filter((el: string) => el.length)
    
  return {
    generalText: content[0],
    responsopilitiesTitle: content[1],
    responsopilitiesText: content[2],
    benefitsTitle: content[3],
    benefits: content[4].split('. ')
  }
}
