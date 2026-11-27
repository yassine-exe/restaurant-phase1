# Restaurant Website — Phase 1 Requirements

## 1. Project Overview

A restaurant website that allows visitors to discover the restaurant,
browse its menu, search for dishes, and access contact information.

Customers can create an account, sign in, and view a protected
account page using Clerk authentication.

## 2. Phase 1 Scope

This phase includes:
- A restaurant homepage.
- A menu containing sample dishes and prices.
- Search functionality for menu items.
- A responsive header and navigation.
- A footer and contact section.
- Sign-up, sign-in, and sign-out using Clerk.
- A protected account page.

Future phases may include:
- Shopping cart.
- Order placement and tracking.
- Online payments.
- Table reservations.
- An administration dashboard.

## 3. User Types

### Visitor
Can browse the homepage, search the menu, view contact information,
and access the sign-up and sign-in pages.

### Registered Customer
Can perform visitor actions, access their account page,
and sign out.

## 4. Functional Requirements

### FR-01: Homepage
Display the restaurant name, a short introduction, and a button
that navigates to the menu section.

### FR-02: Menu
Display at least six sample dishes.
Each dish must have a unique ID, name, description, category,
and price with a clearly displayed currency.

### FR-03: Menu Search
Allow visitors to search for dishes by name.
Search must ignore letter case and leading or trailing spaces.
An empty search must display all dishes.
A search with no matches must display a clear message.

### FR-04: Header
Provide navigation to Home, Menu, and Contact.
Include a working mobile navigation menu.
Allow users to reach the authentication or account pages.

### FR-05: Footer and Contact
Display the restaurant's address, opening hours, phone number,
and email address.
Phone and email links must use tel: and mailto: respectively.

### FR-06: Authentication support account creation, sign-in, and sign-out.
The interface must reflect whether the user is signed in.

### FR-07: Account Page
Allow signed-in users to view their own basic account information.
Visitors who are not signed in must be directed to sign in
before accessing this page.

## 5. Quality Requirements

- The website must be usable on mobile and desktop screens.
- Navigation, buttons, and form controls must have clear labels.
- Menu prices must be displayed consistently.
- The application must build successfully.
- Menu search must have automated tests.
- Authentication must be verified through manual testing.

## 6. Technical Approach

- Framework: Next.js.
- Authentication provider: Clerk.
- Menu source: sample data stored in the project.
- No application database is required for this phase.
- Account credentials and sessions are managed by Clerk.

## 7. Team Responsibilities

| Member | Responsibility |
| --- | --- |
| Yassin Abou Taleb  | Requirements document, menu data, menu search logic, and search tests |
| Adham Nady  | Homepage, menu cards, and connecting the search interface to the search logic |
| Mohab Ahmed  | Responsive header, navigation links, and mobile menu interaction |
| Adham Magdy | Footer, contact section, opening hours, and working contact links |
| Mohamed Atef Abd elsattar  | security login  integration, authentication pages, account page, and access protection |

Every member must contribute actual implementation code
through their own Git commits.

## 8. GitHub Workflow

- Track tasks and real bugs using GitHub Issues.
- Assign each issue to its responsible member.
- Add issues to the shared GitHub Project.
- Record status, priority, start date, due date, and estimated effort.
- Organize issues into milestones and maintain a project backlog.
- Use a separate branch for each development task.
- Open pull requests and link them to the relevant issues.
- Have another team member review changes before merging.
- Update task status as work progresses.
- Use GitHub Actions to run automated tests and the project build
  on pushes and pull requests.

## 9. Phase 1 Acceptance Checklist

- [ ] The project runs using the documented setup instructions.
- [ ] The homepage and menu display correctly.
- [ ] Search returns the expected dishes.
- [ ] Empty and unmatched searches behave correctly.
- [ ] Header navigation works on mobile and desktop.
- [ ] Footer contact links work.
- [ ] Sign-up, sign-in, and sign-out work.
- [ ] The account page is protected.
- [ ] Search tests and the project build pass.
- [ ] GitHub Actions runs successfully.
- [ ] The Project board reflects actual task progress.
- [ ] Issues, pull requests, and reviews demonstrate collaboration.
- [ ] Every member has identifiable code contributions.
- [ ] Every member can explain and demonstrate their own work.