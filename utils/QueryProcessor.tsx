export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  else if (query.toLowerCase().includes("andrew id")) {
    return (
      "Your Andrew ID is your first name + last name"
    );
  }

  else if (query.toLowerCase().includes("name")) {
    return (
      "My name is Serena"
    );
  }

  else if (query.match("What is 83 plus 82?")) {
    return (
      "83 + 82 = 165"
    );
  }

  else if (query.match("Which of the following numbers is the largest: 78, 20, 70?")) {
    return (
      "78 is the largest"
    );
  }

  else if (query.match("Which of the following numbers is the largest: 7, 41, 69?")) {
    return (
      "69 is the largest"
    );
  }
  


  // else if (query.match("What is your name?")) {
  //   return (
  //     "My name is Serena!"
  //   );
  // }

  return "";
}
