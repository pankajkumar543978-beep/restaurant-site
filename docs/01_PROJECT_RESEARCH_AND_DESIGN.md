# PROMPT 02 – WEBSITE IMPLEMENTATION, FUNCTIONALITY & QUALITY ASSURANCE

## PROJECT

Implement the approved website plan for:

John's Breakfast & Lunch
Calgary, Alberta, Canada.

Before starting, read:

1. PLAN.md
2. COMPETITOR_RESEARCH.md
3. IMAGE_SOURCES.md
4. The approved design specifications from Prompt 01.

Follow the approved plan.

Do not independently change the approved design direction without discussing it first.

# 1. DEVELOPMENT RULES

- Inspect existing source code before modifying anything.
- Preserve existing functionality.
- Reuse installed dependencies.
- Follow existing project conventions.
- Use reusable components.
- Keep business data separate from UI components.
- Use TypeScript properly if the project uses TypeScript.
- Avoid unnecessary dependencies.
- Avoid duplicate components.
- Keep code maintainable.
- Do not leave broken links or placeholder buttons.

If the project is empty, use Next.js, TypeScript and Tailwind CSS.

# 2. SUGGESTED PROJECT STRUCTURE

Use an architecture similar to:

src/
  app/
    page.tsx
    layout.tsx
    globals.css

  components/
    AnnouncementBar.tsx
    Navbar.tsx
    Hero.tsx
    About.tsx
    SignatureDishes.tsx
    Menu.tsx
    WhyJohns.tsx
    OurStory.tsx
    Gallery.tsx
    Reviews.tsx
    Location.tsx
    Contact.tsx
    Footer.tsx

  data/
    restaurant.ts
    menu.ts
    gallery.ts

  lib/
    utils.ts

Adapt this structure to the existing application if necessary.

# 3. IMPLEMENTATION TASKS

## TASK 1 – FOUNDATION

Implement:

- Project configuration.
- Global styles.
- Typography.
- Colour variables.
- Responsive layout foundation.
- Reusable buttons.
- Reusable container components.

Use the approved design system.

Testing:
- Application starts successfully.
- No build errors.
- Typography loads correctly.
- Colours are consistent.
- No horizontal overflow.

Update PLAN.md only after passing tests.

STOP if this task fails.

## TASK 2 – ANNOUNCEMENT BAR AND NAVIGATION

Build:

- Announcement bar.
- Text-based restaurant logo.
- Desktop navigation.
- Mobile navigation.
- Get Directions button.

Interactions:

- Navigation anchors must work.
- Mobile menu must open and close.
- Get Directions must open the correct map destination.
- Header should have polished scrolling behaviour.

Testing:
- Desktop navigation.
- Mobile navigation.
- All anchor links.
- Keyboard accessibility.

STOP if this task fails.

## TASK 3 – HERO AND RESTAURANT INTRODUCTION

Build the hero section.

Heading:
Good Food. Great Mornings. Since 2007.

Supporting text:
From hearty breakfasts to satisfying lunches, enjoy homemade-style favourites served with warmth in the heart of Calgary.

Buttons:
- Explore Our Menu.
- Find Us.

Include:
- Main food image.
- Supporting decorative image.
- Family-owned restaurant label.
- Responsive layout.

Build the restaurant introduction section.

Heading:
More Than Just Breakfast.

Use visually impressive photography and editorial typography.

Testing:
- Images load.
- Hero buttons work.
- Responsive layout.
- Text readability.
- No layout shifts.

STOP if this task fails.

## TASK 4 – SIGNATURE DISHES AND MENU

Build attractive food cards for:

- Breakfast Poutine.
- Eggs Benedict.
- Chorizo Omelette.
- Pancakes with Bacon.
- Breakfast Bowl.
- Clubhouse Sandwich.

Create menu categories:

- Breakfast.
- Benedicts.
- Omelettes.
- Pancakes & French Toast.
- Lunch.
- Asian-Inspired Favourites.

Requirements:

- Interactive category tabs.
- Menu data stored separately.
- Attractive food images.
- Consistent cards.
- Responsive grid.
- No fabricated prices.
- Clear concept-menu disclaimer.

Testing:
- Every category works.
- Correct items appear.
- No broken images.
- No console errors.
- Mobile menu cards display correctly.

STOP if this task fails.

## TASK 5 – WHY JOHN'S AND OUR STORY

Create:

Why Customers Love John's:

- Family-Owned Hospitality.
- Generous Portions.
- Neighbourhood Favourite.
- Breakfast & Lunch Classics.

Create Our Story section.

Heading:
A Family Tradition, Served Fresh Every Day.

Use only researched business information.

Make this section emotionally engaging without inventing family history.

Testing:
- Responsive layout.
- Images.
- Typography.
- Content accuracy.

STOP if this task fails.

## TASK 6 – FOOD GALLERY

Create a responsive gallery.

Include:

- Breakfast dishes.
- Pancakes.
- Omelettes.
- Sandwiches.
- Restaurant atmosphere.
- Restaurant exterior.

Features:

- Image grid.
- Hover effects.
- Lightbox.
- Next and previous image controls.
- Close button.
- Keyboard support.

