# 🧪 Test Plan: Nested Lists Feature

## Quick Test Scenarios

### **Test 1: Basic Nested Ordered List**

**Steps:**
1. Open `/admin/blog/new`
2. Click in the content editor
3. Click the "Ordered List" button (numbered list icon)
4. Type "Item 1" and press **Enter**
5. Type "Item 2" and press **Enter**
6. Press **Tab** (should indent)
7. Type "Nested A" and press **Enter**
8. Type "Nested B" and press **Enter**
9. Press **Shift+Tab** (should outdent)
10. Type "Item 3"

**Expected Result:**
```
1. Item 1
2. Item 2
   a. Nested A
   b. Nested B
3. Item 3
```

**Visual Check:**
- ✅ Numbers are sequential (1, 2, 3)
- ✅ Nested items use letters (a, b)
- ✅ Proper indentation visible
- ✅ Helper banner shows at top with keyboard shortcuts

---

### **Test 2: Nested Unordered List**

**Steps:**
1. Click "Bullet List" button
2. Type "Parent 1" and press **Enter**
3. Type "Parent 2" and press **Enter**
4. Press **Tab**
5. Type "Child 1" and press **Enter**
6. Type "Child 2"

**Expected Result:**
```
• Parent 1
• Parent 2
  ◦ Child 1
  ◦ Child 2
```

**Visual Check:**
- ✅ Parent bullets are filled circles (•)
- ✅ Child bullets are hollow circles (◦)
- ✅ Proper indentation

---

### **Test 3: Mixed Nesting (Ordered → Unordered)**

**Steps:**
1. Create ordered list
2. Type "Step 1" and press **Enter**
3. Type "Step 2" and press **Enter**
4. Press **Tab**
5. Type "Detail A" and press **Enter**
6. Type "Detail B"

**Expected Result:**
```
1. Step 1
2. Step 2
   • Detail A
   • Detail B
```

**Visual Check:**
- ✅ Parent is numbered (1, 2)
- ✅ Children are bullets (•)
- ✅ Different list types nested correctly

---

### **Test 4: Paragraphs + Nested Lists**

**Steps:**
1. Create ordered list
2. Type "Item 1 Title"
3. Press **Shift+Enter** (not just Enter!)
4. Type "Item 1 description paragraph"
5. Press **Enter**
6. Type "Item 2 Title"
7. Press **Shift+Enter**
8. Type "Item 2 description"
9. Press **Enter**
10. Press **Tab**
11. Type "Nested point 1" and press **Enter**
12. Type "Nested point 2"

**Expected Result:**
```
1. Item 1 Title
   Item 1 description paragraph
   
2. Item 2 Title
   Item 2 description
   • Nested point 1
   • Nested point 2
```

**Visual Check:**
- ✅ Descriptions appear below titles (not as new list items)
- ✅ Nested list appears after description
- ✅ Proper spacing throughout

---

### **Test 5: Deep Nesting (3 Levels)**

**Steps:**
1. Create ordered list
2. Type "Level 1" and press **Enter**
3. Press **Tab** → Type "Level 2" and press **Enter**
4. Press **Tab** → Type "Level 3"

**Expected Result:**
```
1. Level 1
   a. Level 2
      i. Level 3
```

**Visual Check:**
- ✅ Three distinct indentation levels
- ✅ Different numbering styles (1, a, i)
- ✅ Proper alignment

---

### **Test 6: Outdenting Back to Parent**

**Steps:**
1. Create a nested list (any type)
2. While in nested item, press **Shift+Tab**
3. Type new content

**Expected Result:**
- ✅ Item moves back to parent level
- ✅ Numbering/bullets update correctly
- ✅ No broken formatting

---

### **Test 7: Exit List Completely**

**Steps:**
1. Create a list (any type)
2. Type an item
3. Press **Enter** (creates new item)
4. Press **Enter** again (without typing)

**Expected Result:**
- ✅ Cursor moves to regular paragraph below list
- ✅ List ends cleanly
- ✅ Can continue typing normal text

---

### **Test 8: Frontend Display**

**Steps:**
1. Create a blog post with nested lists (use any test above)
2. Save the blog
3. Navigate to the blog detail page
4. View the published content

**Expected Result:**
- ✅ All nesting preserved
- ✅ Numbering/bullets display correctly
- ✅ Spacing and indentation match editor
- ✅ No merged lists or broken structure

