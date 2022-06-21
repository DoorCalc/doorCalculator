export interface ICreditNoteTaxRequestViewModel{
    orderID: number;
    shippingCredit: number;
    // lines: IICreditNoteTaxLineViewModel[]
}

export interface IApiResponse{
    status: string;
    // status: message;
    // response: ICreditNoteTaxResponseViewModel;
}

// Пример использования в другом файле:

/**
 * @param {import("./main").ICreditNoteTaxRequestViewModel} req
 * @returns {Promise<import("./main").IApiResponse>}
 */
// function createCreditNoteTaxApiCall(req) {
//     /// некие действия
//     return;
// }