Use authentic restaurant images only when their source and permitted usage are established.

Otherwise use replaceable, appropriately licensed placeholder images.

Testing:
- All images load.
- Lightbox opens.
- Lightbox closes.
- Keyboard controls work.
- Mobile gallery works.

STOP if this task fails.

## TASK 7 – CUSTOMER REVIEWS

Build an attractive review section.

Use verified public customer feedback themes:

- Friendly service.
- Generous portions.
- Good value.
- Breakfast experience.

Do not invent:
- Reviewer names.
- Testimonials.
- Exact ratings.
- Review counts.

Add Read More Reviews button.

Link to the restaurant's Google Maps listing.

Testing:
- Correct link.
- No fabricated review information.
- Responsive layout.

STOP if this task fails.

## TASK 8 – LOCATION, HOURS AND CONTACT

Build:

Location section:

John's Breakfast & Lunch
2614 4 St NW A
Calgary, AB T2M 3A1
Canada.

Phone:
+1 403-277-0255

Email:
johnsbreakfastyyc@gmail.com

Opening hours:

Tuesday – Saturday: 8 AM – 3:30 PM
Monday: Closed
Sunday: Closed

Mark hours as pending owner confirmation in editable business data.

Include:
- Google Maps link or embed.
- Get Directions.
- Click-to-call.
- Email link.
- Instagram.
- Facebook.

Build contact form:

- Name.
- Email.
- Subject.
- Message.

Validation:

- Required field checks.
- Email validation.
- User-friendly error messages.
- Success state only if submission actually succeeds.

If there is no backend, use a clearly explained email fallback.

Do not pretend submissions are stored.

Testing:
- Phone link.
- Email link.
- Map link.
- Social links.
- Contact form validation.
- Mobile layout.

STOP if this task fails.

## TASK 9 – FOOTER AND SEO

Build the footer with:

- Restaurant wordmark.
- Navigation.
- Address.
- Phone.
- Social links.
- Concept disclaimer.

SEO:

- Page title.
- Meta description.
- Open Graph tags.
- Semantic HTML.
- Image alt text.
- Restaurant structured data.

Use verified business details only.

Do not invent a production domain.

Testing:
- Metadata.
- Structured data validity.
- Links.
- Accessibility.

STOP if this task fails.

# 4. VISUAL QUALITY REVIEW

After completing all sections, inspect the website in a browser.

Review:

Desktop:
- 1440px width.
- 1280px width.

Tablet:
- 768px width.

Mobile:
- 390px width.
- 375px width.

Check:

- Header alignment.
- Hero proportions.
- Image cropping.
- Section spacing.
- Typography.
- Card alignment.
- Button sizes.
- Mobile navigation.
- Gallery.
- Footer.
- Horizontal scrolling.
- Text overflow.

The website should feel cohesive across all screen sizes.

# 5. DESIGN QUALITY REQUIREMENTS

The final website must:

- Look custom-designed for John's.
- Have a distinctive restaurant identity.
- Use warm Canadian diner aesthetics.
- Have beautiful food photography.
- Maintain consistent typography.
- Use appropriate spacing.
- Have smooth, subtle transitions.
- Avoid generic templates.
- Avoid excessive animations.
- Avoid clutter.

Prioritize quality over unnecessary complexity.

# 6. PERFORMANCE AND ACCESSIBILITY

Check:

- Image optimization.
- Lazy loading.
- Semantic HTML.
- Keyboard navigation.
- Accessible colour contrast.
- Form labels.
- Reduced motion.
- Loading performance.
- No broken assets.
- No console errors.

# 7. FINAL TESTING

Run:

1. Production build.
2. Existing automated tests.
3. TypeScript checks.
4. Lint checks.
5. Browser testing.
6. Responsive testing.
7. Link verification.
8. Console error inspection.

Fix all issues before marking the project complete.

# 8. TASK TRACKING RULES

After each task:

1. Explain what was implemented.
2. List files created or modified.
3. Run relevant tests.
4. Report test results.
5. Fix any failures.
6. Update PLAN.md after successful verification.

Do not mark a task complete if its acceptance criteria are not met.

Do not proceed to the next task if the current task fails.

Do not silently skip tasks.

Do not claim tests passed without actually running them.

# 9. FINAL DELIVERABLES

Provide:

- Completed responsive website.
- Clean source code.
- PLAN.md with task status.
- Updated README.md.
- Competitor research document.
- Image sources document.
- Final testing report.
- Instructions to run locally.

# 10. FINAL ACCEPTANCE CRITERIA

The finished website must be:

- Professionally designed.
- Visually appealing.
- Specific to John's Breakfast & Lunch.
- Responsive on desktop, tablet and mobile.
- Functional.
- Fast-loading.
- SEO-ready.
- Accessible.
- Free from broken links.
- Free from fabricated restaurant information.

The final goal is to create a website demo that John and Wendy can see and immediately understand the value of having a dedicated restaurant website.

Do not stop at generating code.

Run the application, inspect the actual browser output, test the functionality and fix the issues before declaring completion.