---

### **Test 9: Complex Real-World Example**

**Create this structure:**

```
1. Siva Sivani institute of Management (SSIM Hyderabad)

   SSIM is one of the Best PGDM colleges in Hyderabad.
   
   Program highlights:
   • Triple Specialization
   • Industry feedback integration
   • Modern curriculum
   
   SSIM's PGDM program stands out by offering features.

2. Institute of Management Technology (IMT), Hyderabad

   It is counted among the Top private B-schools in India.
   
   Key features:
   • 10-20% practitioner sessions
   • Industry-relevant curriculum
   • Strong placement record
```

**Steps:**
1. Type "1. Siva Sivani..." → **Shift+Enter**
2. Type paragraph → **Shift+Enter**
3. Type "Program highlights:" → **Enter**
4. Press **Tab** → Switch to bullet list
5. Type bullet items
6. Press **Shift+Tab** → Continue typing
7. Repeat for item 2

**Expected Result:**
- ✅ Titles and paragraphs stay in same list item
- ✅ Nested bullets appear correctly
- ✅ Can continue text after nested list
- ✅ Structure matches example above

---

## 🎯 Visual Checklist

Open the editor and verify you see:

### **Helper Banner (when in a list):**
```
💡 List Tips: [Enter] = new item | [Shift+Enter] = add paragraph | 
[Tab] = indent/nest | [Shift+Tab] = outdent
```

### **Toolbar:**
- ✅ Ordered List button (numbers icon)
- ✅ Bullet List button (bullets icon)
- ✅ Both buttons highlight when active

### **Editor Behavior:**
- ✅ Tab key indents list items
- ✅ Shift+Tab outdents list items
- ✅ Enter creates new item at same level
- ✅ Shift+Enter adds content to current item
- ✅ Pressing Enter twice exits list

---

## 🐛 Common Issues to Check

### **Issue: Tab does nothing**
**Check:**
- Is cursor inside a list item?
- Try clicking the item first
- Make sure you're not in the middle of typing

### **Issue: Nested items are still numbers instead of bullets**
**Check:**
- Hard refresh: Ctrl+Shift+R
- Clear cache
- Check CSS file was saved

### **Issue: Paragraphs become new list items**
**Check:**
- Are you using **Shift+Enter** (not just Enter)?
- Look for the helper banner reminder

### **Issue: Frontend doesn't match editor**
**Check:**
- View page source - verify HTML structure is correct
- Check browser console for CSS errors
- Clear browser cache

---

## ✅ Success Criteria

Your nested lists are working correctly if:

1. ✅ **Tab key** indents items into nested lists
2. ✅ **Shift+Tab** moves items back to parent level
3. ✅ **Nested ordered lists** use letters (a, b, c)
4. ✅ **Nested bullets** use circles (◦) instead of filled (•)
5. ✅ **Helper banner** appears when editing lists
6. ✅ **Paragraphs** can exist within list items (using Shift+Enter)
7. ✅ **Multiple paragraphs + nested lists** in same item work
8. ✅ **Frontend display** matches editor appearance
9. ✅ **HTML structure** is semantic and valid
10. ✅ **No broken numbering** (1, 1, 1 issue is gone)

---

## 📸 Screenshot Checklist

Take screenshots and verify:

1. **Editor with nested ordered list** - Check numbering (1, 2, a, b)
2. **Editor with nested bullets** - Check bullet styles (•, ◦)
3. **Editor with mixed nesting** - Check numbers + bullets together
4. **Helper banner** - Should be visible and readable
5. **Frontend display** - Should match editor exactly
6. **Paragraph + nested list combo** - Check spacing
7. **Deep nesting (3+ levels)** - Check alignment

---

## 🎉 If All Tests Pass

Congratulations! Your nested list feature is fully working. You can now:

- ✅ Create complex multi-level list structures
- ✅ Mix ordered and unordered lists
- ✅ Add paragraphs within list items
- ✅ Combine nested lists with other formatting
- ✅ Publish professional, well-structured blog content

---

## 📞 Need Help?

If any test fails, check:
1. `NESTED_LISTS_GUIDE.md` for detailed usage instructions
2. Browser console for JavaScript errors
3. Network tab for failed CSS/JS loads
4. Source code to verify HTML structure

Remember to hard refresh (Ctrl+Shift+R) after any code changes!

