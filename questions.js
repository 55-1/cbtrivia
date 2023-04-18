const questions = [
  {
    question: "Who is the first woman created by God?",
    answers: [
      { text: "Eve", correct: true },
      { text: "Mary", correct: false },
      { text: "Sarah", correct: false },
      { text: "Ruth", correct: false }
    ]
  },
  {
    question: "What is the last book of the New Testament?",
    answers: [
      { text: "Revelation", correct: true },
      { text: "Acts", correct: false },
      { text: "Romans", correct: false },
      { text: "Hebrews", correct: false }
    ]
  },
  {
    question: "Who was the father of John the Baptist?",
    answers: [
      { text: "Zacharias", correct: true },
      { text: "Simeon", correct: false },
      { text: "Joseph", correct: false },
      { text: "Abraham", correct: false }
    ]
  },
  {
    question: "What was the name of the servant girl who accused Peter of being a follower of Jesus?",
    answers: [
      { text: "Mary Magdalene", correct: false },
      { text: "Mary of Bethany", correct: false },
      { text: "Salome", correct: false },
      { text: "Malchus' servant girl", correct: true }
    ]
  },
  
  {
    question: "Who was the man who helped Jesus carry his cross to Golgotha?",
    answers: [
      { text: "Simon of Cyrene", correct: true },
      { text: "Barnabas", correct: false },
      { text: "Mark", correct: false },
      { text: "Timothy", correct: false }
    ]
  },
  
  {
    question: "Which high priest presided over the trial of Jesus?",
    answers: [
      { text: "Caiaphas", correct: true },
      { text: "Annas", correct: false },
      { text: "Gamaliel", correct: false },
      { text: "Herod", correct: false }
    ]
  },
  
  {
    question: "Who was the last judge of Israel before the monarchy began?",
    answers: [
      { text: "Samuel", correct: true },
      { text: "Eli", correct: false },
      { text: "Deborah", correct: false },
      { text: "Gideon", correct: false }
    ]
  },
  
  {
    question: "Which Old Testament prophet was taken up to heaven in a whirlwind?",
    answers: [
      { text: "Isaiah", correct: false },
      { text: "Jeremiah", correct: false },
      { text: "Ezekiel", correct: false },
      { text: "Elijah", correct: true }
    ]
  },
  {
    question: "Who betrayed Samson to the Philistines?",
    answers: [
      { text: "Delilah", correct: true },
      { text: "Ruth", correct: false },
      { text: "Esther", correct: false },
      { text: "Naomi", correct: false }
    ]
  },
  {
    question: "Who was the first king of Israel?",
    answers: [
      { text: "David", correct: false },
      { text: "Saul", correct: true },
      { text: "Solomon", correct: false },
      { text: "Rehoboam", correct: false }
    ]
  },
  {
    question: "What is the name of the first book of the Bible?",
    answers: [
      { text: "Leviticus", correct: false },
      { text: "Genesis", correct: true },
      { text: "Exodus", correct: false },
      { text: "Numbers", correct: false }
    ]
  },
  {
    question: "Who built an ark to save his family and animals from a flood?",
    answers: [
      { text: "Noah", correct: true },
      { text: "Moses", correct: false },
      { text: "Abraham", correct: false },
      { text: "Joseph", correct: false }
    ]
  },
  {
    question: "Which apostle denied knowing Jesus three times before his crucifixion?",
    answers: [
      { text: "John", correct: false },
      { text: "Peter", correct: true },
      { text: "James", correct: false },
      { text: "Andrew", correct: false }
    ]
  },
  {
    question: "In the book of Acts, who was the first Christian martyr who was stoned to death?",
    answers: [
      { text: "Stephen", correct: true },
      { text: "Paul", correct: false },
      { text: "Peter", correct: false },
      { text: "James", correct: false }
    ]
  },
  
  {
    question: "Which book of the Bible tells the story of Joseph and his coat of many colors?",
    answers: [
      { text: "Exodus", correct: false },
      { text: "Leviticus", correct: false },
      { text: "Genesis", correct: true },
      { text: "Deuteronomy", correct: false }
    ]
  },
  {
    question: "Who was the first disciple to be called by Jesus?",
    answers: [
      { text: "Peter", correct: false },
      { text: "John", correct: false },
      { text: "Andrew", correct: true },
      { text: "James", correct: false }
    ]
  },
  {
    question: "Who was the Roman governor of Judea during Jesus' trial and crucifixion?",
    answers: [
      { text: "Pontius Pilate", correct: true },
      { text: "Herod Antipas", correct: false },
      { text: "Tiberius Caesar", correct: false },
      { text: "Augustus Caesar", correct: false }
    ]
  },
  {
    question: "In the book of Judges, which judge used a fleece to determine God's will?",
    answers: [
      { text: "Deborah", correct: false },
      { text: "Gideon", correct: true },
      { text: "Jephthah", correct: false },
      { text: "Samson", correct: false }
    ]
  },
  {
    question: "In the book of Acts, which magician tried to buy the power of the Holy Spirit from the apostles?",
    answers: [
      { text: "Barnabas", correct: false },
      { text: "Simon", correct: true },
      { text: "Mark", correct: false },
      { text: "Timothy", correct: false }
    ]
  },
  {
    question: "In the book of Esther, what was the name of the villain who plotted to kill the Jews?",
    answers: [
      { text: "Haman", correct: true },
      { text: "Mordecai", correct: false },
      { text: "Ahasuerus", correct: false },
      { text: "Vashti", correct: false }
    ]
  },
    
  {
    question: "In the book of Ruth, who was Naomi's daughter-in-law who stayed with her after her husband died?",
    answers: [
      { text: "Orpah", correct: false },
      { text: "Ruth", correct: true },
      { text: "Esther", correct: false },
      { text: "Sarah", correct: false }
    ]
  },
  
  
  {
    question: "In the book of Exodus, what were the names of Moses' siblings?",
    answers: [
      { text: "Miriam and Aaron", correct: true },
      { text: "Levi and Rebecca", correct: false },
      { text: "Rachel and Esau", correct: false },
      { text: "Simeon and Dinah", correct: false }
    ]
  },
  
  {
    question: "Which apostle was a zealot before becoming a follower of Jesus?",
    answers: [
      { text: "Peter", correct: false },
      { text: "James", correct: false },
      { text: "John", correct: false },
      { text: "Simon", correct: true }
    ]
  },
  
  {
    question: "What was the occupation of the apostle Matthew before he followed Jesus?",
    answers: [
      { text: "Fisherman", correct: false },
      { text: "Tax collector", correct: true },
      { text: "Shepherd", correct: false },
      { text: "Tentmaker", correct: false }
    ]
  },
  {
    question: "What is the shortest verse in the Bible?",
    answers: [
      { text: "Jesus wept", correct: true },
      { text: "God is love", correct: false },
      { text: "In the beginning", correct: false },
      { text: "For God so loved", correct: false }
    ]
  },
  {
    question: "Which angel visited Mary to tell her she would give birth to Jesus?",
    answers: [
      { text: "Gabriel", correct: true },
      { text: "Michael", correct: false },
      { text: "Raphael", correct: false },
      { text: "Uriel", correct: false }
    ]
  },
  {
    question: "What is the name of the river where John the Baptist baptized people?",
    answers: [
      { text: "Jordan", correct: true },
      { text: "Nile", correct: false },
      { text: "Euphrates", correct: false },
      { text: "Tigris", correct: false }
    ]
  },
  {
    question: "Who wrote most of the New Testament?",
    answers: [
      { text: "Peter", correct: false },
      { text: "Paul", correct: true },
      { text: "John", correct: false },
      { text: "James", correct: false }
    ]
  },
  {
    question: "Who anointed Jesus with expensive perfume?",
    answers: [
      { text: "Mary Magdalene", correct: false },
      { text: "Mary of Bethany", correct: true },
      { text: "Mary, the mother of Jesus", correct: false },
      { text: "Martha", correct: false }
    ]
  },
  {
    question: "Which city did the last supper take place?",
    answers: [
      { text: "Bethlehem", correct: false },
      { text: "Nazareth", correct: false },
      { text: "Jerusalem", correct: true },
      { text: "Galilee", correct: false }
    ]
  },
  {
    question: "Who was the first king of Judah after the division of Israel?",
    answers: [
      { text: "David", correct: false },
      { text: "Solomon", correct: false },
      { text: "Rehoboam", correct: true },
      { text: "Jeroboam", correct: false }
    ]
  },
  
  {
    question: "Who is the author of the Book of Hebrews?",
    answers: [
      { text: "Paul", correct: false },
      { text: "James", correct: false },
      { text: "Peter", correct: false },
      { text: "Unknown", correct: true }
    ]
  },
  
  {
    question: "In which book of the Bible do we find the story of Samson and Delilah?",
    answers: [
      { text: "Judges", correct: true },
      { text: "Genesis", correct: false },
      { text: "Exodus", correct: false },
      { text: "1 Kings", correct: false }
    ]
  },
  
  {
    question: "Which mountain did God give Moses the Ten Commandments?",
    answers: [
      { text: "Mount Zion", correct: false },
      { text: "Mount Sinai", correct: true },
      { text: "Mount Everest", correct: false },
      { text: "Mount Ararat", correct: false }
    ]
  },
  {
    question: "Who replaced Judas as one of the twelve apostles?",
    answers: [
      { text: "Timothy", correct: false },
      { text: "Barnabas", correct: false },
      { text: "Matthias", correct: true },
      { text: "Silas", correct: false }
    ]
  },
  {
    question: "Which river was Jesus was baptized in?",
    answers: [
      { text: "Jordan", correct: true },
      { text: "Nile", correct: false },
      { text: "Euphrates", correct: false },
      { text: "Tigris", correct: false }
    ]
  },
  {
    question: "Who predicted the coming of John the Baptist?",
    answers: [
      { text: "Elijah", correct: false },
      { text: "Isaiah", correct: true },
      { text: "Jeremiah", correct: false },
      { text: "Ezekiel", correct: false }
    ]
  },
  {
    question: "Where did Jesus grow up?",
    answers: [
      { text: "Bethlehem", correct: false },
      { text: "Nazareth", correct: true },
      { text: "Jerusalem", correct: false },
      { text: "Galilee", correct: false }
    ]
  },
  {
    question: "Who became a pillar of salt after looking back at Sodom?",
    answers: [
      { text: "Ruth", correct: false },
      { text: "Naomi", correct: false },
      { text: "Lot's wife", correct: true },
      { text: "Mary Magdalene", correct: false }
    ]
  },
  {
    question: "Who found baby Moses in a basket on the river?",
    answers: [
      { text: "Miriam", correct: false },
      { text: "Ruth", correct: false },
      { text: "Esther", correct: false },
      { text: "Jochebed", correct: true }
    ]
  },
  {
    question: "Where was Jesus born?",
    answers: [
      { text: "Nazareth", correct: false },
      { text: "Bethlehem", correct: true },
      { text: "Jerusalem", correct: false },
      { text: "Galilee", correct: false }
    ]
  },
  {
    question: "Who betrayed Jesus for thirty pieces of silver?",
    answers: [
      { text: "Peter", correct: false },
      { text: "John", correct: false },
      { text: "Judas", correct: true },
      { text: "James", correct: false }
    ]
  },
  {
    question: "Where was Jesus crucified?",
    answers: [
      { text: "Nazareth", correct: false },
      { text: "Bethlehem", correct: false },
      { text: "Jerusalem", correct: true },
      { text: "Galilee", correct: false }
    ]
  },
  {
    question: "Which disciple did Jesus call the 'son of thunder'?",
    answers: [
      { text: "Peter", correct: false },
      { text: "John", correct: true },
      { text: "James", correct: false },
      { text: "Andrew", correct: false }
    ]
  },
  {
    question: "In the bible, what is the only book named after a woman?",
    answers: [
      { text: "Ruth", correct: false },
      { text: "Esther", correct: true },
      { text: "Deborah", correct: false },
      { text: "Mary", correct: false }
    ]
  },
  
  {
    question: "Who was sold into slavery by his own brothers?",
    answers: [
      { text: "Joseph", correct: true },
      { text: "Jacob", correct: false },
      { text: "Isaac", correct: false },
      { text: "Abraham", correct: false }
    ]
  },
  {
    question: "Who was a fisherman before he followed Jesus?",
    answers: [
      { text: "Peter", correct: true },
      { text: "John", correct: false },
      { text: "James", correct: false },
      { text: "Andrew", correct: false }
    ]
  },
  {
    question: "Where did Jesus perform his first miracle by turning water into wine?",
    answers: [
      { text: "Bethlehem", correct: false },
      { text: "Nazareth", correct: false },
      { text: "Cana", correct: true },
      { text: "Jerusalem", correct: false }
    ]
  },
  {
    question: "Who was thrown into the lions' den but was miraculously saved by God?",
    answers: [
      { text: "Daniel", correct: true },
      { text: "Elijah", correct: false },
      { text: "Elisha", correct: false },
      { text: "Isaiah", correct: false }
    ]
  },
  {
    question: "Who was swallowed by a giant fish for three days and three nights?",
    answers: [
      { text: "Isaiah", correct: false },
      { text: "Jeremiah", correct: false },
      { text: "Jonah", correct: true },
      { text: "Ezekiel", correct: false }
    ]
  },
  {
    question: "Who led the Israelites out of slavery in Egypt?",
    answers: [
      { text: "Moses", correct: true },
      { text: "Aaron", correct: false },
      { text: "Joshua", correct: false },
      { text: "Samuel", correct: false }
    ]
  },
  {
    question: "Which disciple doubted Jesus' resurrection until he saw his wounds?",
    answers: [
      { text: "Peter", correct: false },
      { text: "John", correct: false },
      { text: "James", correct: false },
      { text: "Thomas", correct: true }
    ]
  },
  {
    question: "In the book of Genesis, who was the wife of Isaac and mother of Jacob and Esau?",
    answers: [
      { text: "Rebecca", correct: true },
      { text: "Sarah", correct: false },
      { text: "Rachel", correct: false },
      { text: "Leah", correct: false }
    ]
  },
  
  {
    question: "Who was sold into slavery by his brothers and later became a powerful ruler in Egypt?",
    answers: [
      { text: "Jacob", correct: false },
      { text: "Joseph", correct: true },
      { text: "Isaac", correct: false },
      { text: "Abraham", correct: false }
    ]
  },

  {
    question: "Who gave birth to Samuel after praying to God for a child?",
    answers: [
      { text: "Hannah", correct: true },
      { text: "Rachel", correct: false },
      { text: "Leah", correct: false },
      { text: "Sarah", correct: false }
    ]
  },
  {
    question: "Who killed a giant named Goliath with a sling and a stone?",
    answers: [
      { text: "Samson", correct: false },
      { text: "David", correct: true },
      { text: "Solomon", correct: false },
      { text: "Saul", correct: false }
    ]
  },
  {
    question: "In the book of Revelation, how many seals are there on the scroll that only the Lamb can open?",
    answers: [
      { text: "Four", correct: false },
      { text: "Seven", correct: true },
      { text: "Ten", correct: false },
      { text: "Twelve", correct: false }
    ]
  },
  {
    question: "In the book of Genesis, who was the first murderer in human history?",
    answers: [
      { text: "Abel", correct: false },
      { text: "Cain", correct: true },
      { text: "Enoch", correct: false },
      { text: "Seth", correct: false }
    ]
  },
  
  {
    question: "In the book of Matthew, how many wise men came to visit Jesus after his birth?",
    answers: [
      { text: "Two", correct: false },
      { text: "Three", correct: false },
      { text: "Four", correct: false },
      { text: "The Bible only says 'wise men', not a specific number", correct: true }
    ]
  },
  
  {
    question: "In the book of Judges, which judge defeated the Canaanites with the help of Jael?",
    answers: [
      { text: "Deborah", correct: true },
      { text: "Gideon", correct: false },
      { text: "Samson", correct: false },
      { text: "Ehud", correct: false }
    ]
  },
  
  {
    question: "In the book of Exodus, what was the name of the sister of Moses who watched over him in the bulrushes?",
    answers: [
      { text: "Miriam", correct: true },
      { text: "Sarah", correct: false },
      { text: "Rebecca", correct: false },
      { text: "Rachel", correct: false }
    ]
  },
  
  {
    question: "In the book of Leviticus, which high priest wore a breastplate with twelve precious stones representing the twelve tribes of Israel?",
    answers: [
      { text: "Aaron", correct: true },
      { text: "Eli", correct: false },
      { text: "Phinehas", correct: false },
      { text: "Zadok", correct: false }
    ]
  },
    
  {
    question: "In the book of Genesis, which son of Isaac was tricked out of his birthright by his brother?",
    answers: [
      { text: "Jacob", correct: true },
      { text: "Esau", correct: false },
      { text: "Joseph", correct: false },
      { text: "Benjamin", correct: false }
    ]
  },
  
  {
    question: "In the New Testament, which Pharisee came to Jesus at night to ask him questions?",
    answers: [
      { text: "Nicodemus", correct: true },
      { text: "Caiaphas", correct: false },
      { text: "Annas", correct: false },
      { text: "Gamaliel", correct: false }
    ]
  },
  
  {
    question: "In the book of Hosea, what was the name of the prophet's unfaithful wife?",
    answers: [
      { text: "Ruth", correct: false },
      { text: "Leah", correct: false },
      { text: "Gomer", correct: true },
      { text: "Esther", correct: false }
    ]
  },
  
  {
    question: "Who was taken to be the wife of King Ahasuerus and became the queen of Persia?",
    answers: [
      { text: "Esther", correct: true },
      { text: "Ruth", correct: false },
      { text: "Deborah", correct: false },
      { text: "Miriam", correct: false }
    ]
  },
  {
    question: "Which disciple wrote the book of Revelation?",
    answers: [
      { text: "Peter", correct: false },
      { text: "Paul", correct: false },
      { text: "John", correct: true },
      { text: "Matthew", correct: false }
    ]
  }

];
    
    export default questions;
