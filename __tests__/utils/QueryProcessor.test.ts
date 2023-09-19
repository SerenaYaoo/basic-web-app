import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });


    test('should return Andrew ID description', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Your Andrew ID is your first name + last name"
          ));
    });

    test('should return name description', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My name is Serena"
          ));
    });

    // test('should return biggest number 78 description', () => {
    //     const query = "Which of the following numbers is the largest: 78, 20, 70?";
    //     const response: string = QueryProcessor(query);
    //     expect(response).toBe((
    //         "78 is the largest"
    //       ));
    // });


    // test('should return biggest number 69 description', () => {
    //     const query = "Which of the following numbers is the largest: 7, 41, 69";
    //     const response: string = QueryProcessor(query);
    //     expect(response).toBe((
    //         "69 is the largest"
    //       ));
    // });

    // test('should return addition description', () => {
    //     const query = "What is 83 plus 82";
    //     const response: string = QueryProcessor(query);
    //     expect(response).toBe((
    //         "83 + 82 = 165"
    //       ));
    // });


    // test('should return biggest number 86 description', () => {
    //     const query = "Which of the following numbers is the largest: 51, 29, 86?";
    //     const response: string = QueryProcessor(query);
    //     expect(response).toBe((
    //         "86 is the largest"
    //       ));
    // });


    // test('should return biggest number 5740 description', () => {
    //     const query = "What is 70 multiplied by 82?";
    //     const response: string = QueryProcessor(query);
    //     expect(response).toBe((
    //         "5740"
    //       ));
    // });

    // test('should return subtraction -5 description', () => {
    //     const query = "What is 26 minus 31?";
    //     const response: string = QueryProcessor(query);
    //     expect(response).toBe((
    //         "-5"
    //       ));
    // });

    	

    // test('should return name description', () => {
    //     const query = "What is your name?";
    //     const response: string = QueryProcessor(query);
    //     expect(response).toBe((
    //         "My name is Serena!"
    //       ));
    // });


});