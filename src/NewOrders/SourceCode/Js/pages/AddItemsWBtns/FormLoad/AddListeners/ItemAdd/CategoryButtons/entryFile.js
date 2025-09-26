import { StartFunc as StartFuncFromMenCategoryId } from './MenCategoryId/entryFile.js';
import { StartFunc as StartFuncFromWomenCategoryId } from './WomenCategoryId/entryFile.js';
import { StartFunc as StartFuncFromKidsCategoryId } from './KidsCategoryId/entryFile.js';
import { StartFunc as StartFuncFromOthersCategoryId } from './OthersCategoryId/entryFile.js';

const StartFunc = () => {
	StartFuncFromMenCategoryId();
	StartFuncFromWomenCategoryId();
	StartFuncFromKidsCategoryId();
	StartFuncFromOthersCategoryId();
};

export { StartFunc };