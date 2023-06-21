import re

# Function to calculate the match score for a query and a website
def calculate_match_score(query, website):
    query_words = re.findall(r'\b\w+\b', query.lower())
    website_words = re.findall(r'\b\w+\b', website.lower())
    match_score = sum(1 for word in query_words if word in website_words)
    return match_score

# Function to perform the search
def search(query, websites):
    results = []
    for website in websites:
        match_score = calculate_match_score(query, website)
        if match_score > 0:
            results.append((website, match_score))
    return results

# Main program
websites = []
with open('websites.txt', 'r') as file:
    for line in file:
        websites.append(line.strip())

while True:
    query = input("Enter your search query (or 'quit' to exit): ")
    if query.lower() == "quit":
        break
    else:
        search_results = search(query, websites)
        if search_results:
            print("Search Results:")
            sorted_results = sorted(search_results, key=lambda x: x[1], reverse=True)
            for result in sorted_results:
                print(f"Website: {result[0]} | Match Score: {result[1]}")
        else:
            print("No results found.")
