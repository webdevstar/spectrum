// @flow
const Community = /* GraphQL */ `
	type CommunityChannelsConnection {
		pageInfo: PageInfo!
		edges: [CommunityChannelEdge!]
	}

	type CommunityChannelEdge {
		node: Channel!
	}

	type CommunityMembersConnection @deprecated(reason:"Use the new Community.members type") {
		pageInfo: PageInfo!
		edges: [CommunityMemberEdge!]
	}

	type CommunityMemberEdge @deprecated(reason:"Use the new Community.members type") {
		cursor: String!
		node: User!
	}

	type CommunityMembers {
		pageInfo: PageInfo!
		edges: [CommunityMembersEdge!]
	}

	type CommunityMembersEdge {
		cursor: String!
		node: CommunityMember!
	}

	type CommunityThreadsConnection {
		pageInfo: PageInfo!
		edges: [CommunityThreadEdge!]
	}

	type CommunityThreadEdge {
		cursor: String!
		node: Thread!
	}

	type CommunityMetaData {
		members: Int
		channels: Int
	}

	type SlackImport {
		members: String
		teamName: String
		sent: Date
	}

	type TopAndNewThreads {
		topThreads: [Thread]
		newThreads: [Thread]
	}

	type StripeCard {
		brand: String
		exp_month: Int
		exp_year: Int
		last4: String
	}

	type StripeSource {
		id: ID
		card: StripeCard
		isDefault: Boolean
	}

	type StripePlan {
		id: ID
		amount: Int
		created: Int
		name: String
	}

	type StripeItem {
		id: ID
		amount: Int
		period_start: Int
		period_end: Int
		plan: StripePlan
		quantity: Int
	}

	type StripeSubscriptionItem {
		created: Int
		planId: String
		planName: String
		amount: Int
		quantity: Int
		id: String
	}

	type StripeDiscount {
		amount_off: Int
		percent_off: Int
		id: String
	}

	type StripeSubscription {
		id: ID
		created: Int
		discount: StripeDiscount
		billing_cycle_anchor: Int
		current_period_end: Int
		canceled_at: Int
		items: [StripeSubscriptionItem]
		status: String
	}

	type StripeInvoice {
		id: ID
		customerId: String
		date: Date
		items: [StripeItem]
		paid: Boolean
		period_end: Date
		period_start: Date
		subscription: StripeSubscription
		total: Int
	}

	type CommunityBillingSettings {
		pendingAdministratorEmail: String
		administratorEmail: String
		sources: [StripeSource]
		invoices: [StripeInvoice]
		subscriptions: [StripeSubscription]
	}

	type Community {
		id: ID!
		createdAt: Date!
		name: String!
		slug: String!
		description: String!
		website: String
		profilePhoto: String
		coverPhoto: String
		reputation: Int
		pinnedThreadId: String
		pinnedThread: Thread
		communityPermissions: CommunityPermissions
		channelConnection: CommunityChannelsConnection!
		members(first: Int = 10, after: String, filter: MembersFilter): CommunityMembers!
		threadConnection(first: Int = 10, after: String): CommunityThreadsConnection!
		metaData: CommunityMetaData
		slackImport: SlackImport
		invoices: [Invoice]
		recurringPayments: [RecurringPayment]
		isPro: Boolean
		memberGrowth: GrowthData
		conversationGrowth: GrowthData
		topMembers: [User]
		topAndNewThreads: TopAndNewThreads
		watercooler: Thread

		hasAnalytics: Boolean
		hasPrioritySupport: Boolean
		hasChargeableSource: Boolean
		billingSettings: CommunityBillingSettings

		memberConnection(first: Int = 10, after: String, filter: MemberConnectionFilter): CommunityMembersConnection! @deprecated(reason:"Use the new Community.members type")
		contextPermissions: ContextPermissions @deprecated(reason:"Use the new CommunityMember type to get permissions")
	}

	extend type Query {
		community(id: ID, slug: String): Community
		communities(slugs: [String], ids: [ID], curatedContentType: String): [Community]
		communityMember(userId: String, communityId: String): CommunityMember		
		topCommunities(amount: Int = 20): [Community!]
		recentCommunities: [Community!]

		searchCommunities(string: String, amount: Int = 20): [Community] @deprecated(reason:"Use the new Search query endpoint")
		searchCommunityThreads(communityId: ID!, searchString: String): [Thread] @deprecated(reason:"Use the new Search query endpoint")
	}

	input MembersFilter {
		isOwner: Boolean
		isMember: Boolean
		isBlocked: Boolean
		isPending: Boolean
		isModerator: Boolean
	}

	input MemberConnectionFilter @deprecated(reason: "Use the new MembersFilter input type") {
		isOwner: Boolean
		isMember: Boolean
		isBlocked: Boolean
		isPending: Boolean
		isModerator: Boolean
	}

	input CreateCommunityInput {
		name: String!
		slug: String!
		description: String!
		website: String
		file: File
		coverFile: File
	}

	input EditCommunityInput {
		name: String
		description: String
		website: String
		file: File
		coverFile: File
		communityId: ID!
	}

	input SendSlackInvitesInput {
		id: ID!
		customMessage: String
	}

	input UpgradeCommunityInput {
		plan: String!
		token: String!
		communityId: String!
	}

	input DowngradeCommunityInput {
		id: String!
	}

	input UpdateAdministratorEmailInput {
		id: ID!
		email: String!
	}

	input AddPaymentSourceInput {
		sourceId: String!
		communityId: ID!
	}

	input RemovePaymentSourceInput {
		sourceId: String!
		communityId: ID!
	}

	input MakeDefaultPaymentSourceInput {
		sourceId: String!
		communityId: ID!
	}

	extend type Mutation {
		createCommunity(input: CreateCommunityInput!): Community
		editCommunity(input: EditCommunityInput!): Community
		deleteCommunity(communityId: ID!): Boolean
		toggleCommunityMembership(communityId: ID!): Community @deprecated(reason:"Use the new addCommunityMember or removeCommunityMember mutations")
		sendSlackInvites(input: SendSlackInvitesInput!): Community
		sendEmailInvites(input: EmailInvitesInput!): Boolean
		pinThread(threadId: ID!, communityId: ID!, value: String): Community
		upgradeCommunity(input: UpgradeCommunityInput!): Community
		downgradeCommunity(input: DowngradeCommunityInput!): Community
		updateAdministratorEmail(input: UpdateAdministratorEmailInput!): Community
		addPaymentSource(input: AddPaymentSourceInput!): Community
		removePaymentSource(input: RemovePaymentSourceInput!): Community
		makeDefaultPaymentSource(input: MakeDefaultPaymentSourceInput!): Community
	}
`;

module.exports = Community;
