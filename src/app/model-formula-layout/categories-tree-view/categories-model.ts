
export class Categories {
    categoryID: number;
    parentCategoryID: number;
    categoryName: string;
    categoryDescription: string;
    parentNodeName: string;
    fundingModel: string;
    averageValue: string;
    maxValue: string;
    dataTypeID: string;
    dataTypeName: string;
    schoolYearBeginActive: number;
    schoolYearEndActive: string;
    active: string;
    categories: Categories[];
}

export class ModelFormula {
    constructor(
        public fundingModel: string,
        public maxValue: string,
        public modelingValue: string
      ) {  }
}

export interface IModelFormulaTableData {
    categoryID: number;
    fundingModel: string;
    maxValue: string;
    modelingValue: string;
    parentNodeName: string;
    categoryName: string;
}
