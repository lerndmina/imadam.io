export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", { timeZone: "UTC" });
}

// export function formatBlogPosts(
//   posts,
//   filterOutDrafts?: boolean,
//   filterOutFuture?: boolean,
//   sortByDate?: boolean,
//   limit?: number
// ) {
  
//     const filteredPosts = posts.reduce((acc, post) => {
//       const {date, draft } = post.frontmatter;
//       // filter out drafts if true
//       if (filterOutDrafts && draft) return acc;

//       // filter out futre posts
//       if(filterOutFuture && new Date(date) > new Date()) return acc;

//       // add post acc
//       acc.push(post)

//       return acc

//     }, [])

//     // sort by date or file a-z
//     if(sortByDate){
//       filteredPosts.sort((a,b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
//     }

//     if(limit >= 1){
//       return filteredPosts.slice(0, limit)
//     } else{
//       return filteredPosts;
//     }

// }
