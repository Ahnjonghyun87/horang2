"use server";

import { Message } from "@/types/message.types";
import { User } from "@/types/User.types";
import { createServerSupabaseAdminClient, createServerSupabaseClient } from "@/utils/supabase/serverAdmin";

export async function getAllUsers(): Promise<User[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("Users").select("*");

  if (error) {
    return [];
  }

  return data;
}

export async function getUserById(userId: string): Promise<User[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("Users").select("*").eq("id", userId);

  if (error) {
    return [];
  }

  return data;
}

export async function sendMessage({
  message,
  chatUserId,
  created_at,
}: {
  message: string;
  chatUserId: string;
  created_at: string;
}): Promise<void> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.getSession();

  if (error || !data?.session?.user) {
    throw new Error("User is not authenticated");
  }

  const { data: sendMessageData, error: sendMessageError } = await supabase.from("message").insert({
    message,
    receiver: chatUserId,
    sender: data.session.user.id,
  });

  if (sendMessageError) {
    throw new Error(sendMessageError.message);
  }
}

export async function getAllMessage({ chatUserId }: { chatUserId: string }): Promise<Message[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.getSession();

  if (error || !data?.session?.user) {
    return [];
  }

  const { data: messages, error: getMessageError } = await supabase
    .from("message")
    .select("*")
    .or(`receiver.eq.${chatUserId}, receiver.eq.${data.session.user.id}`)
    .or(`sender.eq.${chatUserId}, sender.eq.${data.session.user.id}`)
    .order("created_at", { ascending: true });

  if (getMessageError) {
    return [];
  }
  return messages;
}

export async function showLastMessage({ userId, myId }: { userId: string; myId: string }): Promise<Message[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.getSession();

  if (error || !data?.session?.user) {
    return [];
  }

  const { data: messages, error: getMessageError } = await supabase
    .from("message")
    .select("*")
    .eq("sender", userId)
    .eq("receiver", myId)
    .order("created_at", { ascending: false });

  if (getMessageError) {
    return [];
  }
  return messages;
}
