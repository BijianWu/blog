export const removeDashWithSpaceAndCapFirstLetter = (text) => {
    const replaceDashTagName = text.replaceAll("-", " ");
    const convertedTagName = replaceDashTagName.charAt(0).toUpperCase() + replaceDashTagName.slice(1);

    return convertedTagName;
};